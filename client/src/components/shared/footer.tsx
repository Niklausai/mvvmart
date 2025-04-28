import React from 'react';
import { Link } from 'wouter';
import { PaymentIcons } from '@/cardmart/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Manuva Mart</h3>
            <p className="text-gray-400 max-w-xs">The premier digital products marketplace with secure transactions and instant delivery.</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/cards-view" className="text-gray-400 hover:text-white transition">Card Services</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Support Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Terms & Condition</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Privacy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">About Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Manuva Mart. All rights reserved.</p>
          <div className="flex justify-center mt-4">
            <div className="bg-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2">
              <svg className="h-4 w-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>SSL SECURED PAYMENT</span>
            </div>
          </div>
          <p className="mt-2 text-sm">Your information is protected by 256-bit SSL encryption</p>
          
          <div className="mt-4 flex justify-center">
            <PaymentIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
