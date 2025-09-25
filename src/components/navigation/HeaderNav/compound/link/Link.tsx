import { NavLink } from "react-router";
import styles from "./Link.module.css";

interface ILinkProps {
   text: string;
   href: string;
}

export function Link({ text, href }: ILinkProps) {
   return (
      <div className={styles.linkWrapper}>
         <NavLink to={href} className={({ isActive }) => (
            isActive ? `${styles.link} ${styles.active}` : styles.link
         )}>
            <span>
               {text}
            </span>
         </NavLink>
      </div>
   );
}
