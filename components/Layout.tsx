
import React from 'react';
import { Section } from '../types';

interface LayoutProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ activeSection, setActiveSection, children }) => {
  const navItems = [
    { label: 'Work', value: Section.Projects },
    { label: 'Experience', value: Section.Experience },
    { label: 'Writing', value: Section.Blogs },
    { label: 'Research', value: Section.Papers },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-900 selection:text-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-50">
        <nav className="max-w-[1400px] mx-auto px-10 h-24 flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 text-xl font-bold tracking-[-0.05em] cursor-pointer hover:opacity-70 transition-all uppercase"
            onClick={() => setActiveSection(Section.Home)}
          >
            <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-black">O</div>
            <span className="tracking-[0.2em]">EUVRE</span>
          </div>
          
          <div className="flex items-center space-x-12">
            <ul className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <li key={item.value}>
                  <button
                    onClick={() => setActiveSection(item.value)}
                    className={`text-sm font-bold transition-all hover:text-black ${
                      activeSection === item.value ? 'text-black' : 'text-slate-400'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a 
                  href="#" 
                  target="_blank"
                  className="text-sm font-bold text-slate-400 hover:text-black transition-all flex items-center group"
                >
                  Resume
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1.5 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
            <button 
              onClick={() => setActiveSection(Section.Contact)}
              className="px-6 py-3 bg-[#111] text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-black transition-all"
            >
              Hire Me
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-24 pb-24">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
          <div className="flex items-center space-x-2 text-black opacity-100 mb-8 md:mb-0">
            <div className="w-6 h-6 border border-black flex items-center justify-center font-black">O</div>
            <span>EUVRE</span>
          </div>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">GitHub</a>
            <a href="#" className="hover:text-black transition-colors">X / Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
