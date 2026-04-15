'use client';

import { JSX, useEffect } from 'react';
import { Button } from '@/components/common/button.component';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Activity, Database, Lock, Heart, FileCheck, Network, Server, Cloud, Stethoscope } from 'lucide-react';
import { CTA } from '@/components/common/CTA.component';
import { Testimonials } from '@/components/testimonials.component';

export default function HealthTechIndustryPage(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Healthcare Cloud Solutions - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-bg/50 via-white to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 text-white text-xs font-bold uppercase tracking-wider mb-6">
                        <Heart className="w-3 h-3 text-red-400" />
                        Industry Focus: HealthTech
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-navy-900 mb-6 leading-[1.15]">
                        Engineering Trust in <br/>
                        <span className="text-brand bg-clip-text bg-gradient-to-r from-brand to-accent">Digital Healthcare</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Simplify operations, boost efficiency, and deliver exceptional patient care with HIPAA-compliant cloud solutions. We build the secure infrastructure that modern healthcare demands.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="shadow-xl shadow-brand/20 group bg-violet">
                                Consult a Health Architect
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button variant="outline" size="lg" className="border-navy-900  hover:bg-navy-900 hover:text-white px-8 py-4 text-lg bg-white/25">
                                View Healthcare Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
                
                {/* Abstract Visual - Healthcare Data */}
                <div className="relative hidden lg:block">
                    <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-all duration-500">
                         <img 
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                            alt="Healthcare Dashboard" 
                            className="rounded-2xl w-full h-auto object-cover opacity-90"
                         />
                         {/* Floating Badge 1 */}
                         <div className="absolute -left-6 top-20 bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-float">
                             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                 <FileCheck className="w-5 h-5 text-green-600" />
                             </div>
                             <div>
                                 <p className="text-xs text-gray-500 font-bold uppercase">Compliance</p>
                                 <p className="text-navy-900 font-bold">HIPAA / HITECH</p>
                             </div>
                         </div>
                         {/* Floating Badge 2 */}
                         <div className="absolute -right-6 bottom-20 bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                 <Activity className="w-5 h-5 text-blue-600" />
                             </div>
                             <div>
                                 <p className="text-xs text-gray-500 font-bold uppercase">Latency</p>
                                 <p className="text-navy-900 font-bold">Real-time IoMT</p>
                             </div>
                         </div>
                    </div>
                    {/* Blob backdrops */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand/10 to-blue-200/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. Innovative Solutions List (Replacing Stats/Highlights) */}
      <section className="py-20 bg-slate-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Innovative Cloud Solutions Reshaping Healthcare</h2>
                  <p className="text-gray-600">
                    We empower providers and payers to modernize legacy systems without compromising on security or patient trust.
                  </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                      {[
                          {
                              title: "Adaptive Cloud Infrastructure",
                              desc: "Scalable, elastic environments that handle fluctuating telehealth loads and patient data surges.",
                              icon: Cloud
                          },
                          {
                              title: "Advanced Data Interoperability",
                              desc: "Seamless FHIR and HL7 integration to break down data silos and enable a 360-degree patient view.",
                              icon: Database
                          },
                          {
                              title: "Intelligent Automation (RPA)",
                              desc: "Automate administrative workflows, claims processing, and patient scheduling to reduce overhead.",
                              icon: Network
                          },
                          {
                              title: "Scalable Telehealth Solutions",
                              desc: "Low-latency WebRTC architectures ensuring crystal clear video consultations for millions of patients.",
                              icon: Activity
                          }
                      ].map((item, idx) => (
                          <div key={idx} className="flex gap-5 group">
                              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                                  <item.icon className="w-6 h-6 text-brand group-hover:stroke-white" />
                              </div>
                              <div>
                                  <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
                  
                  {/* Visual Representation */}
                  <div className="relative">
                      <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100">
                          <img 
                              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2532&auto=format&fit=crop" 
                              alt="Medical Professional using Tablet" 
                              className="rounded-2xl w-full object-cover aspect-[4/3]"
                          />
                      </div>
                      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand/10 rounded-full blur-3xl -z-10"></div>
                  </div>
              </div>
          </div>
      </section>

      {/* Small Vibrant CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
  <div className="hipaa-gradient rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
    
    {/* Subtle Overlay */}
    <div className="absolute inset-0 bg-white/5 opacity-50 pointer-events-none"></div>

    {/* Left Content */}
    <div className="relative z-10 flex items-center gap-5">
      <div className="bg-white/20 rounded-xl p-3 backdrop-blur-md">
        <Stethoscope className="w-8 h-8 text-white" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-1">
          HIPAA Audit Coming Up?
        </h3>
        <p className="text-pink-100 text-sm">
          We can automate your compliance evidence collection in 2 weeks.
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <Link
      href="/contact"
      className="hipaa-button  px-6 py-3 rounded-lg font-bold shadow-md inline-flex items-center justify-center "
    >
      Get Compliance Check
    </Link>
  </div>
</section>

      {/* 3. Accelerating Transformation (Solutions Grid) */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                {/* Image Side */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="relative bg-navy-50 rounded-3xl p-8 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                         <img 
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                            alt="Medical Data Analysis" 
                            className="relative z-10 rounded-2xl shadow-lg w-full"
                         />
                         <div className="mt-8">
                             <h3 className="text-2xl font-bold text-navy-900 mb-2">Accelerating Digital Transformation</h3>
                             <p className="text-gray-600 text-sm">
                                 From AI-driven diagnostics to patient portals, we build the backbone of modern care.
                             </p>
                         </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                    <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-12">
                        DevOpsFarm: Your Partner in<br/>
                        <span className="text-brand">Healthcare Innovation</span>
                    </h2>
                    
                    <div className="space-y-6">
                        {[
                            { 
                                title: "Cloud Integration Expertise", 
                                desc: "Migrate legacy EHR/EMR systems to the cloud with zero data loss. We support Epic, Cerner, and custom implementation integrations." 
                            },
                            { 
                                title: "Data-Driven Insights", 
                                desc: "Unlock the value of patient data with secure data lakes and AI/ML pipelines for predictive analytics and population health management." 
                            },
                            { 
                                title: "Operational Efficiency", 
                                desc: "Implement GitOps and CI/CD for healthcare applications to release features faster while maintaining rigorous testing standards." 
                            },
                            { 
                                title: "Regulatory Compliance & Security", 
                                desc: "Automated 'Compliance-as-Code' ensures your infrastructure stays HIPAA, GDPR, and SOC2 compliant 24/7/365." 
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-md hover:border-brand/30 transition-all duration-300">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100 flex-shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* 4. Dark Section - Technical Barriers */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold mb-4">Securing the Future of Care</h2>
                  <p className="text-gray-400">
                      We address the unique technical barriers facing healthcare organizations today.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 hover:border-brand/50 transition-colors group">
                      <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                          <Lock className="w-6 h-6 text-brand-light group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Zero Trust Security</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          Implement strict identity-based access controls and mTLS encryption for all east-west traffic within your cluster.
                      </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 hover:border-brand/50 transition-colors group">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                          <Database className="w-6 h-6 text-accent-light group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Data Sovereignty</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          Ensure patient data resides in specific geographic regions while maintaining global availability for research.
                      </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 hover:border-brand/50 transition-colors group">
                      <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                          <Server className="w-6 h-6 text-red-400 group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Disaster Recovery</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          RPO/RTO near zero. Automated failover strategies ensure critical care applications never go offline.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. Testimonials Reuse */}
      <Testimonials />

      {/* 7. CTA */}
      <CTA />

    </div>
  );
};