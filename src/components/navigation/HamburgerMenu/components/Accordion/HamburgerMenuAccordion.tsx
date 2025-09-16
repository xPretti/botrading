import { Accordion } from "radix-ui";
import styles from "./HamburgerMenuAccordion.module.css";
import { ChevronDownIcon } from "lucide-react";

interface HamburgerMenuAccordionProps {
   icon?: React.ReactNode;
   title: string;
   children: React.ReactNode;
}

export function HamburgerMenuAccordion({ icon, title, children }: HamburgerMenuAccordionProps) {
   return (
      <Accordion.Root
         className={styles.menuAccordion}
         type="single"
         collapsible
      >
         <Accordion.Item className={styles.menuAccordionItem} value="item-1">
            <Accordion.Header className={styles.menuAccordionHeader}>
               <Accordion.Trigger className={styles.menuAccordionTrigger}>
                  <div className={styles.menuAccordionTitleWrapper}>
                     {icon && <div className={styles.menuAccordionIcon}>{icon}</div>}
                     <p className={styles.menuAccordionTitle}>{title}</p>
                  </div>
                  <div className={styles.menuAccordionIndicatorWrapper}>
                     <div className={styles.menuAccordionIndicatorDivider}></div>
                     <div className={styles.menuAccordionIndicator}>
                        <ChevronDownIcon />
                     </div>
                  </div>
               </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={styles.menuAccordionContent}>
               {children}
            </Accordion.Content>
         </Accordion.Item>
      </Accordion.Root>
   );
}