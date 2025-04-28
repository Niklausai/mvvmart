import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema, insertUserSchema } from "@shared/schema";
import { z } from "zod";
import session from "express-session";
import { fromZodError } from "zod-validation-error";
import MemoryStore from "memorystore";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import path from "path";
import fs from "fs";
import multer from "multer";

// Configure session store
const MemoryStoreSession = MemoryStore(session);

// Configure file upload storage
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Define typed multer callback functions
type MulterCallback = (error: Error | null, value: string) => void;

const storage_upload = multer.diskStorage({
  destination: function (_req: any, _file: any, cb: MulterCallback) {
    cb(null, uploadsDir);
  },
  filename: function (_req: any, file: Express.Multer.File, cb: MulterCallback) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage_upload });

// Define the authenticated request type
interface AuthenticatedRequest extends Request {
  user: any;
  isAuthenticated(): boolean;
  logIn(user: any, callback: (err?: any) => void): void;
  logout(callback: (err?: any) => void): void;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure session
  app.use(
    session({
      cookie: {
        maxAge: 86400000, // 24 hours
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      },
      secret: process.env.SESSION_SECRET || "manuva-mart-secret",
      resave: false,
      saveUninitialized: false,
      store: new MemoryStoreSession({
        checkPeriod: 86400000, // 24 hours
      }),
    })
  );

  // Initialize and configure Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Configure local strategy
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await storage.getUserByEmail(email);
          if (!user) {
            return done(null, false, { message: "Incorrect email." });
          }
          if (user.password !== password) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Authentication routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if email is already taken
      const existingUser = await storage.getUserByEmail(userData.email);
      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
      }
      
      const newUser = await storage.createUser(userData);
      
      // Remove password from response
      const { password, ...userWithoutPassword } = newUser;
      return res.status(201).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: fromZodError(error).message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/auth/login", (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      (req as AuthenticatedRequest).logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        
        // Remove password from response
        const { password, ...userWithoutPassword } = user;
        return res.json(userWithoutPassword);
      });
    })(req, res, next);
  });

  app.post("/api/auth/logout", (req: AuthenticatedRequest, res: Response) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Error logging out" });
      }
      return res.json({ message: "Logged out successfully" });
    });
  });

  app.get("/api/auth/session", (req: AuthenticatedRequest, res: Response) => {
    if (req.isAuthenticated()) {
      // Remove password from response
      const { password, ...userWithoutPassword } = req.user;
      return res.json(userWithoutPassword);
    }
    return res.status(401).json({ message: "Not authenticated" });
  });

  // Products API
  app.get("/api/products", async (req: Request, res: Response) => {
    try {
      const category = req.query.category as string;
      const products = category && category !== "all" 
        ? await storage.getProductsByCategory(category)
        : await storage.getAllProducts();
        
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching products" });
    }
  });

  app.get("/api/products/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid product ID" });
      }
      
      const product = await storage.getProduct(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching product" });
    }
  });

  // Order API
  app.post("/api/orders", async (req: AuthenticatedRequest, res: Response) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in to create an order" });
      }

      const user = req.user;
      const orderData = insertOrderSchema.parse({
        ...req.body,
        userId: user.id
      });

      const newOrder = await storage.createOrder(orderData);
      
      // Create order items
      if (req.body.products && Array.isArray(req.body.products)) {
        for (const item of req.body.products) {
          await storage.createOrderItem({
            orderId: newOrder.id,
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          });
        }
      }
      
      return res.status(201).json(newOrder);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: fromZodError(error).message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/orders", async (req: AuthenticatedRequest, res: Response) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in to view orders" });
      }

      const user = req.user;
      const orders = await storage.getOrdersByUserId(user.id);
      
      return res.json(orders);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching orders" });
    }
  });

  // Payment screenshot upload
  app.post("/api/payment/upload-screenshot", upload.single("screenshot"), async (req: Request & {file?: Express.Multer.File} & AuthenticatedRequest, res: Response) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in to upload a screenshot" });
      }

      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const invoiceNumber = req.body.invoiceNumber;
      if (!invoiceNumber) {
        return res.status(400).json({ message: "Invoice number is required" });
      }

      // Update the order with the screenshot URL
      const screenshotUrl = `/uploads/${req.file.filename}`;
      const order = await storage.updateOrderScreenshot(invoiceNumber, screenshotUrl);
      
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      
      return res.json({ 
        message: "Screenshot uploaded successfully",
        screenshotUrl 
      });
    } catch (error) {
      return res.status(500).json({ message: "Error uploading screenshot" });
    }
  });

  // For development - simulate successful upload since we don't have actual file upload in the demo
  app.post("/api/payment/simulate-upload", async (req: AuthenticatedRequest, res: Response) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in to upload a screenshot" });
      }

      const invoiceNumber = req.body.invoiceNumber;
      if (!invoiceNumber) {
        return res.status(400).json({ message: "Invoice number is required" });
      }

      // Simulate a successful upload
      const screenshotUrl = `/uploads/simulated-screenshot-${Date.now()}.jpg`;
      
      // Update the order with the screenshot URL
      await storage.updateOrderScreenshot(invoiceNumber, screenshotUrl);
      
      return res.json({ 
        message: "Screenshot uploaded successfully",
        screenshotUrl 
      });
    } catch (error) {
      return res.status(500).json({ message: "Error uploading screenshot" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}