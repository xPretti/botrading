import { NavigationMenu } from "radix-ui";
import styles from "./HeaderNav.module.css";
import { Link } from "./compound/link/Link";
import { Menu } from "./compound/menu/Menu";
import { MenuLink } from "./compound/menu/MenuLink";


export interface IHeaderNavProps {
   children: React.ReactNode;
}

export function HeaderNav({ children }: IHeaderNavProps) {
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
HeaderNav.Link = Link;
HeaderNav.Menu = Menu;
HeaderNav.MenuLink = MenuLink;