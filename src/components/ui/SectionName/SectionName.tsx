import styles from "./SectionName.module.css";

interface ISectionNameProps {
   title?: string;
}
export function SectionName({ title }: ISectionNameProps) {
   return (
      <h3 className={styles.productSectionTitle}>{title}</h3>
   );
}