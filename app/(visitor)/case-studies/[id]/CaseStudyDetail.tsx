'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { caseStudies } from '@/constants/mockData/caseStudiesData';
import { Button } from '@/components/common/button.component';
import { ArrowLeft, CheckCircle2, Layers, Quote, TrendingUp, AlertTriangle, Lightbulb, Building2, Lock } from 'lucide-react';
import { CTA } from '@/components/common/CTA.component';

export const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find(s => s.id === id);

  useEffect(() => {
    if (study) {
      window.scrollTo(0, 0);
      document.title = `${study.title} - Case Study`;
    }
  }, [study]);

  if (!study) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-4">Case Study Not Found</h1>
        <Link href="/case-studies">
          <Button variant="outline">Back to Case Studies</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <Link href="/case-studies" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand transition-colors mb-6 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to All Stories
            </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-6 border border-brand/20">
                        {study.category} Case Study
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-6 leading-[1.15]">
                        {study.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                        {study.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {study.results.slice(0, 3).map((res, idx) => (
                             <div key={idx} className="bg-white border border-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
                                <TrendingUp className="w-4 h-4 text-green-600" />
                                <span className="font-bold text-navy-900 text-sm">{res.split(' ').slice(0,2).join(' ')}...</span>
                             </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-gray-100">
                        <img src={study.image} alt={study.title} className="w-full object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <div className="flex items-center gap-2 mb-1">
                                <Building2 className="w-4 h-4 text-brand-light" />
                                <span className="font-bold text-lg">{study.client}</span>
                            </div>
                            <div className="text-sm opacity-90 pl-6">{study.category} Industry Leader</div>
                        </div>
                        
                        {/* Confidential Badge if applicable */}
                        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10 flex items-center gap-1.5">
                            <Lock className="w-3 h-3" />
                            Enterprise Client
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
            <div className="grid lg:grid-cols-12 gap-16">
                
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-20">
                    {/* Challenge */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-navy-900">The Challenge</h2>
                        </div>
                        <div className="text-lg text-gray-600 leading-relaxed whitespace-pre-line pl-4 border-l-4 border-red-100">
                            {study.challenge}
                        </div>
                    </section>

                    {/* Solution */}
                    <section>
                         <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                                <Lightbulb className="w-5 h-5 text-brand" />
                            </div>
                            <h2 className="text-2xl font-bold text-navy-900">Our Solution</h2>
                        </div>
                        <div className="text-lg text-gray-600 leading-relaxed whitespace-pre-line pl-4 border-l-4 border-brand/20">
                            {study.solution}
                        </div>
                    </section>

                    {/* Interstitial CTA */}
                    <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-white border border-navy-700">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="relative z-10 flex items-center gap-5">
                            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-md border border-white/10">
                                <Layers className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Need a similar architecture?</h3>
                                <p className="text-gray-400 text-sm">Download our reference architecture for {study.category} platforms.</p>
                            </div>
                        </div>
                        <div className="relative z-10 w-full sm:w-auto">
                            <Link href="/contact">
                                <Button fullWidth size="sm" className="bg-white text-navy-900 hover:bg-gray-100 border-none font-bold">
                                    Get Blueprint
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-navy-900">Key Outcomes</h2>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                            {study.results.map((result, idx) => (
                                <div key={idx} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-green-200 hover:shadow-md transition-all">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    </div>
                                    <span className="text-navy-900 font-bold leading-snug">{result}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* Testimonial */}
                    {study.testimonial && (
                         <section className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-gray-200 relative">
                             <Quote className="w-12 h-12 text-brand/20 mb-6" />
                             <p className="text-xl font-medium italic mb-8 leading-relaxed text-navy-800">
                                "{study.testimonial.quote}"
                             </p>
                             <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-lg shadow-md">
                                    {study.testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-navy-900">{study.testimonial.author}</div>
                                    <div className="text-gray-500 text-sm font-medium">{study.testimonial.role}</div>
                                </div>
                             </div>
                         </section>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    
                    {/* Client Context Card */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4 text-gray-400 font-bold uppercase tracking-wider text-xs">
                            <Building2 className="w-4 h-4" />
                            Client Profile
                        </div>
                        <h3 className="font-bold text-xl text-navy-900 mb-2">{study.client}</h3>
                        <div className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-600 mb-4">{study.category} Sector</div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {study.description}
                        </p>
                    </div>

                    {/* Tech Stack Card */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-28">
                        <div className="flex items-center gap-2 mb-6 text-gray-400 font-bold uppercase tracking-wider text-xs">
                            <Layers className="w-4 h-4" />
                            Tech Stack Used
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {study.techStack.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-slate-50 text-navy-700 border border-slate-100 text-sm font-semibold rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <h4 className="font-bold text-navy-900 mb-2 text-sm">Facing similar challenges?</h4>
                            <p className="text-xs text-gray-500 mb-4">
                                Schedule a free 30-min strategy session with our architects.
                            </p>
                            <Link href="/contact">
                                <Button fullWidth size="sm" className="bg-navy-900 text-white hover:bg-brand">
                                    Book Consultation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <CTA />
    </div>
  );
};