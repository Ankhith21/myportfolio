import React from 'react';
import Section from './components/Section';
import TimelineItem from './components/TimelineItem';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import CertificationCard from './components/CertificationCard';
import { MailIcon, PhoneIcon, GraduationCapIcon, BriefcaseIcon, CodeIcon, AwardIcon, SparklesIcon, UserIcon, LinkedInIcon, GitHubIcon, FacebookIcon, TwitterIcon, InstagramIcon, DownloadIcon } from './components/Icons';
import type { TimelineItemProps, Project, Certification, Skill } from './types';
import { resumeDataUri } from './assets';

// Data
const contact = {
  email: 'ankhith.pothu@gmail.com',
  phone: '+1 979-324-6252',
};

const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/pothu-ankhith-099275254/',
  github: 'https://github.com/Ankhith21',
  facebook: 'https://www.facebook.com/ankith.pothu',
  twitter: 'https://x.com/AnkhithPot39114',
  instagram: 'https://www.instagram.com/_nickypothu_/',
};

const summary = "An aspiring Web Developer with entry-level experience specializing in user interface design, application development, data security, and continuous improvement. Adept at identifying opportunities to enhance the user experience and develop new features to improve app functionality. As an undergraduate with a strong academic background in Computer science, I am eager to pursue my master's program as I want to explore new frontiers in technology, collaborate with experts in the field, and make a meaningful impact on society through advancements in computing and software engineering.";

const educationData: TimelineItemProps[] = [
  { date: '2024 - 2026', title: "Master's in Data Science", subtitle: 'Oklahoma City University', details: [] },
  { date: '2020 - 2024', title: 'Bachelor of Technology - Computer Science and Information Technology', subtitle: 'Malla Reddy Institute of Engineering and Technology', details: ['Academics: 7.3 CGPA', 'Honors: Placement Coordinator'] },
];

const experienceData: TimelineItemProps[] = [
  { date: 'Oct 2022 - Nov 2022', title: 'Web Development Boot-camp', subtitle: 'BRAIN-O-VISION | Hyderabad', details: ['Implementation in HTML/CSS/AngularJS (frontend) and Node.js (backend) using node and gulp servers.', 'Experienced with Git and GitHub for efficient code collaboration and version control.', 'Successfully built a functional website within a 24-hour timeframe.'] },
];

const projectsData: Project[] = [
  { title: 'Enlight', technologies: 'WordPress', description: 'Provides an online shopping experience that is both seamless and engaging for customers while offering robust management tools for students.' },
  { title: 'Dynamic Web Site', technologies: 'SQL, JavaScript, Java', description: 'A simple dynamic website with a SQL database backend. It features a login page where users can sign up and authenticate with their credentials.' },
  { title: 'Credit Card Fraud Detection', technologies: 'Python, Neural Networks', description: 'A two-stage neuro-fuzzy expert system for credit card fraud detection. It uses fuzzy clustering and a neural network to classify transactions.' },
  { title: 'Online Depression Detection Application', technologies: 'Python, SVM', description: 'This application detects depression from user posts (text, image, or audio files) and helps people by sending motivational messages.' },
];

const certificationsData: Certification[] = [
  { name: 'Python', issuer: 'Hacker Rank' },
  { name: 'Web Development Bootcamp', issuer: 'BRAIN-O-VISION' },
  { name: 'Introduction to IoT', issuer: 'Cisco' },
  { name: 'JavaScript Essentials', issuer: 'Cisco' },
  { name: 'Google Cloud Essentials', issuer: 'Google Cloud Skills Boost' },
  { name: 'SQL and Relational Databases', issuer: 'Cognitive Class' },
  { name: 'JAVA', issuer: 'Hacker Rank' },
  { name: 'Build and Optimize Data Warehouses with Big Query', issuer: 'Google Cloud Skills Boost' },
  { name: 'Get Started with API Gateway', issuer: 'Google Cloud Skills Boost' },
];

const skillsData: Skill[] = [
  { category: 'Technical Skills', items: ['Python', 'Java', 'DBMS', 'HTML', 'CSS', 'JavaScript', 'React', 'Figma', 'MongoDB', 'Adobe Lightroom'] },
  { category: 'Other Skills', items: ['Leadership Skills', 'Time management'] },
];

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label, isActive, onClick }) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className={`flex items-center gap-3 py-2 font-semibold transition-colors cursor-pointer ${
          isActive ? 'text-magenta-400' : 'text-slate-400 hover:text-magenta-400'
        }`}
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
};

interface ExternalNavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const ExternalNavLink: React.FC<ExternalNavLinkProps> = ({ href, icon, label }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 py-2 font-semibold transition-colors text-slate-400 hover:text-magenta-400"
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
};

