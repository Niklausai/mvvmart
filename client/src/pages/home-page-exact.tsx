import React from 'react';
import { useLocation } from 'wouter';
import { products } from '@/cardmart/product-data';
import { Button } from '@/components/ui/button';
import { Product } from '@/cardmart/types';

const HomePageExact = () => {
  const [, navigate] = useLocation();
  
  // CARDS header component matching Screenshot 223
  const CardsHeader = () => (
    <div className="flex justify-between items-center mb-2">
      <h1 className="text-2xl font-bold text-blue-600">CARDS</h1>
      <div className="text-sm text-gray-600 flex items-center gap-1">
        <span>Home</span>
        <span>&gt;</span>
        <span>Cards</span>
      </div>
    </div>
  );

  // Search component matching Screenshot 223
  const SearchBar = () => (
    <div className="bg-gradient-to-r from-blue-600 to-pink-500 rounded p-4 mb-6">
      <div className="relative w-full max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search Cards"
          className="w-full h-10 pl-10 pr-4 py-2 rounded border border-gray-200 focus:outline-none"
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
  );

  // Create exact card data that matches the screenshots
  // This is static data to make sure we have rows that match exactly what's in the screenshots
  const exactScreenshotData = [
    // Screenshot 216
    { 
      type: 'DISCOVER', 
      accountHolder: 'Marmaduc Mrton', 
      cardNumber: '6011********', 
      cvv: '544', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '4958 Pinnickinnick Street',
      price: '19.00'
    },
    { 
      type: 'DISCOVER', 
      accountHolder: 'Konrad Johnson', 
      cardNumber: '6011********', 
      cvv: '247', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '766 Kelly Street',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Robert Fraser', 
      cardNumber: '4479********', 
      cvv: '492', 
      country: 'UNITED STATES',
      transPerWeek: '3',
      address: '3572 Walnut Hill Drive',
      price: '24.00'
    },
    { 
      type: 'MASTERCARD', 
      accountHolder: 'Flavia Ba', 
      cardNumber: '5156********', 
      cvv: '265', 
      country: 'GERMANY',
      transPerWeek: '3',
      address: 'Uffhau Strasse 13',
      price: '24.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Lauren Melikov', 
      cardNumber: '4479********', 
      cvv: '791', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '3982 Paul Wayne Haggerty Road',
      price: '19.00'
    },
    { 
      type: 'DISCOVER', 
      accountHolder: 'Tony Lundqvist', 
      cardNumber: '6011********', 
      cvv: '118', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '2992 Columbia Mine Road',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Laurits Lambert', 
      cardNumber: '4479********', 
      cvv: '870', 
      country: 'UNITED STATES',
      transPerWeek: '1',
      address: '3209 Railroad Street',
      price: '15.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Youka Jäkeinen', 
      cardNumber: '4490********', 
      cvv: '627', 
      country: 'UNITED STATES',
      transPerWeek: '4',
      address: '1753 Sugarfoot Lane',
      price: '31.00'
    },

    // Screenshot 217
    { 
      type: 'DISCOVER', 
      accountHolder: 'Rima Coles', 
      cardNumber: '6011********', 
      cvv: '245', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '3339 Post Avenue',
      price: '19.00'
    },
    { 
      type: 'DISCOVER', 
      accountHolder: 'Ashley Wildschut', 
      cardNumber: '6011********', 
      cvv: '747', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '99 County Line Road',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Blasius Nikitina', 
      cardNumber: '4527********', 
      cvv: '791', 
      country: 'UNITED KINGDOM',
      transPerWeek: '2',
      address: '33 Sloe Lane',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Akbolar Lambert', 
      cardNumber: '4479********', 
      cvv: '392', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '3572 Golden Ridge Road',
      price: '19.00'
    },
    { 
      type: 'DISCOVER', 
      accountHolder: 'Anka Ganem', 
      cardNumber: '6011********', 
      cvv: '795', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '569 Olive Street',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Zhen Juan Gallardo', 
      cardNumber: '4527********', 
      cvv: '116', 
      country: 'UNITED KINGDOM',
      transPerWeek: '2',
      address: '8 Main Rd',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Natalia Shields', 
      cardNumber: '4490********', 
      cvv: '407', 
      country: 'UNITED STATES',
      transPerWeek: '1',
      address: '3615 Thompson Drive',
      price: '15.00'
    },
    { 
      type: 'DISCOVER', 
      accountHolder: 'Arman Shalhoub', 
      cardNumber: '6011********', 
      cvv: '252', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '2301 Mulberry Avenue',
      price: '19.00'
    },

    // Screenshot 218
    { 
      type: 'DISCOVER', 
      accountHolder: 'Farkas Hong', 
      cardNumber: '6011********', 
      cvv: '107', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '2400 Brown Avenue',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Elma Johnson', 
      cardNumber: '4479********', 
      cvv: '394', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '2242 Old House Drive',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Rorg Tveit', 
      cardNumber: '4490********', 
      cvv: '776', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '4800 Roosevelt Wilson Lane',
      price: '19.00'
    },
    { 
      type: 'DISCOVER', 
      accountHolder: 'Gertruda Negassi', 
      cardNumber: '6011********', 
      cvv: '430', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '4738 Cheshire Road',
      price: '19.00'
    },
    { 
      type: 'MASTERCARD', 
      accountHolder: 'Anton Parenteau', 
      cardNumber: '5451********', 
      cvv: '218', 
      country: 'GERMANY',
      transPerWeek: '3',
      address: 'Ollenhauer Str. 2',
      price: '24.00'
    },
    { 
      type: 'MASTERCARD', 
      accountHolder: 'Simret Pacheco', 
      cardNumber: '5451********', 
      cvv: '602', 
      country: 'GERMANY',
      transPerWeek: '3',
      address: 'Feldstrasse 4',
      price: '24.00'
    },
    { 
      type: 'MASTERCARD', 
      accountHolder: 'Jesper Akudundu', 
      cardNumber: '5451********', 
      cvv: '179', 
      country: 'GERMANY',
      transPerWeek: '3',
      address: 'Groimanstrae 80',
      price: '24.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Helin Boulanger', 
      cardNumber: '4479********', 
      cvv: '175', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '642 Augusta Park',
      price: '19.00'
    },

    // Screenshot 219
    { 
      type: 'DISCOVER', 
      accountHolder: 'Willie Bergsson', 
      cardNumber: '6011********', 
      cvv: '746', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '4798 Deercove Drive',
      price: '19.00'
    },
    { 
      type: 'DISCOVER', 
      accountHolder: 'Shinta Devari', 
      cardNumber: '6011********', 
      cvv: '986', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '4914 Loving Acres Road',
      price: '19.00'
    },
    { 
      type: 'DISCOVER', 
      accountHolder: 'Hq Miki', 
      cardNumber: '6011********', 
      cvv: '617', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '4424 Sharon Lane',
      price: '19.00'
    },
    { 
      type: 'MASTERCARD', 
      accountHolder: 'Noor Lamoureux', 
      cardNumber: '5451********', 
      cvv: '826', 
      country: 'GERMANY',
      transPerWeek: '3',
      address: 'Meiningburgredder 99',
      price: '24.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Modest Shalhoub', 
      cardNumber: '4490********', 
      cvv: '872', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '2785 Sycamore Road',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Martin Fribjarnarson', 
      cardNumber: '4479********', 
      cvv: '771', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '612 Late Avenue',
      price: '19.00'
    },
    { 
      type: 'DISCOVER', 
      accountHolder: 'Hoa Zaytseva', 
      cardNumber: '6011********', 
      cvv: '464', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '3826 Horizon Circle',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Valborg Murray', 
      cardNumber: '4479********', 
      cvv: '839', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '4394 Hall Place',
      price: '19.00'
    },

    // Screenshot 220
    { 
      type: 'DISCOVER', 
      accountHolder: 'Hoa Zaytseva', 
      cardNumber: '6011********', 
      cvv: '464', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '3826 Horizon Circle',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Valborg Murray', 
      cardNumber: '4479********', 
      cvv: '839', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '4394 Hall Place',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Ben Mrton', 
      cardNumber: '4490********', 
      cvv: '516', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '1517 Kincheloe Road',
      price: '19.00'
    },
    { 
      type: 'VISA', 
      accountHolder: 'Ben Madetoja', 
      cardNumber: '4490********', 
      cvv: '769', 
      country: 'UNITED STATES',
      transPerWeek: '1',
      address: '4324 Caynor Circle',
      price: '15.00'
    },
    { 
      type: 'DISCOVER', 
      accountHolder: 'Akbolar van Soest', 
      cardNumber: '6011********', 
      cvv: '876', 
      country: 'UNITED STATES',
      transPerWeek: '2',
      address: '2911 Reppert Coal Road',
      price: '19.00'
    },
    { 
      type: 'MASTERCARD', 
      accountHolder: 'Taemi Zepeda', 
      cardNumber: '5156********', 
      cvv: '677', 
      country: 'GERMANY',
      transPerWeek: '3',
      address: 'Smmeringstr. 68',
      price: '24.00'
    },
  ];

  // We still need to include products from our product data
  // for when the BUY button is clicked
  const baseProducts = [
    products.find(p => p.name.includes('Laurits Lambert')),
    products.find(p => p.name.includes('Elma Johnson')),
    products.find(p => p.name.includes('Liv Christiansen')),
    products.find(p => p.name.includes('Martin Fribjarnarson')),
  ].filter(Boolean) as Product[];
  
  // For simplicity we'll just use the first product for all the BUY buttons
  const defaultProduct = baseProducts[0];

  return (
    <div className="min-h-screen">
      {/* Header matching exactly what's in the screenshots */}
      <header>
        <div className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white">
          <div className="mx-auto p-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <h1 className="text-xl font-bold">manuvamart</h1>
              </div>
              <nav className="ml-10 hidden md:flex">
                <a href="/" className="px-3 py-1 font-medium uppercase bg-blue-700 rounded">Home</a>
                <a href="/cards-view" className="px-3 py-1 font-medium uppercase ml-2">Cards View</a>
                <a href="/login" className="px-3 py-1 font-medium uppercase ml-2">My Account</a>
                <a href="/cart" className="px-3 py-1 font-medium uppercase ml-2">Cart</a>
                <a href="#" className="px-3 py-1 font-medium uppercase ml-2">More</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="mr-3 flex items-center">
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="text-white font-medium">0</span>
                </div>
                <div className="mr-3 flex items-center">
                  <span className="text-white font-medium">$0</span>
                </div>
                <a href="#" className="text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <CardsHeader />
        <SearchBar />
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">AVAILABLE CARDS</h2>
          <a 
            href="/cards-view" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
          >
            View All Cards with Filters
          </a>
        </div>

        {/* Table layout exactly matching Screenshots */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-t-md overflow-hidden">
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
            <tbody>
              {exactScreenshotData.map((card, index) => {
                return (
                  <tr key={`card-${index}`} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="py-3 px-4">{card.type}</td>
                    <td className="py-3 px-4">{card.accountHolder}</td>
                    <td className="py-3 px-4">{card.cardNumber}</td>
                    <td className="py-3 px-4">{card.cvv}</td>
                    <td className="py-3 px-4">{card.country}</td>
                    <td className="py-3 px-4">{card.transPerWeek}</td>
                    <td className="py-3 px-4">{card.address}</td>
                    <td className="py-3 px-4">{card.price}</td>
                    <td className="py-3 px-4">
                      <button 
                        className="bg-green-400 hover:bg-green-500 text-white px-5 py-1.5 rounded-full text-sm font-medium"
                        onClick={() => alert(`Added ${card.accountHolder} card to cart!`)}
                      >
                        BUY
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default HomePageExact;