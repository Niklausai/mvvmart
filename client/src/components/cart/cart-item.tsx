import React from 'react';
import { Product } from '@/cardmart/types';
import { formatCurrency } from '@/lib/utils';
import { Trash2 } from 'lucide-react';

interface CartItemProps {
  item: Product & { quantity: number };
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (value: number) => {
    const newQuantity = item.quantity + value;
    if (newQuantity >= 1) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      onUpdateQuantity(item.id, value);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row border-b border-gray-200 pb-6 last:border-0 last:pb-0">
      <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded"
        />
      </div>
      
      <div className="sm:ml-6 flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-dark">{item.name}</h3>
            <p className="text-muted-foreground text-sm">{item.shortDescription}</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <span className="font-bold text-primary">{formatCurrency(item.price)}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex border rounded overflow-hidden">
            <button
              className="px-3 py-1 bg-light hover:bg-gray-200 transition"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <input
              type="number"
              value={item.quantity}
              min="1"
              className="w-12 text-center border-l border-r focus:outline-none"
              onChange={handleQuantityInput}
            />
            <button
              className="px-3 py-1 bg-light hover:bg-gray-200 transition"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          
          <button
            className="text-danger hover:text-opacity-80 transition"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
