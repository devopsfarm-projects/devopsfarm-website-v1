import React, { useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Lock, Globe, Database, 
  CreditCard, Activity, Server, FileCheck, 
  Key, Wallet, PieChart, Landmark, Bitcoin, TrendingUp
} from 'lucide-react';
import { CTA } from './CTA';
import { Testimonials } from './Testimonials';

export const FintechIndustryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FinTech Cloud Solutions - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white font-sans text-navy-900">
      
      {/* 1. HERO SECTION1 */}
      <section className="relative py-20 lg:py-28 bg-navy-900 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-emerald-900/20 via-navy-900 to-navy-900 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <Landmark className="w-3 h-3" />
                        Industry Focus: FinTech & Banking
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-[1.1]">
                        The Infrastructure of <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Modern Money.</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                        We engineer the zero-trust, ultra-low latency platforms that power the next generation of payments, digital banking, and algorithmic trading.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-none shadow-lg shadow-emerald-500/20 font-bold px-8">
                                Consult a Security Architect
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link to="/case-studies">
                            <Button variant="outline" size="lg" className="text-white border-gray-600 hover:bg-white/5 hover:border-white">
                                View FinTech Case Studies
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-400">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>PCI-DSS Level 1</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>SOC2 Type II</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>ISO 27001</span>
                        </div>
                    </div>
                </div>
                
                {/* Visual - Secure Vault/Dashboard Concept */}
                <div className="relative hidden lg:block perspective-[1000px]">
                    <div className="relative z-10 bg-gradient-to-br from-gray-900 to-navy-950 p-1 rounded-2xl shadow-2xl border border-gray-700 transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
                         <div className="bg-navy-900 rounded-xl overflow-hidden relative">
                             {/* Mock UI Header */}
                             <div className="h-10 bg-navy-950 border-b border-gray-800 flex items-center px-4 gap-2">
                                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                 <div className="ml-auto text-xs text-gray-500 font-mono">secure-enclave-prod</div>
                             </div>
                             
                             {/* Mock UI Body */}
                             <div className="p-6 space-y-6">
                                 <div className="flex justify-between items-end">
                                     <div>
                                         <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Total Transaction Vol</p>
                                         <p className="text-3xl font-mono text-white font-bold">$4,291,000,402</p>
                                     </div>
                                     <div className="text-emerald-400 text-sm font-bold flex items-center gap-1">
                                         <Activity className="w-4 h-4" /> Live
                                     </div>
                                 </div>
                                 
                                 {/* Graph Placeholder */}
                                 <div className="h-32 w-full flex items-end gap-1">
                                     {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95, 60, 70, 80, 65, 75, 90, 100].map((h, i) => (
                                         <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm hover:bg-emerald-500 transition-colors" style={{ height: `${h}%` }}></div>
                                     ))}
                                 </div>

                                 <div className="grid grid-cols-2 gap-4">
                                     <div className="bg-navy-950 p-3 rounded-lg border border-gray-800">
                                         <p className="text-xs text-gray-500 mb-1">Latency (p99)</p>
                                         <p className="text-white font-mono font-bold">14ms</p>
                                     </div>
                                     <div className="bg-navy-950 p-3 rounded-lg border border-gray-800">
                                         <p className="text-xs text-gray-500 mb-1">Fraud Checks</p>
                                         <p className="text-white font-mono font-bold">0.02s</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. VERTICALS GRID */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Tailored for Finance</h2>
                  <p className="text-gray-600">
                    Different sectors, specific challenges. We architect for the unique regulatory and performance needs of your vertical.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { 
                          title: "NeoBanks & Digital Wallets", 
                          icon: Wallet,
                          desc: "Rapidly scale user bases with elastic microservices while maintaining ledger integrity.",
                          color: "text-blue-600",
                          bg: "bg-blue-50"
                      },
                      { 
                          title: "Payments & Gateways", 
                          icon: CreditCard,
                          desc: "Achieve 99.999% availability with Active-Active multi-region architectures.",
                          color: "text-emerald-600",
                          bg: "bg-emerald-50"
                      },
                      { 
                          title: "Crypto & Web3", 
                          icon: Bitcoin,
                          desc: "Secure node infrastructure, MPC key management, and on-chain indexing at scale.",
                          color: "text-purple-600",
                          bg: "bg-purple-50"
                      },
                      { 
                          title: "High-Frequency Trading", 
                          icon: Activity,
                          desc: "Ultra-low latency networking (kernel bypass) and FPGA-accelerated compute.",
                          color: "text-orange-600",
                          bg: "bg-orange-50"
                      }
                  ].map((item, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                          <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                              <item.icon className={`w-7 h-7 ${item.color}`} />
                          </div>
                          <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                              {item.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. CORE SOLUTIONS */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                {/* Content Side */}
                <div className="lg:col-span-7">
                    <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-12">
                        Financial Infrastructure <br/>
                        <span className="text-brand">Reimagined for Resilience</span>
                    </h2>
                    
                    <div className="space-y-6">
                        {[
                            { 
                                title: "Automated Compliance Engines", 
                                desc: "Stop manual evidence gathering. We implement Compliance-as-Code to ensure your infrastructure meets PCI-DSS, SOC2, and ISO 27001 standards continuously.",
                                icon: FileCheck
                            },
                            { 
                                title: "Zero Trust Architecture", 
                                desc: "Assume breach. We implement mTLS, identity-aware proxies, and micro-segmentation so that lateral movement is impossible.",
                                icon: Lock
                            },
                            { 
                                title: "Active-Active Disaster Recovery", 
                                desc: "Achieve RPO=0. We architect multi-region data replication strategies that survive total region failures without losing a single transaction.",
                                icon: Globe
                            },
                            { 
                                title: "Legacy Modernization", 
                                desc: "Safely strangle the monolith. We help traditional banks decouple core banking services into scalable microservices without downtime.",
                                icon: Server
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 group">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center border border-navy-100 flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                        <item.icon className="w-5 h-5 text-navy-700 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Side - Fixed Layout */}
                <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                    <div className="relative bg-navy-900 rounded-3xl p-8 overflow-hidden border border-gray-800 shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                         
                         {/* Fallback container with min-height to prevent layout collapse */}
                         <div className="relative z-10 rounded-2xl shadow-lg w-full overflow-hidden bg-navy-800 min-h-[200px]">
                            <img 
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                                alt="Secure Dashboard" 
                                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            />
                         </div>

                         <div className="mt-8 relative z-10">
                             <div className="flex items-center gap-2 mb-2">
                                <Key className="w-5 h-5 text-emerald-400" />
                                <h3 className="text-xl font-bold text-white">HSM Integration</h3>
                             </div>
                             <p className="text-gray-400 text-sm">
                                 We integrate Cloud HSMs (Hardware Security Modules) and Vault for FIPS 140-2 Level 3 compliant key management.
                             </p>
                         </div>
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* 4. MODERNIZATION PATHWAY */}
      <section className="py-24 bg-navy-950 text-white border-t border-navy-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
             <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-3xl font-bold mb-4">Legacy to Cloud: The Safe Route</h2>
                 <p className="text-gray-400">
                     Modernizing core banking or insurance systems is risky. We use the Strangler Fig pattern to decouple monoliths safely.
                 </p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8 relative">
                 {/* Connecting Line */}
                 <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 -z-10"></div>

                 {[
                     { 
                         step: "01",
                         title: "The API Gateway", 
                         desc: "We place an API Gateway in front of your legacy mainframe to intercept traffic, enabling a unified interface for new consumers." 
                     },
                     { 
                         step: "02",
                         title: "Strangler Pattern", 
                         desc: "We incrementally build new microservices for specific domains (e.g., Auth, Ledger) and route traffic away from the monolith." 
                     },
                     { 
                         step: "03",
                         title: "Data Sync", 
                         desc: "Using CDC (Change Data Capture), we sync data from legacy DBs to modern cloud data stores in real-time to support the new services." 
                     }
                 ].map((item, idx) => (
                     <div key={idx} className="bg-navy-900 p-8 rounded-2xl border border-navy-800 shadow-xl relative hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg shadow-emerald-500/20">
                             {item.step}
                         </div>
                         <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">
                             {item.desc}
                         </p>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* 5. CTA INTERSTITIAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 mb-20 relative z-20">
         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             
             <div className="relative z-10 flex items-start gap-6">
                 <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-md shadow-inner border border-white/20">
                     <Wallet className="w-10 h-10 text-white" />
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-white mb-2">Building a Challenger Bank?</h3>
                     <p className="text-emerald-50 text-lg">Get our "Day 0" Security Blueprint for fast regulatory approval.</p>
                 </div>
             </div>
             <div className="relative z-10 w-full md:w-auto">
                 <Link to="/contact">
                     <Button size="lg" className="w-full md:w-auto bg-white text-emerald-800 hover:bg-emerald-50 border-none font-bold shadow-lg">
                         Get Blueprint
                         <ArrowRight className="ml-2 w-4 h-4" />
                     </Button>
                 </Link>
             </div>
         </div>
      </section>

      {/* 6. TECHNICAL DEEP DIVE */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-emerald-600">
                          <Lock className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-4">Secrets & Identity</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          HashiCorp Vault for dynamic secrets, Keycloak/Okta for CIAM, and SPIFFE/SPIRE for workload identity.
                      </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-brand">
                          <Database className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-4">Immutable Ledgers</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Amazon QLDB or Kafka for immutable, append-only transaction logs that provide a complete cryptographic audit trail.
                      </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                          <PieChart className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-4">Fraud Detection</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Real-time stream processing with Flink or Spark Streaming to detect anomalies in transaction patterns instantly.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. Testimonials Reuse */}
      <Testimonials />

      {/* 8. CTA */}
      <CTA />

    </div>
  );
};