import React from 'react';
import { Theme } from './theme';

const ThemeContext = React.createContext<Theme | null>(null);

export default ThemeContext;
