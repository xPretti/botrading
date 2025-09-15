import { useDevice } from "../../../hooks/useDevice";
import { ThemeToggle } from "../../feature/ThemeToggle";

import styles from "./Header.module.css";
import { DEVICE } from "../../../types/device.type";
import { HeaderMenu } from "./content/HeaderMenu";
import { HeaderNav } from "../../navigation/HeaderNav";
import { Bot } from "lucide-react";

export function Header() {
   const device = useDevice();

   const isMobile = device == DEVICE.MOBILE || device == DEVICE.TABLET;

   return (
      <header className={styles.header}>
         <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
               <a href="/" className={styles.headerLogo}>
                  <img src="/Botrading.png" alt="Logo" />
                  <p>Botrading</p>
               </a>
            </div>
            {!isMobile && <div className={styles.headerCenter}>
               <HeaderNav>
                  <HeaderNav.Link text="Home" href="/" />
                  <HeaderNav.Menu text="Soluções" >
                     <HeaderNav.MenuLink href="/" title="ScriptBot" desc="Ferramente de automação de estratégias." icon={<Bot />} />
                     <HeaderNav.MenuLink href="/" title="Ver mais" />
                  </HeaderNav.Menu>
                  <HeaderNav.Link text="Central de Suporte" href="/" />
               </HeaderNav>
            </div>}
            <div className={styles.headerRight}>
               {isMobile
                  ? <HeaderMenu />
                  : <ThemeToggle />}
            </div>
         </div>
      </header >
   );
}
