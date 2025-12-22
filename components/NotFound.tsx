import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | DevOpsFarm";
  }, []);

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-bg/50 via-white to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-2xl mx-auto px-6 py-12 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-navy-50 rounded-2xl mb-8 shadow-sm">
                <span className="text-3xl font-bold text-navy-900">404</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Page Not Found
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                The page you are looking for doesn't exist or has been moved. 
                Let's get you back to shipping code.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/">
                    <Button size="lg" className="shadow-xl shadow-brand/20 gap-2">
                        <Home className="w-4 h-4" />
                        Return Home
                    </Button>
                </Link>
                <Link to="/contact">
                    <Button variant="outline" size="lg" className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Contact Support
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  );
};