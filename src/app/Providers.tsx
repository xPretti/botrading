import type { ReactNode } from "react";
import { ThemeProvider } from "../features/ThemeToggle/contexts/ThemeContext";

export const Providers = ({ children }: { children: ReactNode; }) => {
   return (
      <ThemeProvider>
         {children}
      </ThemeProvider>
   );
};