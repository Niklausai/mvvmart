import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/cardmart/auth';
import { useCart } from '@/hooks/use-cart';
import { ChevronDown, Menu, Search, ShoppingCart, User, LogOut, Settings, History } from 'lucide-react';

interface BackButtonProps {
  label: string;
  onClick: () => void;
}

interface HeaderProps {
  showGetStarted?: boolean;
  onGetStartedClick?: () => void;
  userName?: string;
  showCart?: boolean;
  backButton?: BackButtonProps;
}

const Header: React.FC<HeaderProps> = ({
  showGetStarted = false,
  onGetStartedClick,
  userName,
  showCart = false,
  backButton,
}) => {
  const [_, navigate] = useLocation();
  const { logout } = useAuth();
  const { getTotalItems } = useCart();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <Link href={userName ? '/home' : '/'} className="text-2xl font-bold text-primary">
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
          
          {userName ? (
            <>
              <div className={`w-full md:w-1/3 mb-4 md:mb-0 ${showMobileMenu ? 'block' : 'hidden md:block'}`}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className={`flex items-center space-x-4 ${showMobileMenu ? 'block' : 'hidden md:flex'}`}>
                {backButton && (
                  <button
                    onClick={backButton.onClick}
                    className="text-dark hover:text-primary transition flex items-center"
                  >
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {backButton.label}
                  </button>
                )}
                
                {showCart && (
                  <button
                    onClick={handleCartClick}
                    className="text-dark hover:text-primary transition relative"
                  >
                    <ShoppingCart className="h-6 w-6" />
                    {getTotalItems() > 0 && (
                      <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
                        {getTotalItems()}
                      </span>
                    )}
                  </button>
                )}
                
                <div className="relative">
                  <button
                    className="flex items-center space-x-2 text-dark hover:text-primary transition"
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                  >
                    <User className="h-6 w-6" />
                    <span>{userName}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                      <Link href="#" className="flex px-4 py-2 text-dark hover:bg-light hover:text-primary transition">
                        <User className="h-4 w-4 mr-2" /> My Account
                      </Link>
                      <Link href="#" className="flex px-4 py-2 text-dark hover:bg-light hover:text-primary transition">
                        <History className="h-4 w-4 mr-2" /> Order History
                      </Link>
                      <Link href="#" className="flex px-4 py-2 text-dark hover:bg-light hover:text-primary transition">
                        <Settings className="h-4 w-4 mr-2" /> Settings
                      </Link>
                      <div className="border-t border-gray-200 my-1"></div>
                      <button
                        onClick={handleLogout}
                        className="flex w-full px-4 py-2 text-dark hover:bg-light hover:text-primary transition items-center"
                      >
                        <LogOut className="h-4 w-4 mr-2" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className={`flex items-center ${showMobileMenu ? 'block w-full mt-4' : 'hidden md:flex'}`}>
              <div className="hidden md:flex items-center space-x-4 mr-4">
                <Link href="/" className="text-dark hover:text-primary transition">Home</Link>
                <Link href="#" className="text-dark hover:text-primary transition">Products</Link>
                <Link href="#" className="text-dark hover:text-primary transition">About</Link>
                <Link href="#" className="text-dark hover:text-primary transition">Contact</Link>
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
