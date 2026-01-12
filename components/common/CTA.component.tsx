'use client';

import React from 'react';
import { Button } from './button.component';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-navy-900 relative overflow-hidden">
      {/* Background decoration to match the 'No Excuses' vibe */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating Line */}
        <div className="flex justify-center mb-3">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C15 2 45 -2 58 10" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
            </svg>
        </div>

        <h2 className="text-sm md:text-base font-semibold text-red-500 tracking-wider uppercase mb-2">
            No Excuses. No Wasted Dollars.
        </h2>
        
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
          Fully Managed Cloud Services and Solutions <br className="hidden md:block" />
          that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">Deliver Measurable Results</span>
        </h3>
        
        <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Stop bleeding budget on inefficient infrastructure. Get a comprehensive risk assessment and technical roadmap from our Principal Architects.
        </p>
        
        <Link href="/contact">
          <Button 
            size="lg" 
            className="bg-[#EF4444] hover:bg-red-600 text-white border-0 shadow-lg shadow-red-500/30 text-base md:text-lg px-8 py-3 md:px-10 md:py-4 group font-extrabold uppercase tracking-wide"
          >
            Get Free Risk Assessment
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        
        <p className="mt-4 text-xs text-gray-500 font-medium">
            Limited slots available for free assessment this month.
        </p>
      </div>
    </section>
  );
};