'use client';

import { JSX, useEffect } from 'react';
import { siteContent } from '@/constants/mockData/siteContent';
import { Shield, Lock, FileText } from 'lucide-react';

export default function PrivacyPolicy(): JSX.Element {
  const { general } = siteContent;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
                <Shield className="w-3 h-3" />
                Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                At {general.brandName}, we are committed to protecting your privacy and ensuring the security of your personal data.
            </p>
            <p className="text-sm text-gray-400 mt-4">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="prose prose-lg prose-slate max-w-none text-gray-600">
            <p className="lead text-xl">
                This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website, use our services, or interact with us in other ways. Please read this carefully to understand our views and practices regarding your personal data.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">1</span>
                Information We Collect
            </h3>
            <p>We collect different types of information to provide and improve our services to you:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Personal Information:</strong> This includes any information that you provide directly to us, such as your name, email address, phone number, billing information, and other contact details when you register for an account, request support, or sign up for our services.</li>
                <li><strong>Usage Data:</strong> We collect information about how you access and use our services, including your IP address, browser type, operating system, referring URLs, pages viewed, click-through data, navigation data, and the time and date of your visit.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to monitor activity on our website and collect usage data. Cookies help us analyze website traffic, remember your preferences, and enhance site performance. By using our website, you consent to the use of cookies for these purposes.</li>
            </ul>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">2</span>
                How We Use Your Information
            </h3>
            <p>We use the information we collect in various ways, including:</p>
            <ul className="grid md:grid-cols-2 gap-4 mt-4 list-none pl-0">
                {[
                    "To provide, operate, and maintain our services.",
                    "To improve, personalize, and expand our website.",
                    "To process transactions and manage your account.",
                    "To communicate with you regarding updates.",
                    "To understand user behavior and improve UX.",
                    "To comply with legal obligations."
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                    </li>
                ))}
            </ul>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">3</span>
                Log Files
            </h3>
            <p>
                {general.brandName} follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and possibly the number of clicks. This data is not linked to any personally identifiable information and is used for analytical purposes.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">4</span>
                Advertising Partners Privacy Policies
            </h3>
            <p>
                {general.brandName} may use third-party advertising partners to serve ads when you visit our website. These partners may use cookies and web beacons to collect non-personally identifiable information. We do not have access to or control over these cookies. You should review the privacy policies of these third-party advertisers (such as Google Ads, LinkedIn Ads) for more information.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">5</span>
                CCPA Privacy Rights
            </h3>
            <p>Under the California Consumer Privacy Act (CCPA), California residents have certain rights regarding their personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Right to Access:</strong> Request access to the personal information we have collected about you.</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information, subject to certain exceptions.</li>
                <li><strong>Right to Opt-Out:</strong> Request to opt-out of the sale of your personal information.</li>
            </ul>
            <p className="mt-4 text-sm bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800">
                {general.brandName} does not sell your personal information to third parties. If this practice changes, we will notify you immediately.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">6</span>
                GDPR Data Protection Rights
            </h3>
            <p>If you are located in the European Union (EU), you have the following rights under the General Data Protection Regulation (GDPR):</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Right to Access</li>
                <li>Right to Rectification</li>
                <li>Right to Erasure ("Right to be forgotten")</li>
                <li>Right to Restriction of Processing</li>
                <li>Right to Data Portability</li>
                <li>Right to Object</li>
            </ul>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">7</span>
                Data Security & Retention
            </h3>
            <p>
                We take appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">8</span>
                Contact Us
            </h3>
            <p>If you have any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us at:</p>
            
            <div className="mt-8 bg-slate-50 p-8 rounded-2xl border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Digital Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-navy-900">Email:</span>
                                <a href={`mailto:${general.contactEmail}`} className="text-brand hover:underline">{general.contactEmail}</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-navy-900">Phone:</span>
                                <span>{general.contactPhone}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Postal Address</h4>
                        <address className="not-italic text-navy-900 leading-relaxed">
                            {general.brandName} HQ<br />
                            {general.addresses[0].line1}<br />
                            {general.addresses[0].line2}<br />
                            {general.addresses[0].line3}
                        </address>
                    </div>
                </div>
            </div>

            <p className="mt-8 text-sm text-gray-500 text-center">
                By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
        </div>
      </div>
    </div>
  );
};