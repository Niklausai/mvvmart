import React from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const HomePageSimple: React.FC = () => {
  const [_, navigate] = useLocation();

  const handleBuyClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  // Sample product data
  const products = [
    {
      id: 1,
      type: 'VISA',
      accHolder: 'Laurits Lambert',
      cardNumber: '4479********',
      cvv: '870',
      country: 'UNITED STATES',
      transPerWeek: 1,
      address: '3209 Railroad Street',
      price: 15.00
    },
    {
      id: 2,
      type: 'VISA',
      accHolder: 'Elma Johnson',
      cardNumber: '4479********',
      cvv: '394',
      country: 'UNITED STATES',
      transPerWeek: 2,
      address: '2292 Old House Drive',
      price: 19.00
    },
    {
      id: 3,
      type: 'VISA',
      accHolder: 'Liv Christiansen',
      cardNumber: '4490********',
      cvv: '232',
      country: 'UNITED STATES',
      transPerWeek: 3,
      address: '4217 Glenview Drive',
      price: 24.00
    },
    {
      id: 4,
      type: 'VISA',
      accHolder: 'Martin Fridbjarnason',
      cardNumber: '4479********',
      cvv: '771',
      country: 'UNITED STATES',
      transPerWeek: 2,
      address: '612 Late Avenue',
      price: 19.00
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-red-500 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold mr-8 flex items-center">
              <span className="mr-2">✈️</span>
              <span>cvvmart</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="font-medium">HOME</a>
              <a href="#" className="font-medium bg-red-500 px-2 py-1 rounded">SHOP</a>
              <a href="#" className="font-medium">MY ACCOUNT</a>
              <a href="#" className="font-medium">ADD FUNDS</a>
              <a href="#" className="font-medium">MORE</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-white">
              <span className="mr-1">🛒</span>
              <span>0</span>
            </button>
            <span>$0</span>
            <button className="flex items-center text-white">
              <span>👤</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Title and breadcrumb */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-blue-500 border-l-4 border-blue-500 pl-2">CARDS</h1>
            <div className="text-sm text-gray-500">
              Home &gt; Cards
            </div>
          </div>

          {/* Search box */}
          <div className="w-full bg-gradient-to-r from-blue-600 to-red-500 p-8 rounded-lg mb-6">
            <div className="relative w-full max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search Cards"
                className="w-full py-3 px-4 pl-12 rounded-lg shadow-md focus:outline-none"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Available cards */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-600 mb-3">AVAILABLE CARDS</h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-red-500 to-red-400 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Acc. holder</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Card number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Cvv</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Trans per week</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price($)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.accHolder}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.cardNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.cvv}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.country}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.transPerWeek}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm"
                        onClick={() => handleBuyClick(product.id)}
                      >
                        BUY
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePageSimple;