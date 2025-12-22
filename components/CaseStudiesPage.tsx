import React, { useEffect, useState } from 'react';
import { caseStudies, CaseStudy } from '../data/caseStudiesData';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter, Zap, ArrowRight, BarChart3, Clock, CheckCircle2 } from 'lucide-react';
import { CTA } from './CTA';
import { Testimonials } from './Testimonials';
import { Button } from './Button';

export const CaseStudiesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Stories');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Case Studies - DevOpsFarm";
  }, []);

  const categories = ['All Stories', ...Array.from(new Set(caseStudies.map(cs => cs.category)))];
  
  // Featured Case Study (FinFlow is usually the best example)
  const featuredStudy = caseStudies.find(c => c.id === 'finflow') || caseStudies[0];
  
  const filteredStudies = activeCategory === 'All Stories' 
    ? caseStudies.filter(c => c.id !== featuredStudy.id) 
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-white text-navy-900">
      
      {/* 1. HERO & FEATURED STUDY */}
      <section className="bg-navy-900 text-white pt-20 pb-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand/20 via-navy-900 to-navy-900 pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="mb-16 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
                    Real Results
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Engineering Success at Scale</h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                    See how we help the world's most innovative companies solve their toughest infrastructure challenges.
                </p>
            </div>

            {/* Featured Card - Hero Style */}
            {activeCategory === 'All Stories' && (
                <div className="bg-navy-800 rounded-3xl border border-navy-700 overflow-hidden shadow-2xl hover:border-brand/50 transition-colors duration-300 group">
                    <div className="grid lg:grid-cols-12 gap-0">
                        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 text-brand-light font-bold uppercase tracking-wider text-xs mb-4">
                                <Zap className="w-4 h-4" /> Featured Case Study
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-brand-light transition-colors">
                                {featuredStudy.title}
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-2 border-brand/30 pl-6">
                                "{featuredStudy.description}"
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {featuredStudy.results.slice(0, 2).map((res, idx) => (
                                    <div key={idx} className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm font-medium text-white">{res}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to={`/case-studies/${featuredStudy.id}`}>
                                <Button className="bg-white text-navy-900 hover:bg-gray-100 border-none font-bold px-8">
                                    Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="lg:col-span-5 h-64 lg:h-auto relative overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-transparent z-10 lg:hidden"></div>
                             <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-transparent to-transparent z-10 hidden lg:block"></div>
                             <img 
                                src={featuredStudy.image} 
                                alt={featuredStudy.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                             />
                        </div>
                    </div>
                </div>
            )}
        </div>
      </section>

      {/* 2. METRICS STRIP */}
      <section className="bg-white border-b border-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                      { label: "Total Cloud Savings", val: "$10M+" },
                      { label: "Deployments Automated", val: "50k+" },
                      { label: "Audit Success Rate", val: "100%" },
                      { label: "Uptime Delivered", val: "99.99%" }
                  ].map((stat, idx) => (
                      <div key={idx} className="text-center">
                          <div className="text-3xl font-bold text-navy-900 mb-1">{stat.val}</div>
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. FILTER & GRID */}
      <section className="py-20 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
                <div className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-wider mr-4">
                    <Filter className="w-4 h-4" />
                    Filter:
                </div>
                {categories.map((cat, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                            activeCategory === cat 
                            ? 'bg-navy-900 text-white shadow-lg shadow-navy-900/20' 
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStudies.map((study) => (
                    <Link key={study.id} to={`/case-studies/${study.id}`} className="group block h-full">
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                        <img 
                            src={study.image} 
                            alt={study.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-navy-900 uppercase tracking-wider shadow-sm">
                            {study.category}
                        </div>
                        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-brand transition-colors line-clamp-2">
                                    {study.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                    {study.description}
                                </p>
                            </div>
                        
                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-400">{study.client}</span>
                            <div className="flex items-center text-brand font-bold text-sm tracking-wide group-hover:translate-x-1 transition-transform">
                                Read Story
                                <ArrowUpRight className="ml-2 w-4 h-4" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            
            {filteredStudies.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No case studies found for this category.
                </div>
            )}
        </div>
      </section>

      {/* 4. METHODOLOGY SECTION */}
      <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-navy-900 mb-6">Metric-Driven Engineering</h2>
                      <p className="text-lg text-gray-600 mb-6">
                          We don't just "do DevOps". We measure the impact of every architectural decision. Our case studies are built on hard data, not anecdotes.
                      </p>
                      <ul className="space-y-4">
                          {[
                              "DORA Metrics (Deployment Freq, Lead Time)",
                              "Cloud Unit Economics (Cost Per Transaction)",
                              "Reliability Indices (SLO/Error Budgets)",
                              "Security Posture Score (Vulnerability Density)"
                          ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3">
                                  <BarChart3 className="w-5 h-5 text-brand" />
                                  <span className="text-navy-900 font-medium">{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200">
                      <h3 className="text-xl font-bold text-navy-900 mb-6">Typical Engagement ROI</h3>
                      <div className="space-y-6">
                          <div>
                              <div className="flex justify-between text-sm font-bold mb-2">
                                  <span>Cloud Cost Reduction</span>
                                  <span className="text-green-600">30-40%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-green-500 h-2 rounded-full w-[35%]"></div>
                              </div>
                          </div>
                          <div>
                              <div className="flex justify-between text-sm font-bold mb-2">
                                  <span>Deployment Speed</span>
                                  <span className="text-brand">4x Faster</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-brand h-2 rounded-full w-[80%]"></div>
                              </div>
                          </div>
                          <div>
                              <div className="flex justify-between text-sm font-bold mb-2">
                                  <span>Incident Recovery Time</span>
                                  <span className="text-blue-600">-90%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-blue-500 h-2 rounded-full w-[90%]"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. CTA INTERSTITIAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="bg-gradient-to-br from-navy-800 to-black rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-xs font-bold mb-4 border border-white/10">
                      <Clock className="w-3 h-3 text-yellow-300" />
                      Limited Availability
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Facing a similar challenge?</h2>
                  <p className="text-gray-400 max-w-lg">
                      Our Principal Architects take on a limited number of new engagements per quarter to ensure quality.
                  </p>
              </div>
              <div className="relative z-10 flex-shrink-0">
                  <Link to="/contact">
                      <Button size="lg" className="bg-brand hover:bg-brand-dark border-none font-bold shadow-lg shadow-brand/20">
                          Check Availability
                          <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                  </Link>
              </div>
          </div>
      </section>

      <CTA />
    </div>
  );
};