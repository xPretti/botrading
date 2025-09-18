import { Accordion as RadixAccordion } from "radix-ui";
import styles from "./Accordion.module.css";
import { ChevronDownIcon } from "lucide-react";

interface IAccordionProps {
   icon?: React.ReactNode;
   title: string;
   children: React.ReactNode;
}

export function Accordion({ icon, title, children }: IAccordionProps) {
   return (
      <RadixAccordion.Root
         className={styles.menuAccordion}
         type="single"
         collapsible
      >
         <RadixAccordion.Item className={styles.menuAccordionItem} value="item-1">
            <RadixAccordion.Header className={styles.menuAccordionHeader}>
               <RadixAccordion.Trigger className={styles.menuAccordionTrigger}>
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
               </RadixAccordion.Trigger>
            </RadixAccordion.Header>
            <RadixAccordion.Content className={styles.menuAccordionContent}>
               {children}
            </RadixAccordion.Content>
         </RadixAccordion.Item>
      </RadixAccordion.Root>
   );
}