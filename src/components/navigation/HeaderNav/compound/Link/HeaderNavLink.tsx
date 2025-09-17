import styles from "./HeaderNavLink.module.css";

interface IHeaderNavLinkProps {
   text: string;
   href: string;
}

export function HeaderNavLink({ text, href }: IHeaderNavLinkProps) {
   return (
      <a className={styles.headerNavLink} href={href}>
         <span>{text}</span>
      </a>
   );
}
