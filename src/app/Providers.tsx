import { ThemeProvider } from "@/features/ThemeToggle/contexts/ThemeContext";
import type { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode; }) => {
   return (
      <ThemeProvider>
         {children}
      </ThemeProvider>
   );
};