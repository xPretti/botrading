import { ChevronDown } from "lucide-react";
import styles from "./Details.module.css";

interface IDetailsProps {
   title: string;
   open?: boolean;
   children: React.ReactNode;
   className?: string;
   classNameTrigger?: string;
   classNameContent?: string;

}
export function Details({ title, open, children, className, classNameTrigger, classNameContent }: IDetailsProps) {
   return (
      <details open={open} className={`${styles.details} ${className}`}>
         <summary className={`${styles.detailsTrigger} ${classNameTrigger}`}>
            <h3 className={styles.detailsTriggerTitle}>{title}</h3>
            <ChevronDown className={styles.detailsTriggerIcon} />
         </summary>
         <div className={`${classNameContent} ${styles.detailsContent}`}>
            {children}
         </div>
      </details>
   );
}