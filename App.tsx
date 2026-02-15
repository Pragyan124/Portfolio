
import React, { useState } from 'react';
import { Section } from './types';
import { PROJECTS, BLOGS, PAPERS, SKILLS, ICONS, EXPERIENCE } from './constants';
import { Layout } from './components/Layout';
import { ProjectCard } from './components/ProjectCard';
import { BlogCard } from './components/BlogCard';
import { ContactForm } from './components/ContactForm';
import { BackgroundWave } from './components/BackgroundWave';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);

  const renderHome = () => (
    <div className="space-y-32">
      {/* Landing Section with Continuous String Wave */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <BackgroundWave />

        <div className="relative z-10 max-w-5xl animate-in fade-in duration-1000 slide-in-from-bottom-8">
          <h1 className="text-[3.5rem] md:text-[6.5rem] font-tight font-black text-[#111] mb-6 leading-[0.95] tracking-[-0.05em] select-none">
            Systems. <br />
            Tradeoffs. Execution.
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 mb-12 font-medium tracking-tight flex items-center justify-center space-x-3">
            <span className="opacity-40">•</span>
            <span>Databases</span>
            <span className="opacity-40">•</span>
            <span>Distributed Systems</span>
            <span className="opacity-40">•</span>
            <span>Cloud Engineering</span>
            <span className="opacity-40">•</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => setActiveSection(Section.Projects)}
              className="w-full sm:w-auto px-12 py-5 bg-[#111] text-white font-bold rounded-2xl hover:bg-black transition-all shadow-2xl hover:-translate-y-1 active:scale-95 text-lg"
            >
              Build on my Stack
            </button>
            <button
              onClick={() => setActiveSection(Section.Experience)}
              className="w-full sm:w-auto px-12 py-5 bg-white text-[#111] font-bold border border-slate-200 rounded-2xl hover:border-[#111] transition-all hover:-translate-y-1 active:scale-95 text-lg"
            >
              View Experience
            </button>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-10 animate-bounce opacity-20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Feature Block */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-tight font-black mb-8 tracking-tighter">Purpose-Built Architectures</h2>
        <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed font-medium opacity-70">
          Engineering high-throughput, low-latency environments where complexity is managed and scale is predictable.
          Optimizing for the next generation of intelligent, agentic systems.
        </p>
      </section>

      {/* Skills Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-100 pt-24">
          {SKILLS.map((skill) => (
            <div key={skill.category} className="group">
              <h3 className="text-xs font-bold text-slate-300 mb-8 uppercase tracking-[0.3em]">{skill.category}</h3>
              <ul className="space-y-5">
                {skill.items.map(item => (
                  <li key={item} className="text-[#111] text-xl font-bold hover:text-slate-400 transition-colors cursor-default tracking-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Work Preview */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-tight font-black tracking-tighter">Case Studies</h2>
          <button
            onClick={() => setActiveSection(Section.Projects)}
            className="text-base font-bold text-[#111] hover:opacity-60 transition-all flex items-center border-b-[3px] border-[#111] pb-1"
          >
            All Projects <ICONS.ArrowRight className="ml-3 w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.slice(0, 2).map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
    </div>
  );

  const renderProjects = () => (
    <div className="animate-in fade-in duration-500 slide-in-from-bottom-2">
      <div className="mb-24 text-center max-w-3xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-tight font-black text-slate-900 mb-6 tracking-tight">Project Ecosystem</h2>
        <p className="text-2xl text-slate-500 font-medium opacity-60">High-availability architectures deployed at global scale.</p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="max-w-5xl mx-auto px-6 animate-in fade-in duration-500 slide-in-from-bottom-2">
      <div className="mb-24 text-center">
        <h2 className="text-6xl md:text-7xl font-tight font-black text-slate-900 mb-6 tracking-tight">Experience</h2>
       
      </div>
      <div className="space-y-24">
        {EXPERIENCE.map(exp => (
          <div key={exp.id} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 border-t border-slate-100 pt-16">
            <div>
              <div className="text-xs font-bold text-slate-300 mb-4 uppercase tracking-[0.2em]">{exp.period}</div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2 tracking-tighter leading-tight">{typeof exp.company === 'string' ? (
                <p>{exp.company}</p>
              ) : (
                <img src={exp.company.src} alt={exp.company.alt} />
              )}</h3>
              <div className="text-xl font-medium text-slate-400">{exp.role}</div>
            </div>
            <div className="space-y-8">
              <ul className="space-y-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-xl text-slate-500 leading-relaxed font-medium">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-100 text-xs font-bold uppercase tracking-widest text-slate-500 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBlogs = () => (
    <div className="max-w-3xl mx-auto px-6 animate-in fade-in duration-500 slide-in-from-bottom-2">
      <div className="mb-24">
        <h2 className="text-6xl font-tight font-black text-slate-900 mb-6 tracking-tight">Engineering Blogs</h2>
        <p className="text-2xl text-slate-500 font-medium opacity-60">Deep dives into distributed systems , databases, and algorithms</p>
      </div>
      <div className="space-y-4">
        {BLOGS.map(b => <BlogCard key={b.id} blog={b} />)}
      </div>
    </div>
  );

  const renderPapers = () => (
    <div className="max-w-4xl mx-auto px-6 animate-in fade-in duration-500 slide-in-from-bottom-2">
      <div className="mb-24">
        <h2 className="text-6xl font-tight font-black text-slate-900 mb-6 tracking-tight">Research</h2>
        <p className="text-2xl text-slate-500 font-medium opacity-60">Peer-reviewed contributions to the field of cloud computing.</p>
      </div>
      <div className="space-y-16">
        {PAPERS.map(paper => (
          <div key={paper.id} className="border-l-4 border-slate-100 pl-10 py-2 transition-all hover:border-[#111] group">
            <div className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-[0.2em]">{paper.venue} • {paper.year}</div>
            <h3 className="text-4xl font-bold text-slate-900 mb-5 group-hover:text-[#111] transition-colors tracking-tighter leading-tight">{paper.title}</h3>
            <p className="text-slate-500 text-xl leading-relaxed mb-10 font-medium italic opacity-80">"{paper.abstract}"</p>
            <a href={paper.link} className="inline-flex items-center text-sm font-bold text-white bg-[#111] px-10 py-5 rounded-2xl hover:bg-black transition-all shadow-xl">
              Read Publication <ICONS.External className="ml-3 w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-6xl mx-auto px-6 animate-in fade-in duration-500 slide-in-from-bottom-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-7xl font-tight font-black text-slate-900 mb-10 leading-[0.9] tracking-tighter">Let's<br /><span className="text-slate-300">Connect</span></h2>
          <p className="text-2xl text-slate-500 mb-14 font-medium leading-relaxed opacity-70">
           Reach out directly
          </p>
          <div className="space-y-10">
            <div className="flex items-center space-x-8 group">
              <div className="w-16 h-16 bg-slate-50 rounded-[1.25rem] flex items-center justify-center group-hover:bg-[#111] transition-all duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#111] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-2xl font-black text-[#111] tracking-tight">borthakurpragyan15@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-14 rounded-[3rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
          <ContactForm />
        </div>
      </div>
    </div>
  );

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {activeSection === Section.Home && renderHome()}
      {activeSection === Section.Projects && renderProjects()}
      {activeSection === Section.Blogs && renderBlogs()}
      {activeSection === Section.Experience && renderExperience()}
      {activeSection === Section.Contact && renderContact()}

    </Layout>
  );
};

export default App;
