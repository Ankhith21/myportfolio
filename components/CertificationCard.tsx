import React from 'react';
import type { Certification } from '../types';
import { AwardIcon } from './Icons';

const CertificationCard: React.FC<Certification> = ({ name, issuer }) => {
  return (
    <div className="bg-slate-900/70 p-4 rounded-md border border-slate-800 hover:border-magenta-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4 group">
      <div className="flex-shrink-0 text-blue-400 group-hover:text-magenta-400 transition-colors">
        <AwardIcon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-bold text-slate-100">{name}</h3>
        <p className="text-sm text-slate-400">{issuer}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
