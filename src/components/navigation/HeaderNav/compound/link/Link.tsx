import styles from "./Link.module.css";
import { CustomNavLink } from "@/components/ui/CustomNavLink/CustomNavLink";

interface ILinkProps {
   text: string;
   href: string;
}

export function Link({ text, href }: ILinkProps) {
   return (
      <div className={styles.linkWrapper}>
         <CustomNavLink to={href} className={({ isActive }) => (
            isActive ? `${styles.link} ${styles.active}` : styles.link
         )}>
            <span>
               {text}
            </span>
         </CustomNavLink>
      </div>
   );
}
