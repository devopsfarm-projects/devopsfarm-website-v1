'use client';

import React from 'react';
import { Zap, Lock, Code2, LineChart, CheckCircle2 } from 'lucide-react';
import { Button } from './common/button.component';
import Link from 'next/link';

const pillars = [
  {
    title: 'Automation First',
    description: 'We eliminate toil. If it can be done more than once, we write code to automate it.',
    icon: Zap
  },
  {
    title: 'Cloud-Native Expertise',
    description: 'Deep specialization in Kubernetes, Serverless, and modern container orchestration.',
    icon: Code2
  },
  {
    title: 'Security by Design',
    description: 'Security is not an afterthought. It is baked into every pipeline and infrastructure block.',
    icon: Lock
  },
  {
    title: 'Cost-Aware Engineering',
    description: 'We design architectures that scale efficiently without spiraling cloud bills.',
    icon: LineChart
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
                    Why Leading Teams Choose DevOpsFarm
                </h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    We don't just fix problems; we build systems that prevent them. Our methodology is rooted in engineering excellence, not just consulting hours.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                    {pillars.map((pillar, idx) => (
                        <div key={idx}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-brand">
                                    <pillar.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-navy-900">{pillar.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed pl-13">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                <Link href="/about-us">
                    <Button variant="outline" className="gap-2">
                        More About Us
                    </Button>
                </Link>
            </div>

            {/* Right Visual - Abstract Representation of Team */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-accent/10 rounded-3xl transform rotate-3 scale-95"></div>
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Engineering Team" 
                    className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 font-bold uppercase">Client Satisfaction</div>
                            <div className="font-bold text-navy-900">100% Recommended</div>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 italic">"The best engineering partner we've ever worked with."</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};