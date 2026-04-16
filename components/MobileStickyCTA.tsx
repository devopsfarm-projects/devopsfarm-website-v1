'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after user scrolls down past the main hero area (300px)
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link 
      href="/contact"
      className={`fixed bottom-5 left-5 z-40 md:hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <div className="bg-brand hover:bg-brand-dark text-white pl-3 pr-5 py-3 rounded-full shadow-[0_4px_20px_rgba(124,58,237,0.4)] flex items-center gap-2.5 border border-white/10 active:scale-95 transition-transform backdrop-blur-sm">
           <div className="bg-white/20 p-1.5 rounded-full">
             <Calendar className="w-4 h-4 text-white" />
           </div>
           <span className="font-bold text-sm tracking-wide">Book Call</span>
      </div>
    </Link>
  );
};