import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

const CartPageSimple: React.FC = () => {
  const [_, navigate] = useLocation();
  
  // Sample cart data - in a real app, this would come from the cart context
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      type: 'VISA',
      accHolder: 'Laurits Lambert',
      cardNumber: '4479********',
      cvv: '870',
      country: 'UNITED STATES',
      price: 15.00,
      quantity: 1
    }
  ]);
  
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const handleCheckout = () => {
    navigate('/checkout');
  };

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
              <a href="/home" className="font-medium">HOME</a>
              <a href="/home" className="font-medium bg-red-500 px-2 py-1 rounded">SHOP</a>
              <a href="#" className="font-medium">MY ACCOUNT</a>
              <a href="#" className="font-medium">ADD FUNDS</a>
              <a href="#" className="font-medium">MORE</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-white" onClick={() => navigate('/cart')}>
              <span className="mr-1">🛒</span>
              <span>{cartItems.length}</span>
            </button>
            <span>${getTotalPrice().toFixed(2)}</span>
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
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-blue-500 border-l-4 border-blue-500 pl-2">SHOPPING CART</h1>
            <div className="text-sm text-gray-500">
              Home &gt; Cart
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/home')}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Cart items */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {item.type} Card ({item.cvv})
                                </div>
                                <div className="text-sm text-gray-500">
                                  {item.cardNumber} • {item.country}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <button
                                className="w-8 h-8 rounded-l border border-gray-300 bg-gray-100 flex items-center justify-center"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                className="w-12 h-8 border-t border-b border-gray-300 text-center"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                className="w-8 h-8 rounded-r border border-gray-300 bg-gray-100 flex items-center justify-center"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              className="text-red-600 hover:text-red-900"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => navigate('/home')}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Fee</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CartPageSimple;