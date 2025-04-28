import React from 'react';
import { Link } from 'wouter';
import { PaymentIcons } from '@/cardmart/icons';

const PaymentFooter: React.FC = () => {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm mb-2">
            By completing your order, you agree to the{' '}
            <Link href="#" className="text-info hover:underline">Terms & Condition</Link>{' '}
            and{' '}
            <Link href="#" className="text-info hover:underline">Privacy</Link>
          </p>
          
          <div className="flex justify-center my-4">
            <div className="flex items-center space-x-2 bg-success bg-opacity-10 text-success rounded-lg px-4 py-2 text-sm">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>SSL SECURED PAYMENT</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 mb-4">Your information is protected by 256-bit SSL encryption</p>
          
          <div className="border-t border-gray-800 pt-4">
            <div className="flex justify-center space-x-4 mb-2">
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">Terms And Condition</Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy</Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">About Us</Link>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Manuva Mart. All rights reserved.</p>
          </div>
          
          <div className="flex justify-center mt-4">
            <PaymentIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PaymentFooter;
