'use client';
import { Twitter, Linkedin, Github, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { siteContent } from '@/constants/mockData/siteContent';
import { Map } from '@/components/Map';

export const Footer: React.FC = () => {
  const { footer, general } = siteContent;
console.log("footer loaded");
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 mb-20">

          {/* Brand Column - Wider spacing on large screens */}
          <div className="md:col-span-4 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-8 group w-fit">
              <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                  <defs>
                    <linearGradient id="footer_logo_gradient" x1="0" y1="24" x2="48" y2="24" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#3B82F6" />
                      <stop offset="0.5" stopColor="#8B5CF6" />
                      <stop offset="1" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                  <path d="M24 24C20 32 8 32 8 24C8 16 20 16 24 24ZM24 24C28 32 40 32 40 24C40 16 28 16 24 24Z"
                    stroke="url(#footer_logo_gradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold text-navy-900 tracking-tight">
                DevOps<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent">Farm</span>
              </span>
            </Link>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm font-medium">
              {general.tagline}
            </p>
            <div className="flex gap-4">
              <a href={general.socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors transition-all duration-300 hover:-translate-y-1"><Twitter className="w-5 h-5" /></a>
              <a href={general.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10       rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors transition-all duration-300 hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
              <a href={general.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors transition-all duration-300 hover:-translate-y-1"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12 pt-2">

            {/* Services Column */}
            <div>
              <h4 className="font-bold text-navy-900 mb-8 text-sm uppercase tracking-widest">Services</h4>
              <ul className="space-y-4">
                {footer.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-600 hover:text-brand transition-colors block text-sm font-medium hover:translate-x-1 transform duration-200">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-bold text-navy-900 mb-8 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-4">
                {footer.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-600 hover:text-brand transition-colors block text-sm font-medium hover:translate-x-1 transform duration-200 flex items-center gap-2 group">
                      {item.name}
                      {item.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-brand/10 text-brand rounded-full border border-brand/20 group-hover:bg-brand group-hover:text-white transition-colors">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column - Improved hierarchy */}
            <div>
              <h4 className="font-bold text-navy-900 mb-8 text-sm uppercase tracking-widest">Contact</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</span>
                    <a href={`mailto:${general.contactEmail}`} className="text-sm font-medium text-navy-900 hover:text-brand transition-colors">{general.contactEmail}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</span>
                    <span className="text-sm font-medium text-navy-900">{general.contactPhone}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                   <div className="flex flex-col w-full"> {/* w-full add karo */}
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Office</span>
                    <span className="text-sm font-medium text-gray-600 leading-relaxed">
                      {general.addresses[0].line1},<br />
                      {general.addresses[0].line2},<br />
                      {general.addresses[0].line3}
                    </span>
 renuM
<div className="mt-4 w-full rounded-lg overflow-hidden border" style={{ height: '250px' }}>
  <Map />
</div>
</div>      
                    
                
                  </div>
 main
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p className="font-medium">&copy; {new Date().getFullYear()} {general.brandName}. All rights reserved.</p>
          <div className="flex gap-8">
            {footer.legal.map((item) => (
              item.href.startsWith('/') ? (
                <Link key={item.name} href={item.href} className="hover:text-navy-900 transition-colors font-medium hover:underline decoration-brand decoration-2 underline-offset-4">{item.name}</Link>
              ) : (
                <a key={item.name} href={item.href} className="hover:text-navy-900 transition-colors font-medium hover:underline decoration-brand decoration-2 underline-offset-4">{item.name}</a>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};