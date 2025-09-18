import styles from "./Link.module.css";

interface ILinkProps {
   icon?: React.ReactNode;
   title: string;
   href: string;
}

export function Link({ icon, title, href }: ILinkProps) {
   return (
      <a href={href} className={styles.menuLink}>
         {icon && <div className={styles.linkIcon}>{icon}</div>}
         <p className={styles.linkTitle}>
            {title}
         </p>
      </a>
   );
}
