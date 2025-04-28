import React, { useState } from 'react';
import { Product } from '@/cardmart/types';
import { Button } from '@/components/ui/button';

interface CardTableProps {
  products: Product[];
}

const CardTable: React.FC<CardTableProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = searchTerm 
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  const handleAddToCart = (product: Product) => {
    // This is just a visual replica, so we'll just show an alert instead of using the cart
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-6">CARDS</h1>
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <span>Home</span>
            <span>{'>'}</span>
            <span>Cards</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg p-6 mb-6">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search Cards"
              className="w-full h-10 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">AVAILABLE CARDS</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-left">
              <th className="py-3 px-4 uppercase font-semibold text-sm">TYPE</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">ACC. HOLDER</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">CARD NUMBER</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">CVV</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">COUNTRY</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">TRANS PER WEEK</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">ADDRESS</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">PRICE($)</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">ACTION</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredProducts.map((product, index) => {
              // Only display cards that match the exact format in the screenshot
              if (!product.name.includes('Visa') && !product.name.includes('Mastercard')) {
                return null;
              }
              
              const nameParts = product.name.split(' ');
              const accountHolder = nameParts.slice(0, nameParts.length - 2).join(' ');
              const cardType = product.name.includes('Visa') ? 'VISA' : 'MASTERCARD';
              
              // Extract card number from features
              const cardNumberFeature = product.features?.find(f => f.includes('Card number'));
              const cardNumber = cardNumberFeature ? cardNumberFeature.split(': ')[1] : '';
              
              // Extract CVV from features
              const cvvFeature = product.features?.find(f => f.includes('CVV'));
              const cvv = cvvFeature ? cvvFeature.split(': ')[1] : '';
              
              // Extract address from features
              const addressFeature = product.features?.find(f => f.includes('Address'));
              const address = addressFeature ? addressFeature.split(': ')[1] : '';
              
              // Extract country from features
              const countryFeature = product.features?.find(f => f.includes('based'));
              const country = countryFeature ? 'UNITED STATES' : 'UNITED STATES';
              
              // Transactions per week - hardcoded to match screenshot
              const transPerWeek = index === 0 ? 1 : (index === 1 ? 2 : 3);
              
              return (
                <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4">{cardType}</td>
                  <td className="py-3 px-4">{accountHolder}</td>
                  <td className="py-3 px-4">{cardNumber}</td>
                  <td className="py-3 px-4">{cvv}</td>
                  <td className="py-3 px-4">{country}</td>
                  <td className="py-3 px-4">{transPerWeek}</td>
                  <td className="py-3 px-4">{address}</td>
                  <td className="py-3 px-4">{product.price.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <Button 
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      BUY
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardTable;