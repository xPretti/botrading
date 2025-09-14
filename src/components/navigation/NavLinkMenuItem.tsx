import styles from "./NavLinkMenuItem.module.css";

interface NavLinkMenuItemProps {
   href: string;
   title: string;
   desc?: string;
   icon?: React.ReactNode;
};

export default function NavLinkMenuItem({ href, title, desc, icon }: NavLinkMenuItemProps) {
   return (
      <a className={styles.navLinkMenuItem} href={href}>
         {icon &&
            <div className={styles.navLinkMenuItemIcon}>
               {icon}
            </div>
         }
         <div className={styles.navLinkMenuItemContent}>
            <p className={styles.navLinkMenuItemTitle}>{title}</p>
            {desc && <p className={styles.navLinkMenuItemDesc}>{desc}</p>}
         </div>
      </a>
   );
};