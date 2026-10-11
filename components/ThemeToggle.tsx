'use client';

import { useTheme } from './ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: Props) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-dark-900 ${className}`} />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative flex items-center justify-center p-2 rounded-xl transition-all duration-300 border focus:outline-none ${
        isDark
          ? 'bg-dark-900 border-white/[0.1] text-amber-400 hover:text-amber-300 hover:bg-dark-850 hover:border-amber-400/40'
          : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 hover:border-brand-emerald/40 shadow-sm'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <SunIcon className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100 text-amber-400" />
        ) : (
          <MoonIcon className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100 text-slate-700" />
        )}
      </div>

      {showLabel && (
        <span className="ml-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
}
