import React from 'react';
import AuthHeader from '@/components/shared/auth-header';
import PaymentFooter from '@/components/shared/payment-footer';

interface CheckoutLayoutProps {
  children: React.ReactNode;
  backLink?: string;
  backLinkText?: string;
  hideBackButton?: boolean;
}

const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({
  children,
  backLink,
  backLinkText,
  hideBackButton = false,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <AuthHeader 
        backLink={backLink} 
        backLinkText={backLinkText} 
        hideBackButton={hideBackButton}
      />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {children}
      </div>
      
      <PaymentFooter />
    </div>
  );
};

export default CheckoutLayout;
