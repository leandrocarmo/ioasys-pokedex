import React, { createContext, useState, useEffect, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Light, Dark } from '@/styles/themes';

export enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

interface ThemeContextType {
  currentTheme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? (savedTheme as Theme) : Theme.Light;
    } else {
      return Theme.Light;
    }
  });

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(true);
  }, []);

  useEffect(() => {
    if (isSelected && typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme, isSelected]);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.Light ? Theme.Dark : Theme.Light));
  };

  const currentTheme = theme === Theme.Light ? Light : Dark;

  if (!isSelected) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme: changeTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
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
