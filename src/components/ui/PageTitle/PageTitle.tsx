import styles from "./PageTitle.module.css";
interface IPageTitleProps {
   title: string;
   subtitle: string;
}
export function PageTitle({ title, subtitle }: IPageTitleProps) {
   return (
      <div className={styles.pageTitle}>
         <h2 className={styles.title}>{title}</h2>
         <h4 className={styles.subtitle}>{subtitle}</h4>
      </div >
   );
}