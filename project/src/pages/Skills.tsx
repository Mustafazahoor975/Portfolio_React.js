import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPrisma, SiPostman, SiGit, SiGithub,
  SiVercel, SiAnthropic
} from 'react-icons/si';
import { FaServer, FaCss3Alt } from 'react-icons/fa';
import { VscVscode, VscTerminalCmd } from 'react-icons/vsc';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon: React.ReactNode;
  level: number; // percentage
  color: string;
}

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend', icon: <SiReact />, level: 90, color: 'text-[#61dafb]' },
    { name: 'TypeScript', category: 'frontend', icon: <SiTypescript />, level: 85, color: 'text-[#3178c6]' },
    { name: 'JavaScript', category: 'frontend', icon: <SiJavascript />, level: 90, color: 'text-[#f7df1e]' },
    { name: 'HTML5', category: 'frontend', icon: <SiHtml5 />, level: 95, color: 'text-[#e34f26]' },
    { name: 'CSS3', category: 'frontend', icon: <FaCss3Alt />, level: 90, color: 'text-[#1572b6]' },
    { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss />, level: 92, color: 'text-[#38bdf8]' },

    // Backend
    { name: 'Node.js', category: 'backend', icon: <SiNodedotjs />, level: 85, color: 'text-[#339933]' },
    { name: 'Express.js', category: 'backend', icon: <SiExpress />, level: 85, color: 'text-white' },
    { name: 'MongoDB', category: 'backend', icon: <SiMongodb />, level: 80, color: 'text-[#47a248]' },
    { name: 'Prisma', category: 'backend', icon: <SiPrisma />, level: 75, color: 'text-[#2d3748]' },
    { name: 'REST APIs', category: 'backend', icon: <FaServer />, level: 88, color: 'text-indigo-400' },

    // Tools
    { name: 'Git', category: 'tools', icon: <SiGit />, level: 90, color: 'text-[#f05032]' },
    { name: 'GitHub', category: 'tools', icon: <SiGithub />, level: 92, color: 'text-white' },
    { name: 'Postman', category: 'tools', icon: <SiPostman />, level: 85, color: 'text-[#ff6c37]' },
    { name: 'VS Code', category: 'tools', icon: <VscVscode />, level: 95, color: 'text-[#007acc]' },
    { name: 'Vercel', category: 'tools', icon: <SiVercel />, level: 90, color: 'text-white' },
    { name: 'Cursor', category: 'tools', icon: <VscTerminalCmd />, level: 88, color: 'text-[#a78bfa]' },
    { name: 'Claude', category: 'tools', icon: <SiAnthropic />, level: 85, color: 'text-[#d97757]' },
  ];

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <div className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xs font-semibold tracking-widest text-primary-400 uppercase">Expertise</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1">My Skills</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-blue mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base mt-6 max-w-xl mx-auto">
            A comprehensive overview of libraries, runtime engines, databases, and collaboration platforms I master to design end-to-end user flows.
          </p>
        </motion.div>

        {/* Categories Selector */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {[
            { id: 'all', label: 'All Tech' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend' },
            { id: 'tools', label: 'Tools & DevOps' }
          ].map((btn) => {
            const isActive = filter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 border ${
                  isActive 
                    ? 'text-white border-primary-500/20' 
                    : 'text-slate-400 border-white/5 bg-white/[0.01] hover:text-white hover:border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-accent-blue/30 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-5 flex flex-col justify-between transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-3xl ${skill.color}`}>
                      {skill.icon}
                    </span>
                    <h3 className="font-bold text-white tracking-wide">{skill.name}</h3>
                  </div>
                  <span className="text-xs font-semibold font-mono text-slate-400 uppercase tracking-widest bg-white/5 border border-white/5 rounded-md px-2 py-0.5">
                    {skill.category}
                  </span>
                </div>

                {/* Progress bar info */}
                <div className="flex flex-col gap-1.5 mt-2">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.05 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-blue"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Summary note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm max-w-2xl mx-auto text-center"
        >
          <h4 className="font-bold text-white mb-2">Always Refining My Toolkit</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            The frontend and backend ecosystem moves quickly. I continuously study RFCs, learn new paradigms (such as server components and type-safe schema validations), and build sandboxed prototypes to adapt quickly.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;