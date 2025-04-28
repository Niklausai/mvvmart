import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onGetStartedClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStartedClick }) => {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">The Premier Digital Products Marketplace</h1>
            <p className="text-lg text-muted-foreground mb-8">Access a wide range of premium digital products with secure payment options and instant delivery.</p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg h-auto"
              onClick={onGetStartedClick}
            >
              Get Started Now
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Digital marketplace concept"
              className="rounded-lg shadow-lg"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
