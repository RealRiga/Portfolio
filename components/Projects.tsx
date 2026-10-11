'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  category: 'web' | 'ecommerce' | 'fullstack';
  categoryLabel: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl?: string;
  technologies: string[];
  featured?: boolean;
}

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 'fan-nation',
      title: 'Fan Nation - Interactive Community Platform',
      category: 'web',
      categoryLabel: 'Web Application',
      description:
        'A comprehensive fan engagement web platform delivering real-time media streams, dynamic community feeds, and high-performance interactive interfaces.',
      image: '/image/project1.png',
      demoUrl: 'https://fan0fannation.netlify.app/',
      githubUrl: 'https://github.com/RealRiga',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Netlify', 'REST APIs'],
      featured: true,
    },
    {
      id: 'crystal-store',
      title: 'Crystal Store - Modern E-Commerce',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      description:
        'An elegant digital retail store with responsive product galleries, interactive cart functionality, checkout workflow, and clean UI components.',
      image: '/image/project3.png',
      demoUrl: 'https://crystal-store.vercel.app/',
      githubUrl: 'https://github.com/RealRiga',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      featured: true,
    },
    {
      id: 'personal-portfolio',
      title: 'Adeola Yisa - Developer Portfolio',
      category: 'fullstack',
      categoryLabel: 'Portfolio & Brand',
      description:
        'Modern, high-performance portfolio website engineered with Next.js 14, Tailwind CSS, dual light & dark mode aesthetics, and micro-animations for showcasing engineering craft.',
      image: '/image/project2.png',
      demoUrl: 'https://adeolaportfolio.vercel.app/',
      githubUrl: 'https://github.com/RealRiga/New_Portfolio',
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'AOS', 'SEO Optimized'],
      featured: true,
    },
    {
      id: 'dashboard-system',
      title: 'Enterprise Analytics & Management Dashboard',
      category: 'fullstack',
      categoryLabel: 'SaaS Platform',
      description:
        'Comprehensive data dashboard providing metric visualizations, multi-user role management, responsive tables, and secure backend integration.',
      image: '/image/p1.jpg',
      demoUrl: 'https://fan0fannation.netlify.app/',
      githubUrl: 'https://github.com/RealRiga',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
    },
    {
      id: 'cross-platform-app',
      title: 'Mobile Task & Workflow Organizer',
      category: 'web',
      categoryLabel: 'Mobile & Web',
      description:
        'Cross-platform task tracking application featuring local persistence, categorized priority boards, and synchronization across devices.',
      image: '/image/p2.jpg',
      demoUrl: 'https://crystal-store.vercel.app/',
      githubUrl: 'https://github.com/RealRiga',
      technologies: ['Flutter', 'Dart', 'Firebase', 'State Management'],
    },
    {
      id: 'api-service-hub',
      title: 'Distributed API Gateway & Service Hub',
      category: 'fullstack',
      categoryLabel: 'Backend Architecture',
      description:
        'High-performance backend API service built with C# and Java, handling token authentication, rate limiting, and structured JSON payloads.',
      image: '/image/p3.jpg',
      demoUrl: 'https://adeolaportfolio.vercel.app/',
      githubUrl: 'https://github.com/RealRiga',
      technologies: ['C#', '.NET', 'Java', 'REST APIs', 'SQL Database'],
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="project" className="py-24 bg-white dark:bg-dark-950 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="section-badge mb-3">Portfolio Showcase</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Featured <span className="accent-gradient">Work & Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A selection of production web applications, e-commerce stores, and software solutions built with precision.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" data-aos="fade-up">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web Applications' },
            { id: 'ecommerce', label: 'E-Commerce' },
            { id: 'fullstack', label: 'Full-Stack Systems' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-brand-emerald to-brand-teal text-dark-950 shadow-md shadow-brand-emerald/20 font-bold'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 dark:bg-dark-900 dark:text-slate-300 dark:hover:text-white dark:hover:bg-dark-850 dark:border-white/[0.06]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="rounded-3xl bg-white dark:bg-dark-900/90 border border-slate-200 dark:border-white/[0.08] hover:border-brand-emerald/50 dark:hover:border-brand-emerald/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-brand-emerald/10 group"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-dark-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-emerald-700 border border-emerald-500/30 dark:bg-dark-950/90 dark:text-brand-emerald dark:border-brand-emerald/30 backdrop-blur-md shadow-sm">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-2 group-hover:text-brand-emerald transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-dark-950 bg-gradient-to-r from-brand-emerald to-brand-teal hover:opacity-95 shadow-md shadow-brand-emerald/20 transition-all"
                >
                  <span>Live Demo</span>
                  <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl || 'https://github.com/RealRiga'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <CodeBracketIcon className="w-4 h-4 text-brand-emerald" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;