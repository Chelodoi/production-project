import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY_THEME, ThemeContext, ThemeType } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as ThemeType) || 'light';

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );
    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
