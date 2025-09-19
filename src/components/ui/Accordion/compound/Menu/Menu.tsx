import { Accordion as RadixAccordion } from "radix-ui";
import styles from "./Menu.module.css";
import { ChevronDownIcon } from "lucide-react";

interface IMenuProps {
   icon?: React.ReactNode;
   title: string;
   hideDivider?: boolean;
   arrowObj?: React.ReactNode;
   children: React.ReactNode;

   triggerPadding?: string;
   contentPadding?: string;
}

export function Menu({ icon, title, hideDivider = true, arrowObj = <ChevronDownIcon />, children, triggerPadding, contentPadding }: IMenuProps) {
   return (
      <RadixAccordion.Item className={styles.menuItem} value={title}>
         <RadixAccordion.Header className={styles.menuHeader}>
            <RadixAccordion.Trigger className={styles.menuTrigger} style={triggerPadding ? { padding: triggerPadding } : undefined} >
               <div className={styles.menuTitleWrapper}>
                  {icon && <div className={styles.menuIcon}>{icon}</div>}
                  <p className={styles.menuTitle}>{title}</p>
               </div>
               <div className={styles.menuIndicatorWrapper}>
                  {!hideDivider && <div className={styles.menuIndicatorDivider}></div>}
                  <div className={styles.menuIndicator}>
                     {arrowObj}
                  </div>
               </div>
            </RadixAccordion.Trigger>
         </RadixAccordion.Header>
         <RadixAccordion.Content className={styles.menuContent} style={contentPadding ? { padding: contentPadding } : undefined}>
            {children}
         </RadixAccordion.Content>
      </RadixAccordion.Item>
   );
}