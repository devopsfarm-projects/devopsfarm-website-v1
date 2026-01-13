import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { servicesData } from '@/constants/mockData/servicesData';
import { Button } from '@/components/common/button.component';
import { 
  ArrowLeft, CheckCircle, ArrowRight, Terminal, Zap, 
  BarChart3, Layers, FileCheck, Cpu, ChevronRight, BookOpen, 
  Database, Layout, Clock, Monitor, ShieldCheck, Settings,
  Workflow, Boxes, Search, Activity, Zap as Lightning,
  GitBranch, MoveRight, Layers as LayersIcon
} from 'lucide-react';
import { CTA } from '@/components/common/CTA.component';

// Helper component for Hyperscaler Logos
const AWSLogo = () => (
    <svg viewBox="0 0 100 60" className="w-10 h-10" fill="currentColor">
        <path d="M79.2,38.1c-2.4,0-4.8,0.2-7.2,0.6c-2.4,0.4-4.8,1-7,1.8l1.8,2.3c1.8-0.7,3.7-1.3,5.6-1.7c1.9-0.4,3.9-0.5,5.9-0.5c1.7,0,3.3,0.2,4.8,0.5s2.9,0.8,4.1,1.5c1.2,0.7,2.2,1.6,2.9,2.7c0.7,1.1,1.1,2.5,1.1,4.1c0,1.3-0.3,2.4-0.8,3.4c-0.5,1-1.2,1.8-2.1,2.5s-2,1.2-3.3,1.6c-1.3,0.4-2.7,0.6-4.2,0.6c-1.5,0-3-0.2-4.4-0.6c-1.4-0.4-2.7-1.1-3.7-2s-1.9-2.1-2.5-3.5c-0.6-1.4-0.9-3.1-0.9-5.1c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9l-4.1-1.3l-0.1,1.3c0,0.5,0,0.9,0,1.4c0,2.6,0.4,4.9,1.3,6.9c0.9,2,2.1,3.7,3.7,5.1c1.6,1.4,3.4,2.4,5.5,3.1c2.1,0.7,4.4,1,6.8,1c2.5,0,4.8-0.3,7-1c2.2-0.7,4.2-1.7,5.9-3.1c1.7-1.4,3-3.1,4-5.1c1-2,1.5-4.3,1.5-6.9c0-2.1-0.5-4-1.4-5.6c-0.9-1.6-2.2-3-3.8-4.1c-1.6-1.1-3.6-1.9-5.7-2.5C84.3,38.4,81.8,38.1,79.2,38.1z"/>
    </svg>
);

const GCPLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 .003c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.286c-3.465 0-6.286-2.82-6.286-6.286s2.821-6.286 6.286-6.286c1.733 0 3.298.707 4.437 1.847l-1.921 1.921c-.636-.636-1.517-1.041-2.516-1.041-2.002 0-3.629 1.627-3.629 3.629s1.627 3.629 3.629 3.629c1.472 0 2.748-.881 3.321-2.143h-3.321v-2.571h5.893c.123.633.214 1.307.214 2.036 0 3.39-2.28 5.821-6.107 5.821z"/>
    </svg>
);

const AzureLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M5.483 21.366L0 18.913l9.083-14.853h5.933L5.483 21.366zM15.417 4.06L9.633 13.91l3.034 1.61L24 16.48V4.06h-8.583z"/>
    </svg>
);

