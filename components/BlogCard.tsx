
import React from 'react';
import { Blog } from '../types';

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="py-10 border-b border-slate-100 last:border-0 group cursor-pointer">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span>{blog.category}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>
          <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">
            {blog.title}
          </h3>
          <p className="text-slate-500 leading-relaxed mb-4 max-w-2xl">
            {blog.excerpt}
          </p>
          <div className="text-sm font-medium text-slate-900 flex items-center">
            Read article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
        <div className="text-sm text-slate-400 font-medium">
          {blog.readTime} read
        </div>
      </div>
    </div>
  );
};
