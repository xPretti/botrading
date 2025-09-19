import { ArrowRight } from "lucide-react";
import styles from "./Link.module.css";

interface ILinkProps {
   icon?: React.ReactNode;
   arrow?: React.ReactNode;
   title: string;
   href: string;
}

export function Link({ icon, arrow = <ArrowRight />, title, href }: ILinkProps) {
   return (
      <a href={href} className={styles.menuLink}>
         <div className={styles.linkWrapper}>
            {icon && <div className={styles.linkIcon}>{icon}</div>}
            <p className={styles.linkTitle}>
               {title}
            </p>
         </div>
         {arrow && <div className={styles.linkArrow}>{arrow}</div>}
      </a>
   );
}
