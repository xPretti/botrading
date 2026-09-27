import styles from "./SectionTitle.module.css";

interface ISectionTitleProps {
   title?: string;
}
export function SectionTitle({ title }: ISectionTitleProps) {
   return (
      <h2 className={styles.productSectionTitle}>{title}</h2>
   );
}