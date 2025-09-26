import { useTheme } from './useTheme';
import { getThemeValue } from '@/utils/theme-utils';

export function useThemeValue<T>(lightValue: T, darkValue: T, useFallback: boolean = true): T {
   const { theme } = useTheme();

   return getThemeValue(theme, lightValue, darkValue, useFallback);
}
