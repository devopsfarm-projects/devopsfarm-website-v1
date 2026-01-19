'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { servicesData } from '@/constants/mockData/servicesData';
import { Button } from '@/components/common/button.component';
import { ArrowLeft, CheckCircle, ArrowRight, Calendar, MessageSquare, Laptop, Layers, ChevronDown, LayoutGrid, Timer, CheckCircle2, Activity, GitBranch, Settings, Code, Eye, Zap, Cloud, Server, Database, Shield, Lock, Key, DollarSign, TrendingDown, Monitor, AlertTriangle, Network, Globe } from 'lucide-react';
import { CTA } from '@/components/common/CTA.component';


// Helper component for Hyperscaler Logos
const AWSLogo = () => (
    <svg viewBox="0 0 100 60" className="w-12 h-12" fill="currentColor">
        <path d="M79.2,38.1c-2.4,0-4.8,0.2-7.2,0.6c-2.4,0.4-4.8,1-7,1.8c-0.2,0.1-0.4,0.3-0.4,0.5c0,0.1,0,0.2,0.1,0.3l1.8,2.3 c0.1,0.1,0.2,0.2,0.3,0.2s0.2,0,0.3-0.1c1.8-0.7,3.7-1.3,5.6-1.7c1.9-0.4,3.9-0.5,5.9-0.5c1.7,0,3.3,0.2,4.8,0.5s2.9,0.8,4.1,1.5 c1.2,0.7,2.2,1.6,2.9,2.7c0.7,1.1,1.1,2.5,1.1,4.1c0,1.3-0.3,2.4-0.8,3.4c-0.5,1-1.2,1.8-2.1,2.5c-0.9,0.7-2,1.2-3.3,1.6 c-1.3,0.4-2.7,0.6-4.2,0.6c-1.5,0-3-0.2-4.4-0.6c-1.4-0.4-2.7-1.1-3.7-2c-1.1-0.9-1.9-2.1-2.5-3.5c-0.6-1.4-0.9-3.1-0.9-5.1 c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9l-4.1-1.3c-0.2-0.1-0.4,0-0.6,0.2c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.4-0.1,0.9-0.1,1.3 c0,0.5,0,0.9,0,1.4c0,2.6,0.4,4.9,1.3,6.9c0.9,2,2.1,3.7,3.7,5.1c1.6,1.4,3.4,2.4,5.5,3.1c2.1,0.7,4.4,1,6.8,1c2.5,0,4.8-0.3,7-1 c2.2-0.7,4.2-1.7,5.9-3.1c1.7-1.4,3-3.1,4-5.1c1-2,1.5-4.3,1.5-6.9c0-2.1-0.5-4-1.4-5.6c-0.9-1.6-2.2-3-3.8-4.1 c-1.6-1.1-3.6-1.9-5.7-2.5C84.3,38.4,81.8,38.1,79.2,38.1z"/>
        <path d="M12.4,34.4c1,0,1.9,0.1,2.8,0.2l0.4-3.5c-1-0.2-2.1-0.3-3.2-0.3c-1.6,0-3,0.2-4.3,0.5c-1.3,0.4-2.5,0.9-3.5,1.7 c-1,0.7-1.7,1.7-2.3,2.8c-0.6,1.2-0.8,2.6-0.8,4.3c0,1.7,0.3,3.1,0.8,4.3c0.6,1.2,1.3,2.2,2.3,3c1,0.8,2.1,1.3,3.4,1.7 c1.3,0.4,2.7,0.5,4.2,0.5c1.2,0,2.4-0.1,3.4-0.4c1.1-0.3,2-0.7,2.8-1.2l-0.5-3.4c-0.8,0.4-1.5,0.7-2.3,0.9c-0.8,0.2-1.6,0.3-2.5,0.3 c-0.8,0-1.6-0.1-2.2-0.3c-0.7-0.2-1.2-0.5-1.7-1c-0.5-0.4-0.8-1-1.1-1.6c-0.3-0.6-0.4-1.4-0.4-2.3c0-1,0.2-1.7,0.5-2.4 c0.3-0.7,0.7-1.2,1.2-1.6c0.5-0.4,1.2-0.7,1.9-0.9C10.7,34.5,11.5,34.4,12.4,34.4z"/>
        <path d="M41.7,46.8c-0.5,1.2-1.2,2.2-2.2,3s-2.1,1.3-3.4,1.7c-1.3,0.4-2.7,0.5-4.2,0.5c-1.2,0-2.4-0.1-3.4-0.4c-1.1-0.3-2-0.7-2.8-1.2 l0.5-3.4c0.8,0.4,1.5,0.7,2.3,0.9c0.8,0.2,1.6,0.3,2.5,0.3c0.8,0,1.6-0.1,2.2-0.3c0.7-0.2,1.2-0.5,1.7-1c0.5-0.4,0.8-1,1.1-1.6 c0.3-0.6,0.4-1.4,0.4-2.3c0-1-0.2-1.7-0.5-2.4c-0.3-0.7-0.7-1.2-1.2-1.6c-0.5-0.4-1.2-0.7-1.9-0.9c-0.8-0.2-1.6-0.3-2.5-0.3 c-0.9,0-1.8,0.1-2.8,0.2l-0.4-3.5c1-0.2,2.1-0.3,3.2-0.3c1.6,0,3,0.2,4.3,0.5c1.3,0.4,2.5,0.9,3.5,1.7c1,0.7,1.7,1.7,2.3,2.8 c0.6,1.2,0.8,2.6,0.8,4.3C42.5,44.2,42.2,45.6,41.7,46.8z"/>
    </svg>
);

