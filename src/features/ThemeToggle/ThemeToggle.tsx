import { THEME } from "./types/theme-type";
import { useTheme } from "./hooks/useTheme";
import styles from "./ThemeToggle.module.css";
import { Moon, Sun } from "lucide-react";



export function ThemeToggle() {
   const { theme, toggleTheme } = useTheme();

   return (
      <button className={styles.themeToggle} onClick={toggleTheme}>
         {theme == THEME.LIGHT ? <Sun /> : <Moon />}
      </button>
   );
}
