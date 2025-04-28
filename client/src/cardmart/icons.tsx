import React from 'react';

export const SecurityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 7V12C3 16.97 7.03 22 12 22C16.97 22 21 16.97 21 12V7L12 2ZM12 15.5C10.62 15.5 9.5 14.38 9.5 13C9.5 11.62 10.62 10.5 12 10.5C13.38 10.5 14.5 11.62 14.5 13C14.5 14.38 13.38 15.5 12 15.5Z" fill="currentColor"/>
  </svg>
);

export const DeliveryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 14V9C19 8.45 18.81 7.94 18.5 7.54L15.5 3.5C15.19 3.19 14.75 3 14.25 3H5C3.9 3 3 3.9 3 5V15C3 16.1 3.9 17 5 17H6C6 18.66 7.34 20 9 20C10.66 20 12 18.66 12 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H22V15C22 14.45 21.55 14 21 14H19ZM9 18.5C8.17 18.5 7.5 17.83 7.5 17C7.5 16.17 8.17 15.5 9 15.5C9.83 15.5 10.5 16.17 10.5 17C10.5 17.83 9.83 18.5 9 18.5ZM14.25 5L16.5 8H13V5H14.25ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5Z" fill="currentColor"/>
  </svg>
);

export const SupportIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" fill="currentColor"/>
  </svg>
);

export const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill="currentColor"/>
  </svg>
);

export const PaymentIcons: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex gap-2 ${className}`}>
    <span className="flex justify-center items-center bg-white p-1 rounded">
      <img src="https://cdn.iconscout.com/icon/free/png-256/visa-3-226460.png" alt="Visa" className="h-6" />
    </span>
    <span className="flex justify-center items-center bg-white p-1 rounded">
      <img src="https://cdn.iconscout.com/icon/free/png-256/mastercard-3521564-2944982.png" alt="Mastercard" className="h-6" />
    </span>
    <span className="flex justify-center items-center bg-white p-1 rounded">
      <img src="https://cdn.iconscout.com/icon/free/png-256/american-express-3521560-2944978.png" alt="Amex" className="h-6" />
    </span>
    <span className="flex justify-center items-center bg-white p-1 rounded">
      <img src="https://cdn.iconscout.com/icon/free/png-256/paypal-44-432680.png" alt="PayPal" className="h-6" />
    </span>
    <span className="flex justify-center items-center bg-white p-1 rounded">
      <img src="https://cdn.iconscout.com/icon/free/png-256/bitcoin-22-1260080.png" alt="Bitcoin" className="h-6" />
    </span>
  </div>
);

export const MomoPaymentProviders: React.FC = () => (
  <div className="flex justify-center mb-6">
    <img 
      src="https://cdn.iconscout.com/icon/premium/png-256-thumb/mobile-payment-2644114-2197039.png" 
      alt="MoMo Payment Providers" 
      className="rounded" 
    />
  </div>
);
