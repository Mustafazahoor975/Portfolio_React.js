import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCompass, FaLightbulb, FaHeart, FaUsers, FaLinkedin, FaGithub } from 'react-icons/fa';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'objective'>('objective');

  const education = [
    {
      title: 'BS in Software Engineering',
      institution: 'University of Engineering and Technology (UET)',
      date: '2022 - Present',
      description: 'Acquiring deep knowledge in software development principles, data structures, algorithms, database systems, and system design.',
    },
    {
      title: 'Full-Stack Web Development Bootcamps & Courses',
      institution: 'Online Certification (Coursera, Udemy)',
      date: '2023 - 2024',
      description: 'Learned full-stack application construction using React, Express, MongoDB, and Node.js. Mastered RESTful design, state management, and modern CSS frameworks.',
    },
    {
      title: 'Intermediate in Pre-Engineering',
      institution: 'Punjab Group of Colleges',
      date: '2020 - 2022',
      description: 'Strengthened analytical skills, mathematics foundations, and logical reasoning prior to engineering education.',
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer (Personal & Academic projects)',
      organization: 'Self-Employed / Independent Work',
      date: '2023 - Present',
      description: 'Designed and built full-stack solutions like Recipe-Recommendation and Event-Handling systems. Integrated database indexing, modern state managers, and hosted them on Vercel and Render.',
    },
    {
      title: 'Frontend Developer & UI Designer',
      organization: 'Skinzy Project',
      date: '2026',
      description: 'Constructed the web interface for Skinzy using React, TypeScript, and modern component systems. Standardized state machines and animations with Framer Motion to wow recruiters.',
    },
    {
      title: 'Collaborative FYP / Major Project Developer',
      organization: 'Academic Project Teams',
      date: '2024 - 2025',
      description: 'Worked with small student groups using Git/GitHub version control, following agile patterns to deliver full software life cycle releases.',
    }
  ];

  const coreValues = [
    { icon: <FaLightbulb className="text-amber-400" />, title: 'Innovation', desc: 'Exploring next-gen libraries, AI integrations, and high-performance layout frameworks.' },
    { icon: <FaHeart className="text-red-400" />, title: 'Quality Code', desc: 'Writing clean, scalable, maintainable, and type-safe code that passes strict compilers.' },
    { icon: <FaUsers className="text-sky-400" />, title: 'Collaboration', desc: 'Sharing developer insights, contributing to repos, and learning alongside teams.' }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-semibold tracking-widest text-primary-400 uppercase">Biography</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1">About Me</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-blue mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Bio & Tabs grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Bio text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6 text-slate-300"
          >
            <h3 className="text-2xl font-bold text-white">Who is Mustafa Zahoor?</h3>
            <p className="leading-relaxed">
              Hello! I'm a software engineering student with a deep passion for full-stack application development. My journey is built on continuous curiosity, moving from fundamental algorithmic problem-solving to crafting elegant, fluid web interfaces.
            </p>
            <p className="leading-relaxed">
              I believe software is more than lines of script—it's about creating intuitive digital spaces that users find pleasant and functional. My goal is to build secure, robust backend systems connected to responsive, stunning user interfaces.
            </p>
            
            {/* Value Cards */}
            <div className="flex flex-col gap-4 mt-4">
              {coreValues.map((val) => (
                <div key={val.title} className="flex gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md">
                  <div className="text-2xl p-2 bg-white/5 rounded-xl h-fit">{val.icon}</div>
                  <div>
                    <h4 className="font-bold text-white">{val.title}</h4>
                    <p className="text-sm text-slate-400 mt-1">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/mustafazahoor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#0a66c2]/10 border border-[#0a66c2]/20 hover:bg-[#0a66c2]/20 text-[#0a66c2] hover:text-white rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <a
                href="https://github.com/Mustafazahoor975"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right Tabs and details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md"
          >
            {/* Tab Selectors */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 mb-6">
              {[
                { id: 'objective', name: 'Objective', icon: <FaCompass /> },
                { id: 'education', name: 'Education', icon: <FaGraduationCap /> },
                { id: 'experience', name: 'Experience', icon: <FaBriefcase /> }
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute inset-0 bg-primary-600/35 border border-primary-500/20 rounded-xl -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                    <span>{tab.icon}</span>
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab content panel */}
            <div className="min-h-[350px]">
              <AnimatePresence mode="wait">
                {activeTab === 'objective' && (
                  <motion.div
                    key="objective"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4 text-slate-300"
                  >
                    <h4 className="text-xl font-bold text-white">Career Objective</h4>
                    <p className="leading-relaxed">
                      Aspiring to secure a challenging role as a Software Engineer / Full Stack Developer where I can apply my web technology skills and algorithmic background. I aim to write clean, type-safe React and Node.js solutions, while continuously expanding my technical breadth under professional guidelines.
                    </p>
                    <p className="leading-relaxed">
                      I want to contribute to engineering teams focusing on high-performance web products, API scalability, and AI integrations. I am eager to apply industry standard methodologies (agile processes, unit testing, automation pipelines) in a fast-paced environment.
                    </p>
                    
                    <div className="mt-6 p-4 rounded-2xl bg-primary-950/20 border border-primary-500/10 text-primary-300 text-sm">
                      <strong>Focus Areas:</strong> React/NextJS architecture, MERN services, REST/GraphQL design, cloud deployment optimization, and accessible UI patterns.
                    </div>
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-8 relative border-l border-slate-800 pl-6 ml-2"
                  >
                    {education.map((edu, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline Marker */}
                        <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-primary-500 group-hover:bg-primary-500 transition-colors duration-300" />
                        
                        <span className="text-xs font-semibold text-primary-400 font-mono">{edu.date}</span>
                        <h4 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors mt-1">{edu.title}</h4>
                        <span className="text-sm font-medium text-slate-400 block mt-0.5">{edu.institution}</span>
                        <p className="text-sm text-slate-400 mt-2 leading-relaxed">{edu.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'experience' && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-8 relative border-l border-slate-800 pl-6 ml-2"
                  >
                    {experience.map((exp, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline Marker */}
                        <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-accent-blue group-hover:bg-accent-blue transition-colors duration-300" />
                        
                        <span className="text-xs font-semibold text-accent-blue font-mono">{exp.date}</span>
                        <h4 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors mt-1">{exp.title}</h4>
                        <span className="text-sm font-medium text-slate-400 block mt-0.5">{exp.organization}</span>
                        <p className="text-sm text-slate-400 mt-2 leading-relaxed">{exp.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default About;