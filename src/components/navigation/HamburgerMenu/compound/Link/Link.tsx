import { CustomNavLink } from "@/components/ui/CustomNavLink/CustomNavLink";
import styles from "./Link.module.css";
import { Dialog } from "radix-ui";

interface ILinkProps {
   icon?: React.ReactNode;
   title: string;
   href: string;
}

export function Link({ icon, title, href }: ILinkProps) {
   return (
      <Dialog.Close asChild>
         <CustomNavLink to={href} className={styles.menuLink}>
            {icon && <div className={styles.linkIcon}>{icon}</div>}
            <p className={styles.linkTitle}>
               {title}
            </p>
         </CustomNavLink>
      </Dialog.Close>
   );
}
