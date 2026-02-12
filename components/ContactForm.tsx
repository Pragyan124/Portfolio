
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated behavior
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold mb-2">Transmission Received.</h3>
        <p className="text-slate-500">I'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Name</label>
          <input 
            required
            className="w-full bg-slate-50 border-b-2 border-slate-100 focus:border-slate-900 transition-all p-3 outline-none text-sm" 
            placeholder="Recruiter / Founder"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</label>
          <input 
            required
            type="email"
            className="w-full bg-slate-50 border-b-2 border-slate-100 focus:border-slate-900 transition-all p-3 outline-none text-sm" 
            placeholder="email@company.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
        <textarea 
          required
          rows={4}
          className="w-full bg-slate-50 border-b-2 border-slate-100 focus:border-slate-900 transition-all p-3 outline-none text-sm resize-none" 
          placeholder="I'm interested in discussing your experience at ADP..."
        />
      </div>
      <button 
        disabled={status === 'sending'}
        className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 group disabled:opacity-50"
      >
        <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
};
