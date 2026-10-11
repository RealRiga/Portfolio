'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, Squares2X2Icon, SparklesIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/20/solid';
import { Project, defaultProjects } from '@/lib/projects';
import { SiteSettings, defaultSettings } from '@/lib/settings';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [filter, setFilter] = useState<string>('all');
  const [contentView, setContentView] = useState<'all' | 'featured'>('all');
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    // 1. Fetch settings to read default display mode
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && data?.settings) {
          setSettings(data.settings);
          if (data.settings.portfolioProjectView === 'featured_only') {
            setContentView('featured');
          }
        }
      })
      .catch((err) => console.error('Failed to fetch settings:', err));

    // 2. Fetch projects
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.projects)) {
          setProjects(data.projects);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch projects, using fallback:', err);
      });
  }, []);

  // Filter out any explicitly hidden items
  const visibleProjects = projects.filter((p) => p.visible !== false);
  const featuredProjects = visibleProjects.filter((p) => p.featured);

  // Apply "Featured Work" vs "All Projects & Content" toggle
  const currentPool = contentView === 'featured' ? featuredProjects : visibleProjects;

  // Apply Category filter
  const filteredProjects =
    filter === 'all'
      ? currentPool
      : currentPool.filter((p) => p.category === filter);

  return (
    <section id="project" className="py-24 bg-white dark:bg-dark-950 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
          <div className="section-badge mb-3">Portfolio Showcase</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Featured <span className="accent-gradient">Work &amp; Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A selection of production web applications, cross-platform mobile apps, and full-stack software solutions.
          </p>
        </div>

        {/* Featured Work vs All Content Toggle Bar */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8" data-aos="fade-up">
          <div className="p-1 rounded-2xl bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] inline-flex items-center shadow-inner">
            <button
              onClick={() => setContentView('featured')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                contentView === 'featured'
                  ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-dark-950 shadow-md shadow-amber-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <StarSolidIcon className={`w-4 h-4 ${contentView === 'featured' ? 'text-dark-950' : 'text-amber-500'}`} />
              <span>Featured Work ({featuredProjects.length})</span>
            </button>
            <button
              onClick={() => setContentView('all')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                contentView === 'all'
                  ? 'bg-gradient-to-r from-brand-emerald to-brand-teal text-dark-950 shadow-md shadow-brand-emerald/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Squares2X2Icon className="w-4 h-4" />
              <span>All Projects &amp; Content ({visibleProjects.length})</span>
            </button>
          </div>

          <div className="text-[12px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            {contentView === 'featured' ? (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                Showing spotlighted featured items
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Showing complete project catalog
              </span>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" data-aos="fade-up">
          {[
            { id: 'all', label: 'All Categories' },
            { id: 'web', label: 'Web Applications' },
            { id: 'mobile', label: 'Mobile Apps' },
            { id: 'ecommerce', label: 'E-Commerce' },
            { id: 'fullstack', label: 'Full-Stack Systems' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-dark-950 shadow-sm font-bold'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 dark:bg-dark-900 dark:text-slate-300 dark:hover:text-white dark:hover:bg-dark-850 dark:border-white/[0.06]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-slate-50 dark:bg-dark-900/60 border border-slate-200 dark:border-white/[0.08] max-w-md mx-auto my-6">
            <SparklesIcon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              No items in this category
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              {contentView === 'featured'
                ? 'No projects in this category are marked as Featured. Switch to All Projects to see all available work.'
                : 'No projects match this category filter.'}
            </p>
            {contentView === 'featured' && (
              <button
                onClick={() => setContentView('all')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-dark-950 bg-gradient-to-r from-brand-emerald to-brand-teal"
              >
                View All Projects ({visibleProjects.length})
              </button>
            )}
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`rounded-3xl bg-white dark:bg-dark-900/90 border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl dark:shadow-none group ${
                  project.featured
                    ? 'border-amber-400/40 dark:border-amber-400/30 hover:border-amber-400 dark:hover:shadow-amber-400/10'
                    : 'border-slate-200 dark:border-white/[0.08] hover:border-brand-emerald/50 dark:hover:border-brand-emerald/40 dark:hover:shadow-brand-emerald/10'
                }`}
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

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-800 border border-slate-200 dark:bg-dark-950/90 dark:text-slate-200 dark:border-white/[0.1] backdrop-blur-md shadow-sm">
                        {project.categoryLabel}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-gradient-to-r from-amber-400 to-amber-500 text-dark-950 shadow-md backdrop-blur-md flex items-center gap-1">
                          <StarSolidIcon className="w-3 h-3 text-dark-950" />
                          <span>Featured</span>
                        </span>
                      )}
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
        )}
      </div>
    </section>
  );
};

export default Projects;