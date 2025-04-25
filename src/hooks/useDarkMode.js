import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return (
      localStorage.theme ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.theme = theme;
  }, [theme]);

  return [theme, setTheme];
}
