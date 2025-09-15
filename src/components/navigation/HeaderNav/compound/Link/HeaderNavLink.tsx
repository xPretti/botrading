import styles from "./HeaderNavLink.module.css";

interface HeaderNavLinkProps {
   text: string;
   href: string;
}

export function HeaderNavLink({ text, href }: HeaderNavLinkProps) {
   return (
      <a className={styles.headerNavLink} href={href}>
         <span>{text}</span>
      </a>
   );
}
