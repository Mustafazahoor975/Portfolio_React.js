import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaUser /> },
    { name: 'Skills', path: '/skills', icon: <FaCode /> },
    { name: 'Projects', path: '/projects', icon: <FaBriefcase /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-[#030014]/75 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="relative group text-2xl font-extrabold tracking-widest text-white transition-colors duration-300"
        >
          <span className="bg-gradient-to-r from-primary-400 to-accent-blue bg-clip-text text-transparent group-hover:from-accent-cyan group-hover:to-accent-purple transition-all duration-300">
            MZ.
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-blue group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-2 py-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-2"
                style={{
                  color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)'
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/40 to-accent-blue/40 border border-primary-500/30 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="text-xs opacity-75">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="https://www.linkedin.com/in/mustafazahoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-accent-blue rounded-full hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 border border-white/10 hover:border-white/20 active:scale-95 block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#030014]/95 border-b border-white/5 backdrop-blur-lg"
          >
            <nav className="flex flex-col px-6 py-6 gap-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-600/20 to-accent-blue/20 text-white border border-primary-500/20' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <a
                href="https://www.linkedin.com/in/mustafazahoor/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3 bg-gradient-to-r from-primary-600 to-accent-blue rounded-xl text-white font-medium hover:opacity-90 active:scale-[0.98] transition-all block"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;