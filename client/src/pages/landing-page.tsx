import React from 'react';
import { useLocation } from 'wouter';
import MainLayout from '@/components/layouts/main-layout';
import HeroSection from '@/components/landing/hero-section';
import FeaturesSection from '@/components/landing/features-section';

const LandingPage: React.FC = () => {
  const [_, navigate] = useLocation();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <MainLayout showGetStarted onGetStartedClick={handleGetStarted}>
      <HeroSection onGetStartedClick={handleGetStarted} />
      <FeaturesSection />
    </MainLayout>
  );
};

export default LandingPage;