const GCPLogo = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
        <path d="M12 .003c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.286c-3.465 0-6.286-2.82-6.286-6.286s2.821-6.286 6.286-6.286c1.733 0 3.298.707 4.437 1.847l-1.921 1.921c-.636-.636-1.517-1.041-2.516-1.041-2.002 0-3.629 1.627-3.629 3.629s1.627 3.629 3.629 3.629c1.472 0 2.748-.881 3.321-2.143h-3.321v-2.571h5.893c.123.633.214 1.307.214 2.036 0 3.39-2.28 5.821-6.107 5.821z"/>
    </svg>
);

const AzureLogo = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
        <path d="M5.483 21.366L0 18.913l9.083-14.853h5.933L5.483 21.366zM15.417 4.06L9.633 13.91l3.034 1.61L24 16.48V4.06h-8.583z"/>
    </svg>
);

// Helper function to get appropriate icon for each capability type
const getCapabilityIcon = (moduleId: string) => {
  const iconMap: Record<string, any> = {
    // Platform Engineering / IDP
    'idp-implementation': GitBranch,
    'enterprise-gitops': GitBranch,
    'infrastructure-as-code': Code,
    'ci-cd-modernization': Settings,

    // SRE / Observability
    'service-reliability-engineering': Activity,
    'observability-engineering': Eye,
    'opentelemetry': Monitor,
    'incident-management': AlertTriangle,
    'chaos-engineering': Zap,
    'cost-optimized-observability': TrendingDown,

    // Cloud Architecture
    'production-kubernetes': Server,
    'serverless-architecture': Cloud,
    'legacy-modernization': Database,
    'multi-region-disaster-recovery': Network,

    // Security
    'compliance-as-code': Shield,
    'zero-trust-architecture': Lock,
    'supply-chain-security': Key,
    'cloud-security-posture': Shield,

    // FinOps
    'cloud-finops': DollarSign,
    'cost-optimization': TrendingDown,
  };

  return iconMap[moduleId] || CheckCircle2; // Default fallback
};

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find(s => s.id === serviceId);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - DevOpsFarm Consulting`;
      window.scrollTo(0, 0);
      setOpenFaqIndex(null);
    }
  }, [service]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-4">Service Not Found</h1>
        <Link href="/">
          <Button variant="outline">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-navy-900 transition-colors mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 lg:pb-24">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-50 via-white to-transparent pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 text-white text-xs font-semibold uppercase tracking-wider mb-6">
                <service.icon className="w-3 h-3 text-accent" />
                {service.title}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
                {service.title} <br/>
                <span className="text-brand bg-clip-text bg-gradient-to-r from-brand to-accent">Solutions for Scale.</span>
              </h1>
              <div className="text-xl text-gray-600 mb-10 leading-relaxed whitespace-pre-line">
                {service.fullContent?.longDescription}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {/* Primary CTA */}
                <Link href="/contact">
                    <Button 
                        size="lg" 
                        className="gap-2 bg-brand hover:bg-brand-dark text-white shadow-xl shadow-brand/20 ring-2 ring-transparent transition-all hover:scale-105"
                    >
                    Book a Discovery Call
                    <Calendar className="w-4 h-4" />
                    </Button>
                </Link>
                
                {/* Secondary CTA */}
                <Link href="/contact">
                    <Button 
                        size="lg" 
                        className="gap-2 bg-white text-navy-900 border border-gray-200 hover:border-brand/50 hover:text-brand hover:shadow-lg transition-all"
                    >
                    Request Demo
                    <Laptop className="w-4 h-4" />
                    </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Abstract Visual */}
            <div className="lg:col-span-5 hidden lg:block relative">
                 {/* Decorative Abstract Graphic */}
                 <div className="relative aspect-square max-w-sm mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="relative h-full w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center text-center">
                         <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 text-brand:hover">
                            <service.icon className="w-10 h-10 text-brand  " />
                         </div>
                         <h3 className="text-2xl font-bold text-navy-900 mb-2">Enterprise Grade</h3>
                         <p className="text-gray-600 mb-6">Designed for scale, security, and velocity.</p>
                         <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-gradient-to-r from-brand to-accent"></div>
                         </div>
                    </div>
                 </div>
            </div>

          </div>
        </div>
      </section>

      {/* Small Vibrant CTA - Interstitial */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-4 mb-10">
         <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
             <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
             
             <div className="relative z-10 flex items-center gap-5 ">
                 <div className="bg- rounded-xl p-3 backdrop-blur-md border border-white/20">
                     <Timer className="w-8 h-8 text-white" />
                 </div>
                 <div className="">
                     <h3 className="text-2xl font-bold text-white mb-1">Need a Quick Review?</h3>
                     <p className="text-blue-100 text-sm">Our principal engineers can audit your {service.title} setup in 1 day.</p>
                 </div>
             </div>
             <div className="relative z-10">
                 <Link href="/contact">
                     <Button className="bg-white text-indigo-600 hover:bg-blue-50 border-none font-bold shadow-lg">
                         Book 1-Day Audit
                     </Button>
                 </Link>
             </div>
         </div>
      </section>



      {/* --- DEDICATED HYPERSCALER EXCELLENCE SECTION --- */}
      {serviceId === 'cloud-engineering' && (
        <section className="py-24 bg-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">Hyperscaler Excellence</h2>
                  <p className="text-gray-500 text-lg">Specialized engineering for the world's most robust cloud ecosystems.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {/* AWS Block */}
                  <div className="bg-slate-50 p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:bg-white hover:border-orange-500/20 transition-all group flex flex-col h-full">
                      <div className="text-orange-500 mb-8 transform group-hover:scale-110 transition-transform">
                          <AWSLogo />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-4 tracking-tight">Managed AWS</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow">
                          Master the paradox of choice. From Control Tower governance to EKS performance and Graviton cost-tuning.
                      </p>
                      <Link 
                          href={`/services/${serviceId}/managed-aws-services`} 
                          className="text-orange-600 font-bold text-sm flex items-center gap-2 group/link border-b-2 border-transparent hover:border-orange-500 w-fit pb-1 transition-all"
                      >
                          Explore AWS Module <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                  </div>

                  {/* GCP Block */}
                  <div className="bg-slate-50 p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:bg-white hover:border-blue-500/20 transition-all group flex flex-col h-full">
                      <div className="text-blue-600 mb-8 transform group-hover:scale-110 transition-transform">
                          <GCPLogo />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-4 tracking-tight">Managed GCP</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow">
                          Engineered for data and AI leaders. Master GKE, BigQuery slot-optimization, and Vertex AI MLOps.
                      </p>
                      <Link 
                          href={`/services/${serviceId}/managed-gcp-services`} 
                          className="text-blue-600 font-bold text-sm flex items-center gap-2 group/link border-b-2 border-transparent hover:border-blue-600 w-fit pb-1 transition-all"
                      >
                          Explore GCP Module <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                  </div>

                  {/* Azure Block */}
                  <div className="bg-slate-50 p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:bg-white hover:border-indigo-500/20 transition-all group flex flex-col h-full">
                      <div className="text-indigo-600 mb-8 transform group-hover:scale-110 transition-transform">
                          <AzureLogo />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-4 tracking-tight">Managed Azure</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow">
                          Enterprise-grade hybrid cloud. Integration with Entra ID, AKS, Azure DevOps, and Microsoft Sentinel.
                      </p>
                      <Link 
                          href={`/services/${serviceId}/managed-azure-services`} 
                          className="text-indigo-600 font-bold text-sm flex items-center gap-2 group/link border-b-2 border-transparent hover:border-indigo-600 w-fit pb-1 transition-all"
                      >
                          Explore Azure Module <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                  </div>
              </div>
           </div>
        </section>
      )}

        {/* --- CAPABILITIES & MODULES --- */}
        <section className="py-16 bg-slate-50 border-y border-gray-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-navy-900 mb-4 tracking-tight">Capabilities & Modules</h2>
                  <p className="text-gray-500 text-base">Specialized engineering practices designed for your specific challenges.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {service.fullContent?.subServices?.filter(s => !s.id.includes('managed-')).map((module, i) => {
                    const IconComponent = getCapabilityIcon(module.id);
                    return (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand/20 transition-all group flex flex-col h-full">
                        {/* Dynamic Icon based on capability type */}
                        <div className="w-8 h-8 rounded-full border-2 border-navy-900 flex items-center justify-center mb-6 group-hover:bg-navy-900 group-hover:text-white transition-all duration-300">
                            <IconComponent className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <h3 className="text-xl font-bold text-navy-900 mb-3 tracking-tight leading-tight">{module.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                            {module.description}
                        </p>
                        <Link
                            href={`/services/${serviceId}/${module.id}`}
                            className="text-brand font-bold text-sm flex items-center gap-2 group/link border-b-2 border-transparent hover:border-brand w-fit pb-1 transition-all"
                        >
                            Explore Module <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    );
                  })}
              </div>
           </div>
        </section>




      {/* Secondary Content / Platform Engineering Section (New) */}
      {service.fullContent?.secondaryHeadline && (
          <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
             <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                     <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/20 text-brand-light text-xs font-bold uppercase tracking-wider mb-6 border border-brand/30">
                            Strategy
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">{service.fullContent.secondaryHeadline}</h2>
                        <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                            {service.fullContent.secondaryDescription}
                        </div>
                     </div>
                     <div className="relative">
                         {/* Visual Representation of IDP */}
                         <div className="bg-navy-800 rounded-xl border border-navy-700 p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                             <div className="flex items-center gap-2 mb-4 border-b border-navy-700 pb-4">
                                 <div className="flex gap-1.5">
                                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                 </div>
                                 <div className="text-xs text-gray-400 font-mono ml-2">portal.devopsfarm.io</div>
                             </div>
                             <div className="space-y-4">
                                 <div className="flex justify-between items-center bg-navy-900 p-4 rounded-lg border border-navy-700">
                                     <div>
                                         <div className="text-white font-bold">Create Microservice</div>
                                         <div className="text-xs text-gray-500">Spring Boot • Go • Node.js</div>
                                     </div>
                                     <Button size="sm" className="py-1 px-3 text-xs">Launch</Button>
                                 </div>
                                 <div className="flex justify-between items-center bg-navy-900 p-4 rounded-lg border border-navy-700 opacity-60">
                                     <div>
                                         <div className="text-white font-bold">Provision Database</div>
                                         <div className="text-xs text-gray-500">Postgres • Redis • Mongo</div>
                                     </div>
                                     <Button size="sm" variant="secondary" className="py-1 px-3 text-xs bg-navy-800 border-navy-600 text-gray-400">Locked</Button>
                                 </div>
                                  <div className="flex justify-between items-center bg-navy-900 p-4 rounded-lg border border-navy-700">
                                     <div>
                                         <div className="text-white font-bold">View DORA Metrics</div>
                                         <div className="text-xs text-green-400">Deployment Freq: High</div>
                                     </div>
                                     <Button size="sm" variant="outline" className="py-1 px-3 text-xs border-navy-600 text-white">View</Button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
          </section>
      )}

      {/* Benefits Section - Two Column Layout */}
      <section className="py-20 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">Strategic Advantages</h2>
                <p className="text-gray-600">Why leading engineering organizations choose this approach.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {service.fullContent?.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-5 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-6 h-6 text-brand" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-navy-900 mb-2">{benefit.title}</h4>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{benefit.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SRE Case Study Spotlight - Conditional Render */}
      {service.id === 'sre-observability' && (
        <section className="py-20 bg-slate-50 border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col md:flex-row group transition-all hover:border-brand/50 hover:shadow-2xl">
                    <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                        <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                            SRE Case Study
                        </div>
                        <img 
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop" 
                            alt="Data Center" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="p-8 md:w-3/5 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3 text-red-500 font-bold text-sm">
                            <Activity className="w-4 h-4" />
                            Disaster Recovery
                        </div>
                        <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-brand transition-colors">
                            Surviving a Total AWS Region Outage
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            See how we architected an Active-Active setup for a Top 10 Retailer, achieving <strong>RPO=0</strong> and <strong>RTO &lt; 60s</strong> during Cyber Monday traffic spikes.
                        </p>
                        <Link href="/case-studies/retail-dr" className="inline-flex items-center font-bold text-navy-900 hover:text-brand transition-colors">
                            Read Engineering Story <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      )}

      {/* Methodology Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Methodology</h2>
                <p className="text-gray-600">We don't just execute; we strategize. Here is how we engage.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {service.fullContent?.process.map((step, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                        <div className="absolute top-0 right-0 bg-navy-900 text-white px-4 py-2 rounded-bl-xl text-sm font-bold">0{idx + 1}</div>
                        <h3 className="text-xl font-bold text-navy-900 mb-4 pr-12">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Tech Details (SEO Rich) */}
      <section className="py-20 bg-navy-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 mb-4 text-brand-light font-bold uppercase tracking-widest text-xs">
                        <Layers className="w-4 h-4" />
                        Tech Stack
                    </div>
                    <h2 className="text-3xl font-bold mb-6">Technical Capabilities</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Our engineers are certified experts in the specific toolchains required to deliver this service. We don't guess; we engineer.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.details?.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-brand"></div>
                                <span className="font-medium text-white">{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Steady Component - No Hover Movements */}
                <div className="bg-gradient-to-br from-brand to-brand-dark p-1 rounded-2xl shadow-2xl">
                    <div className="bg-navy-800 p-8 rounded-xl h-full flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                        <p className="text-gray-300 mb-8">
                            Stop wrestling with infrastructure and start shipping features. Schedule a technical deep dive with our principal engineers.
                        </p>
                        <Link href="/contact" className="w-full">
                            <Button fullWidth variant="primary" className="justify-between group shadow-lg shadow-brand/20">
                                Book Consultation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQs - Two Column Layout */}
      <section className="py-20 border-t border-gray-100 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">Common technical questions from engineering leaders.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 items-start">
                {service.fullContent?.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                        <div 
                            key={idx} 
                            className={`bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:border-brand/30 hover:shadow-sm ${isOpen ? 'ring-1 ring-brand/10 border-brand/30 shadow-md' : ''}`}
                        >
                            <button 
                                onClick={() => toggleFaq(idx)}
                                className="w-full flex items-start justify-between p-6 text-left focus:outline-none"
                                aria-expanded={isOpen}
                            >
                                <div className="flex items-start gap-3 pr-4">
                                    <MessageSquare className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors ${isOpen ? 'text-brand' : 'text-gray-400'}`} />
                                    <span className={`font-bold transition-colors ${isOpen ? 'text-navy-900' : 'text-navy-800'}`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <ChevronDown 
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1 ${isOpen ? 'rotate-180 text-brand' : ''}`} 
                                />
                            </button>
                            
                            <div 
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 pl-14">
                                        <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
          </div>
      </section>

      {/* Floating Sticky CTA Mobile only */}
      <div className="md:hidden">
          <CTA />
      </div>
      
      {/* Footer CTA for desktop */}
      <div className="hidden md:block">
          <CTA />
      </div>

    </div>
  );
};