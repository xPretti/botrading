import { Accordion as RadixAccordion } from "radix-ui";
import styles from "./Accordion.module.css";
import { Menu } from './compound/Menu/Menu';
import { Link } from "./compound/Link/Link";

interface IAccordionProps {
   children: React.ReactNode;
}

export function Accordion({ children }: IAccordionProps) {
   return (
      <RadixAccordion.Root
         className={styles.accordionRoot}
         type="single"
         collapsible
      >
         {children}
      </RadixAccordion.Root>
   );
}

Accordion.Menu = Menu;
Accordion.Link = Link;