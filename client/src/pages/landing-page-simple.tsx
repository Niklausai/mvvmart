import React from 'react';
import { useLocation } from 'wouter';
import MainLayoutSimple from '@/components/layouts/main-layout-simple';
import HeroSection from '@/components/landing/hero-section';
import FeaturesSection from '@/components/landing/features-section';
import TestimonialSection from '@/components/landing/testimonial-section';

const LandingPageSimple: React.FC = () => {
  const [_, navigate] = useLocation();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <MainLayoutSimple showGetStarted onGetStartedClick={handleGetStarted}>
      <HeroSection onGetStartedClick={handleGetStarted} />
      <FeaturesSection />
      <TestimonialSection />
    </MainLayoutSimple>
  );
};

export default LandingPageSimple;