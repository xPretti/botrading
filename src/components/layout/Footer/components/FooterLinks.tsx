import type { FooterLinkType } from "@/types/footer-links-type";
import styles from "./FooterLinks.module.css";

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
               <a href={link.url} key={link.name}>
                  {link.name}
               </a>
            ))}
         </div>
      </div>
   );
}
