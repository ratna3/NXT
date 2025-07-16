import React, { useState } from 'react';
import type { ReactNode } from 'react';
import type { Theme } from '../types/theme';
import { themes } from '../types/theme';
import { ThemeContext } from './ThemeContextType';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    
    // Apply theme to CSS custom properties
    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-surface', theme.colors.surface);
    root.style.setProperty('--color-text', theme.colors.text);
    root.style.setProperty('--border-radius', theme.styles.borderRadius);
    root.style.setProperty('--border-width', theme.styles.borderWidth);
    root.style.setProperty('--font-family', theme.styles.fontFamily);
  };

  const value = {
    currentTheme,
    setTheme,
    availableThemes: themes,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
