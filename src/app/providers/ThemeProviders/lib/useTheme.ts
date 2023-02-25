import { useContext } from 'react';
import { LOCAL_STORAGE_KEY_THEME, ThemeContext, ThemeType } from './ThemeContext';

interface UseThemeResult {
  theme: ThemeType;
  toggleTheme: () => void;
}
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme);
    };
    return { theme, toggleTheme };
}
