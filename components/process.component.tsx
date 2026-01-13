'use client';

import { Search, PenTool, Workflow, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Assess",
    desc: "Deep dive into architecture & goals."
  },
  {
    icon: PenTool,
    title: "Architect",
    desc: "Design scalable & secure solutions."
  },
  {
    icon: Workflow,
    title: "Automate",
    desc: "Implement IaC & CI/CD pipelines."
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    desc: "Continuous improvement & cost tuning."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-full border-x border-gray-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600">A proven framework for cloud excellence.</p>
          </div>
          <div className="hidden md:block h-px bg-gray-200 flex-grow ml-12 mb-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pt-6 md:pt-8 group">
              {/* Step Number Line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gray-200 group-hover:bg-accent transition-colors duration-500 origin-left"></div>
              <div className="absolute top-[-4px] left-0 w-2 h-2 rounded-full bg-navy-900 group-hover:bg-accent transition-colors"></div>
              
              <div className="flex flex-col items-start">
                <span className="text-3xl md:text-4xl font-light text-gray-200 mb-2 md:mb-4 group-hover:text-accent/20 transition-colors">
                  0{idx + 1}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-2 md:mb-3 flex items-center gap-2">
                  <step.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};