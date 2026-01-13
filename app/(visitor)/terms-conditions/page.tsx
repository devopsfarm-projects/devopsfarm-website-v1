'use client';

import { JSX, useEffect } from 'react';
import { siteContent } from '@/constants/mockData/siteContent';
import { FileText, Scale, AlertCircle } from 'lucide-react';

export default function TermsConditions(): JSX.Element{
  const { general } = siteContent;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms and Conditions - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
                <Scale className="w-3 h-3" />
                Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Terms and Conditions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                These Terms govern your use of our website and services. By accessing {general.brandName}, you agree to comply with these terms.
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
                Please read these Terms and Conditions ("Terms") carefully before using the {general.brandName} website or engaging with our consulting services. If you do not agree to these Terms, please do not use our website or services.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">1</span>
                Acceptance of Terms
            </h3>
            <p>
                By accessing or using {general.brandName}'s website, services, and solutions, you accept and agree to be bound by these Terms. We may update or modify these Terms from time to time, and any changes will be posted on this page. Continued use of the website after any changes are made constitutes your acceptance of those changes.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">2</span>
                Services & Solutions
            </h3>
            <p>
                {general.brandName} provides specialized cloud engineering services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Cloud Security & DevSecOps</li>
                <li>Platform Engineering & IDP Implementation</li>
                <li>FinOps & Cost Optimization</li>
                <li>Site Reliability Engineering (SRE)</li>
                <li>Compliance Solutions (HIPAA, PCI-DSS, SOC2)</li>
            </ul>
            <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue our services content at any time, without notice, and without liability to you. Specific engineering engagements are governed by their respective Statements of Work (SOW) or Master Services Agreements (MSA), which supersede these website terms where applicable.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">3</span>
                Client Responsibilities
            </h3>
            <p>You agree to use our website and services only for lawful purposes. You must not:</p>
            <ul className="space-y-3 mt-4 list-none pl-0">
                <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Engage in any illegal, fraudulent, or harmful activities affecting our infrastructure.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Attempt to reverse engineer or interfere with the proper functioning of our platform or proprietary tools.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Access or attempt to access any data, information, or systems not authorized by these Terms.</span>
                </li>
            </ul>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">4</span>
                Intellectual Property
            </h3>
            <p>
                The content, features, and functionality of the {general.brandName} website, including but not limited to text, graphics, logos, images, whitepapers, and software methodologies, are owned by or licensed to {general.brandName} and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-4">
                <strong>For Consulting Clients:</strong> Intellectual property rights regarding deliverables (code, infrastructure configurations) created during paid engagements are governed by the specific MSA signed between the parties.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">5</span>
                Disclaimers & Limitation of Liability
            </h3>
            <p>
                {general.brandName} provides our website and services "as is" and makes no representations or warranties regarding the accuracy, completeness, or reliability of the content. We do not guarantee that the website will be uninterrupted or error-free.
            </p>
            <div className="bg-gray-50 border-l-4 border-brand p-6 my-6 rounded-r-lg">
                <p className="font-medium text-navy-900 mb-0">
                    To the maximum extent permitted by applicable law, {general.brandName} shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of our website or services.
                </p>
            </div>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">6</span>
                Indemnification
            </h3>
            <p>
                You agree to indemnify, defend, and hold harmless {general.brandName}, its officers, employees, agents, and partners from any claims, damages, liabilities, losses, and expenses, including legal fees, arising from your violation of these Terms or your use of our website.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">7</span>
                Governing Law
            </h3>
            <p>
                These Terms are governed by and construed in accordance with the laws of the State of Delaware (US) and Karnataka (India), depending on the entity you are contracting with, without regard to conflict of law principles. Any dispute arising under these Terms will be subject to the exclusive jurisdiction of the competent courts.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">8</span>
                Contact Us
            </h3>
            <p>If you have any questions or concerns regarding these Terms, please contact us at:</p>
            
            <div className="mt-8 bg-slate-50 p-8 rounded-2xl border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Support Contact</h4>
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
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Headquarters</h4>
                        <address className="not-italic text-navy-900 leading-relaxed">
                            {general.brandName} Legal Dept<br />
                            {general.addresses[0].line1}<br />
                            {general.addresses[0].line2}<br />
                            {general.addresses[0].line3}
                        </address>
                    </div>
                </div>
            </div>

            <p className="mt-8 text-sm text-gray-500 text-center">
                By using our website and services, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
            </p>
        </div>
      </div>
    </div>
  );
};