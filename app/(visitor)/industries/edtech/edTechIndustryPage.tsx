'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/common/button.component';
import { 
  ArrowRight, GraduationCap, Video, Users, Globe, 
  ShieldCheck, Server, Zap, BookOpen, BarChart3, 
  Wifi, Cpu, Lock, CheckCircle2
} from 'lucide-react';
import { CTA } from '@/components/common/CTA.component';
import { Testimonials } from '@/components/testimonials.component';

export const EdTechIndustryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
    document.title = "EdTech Cloud Solutions - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white font-sans text-navy-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 bg-navy-900 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-orange-900/20 via-navy-900 to-navy-900 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand/10 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <GraduationCap className="w-3 h-3" />
                        Industry Focus: EdTech
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-[1.1]">
                        Infrastructure for the <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Future of Learning.</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                        We build the elastic, low-latency cloud platforms that power global classrooms, massive MOOCs, and real-time collaboration tools.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-none shadow-lg shadow-orange-500/20 font-bold px-8">
                                Audit Your LMS Infra
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button variant="outline" size="lg" className="text-white border-gray-600 hover:bg-white/5 hover:border-white">
                                View EdTech Case Studies
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-400">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-orange-400" />
                            <span>FERPA Compliant</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-orange-400" />
                            <span>COPPA Ready</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-orange-400" />
                            <span>1M+ Concurrent Users</span>
                        </div>
                    </div>
                </div>
                
                {/* Visual - Digital Classroom Concept */}
                <div className="relative hidden lg:block perspective-[1000px]">
                    <div className="relative z-10 bg-gradient-to-br from-navy-800 to-navy-950 p-1 rounded-2xl shadow-2xl border border-gray-700 transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
                         <div className="bg-white rounded-xl overflow-hidden relative">
                             <img 
                                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" 
                                alt="Students learning online" 
                                className="w-full h-64 object-cover"
                             />
                             <div className="p-6">
                                 <div className="flex items-center justify-between mb-4">
                                     <div className="flex items-center gap-2">
                                         <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                         <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Live Session</span>
                                     </div>
                                     <div className="text-xs font-bold text-gray-500">Latency: 45ms</div>
                                 </div>
                                 <h3 className="text-lg font-bold text-navy-900 mb-2">Introduction to Cloud Computing</h3>
                                 <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                                     <div className="bg-orange-500 h-2 rounded-full w-[75%]"></div>
                                 </div>
                                 <div className="flex justify-between text-xs text-gray-500 font-mono">
                                     <span>Bandwidth: 4.2 Gbps</span>
                                     <span>Transcoding: Active</span>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. CHALLENGES & SOLUTIONS GRID */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Solving EdTech's Unique Hurdles</h2>
                  <p className="text-gray-600">
                    Education platforms face distinct traffic patterns and strict data privacy laws. We engineer specifically for these constraints.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      { 
                          title: "Scalability & Flexibility", 
                          icon: Zap,
                          problem: "Traffic spikes during exams or class start times crash legacy servers.",
                          solution: "Serverless and K8s auto-scaling that reacts to demand in seconds, not minutes."
                      },
                      { 
                          title: "Global Video Delivery", 
                          icon: Globe,
                          problem: "High latency causes buffering for international students.",
                          solution: "Multi-CDN strategies and edge caching to deliver content from the nearest POP."
                      },
                      { 
                          title: "Data Privacy & Security", 
                          icon: Lock,
                          problem: "Navigating FERPA, COPPA, and GDPR compliance is complex.",
                          solution: "Automated compliance guardrails and PII redaction pipelines."
                      },
                      { 
                          title: "Cost Optimization", 
                          icon: BarChart3,
                          problem: "Video encoding and storage costs eat into margins.",
                          solution: "Spot instance orchestration for transcoding and intelligent storage tiering."
                      },
                      { 
                          title: "Real-Time Collaboration", 
                          icon: Users,
                          problem: "WebSockets connections drop at scale (whiteboards, chat).",
                          solution: "Scalable ephemeral messaging infrastructure using Redis/ElastiCache."
                      },
                      { 
                          title: "Multi-Region Availability", 
                          icon: Server,
                          problem: "Downtime during school hours is unacceptable.",
                          solution: "Active-Active regional failover ensuring 99.99% uptime."
                      }
                  ].map((item, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                          <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                              <item.icon className="w-6 h-6 text-orange-600 group-hover:text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                          <div className="space-y-3">
                              <div className="text-sm text-gray-500 border-l-2 border-red-200 pl-3">
                                  <span className="font-bold text-red-400 block text-xs uppercase mb-1">Challenge</span>
                                  {item.problem}
                              </div>
                              <div className="text-sm text-gray-600 border-l-2 border-green-200 pl-3">
                                  <span className="font-bold text-green-500 block text-xs uppercase mb-1">Solution</span>
                                  {item.solution}
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. TECHNICAL DEEP DIVE - VIDEO ENGINEERING */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                {/* Visual Side */}
                <div className="lg:col-span-5 relative">
                    <div className="relative bg-navy-900 rounded-3xl p-8 overflow-hidden border border-gray-800 shadow-2xl">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                         
                         <div className="space-y-6 relative z-10">
                             <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                                 <div className="flex items-center gap-3">
                                     <Video className="w-6 h-6 text-orange-500" />
                                     <span className="font-bold text-white">Encoding Pipeline</span>
                                 </div>
                                 <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold">Healthy</div>
                             </div>
                             
                             <div className="space-y-4">
                                 <div>
                                     <div className="flex justify-between text-xs text-gray-400 mb-1">
                                         <span>Ingest (RTMP/SRT)</span>
                                         <span>1.2 Gbps</span>
                                     </div>
                                     <div className="w-full bg-navy-800 rounded-full h-1.5">
                                         <div className="bg-orange-500 h-1.5 rounded-full w-[60%]"></div>
                                     </div>
                                 </div>
                                 <div>
                                     <div className="flex justify-between text-xs text-gray-400 mb-1">
                                         <span>Transcoding (Spot Fleet)</span>
                                         <span>42 Nodes</span>
                                     </div>
                                     <div className="w-full bg-navy-800 rounded-full h-1.5">
                                         <div className="bg-blue-500 h-1.5 rounded-full w-[85%]"></div>
                                     </div>
                                 </div>
                                 <div>
                                     <div className="flex justify-between text-xs text-gray-400 mb-1">
                                         <span>CDN Egress</span>
                                         <span>98% Cache Hit</span>
                                     </div>
                                     <div className="w-full bg-navy-800 rounded-full h-1.5">
                                         <div className="bg-green-500 h-1.5 rounded-full w-[98%]"></div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7">
                    <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                        Video Engineering <br/>
                        <span className="text-orange-500">at Hyperscale</span>
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Video is the heart of modern EdTech. We optimize every step of the pipeline, from ingest to playback, ensuring crystal-clear lectures without breaking the bank.
                    </p>
                    
                    <div className="space-y-6">
                        {[
                            { 
                                title: "Adaptive Bitrate Streaming (ABR)", 
                                desc: "Dynamic HLS/DASH packaging ensures students get the best quality for their connection speed (4K to 360p)."
                            },
                            { 
                                title: "Spot Instance Transcoding", 
                                desc: "Reduce encoding costs by up to 90% by utilizing interruptible cloud capacity for batch video processing."
                            },
                            { 
                                title: "Low-Latency WebRTC", 
                                desc: "Sub-500ms latency for live interactive classrooms, enabling real-time Q&A and collaboration."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100 flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-navy-900 mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
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
                 <h2 className="text-3xl font-bold mb-4">Secure by Design</h2>
                 <p className="text-gray-400">
                     Student data protection isn't optional. We build compliance into the foundation of your infrastructure.
                 </p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                 {[
                     { 
                         title: "Identity & Access", 
                         desc: "Integration with SIS (Student Information Systems) via SAML/OIDC for seamless Single Sign-On.",
                         icon: ShieldCheck
                     },
                     { 
                         title: "Data Residency", 
                         desc: "Ensure student PII stays within required geographic boundaries to meet local regulations.",
                         icon: Globe
                     },
                     { 
                         title: "Content Filtering", 
                         desc: "AI-driven moderation pipelines to automatically flag inappropriate content in uploads or chats.",
                         icon: BookOpen
                     }
                 ].map((item, idx) => (
                     <div key={idx} className="bg-navy-900 p-8 rounded-2xl border border-navy-800 shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                         <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                             <item.icon className="w-6 h-6" />
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
         <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             
             <div className="relative z-10 flex items-start gap-6">
                 <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-md shadow-inner border border-white/20">
                     <Wifi className="w-10 h-10 text-white" />
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-white mb-2">Expanding to New Markets?</h3>
                     <p className="text-orange-50 text-lg">Get our "Global EdTech" architecture blueprint.</p>
                 </div>
             </div>
             <div className="relative z-10 w-full md:w-auto">
                 <Link href="/contact">
                     <Button size="lg" className="w-full md:w-auto bg-white text-orange-700 hover:bg-orange-50 border-none font-bold shadow-lg">
                         Download Blueprint
                         <ArrowRight className="ml-2 w-4 h-4" />
                     </Button>
                 </Link>
             </div>
         </div>
      </section>

      {/* 6. TECHNICAL FEATURES */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Powered by Modern Tech</h2>
                  <h3 className="text-3xl font-bold text-navy-900">The EdTech Stack</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {[
                    "WebRTC", "Redis", "Canvas LMS", "Moodle", 
                    "AWS MediaConvert", "CloudFront", "BigBlueButton", 
                    "Jitsi Meet", "Kubernetes", "Terraform", "PostgreSQL"
                ].map((tech, idx) => (
                    <div key={idx} className="px-6 py-3 bg-slate-50 border border-gray-200 rounded-full text-sm font-bold text-navy-700 hover:border-orange-500 hover:text-orange-600 hover:shadow-md transition-all cursor-default">
                        {tech}
                    </div>
                ))}
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