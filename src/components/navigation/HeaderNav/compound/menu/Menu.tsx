import { NavigationMenu } from "radix-ui";
import styles from "./Menu.module.css";
import { ChevronDown } from "lucide-react";

export interface IMenuProps {
   text: string;
   children: React.ReactNode;
}

export function Menu({ text, children }: IMenuProps) {
   return (
      <NavigationMenu.Item className={styles.headerNavItem}>
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
      </NavigationMenu.Item>
   );
}
