import styles from "./MenuLink.module.css";

interface IMenuLinkProps {
   href: string;
   title: string;
   desc?: string;
   icon?: React.ReactNode;
};

export function MenuLink({ href, title, desc, icon }: IMenuLinkProps) {
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