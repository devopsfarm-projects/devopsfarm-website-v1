import React, { useEffect } from 'react';
import { Target, Shield, Zap, ArrowRight, CheckCircle2, Coffee } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { CTA } from './CTA';

export const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-navy-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-bold uppercase tracking-wider mb-6 border border-white/10 backdrop-blur-sm">
                Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Builders. Engineers. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">Cloud Natives.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                We are a collective of principal engineers and architects dedicated to solving the hardest infrastructure challenges for the world's most ambitious companies.
            </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-navy-900 mb-6">Born from the trenches of hyperscale.</h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          DevOpsFarm began with a simple observation: most companies struggle not with writing code, but with shipping it reliably and securely. The complexity of modern cloud ecosystems has created a gap between development velocity and operational stability.
                      </p>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                          Founded by ex-engineers from tech giants, we set out to bridge this gap. We don't just consult; we embed. We treat infrastructure as a product, building "paved roads" that allow your developers to move fast without breaking things.
                      </p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                          <div>
                              <div className="text-3xl md:text-4xl font-bold text-brand mb-1">50+</div>
                              <div className="text-sm text-gray-500 font-medium">Enterprise Clients</div>
                          </div>
                          <div>
                              <div className="text-3xl md:text-4xl font-bold text-brand mb-1">100%</div>
                              <div className="text-sm text-gray-500 font-medium">Remote First</div>
                          </div>
                          <div>
                              <div className="text-3xl md:text-4xl font-bold text-brand mb-1">24/7</div>
                              <div className="text-sm text-gray-500 font-medium">Global Support</div>
                          </div>
                      </div>
                  </div>
                  <div className="relative">
                      <div className="absolute inset-0 bg-brand/5 rounded-3xl transform rotate-3"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Team working together" 
                        className="relative rounded-3xl shadow-xl w-full border border-gray-100"
                      />
                      <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                          <p className="text-navy-900 font-bold text-lg mb-1">"Excellence is a habit."</p>
                          <div className="flex gap-1">
                              {[1,2,3,4,5].map(i => (
                                  <div key={i} className="w-4 h-4 bg-yellow-400 clip-star" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Small Vibrant CTA - Interstitial */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-10">
         <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-8 border border-navy-700 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                 <div className="bg-brand rounded-full p-3 shadow-lg shadow-brand/30">
                     <Coffee className="w-6 h-6 text-white" />
                 </div>
                 <div>
                     <h3 className="text-xl font-bold text-white">Want to meet the team?</h3>
                     <p className="text-gray-400">We love discussing architecture over coffee (virtual or real).</p>
                 </div>
            </div>
            <Link to="/contact">
                <Button size="sm" className="bg-white text-navy-900 hover:bg-gray-100 border-none font-bold">
                    Book a Meet & Greet
                </Button>
            </Link>
         </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Core Values</h2>
                  <p className="text-gray-600">The principles that guide every architectural decision we make.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                          <Target className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">Outcome Over Output</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                          We don't measure success by lines of code or tickets closed, but by the business impact: uptime, latency, and release velocity.
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-brand">
                          <Shield className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">Security First</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                          Security is not an afterthought or a blocker. It is a feature enabling safe speed. We automate compliance to make the secure path the easy path.
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                          <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">Ruthless Automation</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                          If we do it twice, we automate it. We hate toil. By automating the mundane, we free up brain cycles for innovation.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold text-navy-900 mb-4">Meet the Leadership</h2>
                    <p className="text-gray-600">Technical excellence starts at the top.</p>
                </div>
                <Link to="/contact">
                    <Button variant="outline" className="hidden md:flex group border-gray-300">
                        Join Our Team
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                      { name: "Alex V.", role: "Founder & Principal Architect", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
                      { name: "Sarah J.", role: "Head of Engineering", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
                      { name: "Michael R.", role: "Lead Security Architect", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" },
                      { name: "Elena K.", role: "Director of FinOps", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop" }
                  ].map((member, idx) => (
                      <div key={idx} className="group">
                          <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] bg-gray-100">
                              <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0" />
                          </div>
                          <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
                          <p className="text-sm text-brand font-medium">{member.role}</p>
                      </div>
                  ))}
              </div>

              <div className="mt-12 text-center md:hidden">
                 <Link to="/contact">
                    <Button variant="outline" fullWidth>Join Our Team</Button>
                 </Link>
              </div>
          </div>
      </section>

      <CTA />
    </div>
  );
};