'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  StarIcon,
  ArrowTopRightOnSquareIcon,
  ArrowLeftIcon,
  LockClosedIcon,
  ArrowPathIcon,
  CheckIcon,
  XMarkIcon,
  ShieldCheckIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/20/solid';
import ThemeToggle from '@/components/ThemeToggle';
import { Project, defaultProjects } from '@/lib/projects';

const DEFAULT_PASSCODE = 'riga2026';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formError, setFormError] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Form Fields
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<'web' | 'mobile' | 'ecommerce' | 'fullstack'>('web');
  const [formCategoryLabel, setFormCategoryLabel] = useState('Web Application');
  const [formDescription, setFormDescription] = useState('');
  const [formImage, setFormImage] = useState('/image/project1.png');
  const [formDemoUrl, setFormDemoUrl] = useState('');
  const [formGithubUrl, setFormGithubUrl] = useState('https://github.com/RealRiga');
  const [formTechnologies, setFormTechnologies] = useState('');
  const [formFeatured, setFormFeatured] = useState(false);

  // Check auth session
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('riga_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch projects from API
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      if (data.success && Array.isArray(data.projects)) {
        setProjects(data.projects);
      }
    } catch (err) {
      console.error('Failed to load projects:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProjects();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === DEFAULT_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem('riga_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('riga_admin_auth');
    setPasscode('');
  };

  const openAddModal = () => {
    setEditingProject(null);
    setFormTitle('');
    setFormCategory('web');
    setFormCategoryLabel('Web Application');
    setFormDescription('');
    setFormImage('/image/project1.png');
    setFormDemoUrl('https://');
    setFormGithubUrl('https://github.com/RealRiga');
    setFormTechnologies('React, TypeScript, Tailwind CSS');
    setFormFeatured(false);
    setFormError('');
    setIsModalOpen(true);
  };

  const openEditModal = (p: Project) => {
    setEditingProject(p);
    setFormTitle(p.title);
    setFormCategory(p.category);
    setFormCategoryLabel(p.categoryLabel);
    setFormDescription(p.description);
    setFormImage(p.image);
    setFormDemoUrl(p.demoUrl);
    setFormGithubUrl(p.githubUrl || 'https://github.com/RealRiga');
    setFormTechnologies(p.technologies.join(', '));
    setFormFeatured(p.featured);
    setFormError('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleCategoryChange = (val: 'web' | 'mobile' | 'ecommerce' | 'fullstack') => {
    setFormCategory(val);
    if (val === 'web') setFormCategoryLabel('Web Application');
    else if (val === 'mobile') setFormCategoryLabel('Mobile Application');
    else if (val === 'ecommerce') setFormCategoryLabel('E-Commerce Platform');
    else if (val === 'fullstack') setFormCategoryLabel('Full-Stack Architecture');
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      setFormError('Project title is required.');
      return;
    }

    setIsSaving(true);
    setFormError('');

    const techArray = formTechnologies
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      if (editingProject) {
        // PUT update
        const res = await fetch('/api/projects', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: editingProject.id,
            title: formTitle.trim(),
            category: formCategory,
            categoryLabel: formCategoryLabel.trim(),
            description: formDescription.trim(),
            image: formImage.trim() || '/image/project1.png',
            demoUrl: formDemoUrl.trim(),
            githubUrl: formGithubUrl.trim(),
            technologies: techArray,
            featured: formFeatured,
          }),
        });
        const data = await res.json();
        if (data.success && data.projects) {
          setProjects(data.projects);
          triggerStatus('Project updated successfully!');
          closeModal();
        } else {
          setFormError(data.error || 'Failed to update project');
        }
      } else {
        // POST create
        const res = await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: formTitle.trim(),
            category: formCategory,
            categoryLabel: formCategoryLabel.trim(),
            description: formDescription.trim(),
            image: formImage.trim() || '/image/project1.png',
            demoUrl: formDemoUrl.trim(),
            githubUrl: formGithubUrl.trim(),
            technologies: techArray,
            featured: formFeatured,
          }),
        });
        const data = await res.json();
        if (data.success && data.projects) {
          setProjects(data.projects);
          triggerStatus('New project added successfully!');
          closeModal();
        } else {
          setFormError(data.error || 'Failed to add project');
        }
      }
    } catch (err) {
      console.error(err);
      setFormError('Network error while saving project.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteProject = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/projects?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success && data.projects) {
        setProjects(data.projects);
        triggerStatus(`Deleted "${title}"`);
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleToggleFeatured = async (p: Project) => {
    try {
      const res = await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: p.id,
          featured: !p.featured,
        }),
      });
      const data = await res.json();
      if (data.success && data.projects) {
        setProjects(data.projects);
        triggerStatus(
          !p.featured ? `Marked "${p.title}" as Featured` : `Removed "${p.title}" from Featured`
        );
      }
    } catch (err) {
      console.error('Toggle error:', err);
    }
  };

  const handleResetDefaults = async () => {
    if (
      !window.confirm(
        'Are you sure you want to reset projects back to the default portfolio items? Any custom projects will be overwritten.'
      )
    )
      return;

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'reset' }),
      });
      const data = await res.json();
      if (data.success && data.projects) {
        setProjects(data.projects);
        triggerStatus('Projects restored to default setup!');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const triggerStatus = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = filterCategory === 'all' || p.category === filterCategory;
    const matchesSearch =
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalProjects = projects.length;
  const featuredCount = projects.filter((p) => p.featured).length;

  // 1. Passcode Lock Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-white flex items-center justify-center p-4 transition-colors">
        <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] shadow-2xl relative">
          <div className="flex justify-between items-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-brand-emerald transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <ThemeToggle />
          </div>

          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-brand-emerald flex items-center justify-center mx-auto mb-4">
            <LockClosedIcon className="w-6 h-6" />
          </div>

          <h1 className="text-2xl font-extrabold text-center font-heading mb-1">
            Portfolio Admin
          </h1>
          <p className="text-xs text-center text-slate-500 dark:text-slate-400 mb-6">
            Enter the admin passcode to manage projects and featured work.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                Passcode
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (default: riga2026)"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] focus:border-brand-emerald focus:outline-none text-sm transition-colors"
              />
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400 font-medium">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm text-dark-950 bg-gradient-to-r from-brand-emerald to-brand-cyan hover:opacity-95 shadow-lg shadow-brand-emerald/20 transition-all"
            >
              Unlock Dashboard
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] text-slate-400 dark:text-slate-500">
            Default master passcode: <code className="font-mono text-brand-emerald">riga2026</code>
          </p>
        </div>
      </div>
    );
  }

  // 2. Main Admin Dashboard
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.08] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-emerald to-brand-cyan p-[1px] group"
              title="View Public Portfolio"
            >
              <div className="w-full h-full bg-white dark:bg-dark-950 rounded-[11px] flex items-center justify-center font-bold text-slate-900 dark:text-white text-sm">
                R.
              </div>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base sm:text-lg font-heading leading-tight">
                  Portfolio Manager
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  Admin
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 -mt-0.5">
                Manage featured work, categories & live links
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#project"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-dark-850 dark:hover:bg-dark-800 border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 transition-colors"
            >
              <span>View Public Site</span>
              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
            </Link>
            <ThemeToggle />
            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 border border-rose-500/20 transition-colors"
            >
              Lock / Exit
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Status Toast Notification */}
        {statusMessage && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
            <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Dashboard Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] shadow-sm">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
              Total Projects
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {totalProjects}
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1">
              Live on portfolio
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] shadow-sm">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
              Featured Work
            </div>
            <div className="text-3xl font-extrabold text-amber-500 dark:text-amber-400 mt-1 flex items-center gap-1.5">
              <span>{featuredCount}</span>
              <StarSolidIcon className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Highlighted with glowing badges
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] shadow-sm">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
              Categories
            </div>
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 space-y-1">
              <div className="flex justify-between">
                <span>Web Apps:</span>
                <span className="font-bold">{projects.filter((p) => p.category === 'web').length}</span>
              </div>
              <div className="flex justify-between">
                <span>Mobile Apps:</span>
                <span className="font-bold">{projects.filter((p) => p.category === 'mobile').length}</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] shadow-sm">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
              Quick Controls
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={openAddModal}
                className="w-full py-2 px-3 rounded-xl font-bold text-xs text-dark-950 bg-gradient-to-r from-brand-emerald to-brand-cyan hover:opacity-95 shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <PlusIcon className="w-4 h-4" />
                <span>Add Project</span>
              </button>
              <button
                onClick={handleResetDefaults}
                className="w-full py-1.5 px-3 rounded-xl font-medium text-[11px] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-dark-800 dark:hover:bg-dark-750 transition-colors flex items-center justify-center gap-1"
              >
                <ArrowPathIcon className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <MagnifyingGlassIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, tech or tag..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] text-xs focus:outline-none focus:border-brand-emerald transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {(['all', 'web', 'mobile', 'ecommerce', 'fullstack'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                  filterCategory === cat
                    ? 'bg-brand-emerald text-dark-950 shadow-sm'
                    : 'bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Items' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid / List */}
        {loading ? (
          <div className="py-20 text-center text-slate-500 font-mono text-sm">
            Loading projects...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08]">
            <p className="text-slate-500 text-sm mb-4">No projects match the current filter or search.</p>
            <button
              onClick={openAddModal}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-dark-950 bg-gradient-to-r from-brand-emerald to-brand-cyan"
            >
              Add First Project
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl overflow-hidden bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image Preview & Featured Badge */}
                  <div className="relative w-full aspect-[16/9] bg-slate-100 dark:bg-dark-950 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Category pill */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-dark-950/90 text-slate-900 dark:text-white backdrop-blur-md border border-white/20">
                      {p.categoryLabel || p.category}
                    </span>

                    {/* Toggle Featured Star */}
                    <button
                      onClick={() => handleToggleFeatured(p)}
                      title={p.featured ? 'Remove from Featured' : 'Mark as Featured'}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 dark:bg-dark-950/90 text-slate-700 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400 backdrop-blur-md shadow-sm transition-colors"
                    >
                      {p.featured ? (
                        <StarSolidIcon className="w-5 h-5 text-amber-400" />
                      ) : (
                        <StarIcon className="w-5 h-5 text-slate-400" />
                      )}
                    </button>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-sm line-clamp-1 font-heading">
                        {p.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {/* Technologies Tag Cloud */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {p.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-dark-800 text-slate-500">
                          +{p.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links row */}
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {p.demoUrl && p.demoUrl !== '#' && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-emerald flex items-center gap-1"
                        >
                          <span>Live Demo</span>
                          <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-emerald flex items-center gap-1"
                        >
                          <span>Code</span>
                          <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-slate-50 dark:bg-dark-950/60 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {p.featured ? (
                      <span className="text-amber-500 font-semibold flex items-center gap-1">
                        <StarSolidIcon className="w-3.5 h-3.5" /> Featured
                      </span>
                    ) : (
                      <span>Standard Project</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(p)}
                      className="p-1.5 rounded-lg bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-brand-emerald transition-colors"
                      title="Edit project"
                    >
                      <PencilSquareIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(p.id, p.title)}
                      className="p-1.5 rounded-lg bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/[0.08] text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="Delete project"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add / Edit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-2xl relative my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/[0.08] mb-6">
              <div>
                <h2 className="text-xl font-bold font-heading">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Update project information and portfolio visibility.
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-800"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400 font-medium">
                {formError}
              </div>
            )}

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Apex FinTech Platform"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] text-sm focus:outline-none focus:border-brand-emerald"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Category *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) =>
                      handleCategoryChange(
                        e.target.value as 'web' | 'mobile' | 'ecommerce' | 'fullstack'
                      )
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] text-sm focus:outline-none focus:border-brand-emerald"
                  >
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="fullstack">Full-Stack / Backend</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Category Badge Label
                  </label>
                  <input
                    type="text"
                    value={formCategoryLabel}
                    onChange={(e) => setFormCategoryLabel(e.target.value)}
                    placeholder="e.g. SaaS Dashboard"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] text-sm focus:outline-none focus:border-brand-emerald"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Preview Image Path / URL
                  </label>
                  <input
                    type="text"
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    placeholder="e.g. /image/project1.png"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] text-sm focus:outline-none focus:border-brand-emerald"
                  />
                  <div className="flex gap-2 mt-1.5 text-[10px] text-slate-400">
                    <span>Presets:</span>
                    <button
                      type="button"
                      onClick={() => setFormImage('/image/project1.png')}
                      className="hover:text-brand-emerald underline"
                    >
                      p1
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormImage('/image/project2.png')}
                      className="hover:text-brand-emerald underline"
                    >
                      p2
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormImage('/image/project3.png')}
                      className="hover:text-brand-emerald underline"
                    >
                      p3
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormImage('/image/p1.jpg')}
                      className="hover:text-brand-emerald underline"
                    >
                      d1
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Description *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Summarize the core impact, architectural features, and value of this project..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] text-sm focus:outline-none focus:border-brand-emerald resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Live Demo URL
                  </label>
                  <input
                    type="url"
                    value={formDemoUrl}
                    onChange={(e) => setFormDemoUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] text-sm focus:outline-none focus:border-brand-emerald"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    GitHub Repository URL
                  </label>
                  <input
                    type="url"
                    value={formGithubUrl}
                    onChange={(e) => setFormGithubUrl(e.target.value)}
                    placeholder="https://github.com/RealRiga/..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] text-sm focus:outline-none focus:border-brand-emerald"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Technologies (Comma separated)
                </label>
                <input
                  type="text"
                  value={formTechnologies}
                  onChange={(e) => setFormTechnologies(e.target.value)}
                  placeholder="e.g. Next.js 14, TypeScript, Tailwind CSS, PostgreSQL"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] text-sm focus:outline-none focus:border-brand-emerald"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="featuredToggle"
                  checked={formFeatured}
                  onChange={(e) => setFormFeatured(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-emerald focus:ring-brand-emerald"
                />
                <label
                  htmlFor="featuredToggle"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  Feature this project prominently on the portfolio
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200 dark:border-white/[0.08]">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-dark-950 bg-gradient-to-r from-brand-emerald to-brand-cyan hover:opacity-95 shadow-md shadow-brand-emerald/20 transition-all disabled:opacity-50"
                >
                  {isSaving ? 'Saving...' : editingProject ? 'Update Project' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
