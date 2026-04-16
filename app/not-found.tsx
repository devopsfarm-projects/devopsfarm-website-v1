'use client';
import './globals.css';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useState } from 'react';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');

  const popularPages = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <div className="flex items-center justify-center px-6 py-24 mt-20">
        <div className="max-w-4xl w-full text-center">
        {/* Large 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-[180px] md:text-[240px] font-serif font-bold text-olive/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-cream/90 backdrop-blur-sm px-8 py-4 rounded-2xl border border-olive/20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive mb-2">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600">
                {"The page you're looking for doesn't exist or has been moved."}
              </p>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for pages..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-[#e5e1d4] rounded-xl focus:ring-2 focus:ring-olive focus:border-transparent transition-all outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-olive hover:bg-olive/90 text-white font-bold rounded-xl transition-all shadow-sm"
          >
            <Home className="w-5 h-5" />
            <span>Go to Homepage</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tan hover:bg-[#e2d8c3] text-gray-900 font-bold rounded-xl transition-all shadow-sm border border-black/5"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Popular Pages */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-[#e5e1d4] p-8">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="px-6 py-3 bg-cream hover:bg-tan text-gray-700 hover:text-olive rounded-lg transition-all border border-[#e5e1d4] font-medium"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Help Text */}
        <p className="mt-8 text-gray-500">
          Need help? <Link href="/contact" className="text-olive hover:underline font-medium">Contact our support team</Link>
        </p>
        </div>
      </div>
    </div>
  );
}
