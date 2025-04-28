import React from 'react';
import HeaderSimple from '@/components/shared/header-simple';
import Footer from '@/components/shared/footer';

interface MainLayoutSimpleProps {
  children: React.ReactNode;
  showGetStarted?: boolean;
  onGetStartedClick?: () => void;
}

const MainLayoutSimple: React.FC<MainLayoutSimpleProps> = ({
  children,
  showGetStarted,
  onGetStartedClick,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSimple
        showGetStarted={showGetStarted}
        onGetStartedClick={onGetStartedClick}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayoutSimple;