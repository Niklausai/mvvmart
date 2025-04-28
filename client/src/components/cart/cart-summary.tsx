import React from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { formatCurrency } from '@/lib/utils';
import { LockIcon } from '@/cardmart/icons';

interface CartSummaryProps {
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ onCheckout }) => {
  const { getTotalPrice } = useCart();
  
  const subtotal = getTotalPrice();
  const discount = 0;
  const serviceFee = 10;
  const total = subtotal + serviceFee - discount;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-dark mb-4">Order Summary</h3>
        
        <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Discount</span>
            <span className="font-medium text-success">-{formatCurrency(discount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Service Fee</span>
            <span className="font-medium">{formatCurrency(serviceFee)}</span>
          </div>
        </div>
        
        <div className="flex justify-between mb-6">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-bold text-primary">{formatCurrency(total)}</span>
        </div>
        
        <Button
          className="w-full bg-primary hover:bg-primary/90"
          onClick={onCheckout}
        >
          Proceed to Checkout
        </Button>
        
        <div className="mt-4 flex justify-center">
          <span className="text-sm text-muted-foreground flex items-center">
            <LockIcon className="h-4 w-4 mr-2 text-success" />
            Secure Checkout
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
