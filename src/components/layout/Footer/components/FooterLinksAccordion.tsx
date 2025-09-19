import type { FooterLinksType } from "@/types/footer-links-type";
import { Accordion } from "@/components/ui/Accordion/Accordion";
import { Divider } from "@/components/ui/Divider/Divider";

interface IFooterLinksAccordionProps {
   links: FooterLinksType[];
}

export function FooterLinksAccordion({ links }: IFooterLinksAccordionProps) {
   return (
      <Accordion>
         <Divider />
         {links.map((link) => (
            <>
               <Accordion.Menu title={link.category} key={link.category}>
                  {link.links.map((link) => (
                     <Accordion.Link key={link.name} title={link.name} href={link.url} />
                  ))}
               </Accordion.Menu>
               <Divider />
            </>
         ))}
      </Accordion>
   );
}