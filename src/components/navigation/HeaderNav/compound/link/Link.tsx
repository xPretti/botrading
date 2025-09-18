import styles from "./Link.module.css";

interface ILinkProps {
   text: string;
   href: string;
}

export function Link({ text, href }: ILinkProps) {
   return (
      <a className={styles.headerNavLink} href={href}>
         <span>{text}</span>
      </a>
   );
}
