import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, icon, id }) => {
  return (
    <section id={id}>
      <h2 className="text-3xl font-bold text-magenta-400 mb-8 flex items-center gap-3 uppercase tracking-wider">
        {icon}
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
