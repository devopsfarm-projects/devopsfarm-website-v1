'use client';

import { JSX, useEffect } from 'react';
import { Button } from '@/components/common/button.component';
import Link from 'next/link';
import { 
  ArrowRight, Landmark, ShieldCheck, Globe, Database, 
  Layers, Lock, CheckCircle2, Zap, Server, Activity,
  Cpu, Building2, Terminal, FileCheck, Search
} from 'lucide-react';
import { CTA } from '@/components/common/CTA.component';
import { Testimonials } from '@/components/testimonials.component';

export default function BankingIndustryPage(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Banking & Capital Markets Modernization - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white font-sans text-navy-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-indigo-50 via-white to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900 text-white text-xs font-bold uppercase tracking-wider mb-6">
                        <Landmark className="w-3 h-3 text-indigo-300" />
                        Industry Focus: Banking
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-navy-900 mb-6 leading-[1.15]">
                        Modernizing the <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Core of Finance.</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Navigate the complexity of legacy core banking modernization. We help Tier 1 banks and capital market firms decouple monoliths, ensure data sovereignty, and achieve sub-second settlement reliability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="shadow-xl shadow-indigo-600/20 group bg-indigo-900 hover:bg-indigo-950 border-none">
                                Consult an Enterprise Architect
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button variant="outline" size="lg" className="border-gray-300 text-navy-900 hover:bg-gray-50">
                                View Banking Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
                
                {/* Visual - Secure Digital Bank Layer */}
                <div className="relative hidden lg:block">
                    <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-all duration-700">
                         <div className="bg-navy-900 rounded-2xl p-8 text-white aspect-[16/10] flex flex-col justify-between overflow-hidden relative">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
                             <div className="flex justify-between items-center mb-8">
                                 <div className="flex gap-2">
                                     <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                                         <ShieldCheck className="w-5 h-5 text-white" />
                                     </div>
                                     <div className="text-sm font-bold">Secure Core v4.0</div>
                                 </div>
                                 <div className="px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold uppercase rounded-full">Active-Active Sync</div>
                             </div>
                             
                             <div className="space-y-4">
                                 <div className="h-2 w-full bg-navy-800 rounded-full overflow-hidden">
                                     <div className="h-full bg-indigo-500 w-[85%] animate-pulse"></div>
                                 </div>
                                 <div className="grid grid-cols-3 gap-3">
                                     {[1,2,3].map(i => (
                                         <div key={i} className="h-12 bg-navy-800 rounded-lg border border-navy-700 flex items-center justify-center">
                                             <Database className="w-4 h-4 text-indigo-400 opacity-50" />
                                         </div>
                                     ))}
                                 </div>
                             </div>

                             <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                 <span>SWIFT / ISO 20022</span>
                                 <span>Basel III Ready</span>
                             </div>
                         </div>
                    </div>
                    {/* Decorative backdrop */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-indigo-100 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. STRATEGIC PILLARS */}
      <section className="py-20 bg-slate-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Engineering for Sovereign Stakes</h2>
                  <p className="text-gray-600">
                    Modernizing a bank isn't just about code—it's about managing extreme risk while unlocking speed.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { icon: Layers, title: "Mainframe Strangulation", desc: "Decompose legacy monoliths using the Strangler Fig pattern with sub-ms CDC sync." },
                      { icon: Globe, title: "Data Sovereignty", desc: "Multi-region architectures that strictly respect cross-border data residency laws." },
                      { icon: Lock, title: "Zero Trust Governance", desc: "Automated 'Compliance-as-Code' enforcing PCI-DSS and PSD2 standards 24/7." },
                      { icon: Zap, title: "Settlement Speed", desc: "High-performance messaging queues optimized for ISO 20022 real-time payments." }
                  ].map((stat, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-300 transition-colors text-center group">
                          <div className="w-14 h-14 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                              <stat.icon className="w-7 h-7" />
                          </div>
                          <h3 className="font-bold text-navy-900 mb-3">{stat.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                              {stat.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. TECHNICAL DEEP DIVE: COEXISTENCE */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 mb-4 text-indigo-600 font-bold uppercase tracking-widest text-xs">
                        <Terminal className="w-4 h-4" />
                        Modernization Strategy
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                        Legacy & Cloud Coexistence
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        The biggest barrier to banking innovation is the data gravity of the legacy core. We build the <strong>Integration Bridge</strong> that allows modern microservices to work in lock-step with mainframes, ensuring a safe, staged migration.
                    </p>
                    
                    <div className="space-y-4">
                        {[
                            "Real-time Change Data Capture (CDC)",
                            "Mainframe-to-Cloud API Proxies",
                            "Event-Driven Ledger Reconciliation",
                            "Hybrid Cloud Private Interconnects"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                <span className="text-navy-800 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className="bg-navy-900 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden text-white border border-navy-800">
                        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                        <div className="relative z-10">
                            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-indigo-400" />
                                Strangled Core Architecture
                            </h4>
                            
                            <div className="flex flex-col gap-6">
                                {/* Top: API Consumer */}
                                <div className="flex justify-center">
                                    <div className="px-6 py-2 bg-indigo-500 rounded-full text-xs font-bold shadow-lg">New Mobile App / API</div>
                                </div>
                                
                                {/* Middle: Bridge */}
                                <div className="grid grid-cols-12 gap-2 items-center">
                                    <div className="col-span-5 bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                                        <div className="text-[10px] text-gray-400 uppercase mb-2">Modern Microservices</div>
                                        <div className="text-xs font-bold text-indigo-300">Spring Boot / Go</div>
                                    </div>
                                    <div className="col-span-2 flex justify-center">
                                        <ArrowRight className="w-6 h-6 text-gray-500" />
                                    </div>
                                    <div className="col-span-5 bg-white/5 border border-white/10 p-4 rounded-xl text-center opacity-40">
                                        <div className="text-[10px] text-gray-400 uppercase mb-2">Legacy Core</div>
                                        <div className="text-xs font-bold">AS/400 / COBOL</div>
                                    </div>
                                </div>

                                {/* Bottom: Data Bridge */}
                                <div className="bg-indigo-900/50 border border-indigo-500/30 p-4 rounded-xl">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-bold text-indigo-400 uppercase">Kafka Connect / CDC</span>
                                        <span className="text-[10px] text-gray-500">Sync Latency: &lt; 50ms</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-1 flex-1 bg-indigo-500/40 rounded"></div>
                                        <div className="h-1 flex-1 bg-indigo-500/40 rounded"></div>
                                        <div className="h-1 flex-1 bg-indigo-500/40 rounded"></div>
                                        <div className="h-1 flex-1 bg-indigo-500/40 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* 4. COMPLIANCE & SECURITY SECTION */}
      <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" >Regulated Speed</h2>
                  <p className="text-gray-400 text-lg">
                      We automate the compliance burden so your engineering teams can release daily, not quarterly, while maintaining a perfect audit trail.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800 hover:border-indigo-500/50 transition-colors group">
                      <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                          <FileCheck className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">ISO 20022 Readiness</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Infrastructure optimized for data-rich financial messaging, ensuring your payment rails are ready for the new global standard.
                      </p>
                  </div>
                  <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800 hover:border-indigo-500/50 transition-colors group">
                      <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                          <Lock className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Secure Enclaves (HSM)</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Managed Hardware Security Modules and secure enclaves for key management and transaction signing in regulated clouds.
                      </p>
                  </div>
                  <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800 hover:border-indigo-500/50 transition-colors group">
                      <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                          <Search className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Continuous Auditing</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Replace annual manual audits with real-time dashboards showing your compliance posture against SOC2 and PCI-DSS.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. SMALL INTERSTITIAL CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 mb-20 relative z-20">
  <div className="bg-gradient-to-r from-indigo-700 to-blue-800 rounded-3xl px-10 py-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">

    {/* Subtle dotted pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none"></div>

    {/* Left Content */}
    <div className="relative z-10 flex items-center gap-6">
      <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-4">
        <Building2 className="w-9 h-9 text-white" />
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
          Modernizing a Core System?
        </h3>
        <p className="text-indigo-100 text-base md:text-lg">
          Download our "Banking Strangler Fig" architecture playbook.
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <Link
      href="/contact"
      className="relative z-10 inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 whitespace-nowrap"
    >
      Get Playbook
      <ArrowRight className="ml-2 w-4 h-4" />
    </Link>
  </div>
</section>

      {/* 6. Testimonials Reuse */}
      <Testimonials />

      {/* 7. CTA */}
      <CTA />

    </div>
  );
};