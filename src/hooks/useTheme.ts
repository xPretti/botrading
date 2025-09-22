import { useThemeContext } from '../features/ThemeToggle/contexts/ThemeContext';

export const useTheme = () => {
   return useThemeContext();
};
