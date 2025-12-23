import React, { useEffect } from 'react';
import { Button } from './Button';
import { MapPin, Mail, Phone, Send, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../constants/siteContent';

export const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - DevOpsFarm";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Let's Build Something Great</h1>
          <p className="text-xl text-gray-600">
            Ready to optimize your infrastructure? Our architects are ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info & Offices */}
          <div className="lg:col-span-5 space-y-8">
             {/* Info Cards */}
             {/* <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-navy-900">Corporate HQ</h3>
                    <Globe className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cabin 477, Venture X Workspaces<br/>
                  4th Floor, Landmark Cyberpark<br/>
                  Sector 67, Gurugram, Haryana, 122018
                </p>
                <div className="flex items-center gap-3 text-gray-600 mb-6">
                    <Mail className="w-5 h-5 text-brand" />
                    <a href="mailto:hello@devopsfarm.io" className="hover:text-brand transition-colors">hello@devopsfarm.io</a>
                </div>
                <Button variant="outline" className="w-full gap-2 group">
                    <MapPin className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
                    Get Directions
                </Button>
             </div> */}

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-navy-900">Registered Address</h3>
                    <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                 DevOpsFarm, Bhaskar Circle,<br/>               
                 Near Sangwan Medical Store, Ratanada,<br/>
                 Jodhpur, Rajasthan 342011
                </p>
                <div className="flex items-center gap-3 text-gray-600 mb-6">
                    <Phone className="w-5 h-5 text-brand" />
                    <span>+91 (800) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 mb-6">
                    <Mail className="w-5 h-5 text-brand" />
                    <a href="mailto:query@devopsfarm.in" className="hover:text-brand transition-colors">query@devopsfarm.in</a>
                </div>
                <Button variant="outline" className="w-full gap-2 group">
                    <MapPin className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
                    Get Directions
                </Button>
             </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7">
            <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-2">How can we help?</h2>
                    <p className="text-gray-400 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
                    
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Name*</label>
                                <input required type="text" className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:border-navy-600" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Company*</label>
                                <input required type="text" className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:border-navy-600" placeholder="Acme Inc." />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email*</label>
                                <input required type="email" className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:border-navy-600" placeholder="john@company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Phone*</label>
                                <input required type="tel" className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:border-navy-600" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Country*</label>
                            <input required type="text" className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:border-navy-600" placeholder="United States" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:border-navy-600" placeholder="Tell us about your project or challenge..."></textarea>
                        </div>

                        <div className="flex items-start gap-3">
                            <input required type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-gray-600 bg-navy-800 text-brand focus:ring-brand focus:ring-offset-navy-900" />
                            <label htmlFor="terms" className="text-sm text-gray-400">
                                I agree to the <a href="/terms-conditions" className="text-brand hover:text-brand-light underline">Terms and Conditions</a> and <a href="/privacy-policy" className="text-brand hover:text-brand-light underline">Privacy Policy</a>.
                            </label>
                        </div>

                        <Button fullWidth size="lg" className="bg-brand hover:bg-brand-dark text-white font-bold py-4 text-lg shadow-lg shadow-brand/25">
                            Submit
                            <Send className="ml-2 w-5 h-5" />
                        </Button>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};