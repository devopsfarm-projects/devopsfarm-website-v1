'use client';

import { JSX } from 'react';
import Link from 'next/link';
import { Server, Heart, ShoppingCart, DollarSign, ArrowRight, Cpu, GraduationCap } from 'lucide-react';

const industries = [
  {
    id: 'saas',
    title: "SaaS & ISVs",
    desc: "Scale multi-tenant architectures and automate onboarding.",
    icon: Server,
    link: "/industries/saas",
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 'healthtech',
    title: "HealthTech",
    desc: "HIPAA-compliant infrastructure with Zero Trust security.",
    icon: Heart,
    link: "/industries/healthtech",
    color: "bg-red-50 text-red-500"
  },
  {
    id: 'hpc',
    title: "HPC & AI Infra",
    desc: "Benchmarking and optimization for LLMs and GPUs.",
    icon: Cpu,
    link: "/industries/hpc",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    id: 'fintech',
    title: "FinTech",
    desc: "PCI-DSS compliant vaults and secure payment gateways.",
    icon: DollarSign,
    link: "/industries/fintech",
    color: "bg-green-50 text-green-600"
  },
  {
    id: 'edtech',
    title: "EdTech",
    desc: "Scalable video learning and FERPA-compliant platforms.",
    icon: GraduationCap,
    link: "/industries/edtech",
    color: "bg-orange-50 text-orange-500"
  },
  {
    id: 'ecommerce',
    title: "E-Commerce",
    desc: "Handle Black Friday traffic spikes with auto-scaling.",
    icon: ShoppingCart,
    link: "/contact",
    color: "bg-purple-50 text-purple-600"
  }
];
export default function Industries(): JSX.Element{
  return (
    <section id="industries" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Solving Complexity Across Industries</h2>
                <p className="text-gray-600">We tailor our architecture patterns to the specific compliance and scaling needs of your sector.</p>
            </div>
            <Link href="/contact">
                <button className="hidden md:flex items-center font-bold text-brand hover:text-brand-dark transition-colors">
                    View All Expertise <ArrowRight className="ml-2 w-4 h-4" />
                </button>
            </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link 
              key={ind.id}
              href={ind.link}
              className="group bg-white  rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand/20 transition-all duration-300 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${ind.color} group-hover:scale-110 transition-transform bg-brand`}>
                <ind.icon className="w-6 h-6 bg-brand-hover"  />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-brand transition-colors">{ind.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                {ind.desc}
              </p>
              <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-brand transition-colors">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};