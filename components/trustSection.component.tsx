'use client';

import React from 'react';

const LOGOS = [
  "Acme Corp", "GlobalTech", "Nebula", "Vortex Systems", "Krypton", "Apex"
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by Engineering Teams Worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {LOGOS.map((logo, idx) => (
            <div key={idx} className="text-xl font-bold text-gray-400 flex items-center gap-2">
               <div className="w-6 h-6 bg-gray-300 rounded-sm"></div>
               {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};