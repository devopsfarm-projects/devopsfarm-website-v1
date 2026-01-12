import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Button } from '../components/Button';

export const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            End-to-End Cloud Expertise
          </h2>
          <p className="text-lg text-gray-600">
            We deliver enterprise-grade solutions across the entire cloud lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 items-start mb-12">
          {servicesData.map((service, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={service.id}
                className={`group p-4 md:p-8 bg-white border rounded-2xl transition-all duration-300 h-full flex flex-col ${
                  isOpen 
                    ? 'border-brand shadow-xl ring-1 ring-brand/10' 
                    : 'border-gray-100 hover:border-brand/30 hover:shadow-lg'
                }`}
              >
                <Link to={`/services/${service.id}`} className="block">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-brand group-hover:text-white" />
                    </div>
                </Link>
                
                <Link to={`/services/${service.id}`} className="block">
                    <h3 className="text-base md:text-xl font-bold text-navy-900 mb-2 md:mb-3 group-hover:text-brand transition-colors leading-tight">
                    {service.title}
                    </h3>
                </Link>
                
                <p className="text-xs md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                  {service.description}
                </p>

                {/* Spacer to push button down if needed, or just standard flow */}
                <div className="mt-auto">
                    {/* Quick View Accordion */}
                    <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100 mb-4 md:mb-6' : 'max-h-0 opacity-0'
                    }`}
                    >
                    <ul className="space-y-2 md:space-y-3 pt-3 md:pt-4 border-t border-gray-100">
                        {service.details?.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                        </li>
                        ))}
                    </ul>
                    <div className="mt-3 md:mt-4 pt-3 md:pt-4">
                        <Link to={`/services/${service.id}`}>
                            <Button variant="outline" size="sm" fullWidth className="group border-gray-200 hover:border-brand hover:bg-brand hover:text-white text-xs md:text-sm py-2 px-2">
                                Full Details
                                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                    </div>

                    <button 
                    onClick={() => toggleService(index)}
                    className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-bold text-brand hover:text-brand-dark transition-colors focus:outline-none"
                    >
                    {isOpen ? 'Close' : 'Quick View'}
                    <ChevronDown 
                        className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                    </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
            <Link to="/services">
                <Button size="lg" className="shadow-lg shadow-brand/20 group">
                    View All Solutions
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};