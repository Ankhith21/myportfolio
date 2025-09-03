import React from 'react';
import type { TimelineItemProps } from '../types';

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, subtitle, details }) => {
  return (
    <div className="relative pl-10 mb-10 group last:mb-0">
      <div className="absolute left-[-5px] top-1 w-4 h-4 bg-slate-800 rounded-full border-4 border-slate-900 group-hover:bg-magenta-500 transition-colors duration-300 shadow-lg shadow-magenta-900/0 group-hover:shadow-magenta-900/50"></div>
      <div className="flex justify-between items-start flex-col sm:flex-row mb-1">
        <div>
          <h3 className="text-lg font-bold text-slate-100">{title}</h3>
          <p className="text-md font-semibold text-blue-400/80">{subtitle}</p>
        </div>
        <p className="text-sm text-slate-500 whitespace-nowrap sm:ml-4 mt-1 sm:mt-0 font-mono">{date}</p>
      </div>
      {details.length > 0 && (
        <ul className="list-disc list-inside text-slate-400 space-y-1 mt-2 text-sm">
            {details.map((detail, index) => (
            <li key={index}>{detail}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default TimelineItem;
