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
         {/* <RadixAccordion.Item
            className={styles.accordionItem}
            key={"About"}
            value={"About"}
         >
            <RadixAccordion.Header className={styles.accordionHeader}>
               <RadixAccordion.Trigger className={styles.accordionTrigger}>
                  <p>About</p>
                  <ChevronDownIcon className={styles.accordionChevron} aria-hidden />
               </RadixAccordion.Trigger>
            </RadixAccordion.Header>

            <RadixAccordion.Content className={styles.accordionContent}>
               <ul className={styles.accordionLinksList}>
                  <li>
                     <a href={"link1"} className={styles.accordionLink}>
                        link1
                     </a>
                  </li>
                  <li>
                     <a href={"link2"} className={styles.accordionLink}>
                        link2
                     </a>
                  </li>
                  <li>
                     <a href={"link1"} className={styles.accordionLink}>
                        link1
                     </a>
                  </li>
               </ul>
            </RadixAccordion.Content>
         </RadixAccordion.Item>

         <p> JUJUBAS LOUCAS</p>
         <RadixAccordion.Item
            className={styles.accordionItem}
            key={"About2"}
            value={"About2"}
         >
            <RadixAccordion.Header className={styles.accordionHeader}>
               <RadixAccordion.Trigger className={styles.accordionTrigger}>
                  <p>About</p>
                  <ChevronDownIcon className={styles.accordionChevron} aria-hidden />
               </RadixAccordion.Trigger>
            </RadixAccordion.Header>

            <RadixAccordion.Content className={styles.accordionContent}>
               <ul className={styles.accordionLinksList}>
                  <li>
                     <a href={"link1"} className={styles.accordionLink}>
                        link1
                     </a>
                  </li>
                  <li>
                     <a href={"link2"} className={styles.accordionLink}>
                        link2
                     </a>
                  </li>
                  <li>
                     <a href={"link1"} className={styles.accordionLink}>
                        link1
                     </a>
                  </li>
               </ul>
            </RadixAccordion.Content>
         </RadixAccordion.Item> */}

         {/* {links.map((section) => (
            <RadixAccordion.Item
               className={styles.accordionItem}
               key={section.category}
               value={section.category}
            >
               <RadixAccordion.Header className={styles.accordionHeader}>
                  <RadixAccordion.Trigger className={styles.accordionTrigger}>
                     {section.category}
                     <ChevronDownIcon className={styles.accordionChevron} aria-hidden />
                  </RadixAccordion.Trigger>
               </RadixAccordion.Header>

               <RadixAccordion.Content className={styles.accordionContent}>
                  <ul className={styles.accordionLinksList}>
                     {section.links.map((link) => (
                        <li key={link.url}>
                           <a href={link.url} className={styles.accordionLink}>
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </RadixAccordion.Content>
            </RadixAccordion.Item>
         ))} */}
      </RadixAccordion.Root>
   );
}

Accordion.Menu = Menu;
Accordion.Link = Link;