// Common types used throughout the application

export interface User {
  id: number;
  name: string;
  email: string;
  password: string; // In a real app, this would never be stored in the client
}

export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  features?: string[];
  galleryImages?: string[];
}

export interface Category {
  id: string;
  name: string;
}

export type PaymentMethod = 'momopay' | 'bitcoins' | 'bank';

export interface PaymentDetails {
  method: PaymentMethod;
  invoiceNumber: string;
  amount: number;
  reference?: string;
  phoneNumber?: string;
  accountName?: string;
  screenshotUrl?: string;
}

export interface Order {
  id: number;
  userId: number;
  products: {
    productId: number;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'completed' | 'cancelled';
  paymentDetails?: PaymentDetails;
  createdAt: Date;
}
