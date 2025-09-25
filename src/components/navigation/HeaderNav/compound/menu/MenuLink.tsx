import { NavLink } from "react-router";
import styles from "./MenuLink.module.css";
import { NavigationMenu } from "radix-ui";

interface IMenuLinkProps {
   href: string;
   title: string;
   desc?: string;
   icon?: React.ReactNode;
};

export function MenuLink({ href, title, desc, icon }: IMenuLinkProps) {


   return (
      <NavigationMenu.Link asChild>
         <NavLink className={styles.headerNavMenuLink} to={href}>
            {icon &&
               <div className={styles.headerNavMenuLinkIcon}>
                  {icon}
               </div>
            }
            <div className={styles.HhaderNavMenuLinkContent}>
               <p className={styles.headerNavMenuLinkTitle}>{title}</p>
               {desc && <p className={styles.headerNavMenuLinkDesc}>{desc}</p>}
            </div>
         </NavLink>
      </NavigationMenu.Link>
   );
};