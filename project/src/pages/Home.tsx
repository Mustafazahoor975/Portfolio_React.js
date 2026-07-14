import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';

// Custom lightweight Typewriter component for maximum speed & control
const Typewriter: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      const change = reverse ? -1 : 1;
      setSubIndex((prev) => prev + change);
      setText(words[index].substring(0, subIndex + change));
    }, reverse ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="relative">
      <span className="bg-gradient-to-r from-primary-400 via-accent-cyan to-accent-purple bg-clip-text text-transparent">
        {text}
      </span>
      <span className="absolute -right-1.5 top-0 bottom-0 w-0.5 bg-primary-400 animate-[pulse_1s_infinite]" />
    </span>
  );
};

// Custom interactive CountUp stat item
const StatItem: React.FC<{ end: number; suffix?: string; label: string }> = ({ end, suffix = '', label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div 
      whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
      className="flex flex-col items-center justify-center p-5 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md transition-all duration-300"
    >
      <span className="text-3xl md:text-4xl font-extrabold text-white font-mono">
        {count}
        <span className="bg-gradient-to-r from-primary-400 to-accent-blue bg-clip-text text-transparent">{suffix}</span>
      </span>
      <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase mt-1.5 text-center">{label}</span>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const roles = [
    'Software Engineer',
    'React Developer',
    'MERN Stack Developer',
    'AI Enthusiast'
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-xs font-semibold text-primary-300 tracking-wide">Available for opportunities</span>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest text-slate-400 uppercase">Welcome to my space</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
              I am <span className="font-semibold block text-slate-200 mt-2">Mustafa Zahoor</span>
            </h1>
            <h3 className="text-2xl sm:text-3xl font-bold h-12 mt-2">
              <Typewriter words={roles} />
            </h3>
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
            Passionate about creating innovative digital solutions that make a difference. 
            I combine technical expertise with creative problem-solving to build applications 
            that users love. Currently pursuing my degree in Software Engineering while 
            crafting high-performance MERN & React interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link 
              to="/projects" 
              className="px-8 py-3.5 bg-gradient-to-r from-primary-600 to-accent-blue text-white font-medium rounded-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
            >
              View Projects 
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="/resume.pdf" 
              download
              className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload className="text-sm text-slate-400" />
              Download Resume
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Links</span>
            <div className="w-12 h-px bg-slate-800" />
            <a 
              href="https://github.com/Mustafazahoor975" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white rounded-xl active:scale-95 transition-all duration-300"
              title="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mustafazahoor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white rounded-xl active:scale-95 transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>

        </motion.div>

        {/* Right Code Block Visual Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-slate-950/60 backdrop-blur-md shadow-2xl">
            {/* Spotlight backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-blue/10 opacity-50 group-hover:opacity-80 transition-opacity duration-300 -z-10" />

            {/* Window title bar */}
            <div className="px-4 py-3 bg-slate-950/80 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-xs font-mono text-slate-500 select-none">mustafa_zahoor.json</span>
              <div className="w-12" />
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-slate-300">
              <div>
                <span className="text-accent-purple">{"{"}</span>
              </div>
              <div className="pl-6">
                <span className="text-[#9cdcfe]">"name"</span>: <span className="text-[#ce9178]">"Mustafa Zahoor"</span>,
              </div>
              <div className="pl-6">
                <span className="text-[#9cdcfe]">"role"</span>: <span className="text-[#ce9178]">"Software Engineer"</span>,
              </div>
              <div className="pl-6">
                <span className="text-[#9cdcfe]">"education"</span>: <span className="text-[#ce9178]">"BS Software Engineering"</span>,
              </div>
              <div className="pl-6">
                <span className="text-[#9cdcfe]">"skills"</span>: <span className="text-accent-purple">{"["}</span>
              </div>
              <div className="pl-12">
                <span className="text-[#ce9178]">"React"</span>, <span className="text-[#ce9178]">"TypeScript"</span>, <span className="text-[#ce9178]">"Node.js"</span>,
              </div>
              <div className="pl-12">
                <span className="text-[#ce9178]">"Express"</span>, <span className="text-[#ce9178]">"MongoDB"</span>, <span className="text-[#ce9178]">"TailwindCSS"</span>
              </div>
              <div className="pl-6">
                <span className="text-accent-purple">{"]"}</span>,
              </div>
              <div className="pl-6">
                <span className="text-[#9cdcfe]">"hobbies"</span>: <span className="text-accent-purple">{"["}</span><span className="text-[#ce9178]">"AI Enthusiast"</span>, <span className="text-[#ce9178]">"Coding"</span><span className="text-accent-purple">{"]"}</span>,
              </div>
              <div className="pl-6">
                <span className="text-[#9cdcfe]">"openForWork"</span>: <span className="text-[#569cd6]">true</span>
              </div>
              <div>
                <span className="text-accent-purple">{"}"}</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Animated Statistics Section */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-20 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <StatItem end={1} suffix="+" label="Years Experience" />
          <StatItem end={5} suffix="+" label="Projects Completed" />
          <StatItem end={12} suffix="+" label="Technologies Mastered" />
          <StatItem end={24} suffix="/7" label="Continuous Learning" />
        </motion.div>
      </div>
      
    </div>
  );
};

export default Home;