export const SubServiceDetail: React.FC = () => {
  const { serviceId, subServiceId } = useParams<{ serviceId: string; subServiceId: string }>();
  const [activeSection, setActiveSection] = useState('Overview');
  const [scrollProgress, setScrollProgress] = useState(0);

  const parentService = servicesData.find(s => s.id === serviceId);
  const subService = parentService?.fullContent?.subServices?.find(sub => sub.id === subServiceId);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['Overview', 'Targets', 'Advantages', 'Roadmap', 'Toolstack'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (subService) {
      document.title = `${subService.title} - DevOpsFarm Architecture`;
      window.scrollTo(0, 0);
    }
  }, [subService, subServiceId]);

  if (!parentService || !subService) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-extrabold text-navy-900 mb-6">Technical Specification Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-lg">
            We couldn't find the requested module: <span className="font-mono text-sm bg-gray-100 p-1 rounded">{subServiceId}</span>. 
            It may have been moved or you may have followed a broken link.
        </p>
        <Link href={`/services/${serviceId || ''}`}>
          <Button variant="outline">Return to Architecture Hub</Button>
        </Link>
      </div>
    );
  }

  const sections = [
    { label: "Overview", icon: BookOpen },
    { label: "Targets", icon: BarChart3 },
    { label: "Advantages", icon: Zap },
    { label: "Roadmap", icon: Layers },
    { label: "Toolstack", icon: Cpu }
  ];

  // Specific visual theme based on module ID
  const isEKS = subServiceId === 'managed-aws-services';
  const isGKE = subServiceId === 'managed-gcp-services';
  const isAKS = subServiceId === 'managed-azure-services';
  const isServerless = subServiceId === 'serverless-event-driven';
  const isLegacy = subServiceId === 'legacy-modernization';

  const themeColor = isEKS ? 'text-orange-500' : 
                     isGKE ? 'text-blue-500' : 
                     isAKS ? 'text-indigo-600' : 
                     isServerless ? 'text-amber-500' :
                     isLegacy ? 'text-purple-600' : 'text-brand';

  const themeBg = isEKS ? 'bg-orange-500/10' : 
                  isGKE ? 'bg-blue-500/10' : 
                  isAKS ? 'bg-indigo-600/10' : 
                  isServerless ? 'bg-amber-500/10' :
                  isLegacy ? 'bg-purple-600/10' : 'bg-brand/10';

  const themeBorder = isEKS ? 'border-orange-500/20' : 
                      isGKE ? 'border-blue-500/20' : 
                      isAKS ? 'border-indigo-600/20' : 
                      isServerless ? 'border-amber-500/20' :
                      isLegacy ? 'border-purple-600/20' : 'border-brand/20';

  const headerIcon = isServerless ? <Lightning className="w-3 h-3" /> :
                     isLegacy ? <MoveRight className="w-3 h-3" /> : <Terminal className="w-3 h-3" />;

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="fixed top-[64px] left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className={`h-full transition-all duration-150 ${isEKS ? 'bg-orange-500' : isGKE ? 'bg-blue-500' : isAKS ? 'bg-indigo-600' : isServerless ? 'bg-amber-500' : isLegacy ? 'bg-purple-600' : 'bg-brand'}`} 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
          <div className="flex items-center gap-3 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
              <Link href="/services" className="hover:text-brand transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={`/services/${parentService.id}`} className="hover:text-brand transition-colors">{parentService.title}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-navy-900">{subService.title}</span>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${themeBg} ${themeColor} text-[10px] font-black uppercase tracking-widest mb-6 border ${themeBorder}`}>
                      {headerIcon} Technical Architecture
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.1] mb-8">
                      {subService.title}
                  </h1>
                  <p className="text-xl text-slate-600 max-w-2xl font-medium leading-relaxed">
                      {subService.description}
                  </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4 lg:mt-4">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between group hover:border-brand transition-all">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${themeColor} group-hover:bg-brand group-hover:text-white transition-all">
                              <Clock className="w-5 h-5" />
                          </div>
                          <div>
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reading Time</div>
                              <div className="text-sm font-black text-navy-900 uppercase">12 Min Deep-Dive</div>
                          </div>
                      </div>
                  </div>
                  <div className="bg-navy-900 p-6 rounded-2xl shadow-xl flex items-center justify-between group cursor-pointer hover:bg-navy-800 transition-all">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-light">
                              <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                              <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Compliance</div>
                              <div className="text-sm font-black text-white uppercase">Enterprise Ready</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
                <div id="Overview" className="mb-20 scroll-mt-32">
                    <h2 className="text-3xl font-black text-navy-900 mb-10 flex items-center gap-4">
                        <span className={`w-1.5 h-8 ${isEKS ? 'bg-orange-500' : isGKE ? 'bg-blue-500' : isAKS ? 'bg-indigo-600' : isServerless ? 'bg-amber-500' : isLegacy ? 'bg-purple-600' : 'bg-brand'} rounded-full`}></span>
                        Architectural Abstract
                    </h2>
                    <div 
                        className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed prose-strong:text-navy-900 prose-strong:font-black prose-headings:text-navy-900 prose-headings:font-black"
                        dangerouslySetInnerHTML={{ __html: subService.fullContent?.longDescription || '' }}
                    />
                </div>

                {subService.fullContent?.kpis && (
                    <div id="Targets" className="mb-24 scroll-mt-32">
                        <div className="bg-white p-12 md:p-20 rounded-[3rem] text-navy-900 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                            <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                            <div className="relative z-10">
                                <h3 className={`text-brand font-black text-xs uppercase tracking-[0.4em] mb-16 text-center`}>Objective Performance Targets</h3>
                                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                                    {subService.fullContent.kpis.map((kpi, idx) => (
                                        <div key={idx} className="text-center group">
                                            <div className="text-5xl md:text-6xl font-black text-navy-900 mb-6 group-hover:scale-105 transition-transform duration-500">{kpi.value}</div>
                                            <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">{kpi.label}</div>
                                            <div className={`w-10 h-1 ${isEKS ? 'bg-orange-500' : isGKE ? 'bg-blue-500' : isAKS ? 'bg-indigo-600' : isServerless ? 'bg-amber-500' : isLegacy ? 'bg-purple-600' : 'bg-brand'} mx-auto rounded-full group-hover:w-16 transition-all duration-500`}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div id="Advantages" className="mb-24 scroll-mt-32">
                    <h3 className="text-3xl font-black text-navy-900 mb-12 tracking-tight">Strategic Advantages</h3>
                    <div className="space-y-6">
                        {subService.fullContent?.benefits.map((b, i) => (
                            <div key={i} className="flex gap-8 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-brand/30 transition-all duration-500 group">
                                <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-all border border-slate-100`}>
                                    <Zap className={`w-8 h-8 ${themeColor} group-hover:text-white`} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-navy-900 mb-3 leading-tight tracking-tight">{b.title}</h4>
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Roadmap" className="mb-24 scroll-mt-32">
                    <div className="flex justify-between items-end mb-16">
                        <h3 className="text-3xl font-black text-navy-900 tracking-tight">Deployment Roadmap</h3>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pb-1 border-b border-slate-200">Framework v4.12</div>
                    </div>
                    <div className="relative space-y-20">
                        <div className="absolute top-0 left-[27px] w-1 h-full bg-slate-100 -z-10"></div>
                        {subService.fullContent?.process?.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-12 relative group">
                                <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-xl group-hover:bg-navy-900 border-2 border-slate-100 group-hover:border-navy-900 shrink-0 transition-all duration-300`}>
                                    <span className="text-sm font-black text-navy-900 group-hover:text-brand-light">{idx + 1}</span>
                                </div>
                                <div className="pt-2">
                                    <h4 className="font-black text-navy-900 mb-4 text-2xl tracking-tight">{step.title}</h4>
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Toolstack" className="mb-24 scroll-mt-32">
                    <div className="bg-navy-900 rounded-[3rem] p-12 md:p-16 border border-navy-800 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-black text-white mb-12 flex items-center gap-3">
                                <Cpu className="w-6 h-6 text-brand-light" /> Enterprise Toolchain
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {subService.fullContent?.techStack?.map((tech, idx) => (
                                    <div key={idx} className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 group hover:bg-white hover:border-brand transition-all cursor-default">
                                        <div className={`w-2 h-2 rounded-full ${isEKS ? 'bg-orange-500' : isGKE ? 'bg-blue-500' : isAKS ? 'bg-indigo-600' : isServerless ? 'bg-amber-500' : isLegacy ? 'bg-purple-600' : 'bg-brand'} group-hover:animate-ping`}></div>
                                        <span className="text-sm font-bold text-slate-300 group-hover:text-navy-900">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-12 md:p-16 bg-brand/5 rounded-[3.5rem] border border-brand/10 relative overflow-hidden group mb-20">
                    <div className="absolute -top-12 -right-12 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                        <Settings className="w-64 h-64 text-brand" />
                    </div>
                    <div className="relative z-10 max-w-2xl">
                        <h3 className="text-3xl font-black text-navy-900 mb-6 tracking-tight">Engineering Precision</h3>
                        <p className="text-slate-700 text-lg leading-relaxed font-medium mb-10">
                            Our {subService.title} solutions are delivered as a <strong>Managed Engineering Capability</strong>. We don't just provision infra; we ship the pipelines, policies, and patterns that make your organization elite.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-navy-900 text-white hover:bg-brand border-none px-10 py-4 shadow-xl shadow-navy-900/10">
                                Speak to an Architect
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
                 <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hidden lg:block sticky top-32">
                    <h3 className="font-black text-navy-900 mb-10 text-[11px] uppercase tracking-[0.4em]">
                        Module Contents
                    </h3>
                    <div className="space-y-4">
                        {sections.map((nav, i) => {
                            const isActive = activeSection === nav.label;
                            return (
                                <a 
                                    key={i} 
                                    href={`#${nav.label}`}
                                    className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group relative
                                        ${isActive 
                                            ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 scale-105' 
                                            : 'hover:bg-slate-100 hover:scale-102 border border-transparent'
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const el = document.getElementById(nav.label);
                                        el?.scrollIntoView({ behavior: 'smooth' });
                                        setActiveSection(nav.label);
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <nav.icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? themeColor : 'text-slate-400 group-hover:text-brand/60'}`} />
                                        <span className={`text-sm font-black transition-colors duration-300 ${isActive ? 'text-navy-900' : 'text-slate-400 group-hover:text-navy-900'}`}>
                                            {nav.label}
                                        </span>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-all duration-300 ${isActive ? `${themeColor} translate-x-0 opacity-100` : 'text-slate-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                                </a>
                            );
                        })}
                    </div>
                    
                    <div className="h-px bg-slate-200 my-12"></div>

                    <h3 className="font-black text-navy-900 mb-8 text-[11px] uppercase tracking-[0.4em]">
                        Related Spec
                    </h3>
                    <ul className="space-y-3">
                        {parentService.fullContent?.subServices?.filter(s => s.id !== subServiceId).slice(0, 4).map((s, idx) => (
                             <li key={idx}>
                                <Link href={`/services/${parentService.id}/${s.id}`} className="flex items-center justify-between text-slate-500 hover:text-brand transition-all group p-4 rounded-xl hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100">
                                    <span className="font-black text-xs">{s.title}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                                </Link>
                             </li>
                        ))}
                    </ul>

                    <div className="mt-12">
                        <Link href="/contact">
                            <Button fullWidth className="bg-navy-900 text-white hover:bg-brand border-none text-[11px] uppercase tracking-[0.3em] font-black py-5 shadow-2xl shadow-navy-900/20">
                                Book Consult
                            </Button>
                        </Link>
                    </div>
                 </div>

                 <div className="bg-brand text-white rounded-[2.5rem] p-12 lg:hidden shadow-2xl shadow-brand/40 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Terminal className="w-48 h-48" /></div>
                    <h3 className="text-3xl font-black mb-6 leading-tight relative z-10">Ready to Scale?</h3>
                    <p className="text-white/80 mb-10 text-lg leading-relaxed relative z-10">
                        Schedule an architectural assessment for your production environment today.
                    </p>
                    <Link href="/contact" className="relative z-10">
                        <Button fullWidth className="bg-white text-brand hover:bg-slate-50 border-none font-black text-sm uppercase tracking-widest py-5 shadow-xl">
                            Request Audit
                        </Button>
                    </Link>
                 </div>
            </div>

        </div>
      </div>

      <CTA />
    </div>
  );
};