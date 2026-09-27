import styles from "./SectionDescription.module.css";

interface ISectionDescriptionProps {
   text?: string;
}
export function SectionDescription({ text }: ISectionDescriptionProps) {
   return (
      <p className={styles.productSectionDescription}>{text}</p>
   );
}