import React from 'react';
import { useLocation } from 'wouter';
import { products } from '@/cardmart/product-data';
import { Button } from '@/components/ui/button';
import CardTable from '@/components/products/card-table';
import { Product } from '@/cardmart/types';

const CardsPage = () => {
  const [, navigate] = useLocation();
  
  // Exact cards shown in Screenshot (223) in exact order
  const specificCards = [
    products.find(p => p.name.includes('Laurits Lambert')),
    products.find(p => p.name.includes('Elma Johnson')),
    products.find(p => p.name.includes('Liv Christiansen')),
    products.find(p => p.name.includes('Martin Fribjarnarson')),
  ].filter(Boolean) as Product[];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">manuvamart</h1>
              <nav className="ml-8 md:ml-12 hidden md:flex">
                <a href="#" className="px-3 py-2 font-medium">HOME</a>
                <a href="#" className="px-3 py-2 font-medium bg-red-500 rounded">SHOP</a>
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
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <CardTable products={specificCards} />
      </main>
    </div>
  );
};

export default CardsPage;