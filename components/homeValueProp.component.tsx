'use client';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './common/button.component';
import Link from 'next/link';

export const HomeValueProp: React.FC = () => {
    return (
        <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-brand-light uppercase tracking-widest mb-3 text-brand">The Infrastructure Gap</h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6">Stop Fighting Your Own Platform</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Most engineering teams spend 40% of their time fighting fires and wrestling with configuration. We flip the equation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* The Old Way */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <XCircle className="w-32 h-32 text-red-500" />
                        </div>
                        <h4 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-3">
                            <XCircle className="w-6 h-6" />
                            Traditional Ops
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                                <span>Manual, "ClickOps" provisioning leading to drift</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                                <span>Snowflake servers and risky deployments</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                                <span>Security checks at the end of delivery</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                                <span>Unpredictable cloud spend</span>
                            </li>
                        </ul>
                    </div>

                    {/* The New Way */}
                    <div className="bg-brand/10 border border-brand/30 rounded-2xl p-8 lg:p-10 backdrop-blur-sm relative overflow-hidden shadow-2xl shadow-brand/10 group transform md:scale-105 ">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <CheckCircle2 className="w-32 h-32 text-brand" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-accent"></div>
                        <h4 className="text-xl font-bold text-brand-light mb-6 flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 color:violet" />
                            DevOpsFarm Platform
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span>100% Infrastructure as Code (Terraform)</span>
                            </li>
                            <li className="flex items-start gap-3 text-white font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span>Immutable, Ephemeral Infrastructure</span>
                            </li>
                            <li className="flex items-start gap-3 text-white font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span>DevSecOps pipelines with automated guardrails</span>
                            </li>
                            <li className="flex items-start gap-3 text-white font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span>FinOps visibility and auto-scaling cost control</span>
                            </li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <Link href="/contact">
                                <Button
  fullWidth
  className="
    group
    bg-gradient-to-r from-violet-600 to-purple-600
    !text-white
    font-bold
    border-none
    hover:from-white hover:to-white
    hover:text-violet-700
    transition-all duration-300
    shadow-lg
  "
>
  Schedule Technical Audit
  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};