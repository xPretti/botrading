import styles from "./FooterLinks.module.css";

export type FooterLinkType = {
   title: string;
   link: string;
};

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
               <a href={link.link} key={link.title}>
                  {link.title}
               </a>
            ))}
         </div>
      </div>
   );
}
