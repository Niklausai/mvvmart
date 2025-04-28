import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { generateInvoiceNumber } from '@/lib/utils';

type PaymentMethod = 'momopay' | 'bitcoins' | 'bank';

const PaymentMethodSelect = ({ onSelect }: { onSelect: (method: PaymentMethod) => void }) => {
  const [value, setValue] = useState<PaymentMethod>('momopay');
  
  const handleChange = (value: string) => {
    setValue(value as PaymentMethod);
    onSelect(value as PaymentMethod);
  };
  
  return (
    <RadioGroup defaultValue="momopay" onValueChange={handleChange} className="space-y-4">
      <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
        <RadioGroupItem value="momopay" id="momopay" />
        <Label htmlFor="momopay" className="flex items-center cursor-pointer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Mobile_Money.png" alt="MoMo Pay" className="h-8 mr-2" />
          <span>MoMo Pay</span>
        </Label>
      </div>
      
      <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
        <RadioGroupItem value="bitcoins" id="bitcoins" />
        <Label htmlFor="bitcoins" className="flex items-center cursor-pointer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="Bitcoin" className="h-8 mr-2" />
          <span>Bitcoins</span>
        </Label>
      </div>
      
      <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
        <RadioGroupItem value="bank" id="bank" />
        <Label htmlFor="bank" className="flex items-center cursor-pointer">
          <img src="https://www.svgrepo.com/show/200059/bank.svg" alt="Bank Transfer" className="h-8 mr-2" />
          <span>Bank Transfer</span>
        </Label>
      </div>
    </RadioGroup>
  );
};

const CheckoutPageSimple: React.FC = () => {
  const [_, navigate] = useLocation();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | ''>('');
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Generate a random invoice number for this checkout
  const invoiceNumber = generateInvoiceNumber();
  
  // Sample cart data - in a real app, this would come from the cart context
  const cartItems = [
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
  ];
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const handleSelectPaymentMethod = (method: PaymentMethod) => {
    setPaymentMethod(method);
    setShowPaymentDialog(false);
  };
  
  const handleContinue = () => {
    if (!paymentMethod) {
      setShowPaymentDialog(true);
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/payment/momo');
    }, 1000);
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
            <h1 className="text-xl font-bold text-blue-500 border-l-4 border-blue-500 pl-2">CHECKOUT</h1>
            <div className="text-sm text-gray-500">
              Home &gt; Cart &gt; Checkout
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Checkout form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Information</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="invoice" className="block text-sm font-medium text-gray-700 mb-1">
                      Invoice Number
                    </label>
                    <Input
                      id="invoice"
                      value={invoiceNumber}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                      Amount
                    </label>
                    <Input
                      id="amount"
                      value={`$${getTotalPrice().toFixed(2)}`}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                </div>
                
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h2>
                
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-gray-700 mr-2">Selected Method:</span>
                    {paymentMethod ? (
                      <span className="text-blue-600 font-medium capitalize">{paymentMethod}</span>
                    ) : (
                      <span className="text-red-500 italic">Not selected</span>
                    )}
                  </div>
                  
                  <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        Select Payment Method
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Select Payment Method</DialogTitle>
                      </DialogHeader>
                      <PaymentMethodSelect onSelect={handleSelectPaymentMethod} />
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="border-t pt-6">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={handleContinue}
                    disabled={!paymentMethod || isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Continue"}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between pb-4 border-b">
                      <div>
                        <div className="font-medium text-gray-800">
                          {item.type} Card ({item.cvv})
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Qty: {item.quantity}
                        </div>
                      </div>
                      <div className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
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
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-blue-500">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">Payment Information</h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <p>Your payment information is secure. Once you select a payment method and continue, you will be directed to complete your payment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPageSimple;