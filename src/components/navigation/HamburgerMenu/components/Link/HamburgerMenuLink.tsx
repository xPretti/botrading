import styles from "./HamburgerMenuLink.module.css";

interface IHamburgerMenuLinkProps {
   icon?: React.ReactNode;
   title: string;
   href: string;
}

export function HamburgerMenuLink({ icon, title, href }: IHamburgerMenuLinkProps) {
   return (
      <a href={href} className={styles.menuLink}>
         {icon && <div className={styles.linkIcon}>{icon}</div>}
         <p className={styles.linkTitle}>
            {title}
         </p>
      </a>
   );
}
