import React, { useEffect, useState } from 'react';
import { servicesData } from '@/constants/mockData/servicesData';
import { Button } from '@/components/common/button.component';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PhoneCall, Layers, Code2, Users, ShieldCheck, Zap, ChevronDown, LineChart, Clock, XCircle, CheckCircle, HelpCircle } from 'lucide-react';
import { CaseStudies } from '@/';
import { CTA } from '@/components/common/CTA.component';

export const ServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - DevOpsFarm";
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const commonFaqs = [
    { q: "Do you support on-premise infrastructure?", a: "Yes, we have extensive experience with hybrid clouds, OpenShift, and bare-metal Kubernetes clusters in private data centers." },
    { q: "What is your engagement model?", a: "We offer both project-based fixed bids for migrations/audits and monthly retainers for ongoing managed DevOps and SRE support." },
    { q: "How quickly can you start?", a: "Typically, we can deploy a Principal Architect for an initial audit within 48 hours of contract signing." },
    { q: "Do you work with startups?", a: "Absolutely. We have specific 'Day 0' packages for startups to build a solid, scalable foundation for their MVP without over-engineering." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
        
        {/* 1. Enhanced Hero Section */}
        <div className="bg-navy-900 text-white pt-24 pb-32 relative overflow-hidden rounded-b-[3rem] shadow-2xl z-10">
             {/* Abstract BG */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                 <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand rounded-full blur-3xl mix-blend-screen"></div>
                 <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[100px] mix-blend-screen"></div>
                 <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-500 rounded-full blur-[80px] mix-blend-screen"></div>
             </div>
             
             {/* Grid Pattern */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

             <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-light text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                    <Layers className="w-3 h-3" />
                    Engineering Excellence
                 </div>
                 <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                     Beyond Simple <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-white to-accent-light">Cloud Consulting</span>
                 </h1>
                 <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                     We don't just advise; we build. From platform engineering to FinOps, we act as an extension of your team to ship faster, securely, and at scale.
                 </p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact">
                        <Button size="lg" className="px-10 py-4 text-lg bg-brand hover:bg-brand-dark shadow-[0_0_30px_rgba(124,58,237,0.3)] border-none">
                            Book Technical Audit
                        </Button>
                    </Link>
                    <Link href="#process">
                        <Button variant="outline" size="lg" className="px-10 py-4 text-lg border-gray-600 text-white hover:bg-white/10 hover:border-white">
                            How We Work
                        </Button>
                    </Link>
                 </div>
             </div>
        </div>

        {/* 2. Stats Strip */}
        <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20 mb-24">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: "Certified Architects", val: "50+" },
                    { label: "Cloud Spend Managed", val: "$10M+" },
                    { label: "Projects Delivered", val: "500+" },
                    { label: "Client Retention", val: "98%" }
                ].map((stat, idx) => (
                    <div key={idx} className="text-center border-r last:border-r-0 border-gray-100">
                        <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-1">{stat.val}</div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* 3. Services List */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-3">Our Capabilities</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900">Everything you need to scale</h3>
            </div>

            <div className="grid gap-24">
                {servicesData.map((service, index) => (
                    <div key={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        
                        {/* Visual/Card Block */}
                        <div className="w-full lg:w-1/2">
                            <Link href={`/services/${service.id}`} className="block group">
                                <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 shadow-xl shadow-gray-200/50 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-brand/30 hover:-translate-y-2">
                                    
                                    {/* Abstract Header Background */}
                                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors"></div>

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-300">
                                                <service.icon className="w-8 h-8 text-navy-900 group-hover:text-white transition-colors" />
                                            </div>
                                            <div className="px-3 py-1 bg-navy-50 text-navy-600 rounded-full text-xs font-bold uppercase tracking-wide border border-navy-100">
                                                Service 0{index + 1}
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand transition-colors">{service.title}</h3>
                                        <p className="text-gray-600 mb-8 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Capabilities Tags */}
                                        <div className="space-y-4 mb-8">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Capabilities</p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.details?.slice(0, 5).map((detail, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md border border-slate-200">
                                                        {detail}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center text-brand font-bold group-hover:translate-x-2 transition-transform">
                                            View Solution
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Text Block */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">{service.title}</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed border-l-4 border-brand/20 pl-6">
                                {service.fullContent?.longDescription.substring(0, 240)}...
                            </p>
                            
                            {/* Problem vs Solution Micro-Table */}
                            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                                <h4 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-amber-500" /> 
                                    Common Challenges Solved
                                </h4>
                                <ul className="space-y-3">
                                    {service.fullContent?.benefits.slice(0, 3).map((b, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <XCircle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{b.desc.split('.')[0]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href={`/services/${service.id}`}>
                                <Button className="group gap-2">
                                    Explore {service.title}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* 4. Vibrant CTA - Interstitial */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-24">
            <div className="bg-gradient-to-r from-brand via-purple-600 to-accent rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute -right-32 -top-32 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-start gap-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20 shadow-lg">
                        <PhoneCall className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Unsure where to start?</h3>
                        <p className="text-blue-50 text-lg max-w-lg">
                            Get a free 30-min architectural audit with a Principal Engineer. No sales fluff, just technical strategy.
                        </p>
                    </div>
                </div>
                <div className="relative z-10 w-full md:w-auto flex-shrink-0">
                     <Link href="/contact">
                        <Button size="lg" className="w-full md:w-auto bg-white text-brand hover:bg-gray-50 border-none shadow-xl font-bold text-lg px-8">
                            Schedule Audit
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>

        {/* 5. Process Section */}
        <div id="process" className="py-20 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-3">Our Framework</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-navy-900">From Chaos to Clarity</h3>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { title: "Discovery", icon: Users, desc: "We audit your current stack, identify bottlenecks, and define success metrics." },
                        { title: "Strategy", icon: Layers, desc: "We design a cloud-native architecture roadmap aligned with your business goals." },
                        { title: "Execution", icon: Code2, desc: "We implement Infrastructure as Code, CI/CD pipelines, and security controls." },
                        { title: "Handover", icon: CheckCircle2, desc: "We train your team, provide documentation, and support Day-2 operations." }
                    ].map((step, idx) => (
                        <div key={idx} className="relative group">
                            <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mb-6 border border-navy-100 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                                <step.icon className="w-8 h-8 text-navy-900 group-hover:text-white" />
                            </div>
                            <div className="absolute top-8 left-16 w-[calc(100%-4rem)] h-0.5 bg-gray-100 hidden md:block group-last:hidden"></div>
                            
                            <h4 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
                                <span className="text-gray-300 font-mono text-sm">0{idx + 1}</span>
                                {step.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* 6. Comparison Section */}
        <div className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Why Partner with DevOpsFarm?</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Hiring a full-time DevOps engineer is expensive, risky, and limited by one person's skillset. Partnering with us gives you an entire department of experts for less than the cost of one senior hire.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Access to Principal Architects & Security Experts",
                                "24/7 Coverage included (vs 9-5 employee)",
                                "No recruitment fees or equity grants",
                                "Immediate start - no 3 month ramp up"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand" />
                                    <span className="text-navy-900 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                        <div className="grid grid-cols-2 text-center border-b border-gray-100">
                            <div className="p-4 bg-gray-50 font-bold text-gray-500">In-House Hire</div>
                            <div className="p-4 bg-brand/5 font-bold text-brand">DevOpsFarm</div>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { label: "Cost", left: "$180k+ / year", right: "Flexible Retainer" },
                                { label: "Time to Value", left: "3-6 Months", right: "Day 1" },
                                { label: "Skillset", left: "Limited to 1 person", right: "Full Tech Stack Team" },
                                { label: "Availability", left: "Sick days / PTO", right: "Always On SLA" },
                                { label: "Tools Cost", left: "Extra Budget", right: "Included in Service" }
                            ].map((row, idx) => (
                                <div key={idx} className="grid grid-cols-2 text-center text-sm">
                                    <div className="p-4 text-gray-600 border-r border-gray-100 relative">
                                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 uppercase font-bold lg:hidden">{row.label}</span>
                                        {row.left}
                                    </div>
                                    <div className="p-4 font-bold text-navy-900 bg-brand/[0.02]">
                                        {row.right}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 7. General FAQs */}
        <div className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {commonFaqs.map((faq, idx) => {
                        const isOpen = openFaq === idx;
                        return (
                            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                                <button 
                                    onClick={() => toggleFaq(idx)}
                                    className={`w-full flex items-center justify-between p-6 text-left font-bold text-navy-900 hover:bg-gray-50 transition-colors ${isOpen ? 'bg-gray-50' : ''}`}
                                >
                                    <span className="flex items-center gap-3">
                                        <HelpCircle className="w-5 h-5 text-brand" />
                                        {faq.q}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

        {/* Case Studies Section on Services Page */}
        <CaseStudies />

        {/* New Dark CTA */}
        <CTA />
    </div>
  );
};