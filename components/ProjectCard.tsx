import React from 'react';
import type { Project } from '../types';

const ProjectCard: React.FC<Project> = ({ title, technologies, description }) => {
  return (
    <div className="bg-slate-900/70 p-6 rounded-md border border-slate-800 hover:border-magenta-500/50 transition-all duration-300 shadow-lg hover:shadow-magenta-900/10 transform hover:-translate-y-1 group">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-magenta-400 transition-colors">{title}</h3>
      </div>
       <p className="text-slate-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.split(', ').map(tech => (
          <span key={tech} className="text-xs font-mono bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
