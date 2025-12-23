import React, { useEffect } from 'react';
import { siteContent } from '../constants/siteContent';
import { Cookie, Shield, Settings } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
  const { general } = siteContent;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cookie Policy - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
                <Cookie className="w-3 h-3" />
                Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                This policy explains how {general.brandName} uses cookies and similar technologies to recognize you when you visit our website.
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
                This Cookie Policy explains how {general.brandName} ("we," "us," or "our") uses cookies and similar technologies to collect and store information when you visit our website. By using our website, you consent to the use of cookies as described in this policy.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">1</span>
                What Are Cookies?
            </h3>
            <p>
                Cookies are small text files that are stored on your device (computer, tablet, smartphone, etc.) when you visit a website. Cookies help improve your browsing experience by remembering your preferences, analyzing website performance, and enabling certain website features.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-navy-900 mb-2">Session Cookies</h4>
                    <p className="text-sm">Temporary cookies that expire once you close your browser. Used to enable features during your specific visit.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-navy-900 mb-2">Persistent Cookies</h4>
                    <p className="text-sm">Remain on your device for a set period. They help remember your preferences across multiple visits.</p>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">2</span>
                How We Use Cookies
            </h3>
            <p>We use cookies for several purposes, including:</p>
            <ul className="space-y-3 mt-4 list-none pl-0">
                <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 flex-shrink-0"></div>
                    <span><strong>Essential Cookies:</strong> Necessary for security, page navigation, and access to secure areas. The site may not function without them.</span>
                </li>
                <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 flex-shrink-0"></div>
                    <span><strong>Performance & Analytics:</strong> To understand how visitors interact with our website, helping us improve UX and content.</span>
                </li>
                <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 flex-shrink-0"></div>
                    <span><strong>Functional Cookies:</strong> To remember your preferences (like region or language) for a personalized experience.</span>
                </li>
                <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 flex-shrink-0"></div>
                    <span><strong>Marketing Cookies:</strong> To track browsing activity and deliver relevant advertisements based on your interests.</span>
                </li>
            </ul>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">3</span>
                Cookies We Use
            </h3>
            <p>Examples of cookies used on {general.brandName}:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Google Analytics:</strong> To collect anonymous data on traffic and usage patterns.</li>
                <li><strong>Advertising Cookies:</strong> Third-party services (LinkedIn, Google Ads) to serve relevant B2B ads.</li>
                <li><strong>Social Media Cookies:</strong> Enabling sharing buttons and tracking interactions with social platforms.</li>
            </ul>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">4</span>
                Managing Cookies
            </h3>
            <p>
                You have the option to manage your cookie preferences. Most web browsers allow you to control cookies through settings (blocking, deleting, or alerting).
            </p>
            <div className="bg-brand/5 border-l-4 border-brand p-6 my-6 rounded-r-lg">
                <p className="font-medium text-navy-900 mb-0 text-sm">
                    Note: Blocking essential cookies may affect your experience on our website and limit your ability to use certain features (like the client portal).
                </p>
            </div>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">5</span>
                Third-Party Cookies
            </h3>
            <p>
                We may allow third-party services (advertisers or analytics providers) to set cookies on your device. We do not control these cookies. Please review the privacy policies of services like Google, LinkedIn, and Meta for more information.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">6</span>
                Changes to This Policy
            </h3>
            <p>
                We may update this Cookie Policy from time to time. We encourage you to review this policy periodically to stay informed about how we are using cookies.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center text-sm font-bold border border-navy-100">7</span>
                Contact Us
            </h3>
            <p>If you have any questions about our use of cookies, please contact us at:</p>
            
            <div className="mt-8 bg-slate-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
                    <div className="space-y-2 text-center md:text-left">
                        <div className="font-bold text-navy-900">Email</div>
                        <a href={`mailto:${general.contactEmail}`} className="text-brand hover:underline block">{general.contactEmail}</a>
                    </div>
                    <div className="h-px w-full md:w-px md:h-12 bg-gray-200"></div>
                    <div className="space-y-2 text-center md:text-left">
                        <div className="font-bold text-navy-900">Phone</div>
                        <div className="text-gray-600">{general.contactPhone}</div>
                    </div>
                    <div className="h-px w-full md:w-px md:h-12 bg-gray-200"></div>
                    <div className="space-y-2 text-center md:text-left">
                        <div className="font-bold text-navy-900">Address</div>
                        <div className="text-gray-600 text-sm">
                            {general.addresses[0].line1}<br/>
                            {general.addresses[0].line2}<br/>
                            {general.addresses[0].line3}
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-8 text-sm text-gray-500 text-center">
                By using our website, you consent to the use of cookies as described in this Cookie Policy.
            </p>
        </div>
      </div>
    </div>
  );
};