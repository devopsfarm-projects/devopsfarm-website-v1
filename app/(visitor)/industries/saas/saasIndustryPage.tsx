'use client';

import { JSX, useEffect } from 'react';
import { Button } from '@/components/common/button.component';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Cloud, Shield, Zap, TrendingUp, Users, Server, Lock, Globe, Rocket } from 'lucide-react';
import { CTA } from '@/components/common/CTA.component';
import { Testimonials } from '@/components/testimonials.component';

export default function SaasIndustryPage(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SaaS Cloud Modernization - DevOpsFarm";
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
                        <Cloud className="w-3 h-3 text-brand-light" />
                        Industry Focus: SaaS
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-navy-900 mb-6 leading-[1.15]">
                        Drive SaaS Growth with <br/>
                        <span className="text-brand bg-clip-text bg-gradient-to-r from-brand to-accent ">Seamless Cloud Modernization</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Build secure, high-performing SaaS platforms with modern cloud operations that reduce tenant costs, accelerate feature release, and ensure SOC2/HIPAA compliance from day one.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="shadow-xl shadow-brand/20 group bg-violet">
                                Speak to a SaaS Architect
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button variant="outline" size="lg" className="border-navy-900  hover:bg-navy-900 hover:text-white px-8 py-4 text-lg bg-white/25 ">
                                View SaaS Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
                
                {/* Abstract Visual - Isometric Cloud */}
                <div className="relative hidden lg:block">
                    <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-all duration-500">
                         <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                            alt="SaaS Dashboard" 
                            className="rounded-2xl w-full h-auto object-cover"
                         />
                         {/* Floating Badge 1 */}
                         <div className="absolute -left-6 top-10 bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-float">
                             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                 <TrendingUp className="w-5 h-5 text-green-600" />
                             </div>
                             <div>
                                 <p className="text-xs text-gray-500 font-bold uppercase">Uptime</p>
                                 <p className="text-navy-900 font-bold">99.999%</p>
                             </div>
                         </div>
                         {/* Floating Badge 2 */}
                         <div className="absolute -right-6 bottom-10 bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                             <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                                 <Shield className="w-5 h-5 text-brand" />
                             </div>
                             <div>
                                 <p className="text-xs text-gray-500 font-bold uppercase">Compliance</p>
                                 <p className="text-navy-900 font-bold">SOC2 Ready</p>
                             </div>
                         </div>
                    </div>
                    {/* Blob backdrops */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand/20 to-accent/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-20 bg-slate-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Modernization is Essential for SaaS</h2>
                  <p className="text-gray-600">
                    Data from leading analysts confirms that modern cloud operations are the primary driver of SaaS valuation and trust.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { val: "73%", text: "of SaaS CTOs report scaling stability as their top challenge." },
                      { val: "60%", text: "of cloud spend is wasted on idle resources in legacy SaaS apps." },
                      { val: "4x", text: "faster feature release cycles after adopting DevOps pipelines." },
                      { val: "90%", text: "of data breaches result from misconfigured cloud environments." }
                  ].map((stat, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand/30 transition-colors text-center group">
                          <div className="w-16 h-16 mx-auto bg-navy-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-xl font-bold text-white">{stat.val}</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">
                              {stat.text}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Small Vibrant CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
         <div className="bg-gradient-to-r from-accent via-blue-600 to-brand rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-violet/5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]  to-transparent"></div>
             <div className="relative z-10 flex items-center gap-5">
                 <div className="bg-violet/20 rounded-xl p-3 backdrop-blur-md">
                     <Rocket className="w-8 h-8 text-white bg-violet" />
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-white mb-1">Scaling for your Series B?</h3>
                     <p className="text-blue-100 text-sm">Get a scalable infrastructure roadmap tailored to your growth metrics.</p>
                 </div>
             </div>
             <div className="relative z-10">
                 <Link href="/contact">
                     <Button className="bg-violet text-white hover:bg-white-50 border-none font-bold">
                         Get Growth Roadmap
                     </Button>
                 </Link>
             </div>
         </div>
      </section>

      {/* 3. The Reality/Challenges Grid */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5">
                    <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                        The reality SaaS companies face without cloud modernization
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        SaaS companies face constant pressure to improve security, meet strict compliance standards (SOC2, HIPAA), and deliver new features quickly. Outdated single-tenant architectures create barriers to scaling and erode margins.
                    </p>
                    <Link href="/contact">
                        <Button className="gap-2 bg-violet">
                            Assess Your Infrastructure
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
                <div className="lg:col-span-7">
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { icon: Cloud, title: "Cloud Engineering", desc: "Monolithic apps that can't scale per-tenant." },
                            { icon: Lock, title: "Compliance Debt", desc: "Manual audits slowing down sales cycles." },
                            { icon: Users, title: "Multi-Tenancy", desc: "Data isolation challenges at scale." },
                            { icon: Server, title: "Cost Efficiency", desc: "Margins eroding due to unoptimized cloud bills." },
                            { icon: Shield, title: "Cloud Security", desc: "Constant threat of data breaches." },
                            { icon: Zap, title: "Release Velocity", desc: "Slow, risky deployments causing downtime." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg hover:border-brand/10 border border-transparent transition-all duration-300">
                                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-brand">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* 4. Overcoming Barriers (Cards) */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold mb-4">Overcoming SaaS Technical Barriers</h2>
                  <p className="text-gray-400">
                      Modern cloud architectures enable continuous integration, optimize resources, and strengthen security to help SaaS platforms scale efficiently.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 hover:border-violet transition-colors">
                      <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                          <Server className="w-6 h-6 text-brand-light" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Infrastructure as Code (IaC)</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          Use Terraform or Crossplane to automate tenant provisioning. Spin up isolated environments for new enterprise customers in minutes, not days.
                      </p>
                      <ul className="text-sm text-gray-300 space-y-2">
                          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand" /> Reproducible Environments</li>
                          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand" /> Drift Detection</li>
                      </ul>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 hover:border-brand/50 transition-colors">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                          <Zap className="w-6 h-6 text-accent-light" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Accelerated CI/CD</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          Automate build, test, and deployment workflows using GitHub Actions or ArgoCD. Release features to specific tenant rings with zero downtime.
                      </p>
                      <ul className="text-sm text-gray-300 space-y-2">
                          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Blue/Green Deployment</li>
                          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Automated Rollbacks</li>
                      </ul>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 hover:border-brand/50 transition-colors">
                      <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                          <TrendingUp className="w-6 h-6 text-pink-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Optimized Cloud FinOps</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          Leverage autoscaling groups and spot instances. Implement tagging strategies to calculate exact Unit Economics (Cost Per Tenant).
                      </p>
                      <ul className="text-sm text-gray-300 space-y-2">
                          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Cost Allocation</li>
                          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Auto-Scaling</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. Managed Cloud Solutions List */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Drive SaaS Innovation with Managed DevOps</h2>
                  <p className="text-gray-600">
                      Our managed solutions reduce operational complexity, speed up releases, and enhance security.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {[
                      {
                          title: "Zero Downtime Deployment",
                          desc: "Utilize canary deployment strategies to upgrade your platform without interrupting user sessions."
                      },
                      {
                          title: "Built-in Security & Compliance",
                          desc: "Implement automated compliance checks and real-time security monitoring aligned with GDPR, HIPAA, and SOC2."
                      },
                      {
                          title: "24/7 Proactive Response",
                          desc: "Employ advanced SIEM and SOAR systems with expert cloud engineers available around the clock."
                      },
                      {
                          title: "Risk-free Migration",
                          desc: "Apply detailed migration validation, rollback procedures, and automated testing to ensure seamless transitions."
                      },
                      {
                          title: "Cost Control & Optimization",
                          desc: "Leverage autoscaling and resource tagging to maximize performance while minimizing cloud spend."
                      },
                      {
                          title: "Continuous Performance Tuning",
                          desc: "Use real-time telemetry and APM tools to drive iterative improvements in platform reliability."
                      }
                  ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                              </div>
                          </div>
                          <div>
                              <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                          </div>
                      </div>
                  ))}
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