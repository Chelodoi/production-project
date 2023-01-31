import { createContext } from 'react';

export type ThemeType = 'light' | 'dark';

export interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_KEY_THEME = 'theme';
