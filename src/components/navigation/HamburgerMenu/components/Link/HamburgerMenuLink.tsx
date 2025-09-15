import styles from "./HamburgerMenuLink.module.css";

interface HamburgerMenuLinkProps {
   icon?: React.ReactNode;
   title: string;
   href: string;
}

export function HamburgerMenuLink({ icon, title, href }: HamburgerMenuLinkProps) {
   return (
      <div className={styles.menuLink}>
         {icon && <div className={styles.linkIcon}>{icon}</div>}
         <a href={href} className={styles.linkTitle}>
            {title}
         </a>
      </div>
   );
}
