// Path: src/context/AppContext.js
import { createContext, useState, useEffect, useCallback } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme toggle
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }, [theme]);

  // Menu toggle
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  // Set theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        isMenuOpen,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};