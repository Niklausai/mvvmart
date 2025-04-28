import React, { useState } from 'react';
import { useAuth } from '@/cardmart/auth';
import { useCart } from '@/hooks/use-cart';
import MainLayout from '@/components/layouts/main-layout';
import CardTableHome from '@/components/products/card-table-home';
import { categories, getProductsByCategory, products } from '@/cardmart/product-data';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/cardmart/types';

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('credit-cards');
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <MainLayout userName={user?.name} showCart>
      {/* Header banner */}
      <div className="bg-gradient-to-r from-blue-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">manuvamart</h1>
              <nav className="ml-8 md:ml-12 hidden md:flex">
                <a href="#" className="px-3 py-2 font-medium bg-blue-700 rounded">HOME</a>
                <a href="#" className="px-3 py-2 font-medium">SHOP</a>
                <a href="#" className="px-3 py-2 font-medium">MY ACCOUNT</a>
                <a href="#" className="px-3 py-2 font-medium">ADD FUNDS</a>
                <a href="#" className="px-3 py-2 font-medium">MORE</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white font-medium">0</a>
              <a href="#" className="text-white font-medium">$0</a>
              <a href="#" className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <div className="bg-white py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-6 pb-1">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`whitespace-nowrap px-3 py-1 ${
                  activeCategory === category.id
                    ? 'bg-red-500 text-white rounded font-medium'
                    : 'text-dark hover:text-primary'
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">
              {activeCategory === 'all' ? 'AVAILABLE CARDS' : categories.find(c => c.id === activeCategory)?.name.toUpperCase()}
            </h1>
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <span>Home</span>
              <span>{'>'}</span>
              <span>{activeCategory === 'all' ? 'Cards' : categories.find(c => c.id === activeCategory)?.name}</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg p-6 mb-6">
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search Cards"
                className="w-full h-10 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg 
                  className="w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full" style={{ maxHeight: 'none', overflowY: 'visible' }}>
          <CardTableHome 
            products={products} 
            onAddToCart={handleAddToCart} 
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
