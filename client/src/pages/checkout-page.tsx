import React, { useState } from 'react';
import { useLocation } from 'wouter';
import CheckoutLayout from '@/components/layouts/checkout-layout';
import CheckoutForm from '@/components/checkout/checkout-form';
import PaymentMethodModal from '@/components/checkout/payment-method-modal';
import { PaymentMethod } from '@/cardmart/types';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { generateInvoiceNumber } from '@/lib/utils';

const CheckoutPage: React.FC = () => {
  const [_, navigate] = useLocation();
  const { getTotalPrice, cartItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | ''>('');
  const { toast } = useToast();

  const handleContinue = () => {
    if (!selectedPaymentMethod) {
      toast({
        title: 'Payment method required',
        description: 'Please select a payment method to continue.',
        variant: 'destructive',
      });
      return;
    }

    if (selectedPaymentMethod === 'momopay') {
      navigate('/momo-payment');
    } else {
      toast({
        title: 'Payment method not available',
        description: 'This payment method is not implemented yet.',
        variant: 'destructive',
      });
    }
  };

  const handleSelectPaymentMethod = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method);
    setIsModalOpen(false);
  };

  const handleSubmitOrder = async () => {
    try {
      const invoiceNumber = generateInvoiceNumber();
      
      // Create order in database
      await apiRequest('POST', '/api/orders', {
        products: cartItems.map(item => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price
        })),
        totalAmount: getTotalPrice(),
        paymentMethod: selectedPaymentMethod,
        invoiceNumber
      });
      
      // Store invoice number for payment reference
      sessionStorage.setItem('currentInvoice', invoiceNumber);
      
      handleContinue();
    } catch (error) {
      toast({
        title: 'Order submission failed',
        description: 'There was a problem creating your order. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <CheckoutLayout backLink="/cart" backLinkText="Back to Cart">
      <CheckoutForm
        selectedPaymentMethod={selectedPaymentMethod}
        onPaymentMethodClick={() => setIsModalOpen(true)}
        onContinue={handleSubmitOrder}
      />
      
      <PaymentMethodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSelectPaymentMethod}
      />
    </CheckoutLayout>
  );
};

export default CheckoutPage;
