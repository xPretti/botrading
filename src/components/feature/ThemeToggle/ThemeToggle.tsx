import styles from "./ThemeToggle.module.css";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme";
import { THEME } from "../../../types/theme-type";


export function ThemeToggle() {
   const { theme, toggleTheme } = useTheme();

   return (
      <button className={styles.themeToggle} onClick={toggleTheme}>
         {theme == THEME.LIGHT ? <Sun /> : <Moon />}
      </button>
   );
}
