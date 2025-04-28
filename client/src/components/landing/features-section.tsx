import React from 'react';
import { SecurityIcon, DeliveryIcon, SupportIcon } from '@/cardmart/icons';

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">Why Choose Manuva Mart</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-light p-6 rounded-lg text-center">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <SecurityIcon className="text-2xl text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Transactions</h3>
            <p className="text-muted-foreground">All payments are encrypted with 256-bit SSL security for maximum protection.</p>
          </div>
          
          <div className="bg-light p-6 rounded-lg text-center">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DeliveryIcon className="text-2xl text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Delivery</h3>
            <p className="text-muted-foreground">Receive your products immediately after verification of your payment.</p>
          </div>
          
          <div className="bg-light p-6 rounded-lg text-center">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <SupportIcon className="text-2xl text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-muted-foreground">Our dedicated team is always available to assist with any questions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
