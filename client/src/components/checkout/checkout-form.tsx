import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { PaymentMethod } from '@/cardmart/types';

interface CheckoutFormProps {
  selectedPaymentMethod: PaymentMethod | '';
  onPaymentMethodClick: () => void;
  onContinue: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  selectedPaymentMethod,
  onPaymentMethodClick,
  onContinue,
}) => {
  const getPaymentMethodLabel = (method: PaymentMethod | ''): string => {
    switch (method) {
      case 'momopay':
        return 'MoMoPay (Mobile Money All Networks)';
      case 'bitcoins':
        return 'Bitcoins';
      case 'bank':
        return 'Bank Transfer';
      default:
        return '--Select Payment Option--';
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-primary py-4 px-6">
        <h2 className="text-white text-xl font-bold">Order Form</h2>
      </div>
      
      <div className="p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-dark font-medium mb-2">Select Payment Method</label>
            <div className="relative">
              <button
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary text-left flex justify-between items-center"
                onClick={onPaymentMethodClick}
              >
                <span className={selectedPaymentMethod ? 'text-dark' : 'text-gray-400'}>
                  {getPaymentMethodLabel(selectedPaymentMethod)}
                </span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>
          
          <Button
            className="w-full bg-danger hover:bg-danger/90 text-white"
            onClick={onContinue}
            disabled={!selectedPaymentMethod}
          >
            Continue
          </Button>
          
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Can't find your desired payment option? </span>
            <a href="#" className="text-info hover:underline">CHAT US NOW</a>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>
              By completing your order, you agree to the{' '}
              <a href="#" className="text-info hover:underline">Terms & Condition</a>{' '}
              and{' '}
              <a href="#" className="text-info hover:underline">Privacy</a>
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 bg-success bg-opacity-10 text-success rounded-lg px-4 py-2 text-sm">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>SSL SECURED PAYMENT</span>
            </div>
          </div>
          
          <div className="text-center text-xs text-muted-foreground">
            <p>Your information is protected by 256-bit SSL encryption</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
