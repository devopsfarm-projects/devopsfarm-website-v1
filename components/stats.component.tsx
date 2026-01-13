'use client';

import { Rocket, Activity, Wallet, Headphones } from 'lucide-react';

const stats = [
  { 
    value: "500+", 
    label: "Projects Delivered", 
    desc: "Across 15+ industries",
    icon: Rocket
  },
  { 
    value: "99.99%", 
    label: "Average Uptime", 
    desc: "Guaranteed SLA",
    icon: Activity
  },
  { 
    value: "$10M+", 
    label: "Cloud Costs Saved", 
    desc: "Through FinOps optimization",
    icon: Wallet
  },
  { 
    value: "24/7", 
    label: "Incident Support", 
    desc: "15-min response time",
    icon: Headphones
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-navy-900 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group relative p-5 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Header */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand/30 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-light" />
                </div>
                {/* Decorative dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors"></div>
              </div>

              {/* Number */}
              <div className="mb-1 md:mb-2">
                <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-light tracking-tight">
                  {stat.value}
                </span>
              </div>

              {/* Label & Desc */}
              <div>
                <h3 className="text-white font-bold text-base md:text-lg mb-1">{stat.label}</h3>
                <p className="text-xs md:text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                  {stat.desc}
                </p>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};