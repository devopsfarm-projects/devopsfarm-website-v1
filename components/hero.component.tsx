'use client';

import { useEffect, useState } from 'react';
import { Check, ArrowRight, Play, Terminal } from 'lucide-react';
import { Button } from './common/button.component';
import Link from 'next/link';

const heroPoints = [
  "Production-Grade Kubernetes",
  "Zero-Trust Security Frameworks",
  "Self-Healing Infrastructure",
  "Automated Compliance Pipelines",
  "Cloud Cost Intelligence (FinOps)",
  "24/7 SRE & Incident Response",
  "Multi-Cloud Architecture",
  "Legacy App Modernization"
];

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Add passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      
      {/* Dynamic Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-bg/60 via-white to-white z-0 pointer-events-none"></div>
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Copy & Points */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 text-white text-xs font-bold uppercase tracking-wider mb-8 shadow-lg shadow-navy-900/20 hover:scale-105 transition-transform cursor-default bg-black">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-darkviolet-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand "></span>
              </span>
              Architecting the Future Cloud Infrastructure
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-navy-900 mb-8 leading-[1.05]">
              Cloud Infrastructure <br className="hidden lg:block"/>
              <span className="text-brand bg-clip-text bg-gradient-to-r from-brand to-accent 
                ">Reimagined.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Automated, self-healing cloud infrastructure engineered for high-growth companies and enterprises.
              Faster releases. Higher reliability. Predictable cloud costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="shadow-xl shadow-brand/25 group px-8 py-4 text-lg bg-violet">
                  Start Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            <Link href="/case-studies">
                  <Button variant="outline" size="lg" className="border-navy-900  hover:bg-navy-900  px-8 py-4 text-lg bg-white/25">
                    View Case Studies
                  </Button>
              </Link>
            </div>

            {/* Feature Grid - Unique Style */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {heroPoints.slice(0, 6).map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                    <Check className="w-3 h-3 text-brand group-hover:text-white transition-colors" strokeWidth={3} />
                  </div>
                  <span className="text-gray-600 font-medium text-sm group-hover:text-navy-900 transition-colors">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Visuals */}
          <div className="relative hidden lg:block h-[600px] w-full perspective-[2000px]">
            {/* Abstract Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl animate-pulse-slow"></div>

            {/* Main Interactive Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-navy-900 rounded-2xl shadow-2xl border border-navy-800 p-6 transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 bg-black">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono text-gray-500">k8s-prod-cluster</div>
                </div>

                {/* Content */}
                <div className="space-y-4 font-mono text-sm">
                    <div className="flex justify-between text-gray-400">
                        <span> kubectl get pods</span>
                        <span className="text-green-400">Running</span>
                    </div>
                    <div className="bg-navy-950 rounded-lg p-4 border border-white/5 space-y-2">
                         <div className="flex justify-between items-center">
                            <span className="text-brand-light">api-gateway-v2</span>
                            <span className="text-green-500 text-xs px-2 py-0.5 bg-green-500/10 rounded">Healthy</span>
                         </div>
                         <div className="w-full bg-navy-800 rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full w-[92%]"></div>
                         </div>
                         <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>CPU: 45%</span>
                            <span>Mem: 2.1GB</span>
                         </div>
                    </div>

                    <div className="bg-navy-950 rounded-lg p-4 border border-white/5 space-y-2">
                         <div className="flex justify-between items-center">
                            <span className="text-accent-light">payment-processor</span>
                            <span className="text-blue-400 text-xs px-2 py-0.5 bg-blue-500/10 rounded">Scaling</span>
                         </div>
                         <div className="w-full bg-navy-800 rounded-full h-1.5">
                            <div className="bg-accent h-1.5 rounded-full w-[60%] animate-pulse"></div>
                         </div>
                         <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Replicas: 3 → 5 </span>
                            <span>Traffic: High</span>
                         </div>
                    </div>
                </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute top-20 right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-float" >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 font-bold uppercase">Deployment</div>
                        <div className="text-navy-900 font-bold">Success (14ms)</div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-40 left-0 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Terminal className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 font-bold uppercase">Infrastructure</div>
                        <div className="text-navy-900 font-bold">Immutable</div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};