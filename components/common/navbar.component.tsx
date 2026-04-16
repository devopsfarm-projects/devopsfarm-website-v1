'use client';

import { useState, useEffect, JSX } from 'react';
import { Menu, X, ChevronDown, Cloud, Shield, Activity, DollarSign, Cpu, GitBranch, ArrowRight, LayoutGrid, Heart, Server, GraduationCap, LandmarkIcon } from 'lucide-react';
import { Button } from '@/components/common/button.component';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && pathname === '/') {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (href.startsWith('/#')) {
      router.push('/');
      setTimeout(() => {
        const id = href.replace('/#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const servicesLinks = [
    { title: 'Platform Engineering', href: '/services/devops-engineering', icon: GitBranch, desc: 'IDPs & GitOps Workflows' },
    { title: 'Cloud Architecture', href: '/services/cloud-engineering', icon: Cloud, desc: 'Scalable Cloud Native Systems' },
    { title: 'SRE & Observability', href: '/services/sre-observability', icon: Activity, desc: 'Reliability & Monitoring' },
    { title: 'DevSecOps', href: '/services/cloud-security', icon: Shield, desc: 'Security Automation' },
    { title: 'Cloud FinOps', href: '/services/cloud-finops', icon: DollarSign, desc: 'Cost Optimization' },
    { title: 'Production MLOps', href: '/services/aiops-mlops', icon: Cpu, desc: 'AI/ML Infrastructure' },
  ];

  const industriesLinks = [
    { title: 'SaaS & ISVs', href: '/industries/saas', icon: Server, desc: 'Scale tenant architecture' },
    { title: 'HealthTech', href: '/industries/healthtech', icon: Heart, desc: 'HIPAA-compliant clouds' },
    { title: 'HPC & AI Infra', href: '/industries/hpc', icon: Cpu, desc: 'GPU Benchmarking & LLMs' },
    { title: 'FinTech', href: '/industries/fintech', icon: DollarSign, desc: 'Secure financial platforms' },
    { title: 'EdTech', href: '/industries/edtech', icon: GraduationCap, desc: 'Video & LMS Infrastructure' },
    { title: 'Banking', href: '/industries/banking', icon: LandmarkIcon, desc: 'Core banking modernization' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
          }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`bg-white/50 backdrop-blur-sm rounded-2xl ${isScrolled ? '' : 'border border-gray-100/50'} px-2 py-2 md:px-6 md:py-3 flex items-center justify-between transition-all relative`}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group cursor-pointer z-50" onClick={() => window.scrollTo(0, 0)}>
              <div className="relative w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm ">
                  <defs>
                    <linearGradient id="logo_gradient" x1="0" y1="24" x2="48" y2="24" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#3B82F6" />
                      <stop offset="0.5" stopColor="#8B5CF6" />
                      <stop offset="1" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                  <path d="M24 24C20 32 8 32 8 24C8 16 20 16 24 24ZM24 24C28 32 40 32 40 24C40 16 28 16 24 24Z"
                    stroke="url(#logo_gradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-navy-900">
                DevOps<span className="text-brand">Farm</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">

              {/* Services Dropdown Trigger */}
              <div
                className="relative group "
                onMouseEnter={() => setActiveDropdown('services')}
              >
                <button
                  className={`text-[14px] font-medium flex items-center gap-1 transition-colors py-4   ${activeDropdown === 'services' ? 'text-brand' : 'text-gray-600 hover:text-navy-900'}`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 bg-brand:hover ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Industries Dropdown Trigger */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('industries')}
              >
                <button
                  className={`text-[14px] font-medium flex items-center gap-1 transition-colors py-4 .bg-brand:hover ${activeDropdown === 'industries' ? 'text-brand' : 'text-gray-600 hover:text-navy-900'}`}
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <Link href="/case-studies" className="text-[14px] font-medium text-gray-600 hover:text-navy-900 transition-colors py-4" onMouseEnter={() => setActiveDropdown(null)}>
                Case Studies
              </Link>
              <Link href="/about-us" className="text-[14px] font-medium text-gray-600 hover:text-navy-900 transition-colors py-4" onMouseEnter={() => setActiveDropdown(null)}>
                About
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block z-50">
              <Link href="/contact">
                <Button size="sm" className="font-bold px-6 bg-navy-900 hover:bg-brand-dark text-black border-0">
                  Book Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              className="md:hidden p-2 text-navy-900 z-50 relative"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mega Menus Container - Full Width relative to max-w-7xl container */}
          <div
            className={`absolute top-full left-0 right-0 pt-4 transition-all duration-300 origin-top z-40 px-6 lg:px-8 ${activeDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}
            onMouseEnter={() => { }}
          >
            {/* Background Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden max-w-7xl mx-auto">

              {/* Services Content */}
              {activeDropdown === 'services' && (
                <div className="flex flex-col lg:flex-row gap-2">
                  {/* Links Grid */}
                  <div className="flex-1 p-6 grid grid-cols-2 gap-x-8 gap-y-6">
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-4 group rounded-xl p-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all text-brand">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-navy-900 text-sm group-hover:text-brand transition-colors mb-0.5">{link.title}</div>
                          <div className="text-xs text-gray-500 font-medium">{link.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Featured Card */}
                  <div className="w-full lg:w-80 bg-slate-50 rounded-xl p-6 flex flex-col justify-between border border-gray-100">
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Featured Resource</div>
                      <h4 className="font-bold text-navy-900 text-lg mb-2">Scaling Cloud? Costs Add up Fast.</h4>
                      <p className="text-sm text-gray-600 mb-6">
                        We helped Housing.com deploy 3x faster and reduce lower cloud costs by 30%.
                      </p>
                    </div>
                    <Link href="/case-studies/">
                     <Button
  variant="outline"
  size="sm"
  fullWidth
 className="bg-white text-navy-900 hover:!bg-black hover:!text-white border-gray-300"
>
  Read Case Study
</Button>
                    </Link>
                  </div>
                </div>
              )}
              {/* Industries Content */}
              {activeDropdown === 'industries' && (
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="flex-1 p-6 grid grid-cols-2 gap-x-8 gap-y-6">
                    {industriesLinks.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-4 group rounded-xl p-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all text-navy-600">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-navy-900 text-sm group-hover:text-brand transition-colors mb-0.5">{link.title}</div>
                          <div className="text-xs text-gray-500 font-medium">{link.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="w-full lg:w-80 bg-violet-600 text-white rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-xs font-bold text-brand-light uppercase tracking-wider mb-4">Industry Focus</div>
                      <h4 className="font-bold text-white text-lg mb-2">Specialized Compliance?</h4>
                      <p className="text-sm text-gray-100 mb-6">
                        From HIPAA to PCI-DSS, we engineer compliant cloud platforms for regulated industries.
                      </p>
                    </div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 translate-y-10"></div>
                    <Link href="/contact" className="relative z-10">
                      <Button size="sm" fullWidth className="bg-violet text-white hover:bg-white border-none">
                        Consult an Architect
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-navy-900/40 backdrop-blur-md z-[50] transition-opacity duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[320px] bg-white z-[60] shadow-2xl transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full relative">

          {/* Drawer Header */}
          <div className="px-6 py-6 flex items-center justify-between border-b border-gray-50">
            <span className="text-lg font-bold text-navy-900">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-gray-400 hover:text-navy-900 transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
            {/* Mobile Services */}
            <div className="py-2">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Services</div>
              {servicesLinks.map(link => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-navy-900 hover:text-brand"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="h-px bg-gray-100 my-2"></div>

            {/* Mobile Industries */}
            <div className="py-2">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Industries</div>
              {industriesLinks.map(link => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-navy-900 hover:text-brand"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="h-px bg-gray-100 my-2"></div>

            <Link href="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-bold text-navy-900">Case Studies</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-bold text-navy-900">Blog</Link>
            <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-bold text-navy-900">About</Link>
            <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-brand transition-colors block text-sm font-medium hover:translate-x-1 transform duration-200 flex items-center gap-2 group">
              Careers
              <span className="px-2 py-0.5 text-[10px] font-bold bg-brand/10 rounded-full border border-brand/20 group-hover:bg-brand group-hover:text-white transition-colors">HIRING</span>
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-bold text-navy-900">Contact</Link>
          </div>
          {/* Prominent CTA */}
          <div className="p-6 border-t border-gray-50 bg-gray-50/50">
            <Button
              fullWidth
              size="lg"
              className="justify-center group bg-brand hover:bg-brand-dark shadow-xl shadow-brand/20 text-white py-4 text-lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push('/contact');
              }}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};