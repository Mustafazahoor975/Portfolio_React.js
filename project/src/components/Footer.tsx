import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#030014]/40 py-12 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-blue bg-clip-text text-transparent tracking-wider">
            MZ.
          </Link>
          <p className="text-sm text-slate-400 mt-2">
            Crafting premium web experiences with modern tech stacks.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Mustafazahoor975"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300 text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mustafazahoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#0a66c2] hover:scale-110 transition-all duration-300 text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/mustafazahoor975"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#e1306c] hover:scale-110 transition-all duration-300 text-xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://web.facebook.com/mustafa.zahoor.92798"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#1877f2] hover:scale-110 transition-all duration-300 text-xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Mustafa Zahoor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;