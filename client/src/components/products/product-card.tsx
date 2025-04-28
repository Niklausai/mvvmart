import React from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Product } from '@/cardmart/types';
import { formatCurrency } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [_, navigate] = useLocation();

  const handleView = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="text-lg font-semibold text-dark mb-2">{product.name}</h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-primary font-bold">{formatCurrency(product.price)}</span>
          <span className={`${
            product.inStock
              ? 'bg-success bg-opacity-10 text-success'
              : 'bg-danger bg-opacity-10 text-danger'
          } text-xs px-2 py-1 rounded`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{product.shortDescription}</p>
        <div className="flex space-x-2">
          <Button
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
          >
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleView}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
