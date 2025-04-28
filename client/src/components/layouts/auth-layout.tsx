import React from 'react';
import AuthHeader from '@/components/shared/auth-header';
import { Link } from 'wouter';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  backLink: string;
  backLinkText: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  backLink,
  backLinkText,
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AuthHeader backLink={backLink} backLinkText={backLinkText} />
      
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary py-4 px-6">
            <h2 className="text-white text-xl font-bold">{title}</h2>
          </div>
          
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
