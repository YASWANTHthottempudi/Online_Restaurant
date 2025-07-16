import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  isDarkMode: false,
});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('reactFood-theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('reactFood-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  const themeContext = {
    theme,
    toggleTheme,
    isDarkMode: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
