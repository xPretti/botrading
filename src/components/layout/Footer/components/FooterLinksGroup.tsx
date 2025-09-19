import type { FooterLinksType } from "@/types/footer-links-type";
import { FooterLinks } from "./FooterLinks";
import styles from "./FooterLinksGroup.module.css";


interface IFooterLinksGroupProps {
   links: FooterLinksType[];

}

export function FooterLinksGroup({ links }: IFooterLinksGroupProps) {
   return (
      <div className={styles.footerLinksGroup}>
         {links.map((link) => (<FooterLinks key={link.category} title={link.category} links={link.links} />))}
      </div>
   );
}
