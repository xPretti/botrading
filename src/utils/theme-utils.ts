import { THEME, type Theme } from '@/types/theme-type';

export function getThemeValue<T>(theme: Theme, lightValue: T, darkValue: T, useFallback: boolean = true): T {
   if (useFallback) {
      return theme == THEME.DARK ? (darkValue ?? lightValue) : (lightValue ?? darkValue);
   }
   return theme == THEME.DARK ? darkValue : lightValue;
}
