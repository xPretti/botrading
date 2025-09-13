import type { THEME } from '../constants/theme-constant';

export type Theme = (typeof THEME)[keyof typeof THEME];

export interface ThemeContextType {
   theme: Theme;
   toggleTheme: () => void;
   setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
   children: React.ReactNode;
   defaultTheme?: Theme;
}
