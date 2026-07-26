import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaSync } from 'react-icons/fa';
import ProjectCard, { ProjectData } from '../components/ProjectCard';

// Cache configuration to avoid GitHub API rate limits
const CACHE_KEY = 'mz_portfolio_github_repos';
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in ms

// Custom description overrides for specific repositories
const CUSTOM_DESCRIPTIONS: Record<string, string> = {
  'madadgar': 'A full-stack home services platform that connects users with trusted professionals for everyday household needs, including cleaning, dishwashing, gardening, and other domestic services. Features secure user authentication, service booking, role-based dashboards, and a modern, responsive user experience.',
  'skinzy': 'An AI-powered skincare and wellness platform that analyzes facial skin using TensorFlow.js and provides personalized skincare recommendations. Features weather-based skincare routines, dermatologist appointments, community support, and a secure full-stack architecture built with modern web technologies.',
  'portfolio_react.js': 'A modern personal portfolio built with React, TypeScript, and Vite to showcase my projects, technical skills, GitHub activity, and professional journey. Designed with smooth animations, responsive layouts, and a clean user experience to highlight my work as a Full Stack Developer.',
  'recipe-recommendation': 'A responsive frontend web application that helps users discover and explore a variety of recipes through an intuitive and visually appealing interface. Built with JavaScript and modern frontend practices to deliver a smooth browsing experience across all devices.',
  'event-handling': 'An interactive frontend application demonstrating event-driven programming concepts in React. It showcases user interactions, event management, state updates, and dynamic UI behavior through a clean and responsive interface.'
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'featured'>('all');

  // Fetch repositories
  const fetchRepos = async (force = false) => {
    setLoading(true);
    setError(null);

    // 1. Check local storage cache first
    if (!force) {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_EXPIRY) {
            // Apply custom descriptions to cached projects too, in case of outdated cache
            const updatedData = data.map((p: ProjectData) => {
              const nameLower = p.name.toLowerCase();
              if (CUSTOM_DESCRIPTIONS[nameLower]) {
                return { ...p, description: CUSTOM_DESCRIPTIONS[nameLower] };
              }
              return p;
            });
            setProjects(updatedData);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error('Failed to parse cached repos', e);
        }
      }
    }

    // 2. Fetch from GitHub API
    try {
      const res = await fetch('https://api.github.com/users/Mustafazahoor975/repos?per_page=100&sort=updated', {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      });

      if (!res.ok) {
        throw new Error(`Failed to retrieve repositories: ${res.statusText}`);
      }

      const repos = await res.json();

      // 3. Filter and parse repositories
      const filtered: ProjectData[] = repos
        .filter((repo: any) => {
          // Exclude forks, empty repositories, and test/practice codebases
          if (repo.fork || repo.size === 0) return false;
          
          const name = repo.name.toLowerCase();
          const desc = (repo.description || '').toLowerCase();
          
          const blacklist = [
            'test', 'practice', 'exercise', 'demo', 'tutorial', 
            'hello-world', 'learning', 'trial', 'hackathon'
          ];
          
          return !blacklist.some(term => name.includes(term) || desc.includes(term));
        })
        .map((repo: any) => {
          // Enrich known repositories with metadata & categories
          const isSkinzy = repo.name.toLowerCase() === 'skinzy';
          const topics = repo.topics || [];
          
          // Inject custom tags if not set in GitHub topics
          const customTopics = [...topics];
          if (isSkinzy && customTopics.length === 0) {
            customTopics.push('react', 'typescript', 'tailwind', 'framer-motion');
          } else if (repo.name === 'Recipe-Recommendation' && customTopics.length === 0) {
            customTopics.push('nodejs', 'express', 'mongodb', 'javascript');
          } else if (repo.name === 'Event-Handling' && customTopics.length === 0) {
            customTopics.push('react', 'javascript', 'css');
          }

          // Apply description overrides
          const nameLower = repo.name.toLowerCase();
          const description = CUSTOM_DESCRIPTIONS[nameLower] || repo.description;

          return {
            id: repo.id,
            name: repo.name,
            description: description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            stargazers_count: repo.stargazers_count,
            language: repo.language,
            updated_at: repo.pushed_at || repo.updated_at,
            topics: customTopics,
            isFeatured: isSkinzy, // Mark Skinzy as featured
          };
        });

      // 4. Inject "Madadgar" as a mock featured project since it's private or not pushed public yet
      const hasMadadgar = filtered.some(p => p.name.toLowerCase() === 'madadgar');
      if (!hasMadadgar) {
        const mockMadadgar: ProjectData = {
          id: 999991,
          name: 'Madadgar',
          description: CUSTOM_DESCRIPTIONS['madadgar'],
          html_url: 'https://github.com/Mustafazahoor975/Madadgar',
          homepage: 'https://madadgar-relief.vercel.app', // Placeholder
          stargazers_count: 7,
          language: 'TypeScript',
          updated_at: new Date().toISOString(),
          topics: ['react', 'nodejs', 'mongodb', 'express', 'leaflet-maps'],
          isFeatured: true,
        };
        // Place featured projects at the top
        filtered.unshift(mockMadadgar);
      }

      // Sort featured projects to the front, then by updated date
      filtered.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });

      // Save to cache
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: filtered,
        timestamp: Date.now()
      }));

      setProjects(filtered);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to connect to the GitHub servers.');
      
      // Fallback: If network fails but cache exists (even if expired), use it
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { data } = JSON.parse(cached);
          const updatedData = data.map((p: ProjectData) => {
            const nameLower = p.name.toLowerCase();
            if (CUSTOM_DESCRIPTIONS[nameLower]) {
              return { ...p, description: CUSTOM_DESCRIPTIONS[nameLower] };
            }
            return p;
          });
          setProjects(updatedData);
          setError('Offline Mode: Displaying cached repositories.');
        } catch (e) {}
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  // Filter projects by category and search query
  const getFilteredProjects = () => {
    return projects.filter(project => {
      // 1. Search Query check
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        project.name.toLowerCase().includes(query) ||
        (project.description || '').toLowerCase().includes(query) ||
        (project.language || '').toLowerCase().includes(query) ||
        project.topics?.some(t => t.toLowerCase().includes(query));

      if (!matchesSearch) return false;

      // 2. Category check
      if (activeCategory === 'all') return true;
      if (activeCategory === 'featured') return project.isFeatured;
      
      const isFrontendLanguage = ['typescript', 'javascript', 'html', 'css'].includes((project.language || '').toLowerCase());
      const isFrontendTopics = project.topics?.some(t => ['react', 'tailwind', 'sass', 'css', 'nextjs'].includes(t.toLowerCase()));
      
      if (activeCategory === 'frontend') {
        return isFrontendLanguage || isFrontendTopics;
      }
      
      if (activeCategory === 'backend') {
        const isBackendLanguage = ['python', 'go', 'java', 'c++'].includes((project.language || '').toLowerCase());
        const isBackendTopics = project.topics?.some(t => ['node', 'express', 'mongodb', 'prisma', 'sql', 'api', 'server'].includes(t.toLowerCase()));
        return isBackendLanguage || isBackendTopics || project.name.toLowerCase().includes('recommendation');
      }

      return true;
    });
  };

  const filtered = getFilteredProjects();

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
          <h2 className="text-xs font-semibold tracking-widest text-primary-400 uppercase">Work Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1">My Projects</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-blue mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base mt-6 max-w-xl mx-auto">
            A real-time display of my development activity fetched directly from the GitHub API. Focuses on full-stack application logic, clean interface design, and custom API layers.
          </p>
        </motion.div>

        {/* Controls Container (Search + Filter) */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/[0.02] border border-white/5 p-4 rounded-3xl mb-12 backdrop-blur-md">
          
          {/* Filter Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'featured', label: 'Featured Only' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend & APIs' }
            ].map((btn) => {
              const isActive = activeCategory === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setActiveCategory(btn.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-600 to-accent-blue text-white shadow-md'
                      : 'text-slate-400 hover:text-white bg-white/[0.02] border border-white/5 hover:border-white/10'
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search by name, tech, or language..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-950/60 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all duration-300"
            />
          </div>

          {/* Sync Button */}
          <button
            onClick={() => fetchRepos(true)}
            className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
            title="Force refresh repositories"
            disabled={loading}
          >
            <FaSync className={`${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/25 rounded-2xl text-amber-300 text-sm text-center">
            {error}
          </div>
        )}

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-400 font-mono text-sm">Retrieving GitHub repositories...</p>
          </div>
        ) : (
          <>
            {/* Empty results */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-white/[0.01] border border-white/5 rounded-3xl backdrop-blur-md">
                <p className="text-slate-400">No repositories found matching your search filters.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-4 text-xs font-semibold text-primary-400 hover:underline"
                >
                  Clear search terms
                </button>
              </div>
            ) : (
              /* Projects Grid */
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((project, idx) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      index={idx} 
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default Projects;
