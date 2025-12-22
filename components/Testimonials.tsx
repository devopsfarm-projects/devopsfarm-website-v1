import React, { useRef } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "DevOpsFarm transformed our deployment process. We went from releasing once a month to multiple times a day.",
    author: "Sarah Jenkins",
    role: "CTO, FinFlow",
  },
  {
    quote: "Their expertise in Kubernetes and cost optimization saved us 40% on our annual AWS bill. Incredible ROI.",
    author: "Marcus Chen",
    role: "VP Engineering, CloudScale",
  },
  {
    quote: "Security was our biggest bottleneck. DevOpsFarm implemented a DevSecOps pipeline that automated our compliance.",
    author: "David Ross",
    role: "Head of Infrastructure, MedSecure",
  },
  {
    quote: "The best partner we have worked with. Their engineers became a true extension of our team.",
    author: "Elena Rodriguez",
    role: "Director of Platform, TechGiant",
  },
  {
    quote: "Zero downtime migration for our payments infrastructure. I couldn't sleep before, now I sleep like a baby.",
    author: "James Wilson",
    role: "VP of Engineering, PayFaster",
  }
];

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstCard = container.querySelector('div > div'); // Select the first card wrapper
      
      if (firstCard) {
        // Calculate the width of the card plus the gap (24px is gap-6)
        const scrollAmount = (firstCard as HTMLElement).offsetWidth + 24; 
        
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Trusted by Engineering Leaders</h2>
                <p className="text-gray-600">See what our partners have to say about their journey to cloud excellence.</p>
            </div>
            
            {/* Desktop Navigation Controls - Minimal */}
            <div className="hidden md:flex gap-4">
                <button 
                    onClick={() => scroll('left')}
                    className="group p-2 rounded-full text-gray-400 hover:text-navy-900 hover:bg-gray-100 transition-all focus:outline-none"
                    aria-label="Scroll left"
                >
                    <ArrowLeft className="w-6 h-6 stroke-[1.5] group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button 
                    onClick={() => scroll('right')}
                    className="group p-2 rounded-full text-gray-400 hover:text-navy-900 hover:bg-gray-100 transition-all focus:outline-none"
                    aria-label="Scroll right"
                >
                    <ArrowRight className="w-6 h-6 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>
        </div>

        {/* Scrollable Container */}
        <div className="relative group">
             {/* Fade edges for hint of more content (Mobile only) */}
             <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 md:hidden pointer-events-none"></div>

            <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide"
                style={{ 
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch' 
                }}
            >
                {/* Hide scrollbar for Chrome/Safari/Opera */}
                <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                {testimonials.map((t, idx) => (
                    <div 
                        key={idx} 
                        className="flex-none w-[85vw] md:w-[400px] snap-start"
                    >
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand/20 transition-all duration-300 h-full flex flex-col justify-between group cursor-default">
                            <div>
                                <Quote className="w-10 h-10 text-brand/20 mb-6 group-hover:text-brand transition-colors" />
                                <p className="text-gray-600 mb-6 italic leading-relaxed text-lg">"{t.quote}"</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-navy-900">{t.author}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Spacer for right side padding on mobile to ensure last card can be fully viewed */}
                <div className="w-1 flex-none md:hidden"></div>
            </div>
        </div>
      </div>
    </section>
  );
};