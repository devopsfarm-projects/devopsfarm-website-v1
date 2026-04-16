'use client';
import { JSX, useEffect, useState } from 'react';
import { blogData } from '@/constants/mockData/blogData';
import Link from 'next/link';
import { Calendar, ArrowRight, Search, Zap } from 'lucide-react';
import { CTA } from '@/components/common/CTA.component';
import { Button } from '@/components/common/button.component';

export default function BlogPage(): JSX.Element{
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog - DevOpsFarm";
  }, [currentPage]);

  const featuredPost = blogData.find(post => post.featured) || blogData[0];
  
  // Filter out featured post from the main list
  const allOtherPosts = blogData.filter(post => post.id !== featuredPost.id);
  
  // Pagination Logic
  const totalPages = Math.ceil(allOtherPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = allOtherPosts.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 800, behavior: 'smooth' }); // Scroll to list start
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white font-sans text-navy-900">
      
      {/* Search & Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Cloud, Data, and Security Insights</h1>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
              Dive into our blog for tactical breakdowns, architecture deep-dives, and practical advice for Security, DevOps, and Platform Engineering teams.
          </p>
          <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by anything..." 
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
              />
          </div>
      </div>

      {/* Featured Post (Only show on first page) */}
      {currentPage === 1 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-lg shadow-brand/20">
                        Featured Blog
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 leading-tight">
                        {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg line-clamp-3">
                        {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100 flex items-center justify-center bg-brand/10 text-brand font-bold">
                                DF
                            </div>
                            <span className="font-bold text-navy-900">by {featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>{featuredPost.date}</span>
                        </div>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                        <Button className="bg-brand hover:bg-brand-dark border-none shadow-lg shadow-brand/20 text-white px-8">
                            {featuredPost.ctaText || "READ NOW"}
                        </Button>
                    </Link>
                </div>
                <div className="lg:w-1/2 w-full">
                    <Link href={`/blog/${featuredPost.id}`}>
                        <div className="rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
                            <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            
                            {/* Decorative Element */}
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 z-20">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-xs font-bold text-navy-900">Latest Insight</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="bg-navy-900 py-16 mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-1/3 h-full bg-brand/10 blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div className="text-white max-w-lg">
                      <h3 className="text-2xl font-bold mb-3">Subscribe to DevOpsFarm</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Receive timely industry updates, in-depth analysis, and insider perspectives in cloud innovation, all delivered straight to your inbox.
                      </p>
                  </div>
                  <div className="flex w-full md:w-auto gap-2">
                      <div className="relative flex-1 md:w-96">
                          <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full pl-6 pr-36 py-4 rounded-full border-none focus:ring-2 focus:ring-brand outline-none text-navy-900 shadow-xl"
                          />
                          <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand text-white px-6 rounded-full font-bold text-sm hover:bg-brand-dark transition-colors">
                              Subscribe
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Blog List */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24 space-y-20">
          {currentPosts.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start group">
                  <div className="md:w-5/12 w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md">
                      <Link href={`/blog/${post.id}`}>
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                          
                          {/* Brand watermark */}
                          <div className="absolute top-4 left-4 flex items-center gap-2">
                              <div className="bg-white/90 backdrop-blur px-2.5 py-1 rounded-md text-[10px] font-bold text-navy-900 border border-white/20 shadow-sm flex items-center gap-1.5">
                                  <Zap className="w-3 h-3 text-brand" fill="currentColor" />
                                  <span className="tracking-wide">DEVOPSFARM</span>
                              </div>
                          </div>
                      </Link>
                  </div>
                  <div className="md:w-7/12 py-2">
                      <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand transition-colors leading-tight">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base line-clamp-3">
                          {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-[10px]">
                                      DF
                                  </div>
                                  <span className="font-bold text-navy-700">{post.author}</span>
                              </div>
                              <div className="w-px h-8 bg-gray-200"></div>
                              <div className="flex items-center gap-1.5">
                                  <Calendar className="w-3.5 h-3.5" />
                                  <span>{post.date}</span>
                              </div>
                          </div>
                          
                          <Link href={`/blog/${post.id}`}>
                              <button className="flex items-center gap-1 pl-4 pr-2 py-2 bg-brand text-white rounded-full text-[10px] font-bold hover:bg-brand-dark transition-all shadow-md shadow-brand/20 group-hover:pr-3 uppercase tracking-wider">
                                  {post.ctaText || "READ MORE"}
                                  <ArrowRight className="w-3 h-3 ml-1" />
                              </button>
                          </Link>
                      </div>
                  </div>
              </div>
          ))}
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 pt-12 border-t border-gray-100">
                <button 
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 h-10 rounded-full bg-gray-100 text-gray-500 font-bold flex items-center justify-center hover:bg-gray-200 text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    PREV
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button 
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-transform hover:-translate-y-1 ${
                            currentPage === page 
                            ? 'bg-brand text-white shadow-lg shadow-brand/30' 
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                    >
                        {page}
                    </button>
                ))}

                <button 
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 h-10 rounded-full bg-gray-100 text-gray-500 font-bold flex items-center justify-center hover:bg-gray-200 text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    NEXT
                </button>
            </div>
          )}
      </section>

      {/* Highlights Stats */}
      <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <div className="relative inline-block mb-16">
                  <h2 className="text-3xl font-bold text-navy-900 relative z-10">DevOpsFarm Highlights</h2>
                  {/* Decorative Sparkle */}
                  <div className="absolute -top-6 -right-10 pointer-events-none">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" fill="#7C3AED" fillOpacity="0.2" />
                      </svg>
                  </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
                  {[
                      { val: "15+", label: "Complex applications deployed on AWS using EKS/ECS" },
                      { val: "45+", label: "Cloud migrations successfully completed" },
                      { val: "50+", label: "DevOps projects executed on AWS and Azure" },
                      { val: "40+", label: "Certified cloud architects delivering expert solutions" },
                      { val: "100+", label: "Applications optimized across different industries" }
                  ].map((stat, i) => (
                      <div key={i} className="flex flex-col items-center group">
                          <div className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-4 group-hover:text-brand transition-colors">{stat.val}</div>
                          <div className="h-1 w-8 bg-gray-200 mb-4 rounded-full group-hover:bg-brand transition-colors"></div>
                          <p className="text-xs font-medium text-gray-500 leading-relaxed max-w-[160px]">{stat.label}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <CTA />
    </div>
  );
};