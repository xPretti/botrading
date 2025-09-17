import styles from "./HeaderNavMenuLink.module.css";

interface IHeaderNavMenuLinkProps {
   href: string;
   title: string;
   desc?: string;
   icon?: React.ReactNode;
};

export function HeaderNavMenuLink({ href, title, desc, icon }: IHeaderNavMenuLinkProps) {
   return (
      <a className={styles.headerNavMenuLink} href={href}>
         {icon &&
            <div className={styles.headerNavMenuLinkIcon}>
               {icon}
            </div>
         }
         <div className={styles.HhaderNavMenuLinkContent}>
            <p className={styles.headerNavMenuLinkTitle}>{title}</p>
            {desc && <p className={styles.headerNavMenuLinkDesc}>{desc}</p>}
         </div>
      </a>
   );
};