import { NavigationMenu } from "radix-ui";
import styles from "./Menu.module.css";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router";

export interface IMenuProps {
   text: string;
   activePath?: string;

   children: React.ReactNode;
}

export function Menu({ text, children, activePath }: IMenuProps) {

   const location = useLocation();

   const isActive = activePath ? location.pathname === activePath : false;

   return (
      <NavigationMenu.Item className={`${styles.headerNavItem} ${isActive && styles.active}`}>
         <div className={styles.headerNavItemContent}>
            <NavigationMenu.Trigger className={styles.headerNavTrigger}>
               <p className={styles.headerNavTriggerText}>{text}</p>
               <div className={styles.headerNavTriggerIcon}><ChevronDown /></div>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={styles.headerNavContent}>
               <div className={styles.headerNavContentArrow}></div>
               <div className={styles.navLinkMenuItemsContent}>
                  <p className={styles.navLinkMenuItemsContentTitle}>{text}</p>
                  {children}
               </div>
            </NavigationMenu.Content>
         </div>
      </NavigationMenu.Item>

   );
}
