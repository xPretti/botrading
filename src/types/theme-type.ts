export const THEME = {
   LIGHT: 'light',
   DARK: 'dark',
} as const; // Trata como constante literal

export type Theme = (typeof THEME)[keyof typeof THEME];

export interface IThemeContextType {
   theme: Theme;
   toggleTheme: () => void;
   setTheme: (theme: Theme) => void;
}

export interface IThemeProviderProps {
   children: React.ReactNode;
   defaultTheme?: Theme;
}
