import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Upload } from 'lucide-react';

const MomoPaymentPageSimple: React.FC = () => {
  const [_, navigate] = useLocation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reference, setReference] = useState('');
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Sample data for demonstration
  const invoiceNumber = 'INV-20230515-7842';
  const amount = 15.00;
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setScreenshotFile(file);
    
    // Create a preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const handleUpload = async () => {
    if (!screenshotFile) return;
    
    setIsUploading(true);
    
    // In a real app, this would upload the file to a server
    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false);
    }, 1500);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || !reference || !screenshotFile) {
      alert('Please fill all fields and upload a screenshot');
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, this would submit the payment information to a server
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/payment/confirmation');
    }, 2000);
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
            <h1 className="text-xl font-bold text-blue-500 border-l-4 border-blue-500 pl-2">MOMO PAYMENT</h1>
            <div className="text-sm text-gray-500">
              Home &gt; Checkout &gt; MoMo Payment
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Payment instructions */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Instructions</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-700">Step 1: Send Money</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Send exactly <span className="font-bold">${amount.toFixed(2)}</span> to the following number:
                    </p>
                    <div className="mt-2 p-3 bg-blue-50 rounded-md border border-blue-100 font-mono text-center">
                      +233 26 910 1851
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-medium text-gray-700">How to Send Money</h3>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>Dial <span className="font-mono">*170#</span> then follow these steps:</p>
                      <p>1. Select "Transfer Money"</p>
                      <p>2. Select "Other Networks"</p>
                      <p>3. Select "AirtelTigo"</p>
                      <p>4. Enter number below</p>
                      <p className="font-medium mt-2">AIRTELTIGO (Ghanaian admin): +233 26 910 1851</p>
                      <p className="font-medium mt-2">Account Name: Naomi Sedor</p>
                    </div>
                    
                    <div className="flex justify-center mt-3">
                      <div className="flex space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Mobile_Money.png" alt="MTN MoMo" className="h-8" />
                        <img src="https://www.airteltigo.com.gh/sites/default/files/airteltigo_money_logo.png" alt="AirtelTigo" className="h-8" />
                        <img src="https://cdn.vodafone.co.uk/en/assets/images/large/VF_Logo_2017_RED.png" alt="Vodafone" className="h-8" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-medium text-gray-700">Step 2: Reference</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Use this invoice number as reference in your MoMo transfer:
                    </p>
                    <div className="mt-2 p-3 bg-blue-50 rounded-md border border-blue-100 font-mono text-center">
                      {invoiceNumber}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-medium text-gray-700">Step 3: Screenshot</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Take a screenshot of your payment receipt and upload it below.
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-medium text-gray-700">Step 4: Confirmation</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Fill in the form with your MoMo number and the reference used, then click Submit.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Details</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Invoice Number:</span>
                    <span className="font-medium">{invoiceNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">${amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Method:</span>
                    <span className="font-medium">MoMo Pay</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Status:</span>
                      <span className="text-yellow-600">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Payment Confirmation</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phoneNumber" className="text-gray-700">MoMo Phone Number</Label>
                        <Input
                          id="phoneNumber"
                          placeholder="e.g. 024 123 4567"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="reference" className="text-gray-700">Reference Used</Label>
                        <Input
                          id="reference"
                          placeholder="e.g. INV-20230515-7842"
                          value={reference}
                          onChange={(e) => setReference(e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="screenshot" className="text-gray-700">Upload Payment Screenshot</Label>
                      <div className="mt-1 p-4 border-2 border-dashed border-gray-300 rounded-md">
                        <div className="space-y-2 text-center">
                          {!previewUrl ? (
                            <>
                              <Upload className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="text-sm text-gray-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                                  <span>Upload a file</span>
                                  <Input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="space-y-4">
                              <div className="overflow-hidden rounded-lg">
                                <img
                                  src={previewUrl}
                                  alt="Payment Screenshot"
                                  className="max-h-64 mx-auto"
                                />
                              </div>
                              <div className="flex justify-center space-x-4">
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => {
                                    setScreenshotFile(null);
                                    setPreviewUrl(null);
                                  }}
                                >
                                  Remove
                                </Button>
                                <Button
                                  type="button"
                                  onClick={handleUpload}
                                  disabled={isUploading}
                                >
                                  {isUploading ? (
                                    <>
                                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                      Uploading...
                                    </>
                                  ) : (
                                    'Upload'
                                  )}
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes" className="text-gray-700">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any comments or additional information..."
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Payment Confirmation'
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MomoPaymentPageSimple;