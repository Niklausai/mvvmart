import React, { useState } from 'react';
import { useLocation } from 'wouter';
import CheckoutLayout from '@/components/layouts/checkout-layout';
import { UploadButton } from '@/components/ui/upload-button';
import { MomoPaymentProviders } from '@/cardmart/icons';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const MomoPaymentPage: React.FC = () => {
  const [_, navigate] = useLocation();
  const { toast } = useToast();
  const { getTotalPrice } = useCart();
  const [isUploading, setIsUploading] = useState(false);
  
  // Get the invoice number from session storage
  const invoiceNumber = sessionStorage.getItem('currentInvoice') || '1500095924';
  
  const handleUpload = async (file: File) => {
    setIsUploading(true);
    
    // Create form data
    const formData = new FormData();
    formData.append('screenshot', file);
    formData.append('invoiceNumber', invoiceNumber);
    
    try {
      // In a real app, you would use a proper file upload endpoint
      // For demo purposes, we'll just simulate a successful upload
      const response = await fetch('/api/payment/upload-screenshot', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        navigate('/payment-confirmation');
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      toast({
        title: 'Upload failed',
        description: 'There was a problem uploading your screenshot. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <CheckoutLayout backLink="/checkout" backLinkText="Back">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-primary py-4 px-6">
          <h2 className="text-white text-xl font-bold">MoMo Payments [For Ghanians Only]</h2>
        </div>
        
        <div className="p-6">
          <MomoPaymentProviders />
          
          <div className="space-y-4">
            <div>
              <p className="font-medium">NB: Use invoice number <span className="font-bold">{invoiceNumber}</span> as reference.</p>
            </div>
            
            <div>
              <p className="font-medium">Steps: Dial *170* =&gt; Select 1 (Transfer Money) =&gt; Select (Other Networks) =&gt; Select (airtelTigo) =&gt;(Enter number below)</p>
            </div>
            
            <div>
              <p className="font-medium">AIRTELTIGO (Ghanaian admin): <span className="font-bold">0275772735</span></p>
            </div>
            
            <div>
              <p className="font-medium">Amount to be paid: <span className="font-bold">GH₵{(getTotalPrice() * 2.5).toFixed(2)}</span></p>
            </div>
            
            <div>
              <p className="font-medium">Account Name: <span className="font-bold">Juliana Boakye (Megabonux Ghanaian Admin)</span></p>
            </div>
            
            <div>
              <p className="text-center">Click on icon below to upload payment screenshot</p>
              <div className="mt-4 flex justify-center">
                <UploadButton
                  onUpload={handleUpload}
                  className="w-64 h-32"
                  label={isUploading ? "Uploading..." : "Upload screenshot here"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default MomoPaymentPage;
