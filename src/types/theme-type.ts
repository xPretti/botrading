export const THEME = {
   LIGHT: 'light',
   DARK: 'dark',
} as const; // Trata como constante literal

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
