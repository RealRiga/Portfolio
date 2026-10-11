'use client';

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Automatically determines theme according to time:
 * - Dark mode from 10:00 PM (22:00) to 6:00 AM (06:00)
 * - Light mode from 6:00 AM (06:00) to 10:00 PM (22:00)
 */
export const getTimeBasedTheme = (): Theme => {
  const currentHour = new Date().getHours();
  if (currentHour >= 22 || currentHour < 6) {
    return 'dark';
  }
  return 'light';
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const userOverrideRef = useRef<boolean>(false);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    if (t === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  };

  // 1. Initial automatic time-based theme setup
  useEffect(() => {
    const initialTheme = getTimeBasedTheme();
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // 2. Inbuilt timer: automatically adjusts the theme according to user's time
  useEffect(() => {
    const syncThemeWithTime = () => {
      // If user hasn't explicitly clicked toggle in this session, automatically enforce the time
      if (!userOverrideRef.current) {
        const scheduledTheme = getTimeBasedTheme();
        setThemeState((current) => {
          if (current !== scheduledTheme) {
            applyTheme(scheduledTheme);
            return scheduledTheme;
          }
          return current;
        });
      }
    };

    // Run interval check every 30 seconds
    const timerId = setInterval(syncThemeWithTime, 30000);
    return () => clearInterval(timerId);
  }, []);

  const setTheme = (newTheme: Theme) => {
    userOverrideRef.current = true;
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    userOverrideRef.current = true;
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setThemeState(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
