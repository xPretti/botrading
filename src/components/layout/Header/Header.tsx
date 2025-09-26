import styles from "./Header.module.css";

import { Bot, Headset, HomeIcon, Lightbulb } from "lucide-react";
import { DEVICE } from "@/types/device-type";
import { useDevice } from "@/hooks/useDevice";
import { HeaderNav } from "@/components/navigation/HeaderNav/HeaderNav";
import { HamburgerMenu } from "@/components/navigation/HamburgerMenu/HamburgerMenu";
import { ThemeToggle } from "@/features/ThemeToggle/ThemeToggle";
import { CustomNavLink } from "@/components/ui/CustomNavLink/CustomNavLink";

export function Header() {
   const device = useDevice();

   const isMobile = device == DEVICE.MOBILE || device == DEVICE.TABLET;

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
                     <HeaderNav.MenuLink href="/solutions/scriptbot" title="ScriptBot" desc="Ferramente de automação de estratégias." icon={<Bot />} />
                     <HeaderNav.MenuLink href="/solutions" title="Ver mais" />
                  </HeaderNav.Menu>
                  <HeaderNav.Link text="Central de Suporte" href="/help" />
               </HeaderNav>
            </div>}
            <div className={styles.headerRight}>
               {isMobile
                  ? <HamburgerMenu >
                     <HamburgerMenu.Link title="Home" href="/" icon={<HomeIcon />} />
                     <HamburgerMenu.Divider />
                     <HamburgerMenu.Accordion title="Soluções" icon={<Lightbulb />}>
                        <HamburgerMenu.Link title="ScriptBot" href="/solutions/scriptbot" />
                        <HamburgerMenu.Link title="Ver mais" href="/solutions" />
                     </HamburgerMenu.Accordion>
                     <HamburgerMenu.Divider />
                     <HamburgerMenu.Link title="Central de Suporte" href="/help" icon={<Headset />} />
                  </HamburgerMenu>
                  : <ThemeToggle />}
            </div>
         </div>
      </header >
   );
}
