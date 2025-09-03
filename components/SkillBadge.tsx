import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-slate-800 text-blue-300 text-sm font-semibold mr-2 mb-2 px-4 py-2 rounded-md border border-slate-700 hover:bg-slate-700/50 hover:border-blue-400/50 transition-all duration-300 cursor-default">
      {skill}
    </span>
  );
};

export default SkillBadge;
