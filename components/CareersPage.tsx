import React, { useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Users, Plus, ChevronDown, CheckCircle2, MapPin, Briefcase } from 'lucide-react';
import { CTA } from './CTA';
import { siteContent } from '../constants/siteContent';

export const CareersPage: React.FC = () => {
  const { careers } = siteContent;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Careers - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32 bg-navy-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-bold uppercase tracking-wider mb-6 border border-white/10 backdrop-blur-sm animate-fade-in">
                {careers.hero.badge}
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                {careers.hero.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
                {careers.hero.description}
            </p>
            <div className="flex justify-center">
                <Button size="lg" className="bg-brand hover:bg-brand-dark border-none shadow-xl shadow-brand/20 text-lg px-10 py-4 group" onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}>
                    View Open Roles
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
      </section>

      {/* 2. Culture & Values (Operating System) */}
      <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">{careers.culture.title}</h2>
                  <p className="text-gray-600 text-lg">
                      {careers.culture.description}
                  </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {careers.culture.values.map((val, idx) => (
                      <div key={idx} className="flex gap-6 p-8 bg-slate-50 rounded-2xl border border-gray-100 hover:border-brand/30 transition-colors group">
                          <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                              <val.icon className="w-7 h-7" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-navy-900 mb-3">{val.title}</h3>
                              <p className="text-gray-600 leading-relaxed">
                                  {val.desc}
                              </p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. Benefits Grid */}
      <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Perks of the Trade</h2>
                  <p className="text-gray-400">We take care of our own.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {careers.benefits.map((benefit, idx) => (
                      <div key={idx} className="p-8 bg-navy-900 rounded-2xl border border-navy-800 hover:border-brand/50 transition-all duration-300 hover:-translate-y-1">
                          <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center mb-6 shadow-lg text-brand border border-navy-700">
                              <benefit.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                          <p className="text-gray-400 leading-relaxed text-sm">
                              {benefit.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. Hiring Process Timeline */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">The Hiring Loop</h2>
                  <p className="text-gray-600">Transparent, fast, and respectful of your time.</p>
              </div>

              <div className="relative">
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                      {careers.hiringProcess.map((step, idx) => (
                          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center group hover:border-brand/30 transition-all">
                              <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6 shadow-lg ring-4 ring-white group-hover:bg-brand transition-colors">
                                  {step.step}
                              </div>
                              <h3 className="text-lg font-bold text-navy-900 mb-3">{step.title}</h3>
                              <p className="text-sm text-gray-500 leading-relaxed">
                                  {step.desc}
                              </p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* 5. Open Roles */}
      <section id="open-roles" className="py-24 bg-slate-50 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Open Positions</h2>
                  <p className="text-gray-600">Find your next challenge.</p>
              </div>

              <div className="space-y-4">
                  {careers.jobs.map((job, idx) => (
                      <div key={idx} className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm hover:border-brand/30 hover:shadow-md transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div>
                              <div className="flex flex-wrap items-center gap-3 mb-2">
                                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-brand transition-colors">{job.title}</h3>
                                  <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded uppercase tracking-wider">{job.dept}</span>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.loc}</span>
                                  <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                              </div>
                              <p className="text-gray-600 text-sm max-w-2xl mb-4">
                                  {job.desc}
                              </p>
                              <div className="flex gap-2">
                                  {job.tags.map((tag, tIdx) => (
                                      <span key={tIdx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">
                                          {tag}
                                      </span>
                                  ))}
                              </div>
                          </div>
                          <Link to="/contact">
                              <Button variant="outline" className="shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand w-full md:w-auto">
                                  Apply Now
                              </Button>
                          </Link>
                      </div>
                  ))}
              </div>
              
              <div className="mt-12 text-center bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-navy-900 mb-2">Don't see the right role?</h4>
                  <p className="text-gray-600 mb-6">
                      We are always looking for exceptional talent. If you are a 10x engineer, we want to hear from you.
                  </p>
                  <Link to="/contact">
                      <Button variant="secondary" className="gap-2">
                          <Plus className="w-4 h-4" />
                          Submit General Application
                      </Button>
                  </Link>
              </div>
          </div>
      </section>

      {/* 6. Candidate FAQs */}
      <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Candidate FAQs</h2>
              <div className="space-y-6">
                  {careers.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                          <h4 className="font-bold text-navy-900 mb-2 flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                              {faq.q}
                          </h4>
                          <p className="text-gray-600 text-sm pl-8">
                              {faq.a}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <CTA />
    </div>
  );
};