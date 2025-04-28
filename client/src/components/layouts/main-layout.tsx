import React from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

interface BackButtonProps {
  label: string;
  onClick: () => void;
}

interface MainLayoutProps {
  children: React.ReactNode;
  showGetStarted?: boolean;
  onGetStartedClick?: () => void;
  userName?: string;
  showCart?: boolean;
  backButton?: BackButtonProps;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showGetStarted = false,
  onGetStartedClick,
  userName,
  showCart = false,
  backButton,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        showGetStarted={showGetStarted}
        onGetStartedClick={onGetStartedClick}
        userName={userName}
        showCart={showCart}
        backButton={backButton}
      />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
