import { NavigationMenu } from "radix-ui";
import styles from "./HeaderNav.module.css";
import { HeaderNavLink, HeaderNavMenu, HeaderNavMenuLink } from "./compound";


export interface HeaderNavProps {
   children: React.ReactNode;
}

export function HeaderNav({ children }: HeaderNavProps) {
   return (
      <NavigationMenu.Root className={styles.headerNav}>
         <NavigationMenu.List className={styles.headerNavItems}>
            {children}
         </NavigationMenu.List>
      </NavigationMenu.Root >
   );
}

/**
 * Componentes
 */
HeaderNav.Link = HeaderNavLink;
HeaderNav.Menu = HeaderNavMenu;
HeaderNav.MenuLink = HeaderNavMenuLink;