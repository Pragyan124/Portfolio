
import React from 'react';
import { Project } from '../types';
import { ICONS } from '../constants';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden hover:border-slate-300 transition-all hover:shadow-2xl">
      
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-50 border border-slate-100 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">{project.title}</h3>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed">{project.description}</p>
        
        {project.impact && (
          <div className="mb-8 p-4 bg-slate-900 text-white rounded-2xl">
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">Key Impact</div>
            <div className="text-sm font-medium">{project.impact}</div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <a href={project.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 hover:opacity-60 transition-opacity">
            Details <ICONS.External className="ml-2 w-4 h-4" />
          </a>
          {project.github && (
            <a href={project.github} className="text-slate-300 hover:text-slate-900 transition-colors">
              <ICONS.Github className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