const Sidebar: React.FC<{ activePage: string; handleNavClick: (page: string) => void }> = ({ activePage, handleNavClick }) => (
  <aside className="w-64 bg-slate-900/70 backdrop-blur-sm border-r border-slate-800 p-8 fixed h-full flex flex-col justify-between hidden md:flex">
    <div>
      <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Ankhith Pothu</h2>
      <p className="text-sm text-magenta-400">Web Developer</p>
      <nav className="mt-12">
        <ul>
          <NavLink href="#summary" icon={<UserIcon className="w-5 h-5" />} label="About Me" isActive={activePage === 'summary'} onClick={(e) => { e.preventDefault(); handleNavClick('summary'); }} />
          <NavLink href="#experience" icon={<BriefcaseIcon className="w-5 h-5" />} label="Experience" isActive={activePage === 'experience'} onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }} />
          <NavLink href="#projects" icon={<CodeIcon className="w-5 h-5" />} label="Projects" isActive={activePage === 'projects'} onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }} />
          <NavLink href="#education" icon={<GraduationCapIcon className="w-5 h-5" />} label="Education" isActive={activePage === 'education'} onClick={(e) => { e.preventDefault(); handleNavClick('education'); }} />
          <NavLink href="#skills" icon={<SparklesIcon className="w-5 h-5" />} label="Skills" isActive={activePage === 'skills'} onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }} />
          <NavLink href="#certifications" icon={<AwardIcon className="w-5 h-5" />} label="Certifications" isActive={activePage === 'certifications'} onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }} />
          <ExternalNavLink href="https://www.credly.com/users/pothu-ankhith/badges" icon={<AwardIcon className="w-5 h-5" />} label="Credly Badges" />
        </ul>
      </nav>
    </div>
    <div className="text-center text-xs text-slate-600">
      Portfolio &copy; 2024
    </div>
  </aside>
);


const App: React.FC = () => {
  const [activePage, setActivePage] = React.useState('summary');

  const handleNavClick = (page: string) => {
    setActivePage(page);
    window.location.hash = page;
  };

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'summary';
      setActivePage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial page on load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'experience':
        return (
          <Section id="experience" title="Experience" icon={<BriefcaseIcon className="w-6 h-6" />}>
            <div className="relative border-l-2 border-slate-800 ml-3">
              {experienceData.map((item, index) => <TimelineItem key={index} {...item} />)}
            </div>
          </Section>
        );
      case 'projects':
        return (
          <Section id="projects" title="Academic Projects" icon={<CodeIcon className="w-6 h-6" />}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projectsData.map((project, index) => <ProjectCard key={index} {...project} />)}
            </div>
          </Section>
        );
      case 'education':
        return (
          <Section id="education" title="Education" icon={<GraduationCapIcon className="w-6 h-6" />}>
            <div className="relative border-l-2 border-slate-800 ml-3">
              {educationData.map((item, index) => <TimelineItem key={index} {...item} />)}
            </div>
          </Section>
        );
      case 'skills':
        return (
          <Section id="skills" title="Skills & Interests" icon={<SparklesIcon className="w-6 h-6" />}>
            {skillsData.map((skillGroup) => (
              <div key={skillGroup.category} className="mb-6">
                <h3 className="text-xl font-bold text-slate-200 mb-4 uppercase tracking-wider">{skillGroup.category}</h3>
                <div className="flex flex-wrap">
                  {skillGroup.items.map((skill) => <SkillBadge key={skill} skill={skill} />)}
                </div>
              </div>
            ))}
          </Section>
        );
      case 'certifications':
        return (
          <Section id="certifications" title="Certifications" icon={<AwardIcon className="w-6 h-6" />}>
            <div className="space-y-4">
              {certificationsData.map((cert, index) => <CertificationCard key={index} {...cert} />)}
            </div>
          </Section>
        );
      case 'summary':
      default:
        return (
          <section id="summary" className="min-h-screen flex flex-col justify-center">
            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight uppercase">POTHU ANKHITH</h1>
            <p className="text-2xl text-magenta-400 mt-2 font-bold">Aspiring Web Developer</p>
            <p className="text-slate-400 leading-relaxed max-w-3xl mt-6">{summary}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 text-slate-400">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-magenta-400 transition-colors duration-300 group">
                <MailIcon className="w-5 h-5" />
                <span className="font-semibold group-hover:underline">{contact.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                <span className="font-semibold">{contact.phone}</span>
              </div>
            </div>
             <div className="flex items-center gap-5 mt-8">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-magenta-400 transition-colors">
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-magenta-400 transition-colors">
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-magenta-400 transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-magenta-400 transition-colors">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-magenta-400 transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-10">
              <a 
                href={resumeDataUri}
                download="Pothu_Ankhith_Resume.svg"
                className="inline-flex items-center gap-3 px-6 py-3 border-2 border-magenta-400 text-magenta-400 font-bold rounded-lg hover:bg-magenta-400 hover:text-slate-900 transition-colors duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-magenta-500/30"
              >
                <DownloadIcon className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen text-slate-300">
      <Sidebar activePage={activePage} handleNavClick={handleNavClick} />
      <main className="md:ml-64 p-4 sm:p-8 md:p-12">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;