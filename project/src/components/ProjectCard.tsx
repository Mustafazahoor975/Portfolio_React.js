import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { TbGitBranch } from 'react-icons/tb';

export interface ProjectData {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
  isFeatured?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

const GITHUB_PROFILE = 'https://github.com/Mustafazahoor975';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const formattedDate = new Date(project.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  // Always link to the GitHub profile page
  const githubUrl = GITHUB_PROFILE;

  // Abstract gradient builder based on project ID or name hash to make placeholders beautiful
  const getGradient = (id: number) => {
    const gradients = [
      'from-primary-500/20 to-accent-blue/20',
      'from-accent-blue/20 to-accent-cyan/20',
      'from-accent-purple/20 to-primary-500/20',
      'from-accent-cyan/20 to-accent-purple/20',
    ];
    return gradients[id % gradients.length];
  };

  const getBorderGradient = (id: number) => {
    const borderGradients = [
      'hover:border-primary-500/50',
      'hover:border-accent-blue/50',
      'hover:border-accent-purple/50',
      'hover:border-accent-cyan/50',
    ];
    return borderGradients[id % borderGradients.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${
        project.isFeatured 
          ? 'md:col-span-2 md:flex-row border-primary-500/30' 
          : ''
      } ${getBorderGradient(project.id)}`}
    >
      {/* Decorative background glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(project.id)} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

      {/* Project Image/Icon Area */}
      <div className={`relative flex items-center justify-center p-6 bg-white/[0.02] border-b border-white/5 ${
        project.isFeatured ? 'md:w-2/5 md:border-b-0 md:border-r' : 'h-48'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/40 to-slate-950/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-mono text-primary-400 group-hover:scale-110 transition-transform duration-300">
            {project.language === 'TypeScript' ? 'TS' : project.language === 'JavaScript' ? 'JS' : '</>'}
          </span>
          <span className="text-xs font-mono text-slate-500 mt-2">{project.language || 'Code'}</span>
        </div>
        
        {/* Blur highlight glow */}
        <div className="absolute w-24 h-24 rounded-full bg-primary-500/10 blur-xl group-hover:bg-primary-500/25 transition-all duration-300" />
      </div>

      {/* Project Details */}
      <div className="flex flex-col flex-grow p-6">
        {project.isFeatured && (
          <span className="self-start px-3 py-1 mb-3 text-[10px] font-semibold uppercase tracking-wider text-primary-400 bg-primary-400/10 border border-primary-500/20 rounded-full">
            Featured Project
          </span>
        )}

        <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300 flex items-center justify-between">
          {project.name}
          <div className="flex items-center gap-2 text-sm font-normal text-slate-400">
            {project.stargazers_count > 0 && (
              <span className="flex items-center gap-1 text-amber-400/80">
                <FaStar className="text-xs" /> {project.stargazers_count}
              </span>
            )}
          </div>
        </h3>

        <p className="text-sm text-slate-400 mt-3 line-clamp-3 flex-grow">
          {project.description || 'No description available for this repository. Dynamic project created to demonstrate development skills.'}
        </p>

        {/* Dynamic Tech Stack Tags based on github topics / language */}
        {((project.topics && project.topics.length > 0) || project.language) && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.language && (
              <span className="px-2 py-0.5 text-xs font-medium bg-white/5 border border-white/10 rounded text-slate-300">
                {project.language}
              </span>
            )}
            {project.topics?.slice(0, 3).map((topic) => (
              <span key={topic} className="px-2 py-0.5 text-xs font-medium bg-primary-500/10 border border-primary-500/10 rounded text-primary-300">
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Footer Metrics and CTAs */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <TbGitBranch />
            <span>Updated {formattedDate}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all active:scale-95"
              title="View GitHub Profile"
            >
              <FaGithub className="text-lg" />
            </a>
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all active:scale-95"
                title="Live Demo"
              >
                <FaExternalLinkAlt className="text-base" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
