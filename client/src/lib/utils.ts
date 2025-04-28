import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export function generateInvoiceNumber(): string {
  const randomNum = Math.floor(Math.random() * 9000000000) + 1000000000;
  return randomNum.toString();
}
