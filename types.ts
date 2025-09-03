export interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  details: string[];
}

export interface Project {
  title: string;
  technologies: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Skill {
  category: string;
  items: string[];
}