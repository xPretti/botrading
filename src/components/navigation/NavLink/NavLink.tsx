import styles from "./NavLink.module.css";

export interface NavLinkProps {
   text: string;
   href: string;
}

export function NavLink({ text, href }: NavLinkProps) {
   return (
      <a className={styles.navLink} href={href}>
         <span>{text}</span>
      </a>
   );
}
