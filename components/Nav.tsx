'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon, SparklesIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { SiteSettings, defaultSettings } from '@/lib/settings';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - (sectionId === 'home' ? 0 : navHeight);

      window.scrollTo({
        top: sectionId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && data?.settings) {
          setSettings(data.settings);
        }
      })
      .catch((err) => console.error('Failed to load settings in Nav:', err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'services', label: 'Services' },
        ...(settings.showProjectsSection ? [{ id: 'project', label: 'Projects' }] : []),
        { id: 'contact', label: 'Contact' },
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveLink(section.label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [settings.showProjectsSection]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    ...(settings.showProjectsSection ? [{ id: 'project', label: 'Projects' }] : []),
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-lg dark:shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            scrollToSection('home');
            setActiveLink('Home');
          }}
          className="flex items-center gap-2 group text-left focus:outline-none"
          aria-label="Scroll to top"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-emerald to-brand-cyan p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-white dark:bg-dark-950 rounded-[11px] flex items-center justify-center shadow-sm">
              <span className="font-extrabold text-lg text-slate-900 dark:text-white font-heading">
                R<span className="text-brand-emerald">.</span>
              </span>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1 font-heading">
              <span>Adeola</span>
              <span className="text-brand-emerald">Yisa</span>
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase -mt-0.5 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Full-Stack & Mobile
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 bg-slate-100/80 dark:bg-dark-900/60 border border-slate-200/80 dark:border-white/[0.06] backdrop-blur-md px-6 py-2 rounded-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setActiveLink(item.label);
              }}
              className={`nav-link text-sm transition-colors ${
                activeLink === item.label
                  ? 'active text-brand-emerald font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action CTA & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <a
            href="/my_resume.pdf"
            download="Yisa_Adeola_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-dark-850 dark:hover:bg-dark-800 border border-slate-200 dark:border-white/[0.08] transition-all duration-200 shadow-sm"
          >
            <ArrowDownTrayIcon className="w-4 h-4 text-brand-emerald" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-dark-950 bg-gradient-to-r from-brand-emerald to-brand-teal hover:opacity-95 shadow-md shadow-brand-emerald/20 transition-all duration-200"
          >
            <SparklesIcon className="w-4 h-4 text-dark-950" />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile View */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={openNav}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-900/80 border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Bars3Icon className="w-6 h-6 text-brand-emerald" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
