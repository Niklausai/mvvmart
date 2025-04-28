import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface AuthHeaderProps {
  backLink: string;
  backLinkText: string;
  hideBackButton?: boolean;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({
  backLink,
  backLinkText,
  hideBackButton = false,
}) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Manuva Mart
          </Link>
        </div>
        
        {!hideBackButton && (
          <div>
            <Link href={backLink}>
              <Button
                variant="ghost"
                className="text-dark hover:text-primary transition flex items-center"
              >
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {backLinkText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AuthHeader;
