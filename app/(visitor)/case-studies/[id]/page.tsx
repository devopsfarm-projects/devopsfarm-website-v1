'use client';

import React, { useRef } from 'react';
import { ArrowRight, ArrowLeft, TrendingUp, Building2, Plus } from 'lucide-react';
import Link from 'next/link';
import { caseStudies } from '@/constants/mockData/caseStudiesData';

export const CaseStudies: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 340; // Adjusted for card width + gap
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header with Circular CTA */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative">
            <div className="max-w-xl z-10">
                <div className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-widest text-xs mb-3">
                    <TrendingUp className="w-4 h-4" />
                    Proven Results
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                    Engineering Impact
                </h2>
                <p className="text-gray-600">
                    Real metrics from production environments. No fluff.
                </p>
            </div>

            {/* Navigation & Circular Button */}
            <div className="flex items-center gap-6 mt-6 md:mt-0 z-10">
                {/* Circular View All Button */}
                <Link href="/case-studies" className="hidden md:flex flex-col items-center justify-center w-24 h-24 rounded-full bg-navy-50 border border-navy-100 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-300 group shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight mb-1">View<br/>All</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Arrows */}
                <div className="flex gap-2">
                    <button 
                        onClick={() => scroll('left')}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-navy-900 transition-all"
                        aria-label="Scroll left"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-navy-900 transition-all"
                        aria-label="Scroll right"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>

        {/* Carousel */}
        <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {caseStudies.map((item) => (
                <div 
                    key={item.id} 
                    className="min-w-[300px] w-[320px] snap-center group"
                >
                    <Link href={`/case-studies/${item.id}`} className="block h-full">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden relative">
                            
                            {/* Image Section */}
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors"></div>
                                
                                {/* Floating Badge */}
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold text-navy-900 uppercase tracking-wide border border-white/20 shadow-sm flex items-center gap-1.5">
                                    <div className={`w-1.5 h-1.5 rounded-full ${item.category === 'SaaS' ? 'bg-blue-500' : item.category === 'FinTech' ? 'bg-green-500' : 'bg-brand'}`}></div>
                                    {item.category}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-navy-900 mb-2 leading-snug group-hover:text-brand transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 line-clamp-2 font-medium">
                                        {item.description}
                                    </p>
                                </div>
                                
                                <div className="mt-auto pt-4 border-t border-gray-50">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-green-50 p-1.5 rounded-md">
                                            <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                                        </div>
                                        <span className="text-xs font-bold text-navy-800">{item.results[0]}</span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <Building2 className="w-3.5 h-3.5" />
                                            <span className="truncate max-w-[140px]">{item.client}</span>
                                        </div>
                                        <span className="flex items-center text-brand opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                                            Read <Plus className="w-3 h-3 ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            
            {/* End of list spacer/cta for mobile */}
            <div className="min-w-[100px] flex items-center justify-center md:hidden">
                 <Link href="/case-studies" className="w-16 h-16 rounded-full bg-navy-50 flex flex-col items-center justify-center border border-navy-100 text-brand">
                    <ArrowRight className="w-6 h-6" />
                 </Link>
            </div>
        </div>

      </div>
    </section>
  );
};