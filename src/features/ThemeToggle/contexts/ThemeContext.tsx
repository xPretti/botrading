import { createContext, useContext, useEffect, useState } from 'react';
import { THEME, type IThemeContextType, type Theme } from '../types/theme-type';

const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

interface IThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = THEME.LIGHT }: IThemeProviderProps) {
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

    const value: IThemeContextType = {
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

export const useThemeContext = (): IThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext deve ser usado dentro de um ThemeProvider');
    }
    return context;
};