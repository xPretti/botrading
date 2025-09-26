import styles from "./MenuLink.module.css";
import { NavigationMenu } from "radix-ui";
import { CustomNavLink } from "@/components/ui/CustomNavLink/CustomNavLink";

interface IMenuLinkProps {
   href: string;
   title: string;
   desc?: string;
   icon?: React.ReactNode;
};

export function MenuLink({ href, title, desc, icon }: IMenuLinkProps) {


   return (
      <NavigationMenu.Link asChild>
         <CustomNavLink className={styles.headerNavMenuLink} to={href}>
            {icon &&
               <div className={styles.headerNavMenuLinkIcon}>
                  {icon}
               </div>
            }
            <div className={styles.HhaderNavMenuLinkContent}>
               <p className={styles.headerNavMenuLinkTitle}>{title}</p>
               {desc && <p className={styles.headerNavMenuLinkDesc}>{desc}</p>}
            </div>
         </CustomNavLink>
      </NavigationMenu.Link>
   );
};