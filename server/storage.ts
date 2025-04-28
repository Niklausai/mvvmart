import { 
  InsertUser, 
  User, 
  users, 
  Product, 
  InsertProduct, 
  products, 
  Order, 
  InsertOrder, 
  orders, 
  OrderItem, 
  InsertOrderItem, 
  orderItems
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product operations
  getAllProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  
  // Order operations
  createOrder(order: InsertOrder): Promise<Order>;
  getOrdersByUserId(userId: number): Promise<Order[]>;
  getOrderByInvoiceNumber(invoiceNumber: string): Promise<Order | undefined>;
  updateOrderScreenshot(invoiceNumber: string, screenshotUrl: string): Promise<Order | undefined>;
  
  // Order Item operations
  createOrderItem(orderItem: InsertOrderItem): Promise<OrderItem>;
  getOrderItemsByOrderId(orderId: number): Promise<OrderItem[]>;
}

// In-memory implementation of the storage interface
export class MemStorage implements IStorage {
  // Storage maps
  private usersMap: Map<number, User>;
  private productsMap: Map<number, Product>;
  private ordersMap: Map<number, Order>;
  private orderItemsMap: Map<number, OrderItem>;
  
  // ID counters
  private userIdCounter: number;
  private productIdCounter: number;
  private orderIdCounter: number;
  private orderItemIdCounter: number;
  
