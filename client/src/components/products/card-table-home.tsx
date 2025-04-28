import React from 'react';
import { Product } from '@/cardmart/types';
import { Button } from '@/components/ui/button';

interface CardTableHomeProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const CardTableHome: React.FC<CardTableHomeProps> = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-500">No products found</h3>
        <p className="text-muted-foreground mt-2">Check back later for available cards.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full bg-white rounded-md shadow" style={{ minHeight: '600px' }}>
      <table className="min-w-full">
        <thead className="sticky top-0">
          <tr className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-left">
            <th className="py-3 px-4 uppercase font-semibold text-sm">TYPE</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">ACC. HOLDER</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">CARD NUMBER</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">CVV</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">COUNTRY</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">TRANS PER WEEK</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">ADDRESS</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">PRICE($)</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">ACTION</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {products.map((product, index) => {
            const nameParts = product.name.split(' ');
            let cardType = '';
            let accountHolder = '';

            if (product.name.includes('Visa')) {
              cardType = 'VISA';
              accountHolder = nameParts.slice(0, nameParts.length - 2).join(' ');
            } else if (product.name.includes('Mastercard')) {
              cardType = 'MASTERCARD';
              accountHolder = nameParts.slice(0, nameParts.length - 1).join(' ');
            } else if (product.name.includes('Discover')) {
              cardType = 'DISCOVER';
              accountHolder = nameParts.slice(0, nameParts.length - 2).join(' ');
            } else if (product.category === 'credit-cards') {
              // For any other credit card types
              cardType = 'CARD';
              accountHolder = nameParts.slice(0, nameParts.length - 1).join(' ');
            } else {
              // Skip non-card products
              return null;
            }
            
            // Extract card number from features
            const cardNumberFeature = product.features?.find(f => f.includes('Card number'));
            const cardNumber = cardNumberFeature ? cardNumberFeature.split(': ')[1] : '';
            
            // Extract CVV from features
            const cvvFeature = product.features?.find(f => f.includes('CVV'));
            const cvv = cvvFeature ? cvvFeature.split(': ')[1] : '';
            
            // Extract address from features
            const addressFeature = product.features?.find(f => f.includes('Address'));
            const address = addressFeature ? addressFeature.split(': ')[1] : '';
            
            // Extract country 
            const countryFeature = product.features?.find(f => f.includes('based'));
            const country = countryFeature ? countryFeature.split(' ')[0] : 'UNITED STATES';
            
            // Transactions per week (based on CVV value as a proxy for simplicity)
            const transPerWeek = cvv === '1' ? 1 : (cvv === '3' ? 3 : 2);
            
            return (
              <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-3 px-4">{cardType}</td>
                <td className="py-3 px-4">{accountHolder}</td>
                <td className="py-3 px-4">{cardNumber}</td>
                <td className="py-3 px-4">{cvv}</td>
                <td className="py-3 px-4">{country}</td>
                <td className="py-3 px-4">{transPerWeek}</td>
                <td className="py-3 px-4">{address}</td>
                <td className="py-3 px-4">{product.price.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <Button 
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full"
                    onClick={() => onAddToCart(product)}
                  >
                    BUY
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CardTableHome;