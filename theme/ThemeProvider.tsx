import React from 'react';
import { Theme } from './theme';
import ThemeContext from './ThemeContext';

type ThemeProviderProps = {
  theme: Theme,
  children?: React.ReactNode
}

const ThemeProvider: React.SFC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
