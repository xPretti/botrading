
import { Bot } from "lucide-react";
import { NavLink, NavLinkMenu } from "../../../navigation";
import styles from "./HeaderDesktop.module.css";
import { ThemeToggle } from "../../../feature/ThemeToggle";


export function HeaderDesktop() {
   return (
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
                  <NavLinkMenu.Item href="/" title="ScriptBot" desc="Ferramente de automação de estratégias." icon={<Bot />} />
                  <NavLinkMenu.Item href="/" title="Ver mais" />
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
   );
}