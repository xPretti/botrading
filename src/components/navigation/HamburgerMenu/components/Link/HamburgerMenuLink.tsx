import styles from "./HamburgerMenuLink.module.css";

interface HamburgerMenuLinkProps {
   icon?: React.ReactNode;
   title: string;
   href: string;
}

export function HamburgerMenuLink({ icon, title, href }: HamburgerMenuLinkProps) {
   return (
      <a href={href} className={styles.menuLink}>
         {icon && <div className={styles.linkIcon}>{icon}</div>}
         <div className={styles.linkTitle}>
            {title}
         </div>
      </a>
   );
}
