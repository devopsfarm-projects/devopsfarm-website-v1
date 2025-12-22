import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { Button } from './Button';
import { ArrowLeft, Calendar, User, Facebook, Linkedin, Twitter, Share2 } from 'lucide-react';
import { CTA } from './CTA';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find(p => p.id === id);

  useEffect(() => {
    if (post) {
      window.scrollTo(0, 0);
      document.title = `${post.title} - DevOpsFarm Blog`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-4">Article Not Found</h1>
        <Link to="/blog">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <Link to="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-brand transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 pb-20">
        <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-6">
                {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 leading-tight">
                {post.title}
            </h1>
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-8">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-[10px]">
                            DF
                        </div>
                        <span className="font-bold text-navy-900">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                    </div>
                </div>
                
                <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-gray-50 hover:bg-brand hover:text-white transition-colors text-gray-400">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden mb-12 shadow-xl">
            <img src={post.image} alt={post.title} className="w-full object-cover max-h-[500px]" />
        </div>

        {/* Content Body */}
        <div 
            className="prose prose-lg prose-navy max-w-none text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio Box */}
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-100 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xl shadow-lg">
                DF
            </div>
            <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1">About the Author</h4>
                <p className="text-gray-600 text-sm">
                    Written by the DevOpsFarm Engineering Team. We are a collective of principal architects and engineers dedicated to solving the hardest infrastructure challenges.
                </p>
            </div>
        </div>

      </article>

      {/* Related Posts could go here */}

      <CTA />
    </div>
  );
};
