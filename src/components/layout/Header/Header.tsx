import styles from "./Header.module.css";

import { Headset, HomeIcon, Lightbulb } from "lucide-react";
import { useDevice } from "@/hooks/useDevice";
import { HeaderNav } from "@/components/navigation/HeaderNav/HeaderNav";
import { HamburgerMenu } from "@/components/navigation/HamburgerMenu/HamburgerMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";
import { CustomNavLink } from "@/components/ui/CustomNavLink/CustomNavLink";

export function Header() {
   const { isMobile } = useDevice();

   return (
      <header className={styles.header}>
         <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
               <CustomNavLink to="/" className={styles.headerLogo}>
                  <img src="/Botrading.png" alt="Logo" />
                  <p>Botrading</p>
               </CustomNavLink>
            </div>
            {!isMobile && <div className={styles.headerCenter}>
               <HeaderNav>
                  <HeaderNav.Link text="Home" href="/" />
                  <HeaderNav.Menu text="Soluções" activePath="/solutions" >
                     <HeaderNav.MenuLink
                        href="/solutions/scriptbot"
                        title="ScriptBot"
                     />
                     <HeaderNav.MenuLink href="/solutions" title="Ver todas" />
                  </HeaderNav.Menu>
                  <HeaderNav.Link text="Central de Suporte" href="/help" />
               </HeaderNav>
            </div>}
            <div className={styles.headerRight}>
               {isMobile
                  ? <HamburgerMenu >
                     <HamburgerMenu.Link title="Home" href="/" icon={<HomeIcon width={21} />} />
                     <HamburgerMenu.Divider />
                     <HamburgerMenu.Accordion title="Soluções" icon={<Lightbulb width={21} />}>
                        <HamburgerMenu.Link title="ScriptBot" href="https://sb.botrading.net" />
                        <HamburgerMenu.Link title="Ver todas" href="/solutions" />
                     </HamburgerMenu.Accordion>
                     <HamburgerMenu.Divider />
                     <HamburgerMenu.Link title="Central de Suporte" href="/help" icon={<Headset width={21} />} />
                  </HamburgerMenu>
                  : <ThemeToggle />}
            </div>
         </div>
      </header >
   );
}
