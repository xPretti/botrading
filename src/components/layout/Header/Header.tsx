
import { Bot } from "lucide-react";
import ThemeToggle from "../../feature/ThemeToggle/ThemeToggle";
import { NavLink } from "../../navigation";
import NavLinkMenu from "../../navigation/NavLinkMenu";
import NavLinkMenuItem from "../../navigation/NavLinkMenuItem";
import styles from "./Header.module.css";


export default function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
               <a href="/" className={styles.headerLogo}>
                  <img src="/Botrading.png" alt="Logo" />
                  <p>Botrading</p>
               </a>
            </div>
            <div className={styles.headerCenter}>
               <nav className={styles.headerNav}>
                  <NavLink text="Home" href="/" />
                  <NavLinkMenu text="Soluções" href="/">
                     <NavLinkMenuItem href="/" title="ScriptBot" desc="Ferramente de automação de estratégias." icon={<Bot />} />
                     <NavLinkMenuItem href="/" title="Ver mais" />
                  </NavLinkMenu>
                  <NavLink text="Central de Suporte" href="/" />
               </nav>
            </div>
            <div className={styles.headerRight}>
               <div className={styles.headerTheme}>
                  <ThemeToggle />
               </div>
            </div>
         </div>
      </header >
   );
}