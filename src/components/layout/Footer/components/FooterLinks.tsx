import type { FooterLinkType } from "@/types/footer-links-type";
import styles from "./FooterLinks.module.css";
import { CustomNavLink } from "@/components/ui/CustomNavLink/CustomNavLink";

interface IFooterLinksProps {
   title: string;
   links: FooterLinkType[];
}

export function FooterLinks({ title, links }: IFooterLinksProps) {
   return (
      <div className={styles.footerLinks}>
         <p className={styles.footerLinksTitle}>{title}</p>
         <div className={styles.footerLinksContent}>
            {links.map((link) => (
               <CustomNavLink to={link.url} key={link.name}>
                  {link.name}
               </CustomNavLink>
            ))}
         </div>
      </div>
   );
}
