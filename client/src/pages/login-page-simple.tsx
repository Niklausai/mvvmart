import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const LoginPageSimple: React.FC = () => {
  const [_, navigate] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authKey, setAuthKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      // In a real app, we would validate credentials with the backend
      console.log('Login attempt:', { email, password, authKey });
      // Redirect to the exact home page with cards
      navigate('/cards-view');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-black"></div>
      
      {/* Blue circle decoration */}
      <div className="absolute left-[15%] top-1/2 transform -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
      
      {/* Orange circle decoration */}
      <div className="absolute right-[15%] bottom-1/4 w-48 h-48 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-black bg-opacity-80 rounded-lg p-8 shadow-lg backdrop-blur-sm border border-gray-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">LOGIN</h2>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-white mb-1">email</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email or Phone"
                  className="w-full bg-gray-800 text-white border-gray-700"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-white mb-1">Password</label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-gray-800 text-white border-gray-700"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="authKey" className="block text-white mb-1">Auth Key</label>
                <Input
                  id="authKey"
                  type="text"
                  value={authKey}
                  onChange={(e) => setAuthKey(e.target.value)}
                  placeholder="Auth key"
                  className="w-full bg-gray-800 text-white border-gray-700"
                />
              </div>
              
              <div className="flex items-center">
                <Checkbox id="recaptcha" className="border-gray-500" />
                <label htmlFor="recaptcha" className="ml-2 text-sm text-gray-300">
                  I'm not a robot
                </label>
                <div className="ml-auto">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-8" />
                </div>
              </div>
              
              <div className="text-right">
                <a href="#" className="text-sm text-blue-400 hover:underline">
                  Forgot your password?
                </a>
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-10 bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </Button>
              
              <div className="text-center mt-4">
                <span className="text-gray-400">Don't have an account? </span>
                <Link href="/register" className="text-blue-400 hover:underline">
                  Signup
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPageSimple;