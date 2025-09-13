import { createContext, useContext, useEffect, useState } from 'react';
import type { Theme, ThemeContextType, ThemeProviderProps } from '../../types/theme-type';
import { THEME } from '../../constants/theme-constant';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme = THEME.LIGHT }: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(defaultTheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = savedTheme || (systemPrefersDark ? THEME.DARK : THEME.LIGHT);
        setThemeState(initialTheme);
        applyTheme(initialTheme);
    }, []);

    const applyTheme = (theme: Theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        applyTheme(newTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        setTheme(newTheme);
    };

    const value: ThemeContextType = {
        theme,
        toggleTheme,
        setTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext deve ser usado dentro de um ThemeProvider');
    }
    return context;
};