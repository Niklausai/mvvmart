import React from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/cardmart/auth';
import { useCart } from '@/hooks/use-cart';
import MainLayout from '@/components/layouts/main-layout';
import CartItem from '@/components/cart/cart-item';
import CartSummary from '@/components/cart/cart-summary';
import { Button } from '@/components/ui/button';

const CartPage: React.FC = () => {
  const [_, navigate] = useLocation();
  const { user } = useAuth();
  const { cartItems, getTotalItems, updateQuantity, removeFromCart } = useCart();

  const handleContinueShopping = () => {
    navigate('/home');
  };

  return (
    <MainLayout 
      userName={user?.name} 
      backButton={{
        label: 'Continue Shopping',
        onClick: handleContinueShopping,
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-dark mb-6">Your Cart ({getTotalItems()} items)</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-muted-foreground mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-4">Looks like you haven't added any products to your cart yet.</p>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={handleContinueShopping}
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <CartItem 
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeFromCart}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <CartSummary onCheckout={() => navigate('/checkout')} />
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CartPage;
