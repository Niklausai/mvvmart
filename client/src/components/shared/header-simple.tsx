import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface BackButtonProps {
  label: string;
  onClick: () => void;
}

interface HeaderProps {
  showGetStarted?: boolean;
  onGetStartedClick?: () => void;
  backButton?: BackButtonProps;
}

const HeaderSimple: React.FC<HeaderProps> = ({
  showGetStarted = false,
  onGetStartedClick,
  backButton,
}) => {
  const [_, navigate] = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Manuva Mart
            </Link>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          <div className={`flex items-center ${showMobileMenu ? 'block w-full mt-4' : 'hidden md:flex'}`}>
            <div className="hidden md:flex items-center space-x-4 mr-4">
              <Link href="/" className="text-dark hover:text-primary transition">Home</Link>
              <Link href="/cards-view" className="text-dark hover:text-primary transition">Card Services</Link>
              <Link href="#" className="text-dark hover:text-primary transition">How It Works</Link>
              <Link href="#" className="text-dark hover:text-primary transition">Support</Link>
            </div>
            
            {showGetStarted && (
              <Button
                className="bg-primary hover:bg-primary/90 w-full md:w-auto"
                onClick={onGetStartedClick}
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderSimple;