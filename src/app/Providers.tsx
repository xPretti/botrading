import { ThemeProvider } from "@/contexts/ThemeContext";
import type { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode; }) => {
   return (
      <ThemeProvider>
         {children}
      </ThemeProvider>
   );
};