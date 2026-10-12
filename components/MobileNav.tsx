'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon, SparklesIcon } from '@heroicons/react/20/solid';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { SiteSettings, defaultSettings } from '@/lib/settings';

interface Props {
  nav: boolean;
  closeNav: () => void;
  scrollToSection: (sectionId: string) => void;
}

const MobileNav = ({ nav, closeNav, scrollToSection }: Props) => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && data?.settings) {
          setSettings(data.settings);
        }
      })
      .catch((err) => console.error('Failed to load settings in MobileNav:', err));
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills & Tech' },
    { id: 'services', label: 'Services' },
    ...(settings.showProjectsSection ? [{ id: 'project', label: 'Projects' }] : []),
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    closeNav();
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 z-50 bg-black/60 dark:bg-black/75 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-white dark:bg-dark-900 border-l border-slate-200 dark:border-white/[0.08] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-emerald to-brand-cyan p-[1px]">
                <div className="w-full h-full bg-white dark:bg-dark-950 rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-base text-slate-900 dark:text-white">
                    R<span className="text-brand-emerald">.</span>
                  </span>
                </div>
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white font-heading">
                Adeola Yisa
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={closeNav}
                className="p-2 rounded-xl bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Links list */}
          <nav className="mt-6 flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="w-full text-left px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-800/70 font-medium transition-colors flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <span className="text-brand-emerald opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] space-y-3">
          <a
            href="/my_resume.pdf"
            download="Yisa_Adeola_Resume.pdf"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-white bg-slate-100 dark:bg-dark-800 hover:bg-slate-200 dark:hover:bg-dark-700 border border-slate-200 dark:border-white/[0.08] transition-colors"
          >
            <ArrowDownTrayIcon className="w-4 h-4 text-brand-emerald" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={() => handleLinkClick('contact')}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-dark-950 bg-gradient-to-r from-brand-emerald to-brand-teal hover:opacity-95 shadow-lg shadow-brand-emerald/20 transition-all"
          >
            <SparklesIcon className="w-4 h-4 text-dark-950" />
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