  constructor() {
    this.usersMap = new Map();
    this.productsMap = new Map();
    this.ordersMap = new Map();
    this.orderItemsMap = new Map();
    
    this.userIdCounter = 1;
    this.productIdCounter = 1;
    this.orderIdCounter = 1;
    this.orderItemIdCounter = 1;
    
    // Initialize with sample products
    this.initializeProducts();
  }
  
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.usersMap.get(id);
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.usersMap.values()).find(user => user.email === email);
  }
  
  async createUser(userData: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const createdAt = new Date();
    const user: User = { ...userData, id, createdAt };
    this.usersMap.set(id, user);
    return user;
  }
  
  // Product operations
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.productsMap.values());
  }
  
  async getProduct(id: number): Promise<Product | undefined> {
    return this.productsMap.get(id);
  }
  
  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.productsMap.values()).filter(product => product.category === category);
  }
  
  // Order operations
  async createOrder(orderData: InsertOrder): Promise<Order> {
    const id = this.orderIdCounter++;
    const createdAt = new Date();
    const order: Order = { ...orderData, id, createdAt };
    this.ordersMap.set(id, order);
    return order;
  }
  
  async getOrdersByUserId(userId: number): Promise<Order[]> {
    return Array.from(this.ordersMap.values()).filter(order => order.userId === userId);
  }
  
  async getOrderByInvoiceNumber(invoiceNumber: string): Promise<Order | undefined> {
    return Array.from(this.ordersMap.values()).find(order => order.invoiceNumber === invoiceNumber);
  }
  
  async updateOrderScreenshot(invoiceNumber: string, screenshotUrl: string): Promise<Order | undefined> {
    const order = await this.getOrderByInvoiceNumber(invoiceNumber);
    if (!order) return undefined;
    
    order.screenshotUrl = screenshotUrl;
    order.status = "paid"; // Update status to paid when screenshot is uploaded
    this.ordersMap.set(order.id, order);
    return order;
  }
  
  // Order Item operations
  async createOrderItem(orderItemData: InsertOrderItem): Promise<OrderItem> {
    const id = this.orderItemIdCounter++;
    const createdAt = new Date();
    const orderItem: OrderItem = { ...orderItemData, id, createdAt };
    this.orderItemsMap.set(id, orderItem);
    return orderItem;
  }
  
  async getOrderItemsByOrderId(orderId: number): Promise<OrderItem[]> {
    return Array.from(this.orderItemsMap.values()).filter(item => item.orderId === orderId);
  }
  
  // Initialize sample products
  private initializeProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: 'Premium Visa Card',
        description: 'High limit premium Visa card with exceptional benefits and worldwide acceptance. This card features enhanced security, extended warranty protection, and exclusive travel benefits including airport lounge access.',
        shortDescription: 'High limit credit card',
        price: 12000, // Price in cents
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
        category: 'credit-cards',
        inStock: true,
        features: [
          'Worldwide acceptance',
          'High credit limit ($10,000+)',
          'Fraud protection & Purchase protection',
          'Extended warranty on purchases'
        ],
        galleryImages: [
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
          'https://images.unsplash.com/photo-1542902799-8d6ea02b7551?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
          'https://images.unsplash.com/photo-1572002500747-b035d297ecc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
          'https://images.unsplash.com/photo-1575487391644-2ea3b05e0c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
        ]
      },
      {
        name: 'Gold Mastercard',
        description: 'Premium Gold Mastercard with enhanced security features and exclusive rewards. Enjoy special cash back offers, travel insurance, and a generous credit limit with this premium card option.',
        shortDescription: 'Premium gold card',
        price: 15000, // Price in cents
        image: 'https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
        category: 'credit-cards',
        inStock: true,
        features: [
          'Worldwide acceptance',
          'Premium gold benefits',
          'Enhanced travel insurance',
          'Cash back rewards program'
        ],
        galleryImages: []
      },
      {
        name: 'Amazon Gift Card',
        description: '$100 Amazon gift card for online shopping with worldwide shipping options. Use this card to purchase millions of items with fast delivery options and excellent customer service from the world\'s largest online retailer.',
        shortDescription: '$100 Gift card',
        price: 8500, // Price in cents
        image: 'https://images.unsplash.com/photo-1559320955-7f39b990c3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
        category: 'gift-cards',
        inStock: true,
        features: [
          'Valid for millions of items on Amazon',
          'No expiration date',
          'Email delivery option available',
          'Redeemable internationally'
        ],
        galleryImages: []
      },
      {
        name: 'Premium Bank Account',
        description: 'Fully verified premium bank account with online banking access and debit card. This account includes a checking and savings option with competitive interest rates and minimal fees for maximum financial flexibility.',
        shortDescription: 'Verified bank account with debit card',
        price: 20000, // Price in cents
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
        category: 'bank-accounts',
        inStock: true,
        features: [
          'Full online banking access',
          'Includes debit card with chip',
          'Mobile banking app access',
          'Direct deposit ready'
        ],
        galleryImages: []
      },
      {
        name: 'Platinum Amex Card',
        description: 'Exclusive Platinum American Express card with premium benefits and high spending limits. Enjoy airport lounge access, concierge services, and exclusive offers at luxury hotels and restaurants worldwide.',
        shortDescription: 'Premium elite credit card',
        price: 30000, // Price in cents
        image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
        category: 'credit-cards',
        inStock: true,
        features: [
          'Elite membership benefits',
          'Unlimited airport lounge access',
          'Concierge service 24/7',
          'Travel and purchase insurance'
        ],
        galleryImages: []
      },
      {
        name: 'PayPal Verified Account',
        description: 'Fully verified PayPal account with business features and expanded limits. Send and receive payments internationally with this trusted digital wallet service that offers buyer and seller protection.',
        shortDescription: 'Verified digital wallet',
        price: 12000, // Price in cents
        image: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
        category: 'digital-wallets',
        inStock: true,
        features: [
          'Fully verified status',
          'Higher sending/receiving limits',
          'Business account capabilities',
          'Linked to virtual debit card'
        ],
        galleryImages: []
      },
      {
        name: 'Apple Gift Card',
        description: '$100 Apple gift card for purchasing apps, games, music, movies, and Apple products. Use this card for any purchases within the Apple ecosystem including hardware accessories and subscription services.',
        shortDescription: '$100 Apple ecosystem card',
        price: 9000, // Price in cents
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
        category: 'gift-cards',
        inStock: true,
        features: [
          'Valid for App Store & iTunes',
          'Purchase Apple hardware and accessories',
          'Subscribe to Apple services',
          'No expiration date'
        ],
        galleryImages: []
      },
      {
        name: 'Business Checking Account',
        description: 'Complete business checking account with merchant services and multiple user access. Perfect for small to medium businesses with reasonable transaction fees and business-specific features.',
        shortDescription: 'Full-featured business account',
        price: 25000, // Price in cents
        image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
        category: 'bank-accounts',
        inStock: true,
        features: [
          'Multiple user access',
          'Merchant services available',
          'Business debit cards',
          'Payroll integration options'
        ],
        galleryImages: []
      }
    ];
    
    // Add sample products to storage
    for (const product of sampleProducts) {
      const id = this.productIdCounter++;
      const createdAt = new Date();
      this.productsMap.set(id, { ...product, id, createdAt });
    }
  }
}

// Export singleton instance
export const storage = new MemStorage();
