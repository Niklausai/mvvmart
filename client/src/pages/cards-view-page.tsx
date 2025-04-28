import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Product } from '@/cardmart/types';
import { cardStorage, CardData } from '@/cardmart/card-storage-service';

const CardsViewPage = () => {
  const [, navigate] = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Create exact card data that matches the screenshots
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

  const filteredCards = searchTerm 
    ? exactScreenshotData.filter(card => 
        card.accountHolder.toLowerCase().includes(searchTerm.toLowerCase()) || 
        card.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.cardNumber.includes(searchTerm) ||
        card.cvv.includes(searchTerm) ||
        card.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : exactScreenshotData;

  // CARDS header component
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

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header>
        <div className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white">
          <div className="container mx-auto p-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <h1 className="text-xl font-bold">manuvamart</h1>
              </div>
              <nav className="ml-10 hidden md:flex">
                <a href="/" className="px-3 py-1 font-medium uppercase">Home</a>
                <a href="/cards-view" className="px-3 py-1 font-medium uppercase bg-red-500 ml-2 rounded">Cards</a>
                <a href="/login" className="px-3 py-1 font-medium uppercase ml-2">My Account</a>
                <a href="#" className="px-3 py-1 font-medium uppercase ml-2">Add Funds</a>
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
                <a href="/login" className="text-white">
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

        {/* Search box with functionality */}
        <div className="bg-gradient-to-r from-blue-600 to-pink-500 rounded p-4 mb-6">
          <div className="relative w-full max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search Cards"
              className="w-full h-10 pl-10 pr-4 py-2 rounded border border-gray-200 focus:outline-none"
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
        
        <h2 className="text-lg font-semibold text-gray-800 mb-4">AVAILABLE CARDS</h2>

        {/* Filter options */}
        <div className="mb-6 flex flex-wrap gap-3">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" 
            onClick={() => setSearchTerm('')}
          >
            All Cards
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" 
            onClick={() => setSearchTerm('VISA')}
          >
            VISA Cards
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" 
            onClick={() => setSearchTerm('MASTERCARD')}
          >
            MasterCard
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" 
            onClick={() => setSearchTerm('DISCOVER')}
          >
            Discover Cards
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" 
            onClick={() => setSearchTerm('GERMANY')}
          >
            Germany Cards
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" 
            onClick={() => setSearchTerm('UNITED STATES')}
          >
            US Cards
          </button>
        </div>

        {/* Cards count */}
        <div className="mb-4">
          <p className="text-gray-700">
            Showing <span className="font-bold">{filteredCards.length}</span> cards
            {searchTerm && <span> matching "<span className="font-bold">{searchTerm}</span>"</span>}
          </p>
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
              {filteredCards.map((card, index) => {
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
                        onClick={() => {
                          // Save the card data to storage
                          const cardData: CardData = {
                            id: index, // Use index as ID for demo
                            cardType: card.type,
                            accountHolder: card.accountHolder,
                            cardNumber: card.cardNumber,
                            cvv: card.cvv,
                            country: card.country,
                            transPerWeek: card.transPerWeek,
                            address: card.address,
                            price: card.price,
                            exp: '02/2025', // Default expiry for demo
                            bank: card.type === 'VISA' ? 'Chase' : card.type === 'MASTERCARD' ? 'Deutsche Bank' : 'Discover Bank',
                            balance: '$' + (Math.round(Math.random() * 3000) + 1500), // Random balance between $1500-$4500
                            transactionLimit: '$' + (card.transPerWeek === '1' ? '500' : card.transPerWeek === '2' ? '1000' : '1500') + ' per day'
                          };
                          
                          // Store card data
                          cardStorage.saveCardData(cardData);
                          
                          // Navigate to product detail with the card index as ID
                          navigate(`/product/${index}`);
                        }}
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

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-1">
            <button className="px-4 py-2 border rounded bg-blue-500 text-white font-bold">1</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-200">2</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-200">3</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-200">4</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-200">5</button>
            <span className="flex items-center px-4">...</span>
            <button className="px-4 py-2 border rounded hover:bg-gray-200">Next →</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-10 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Manuva Mart</h3>
              <p className="text-gray-300">
                Manuva Mart is your trusted source for financial products with secure payment methods and quality customer service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/cards-view" className="text-gray-300 hover:text-white">Cards</a></li>
                <li><a href="/login" className="text-gray-300 hover:text-white">My Account</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Payment Methods</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Bitcoin</li>
                <li className="text-gray-300">Mobile Money</li>
                <li className="text-gray-300">Bank Transfer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-2">Email: support@manuvamart.com</p>
              <p className="text-gray-300">Working Hours: 24/7</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400">© 2023 Manuva Mart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CardsViewPage;