import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';

// Lazy load pages for optimized bundle size & premium loading speeds
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium glass loading fallback
const LoadingFallback: React.FC = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#030014] text-white">
    <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4" />
    <span className="text-xs font-mono tracking-widest uppercase text-slate-500">Loading MZ. Portfolio...</span>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col justify-between selection:bg-primary-500/30 selection:text-white">
        
        {/* Dynamic Canvas Background */}
        <Background />

        {/* Global Nav Bar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback redirect */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;