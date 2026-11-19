import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('giri-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      // Default to light mode first
      return 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#060913');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#FFFFFF');
    }
    try {
      localStorage.setItem('giri-theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
