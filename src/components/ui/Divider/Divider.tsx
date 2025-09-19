import styles from "./Divider.module.css";

interface IDividerProps {
   size?: 1;
}

export function Divider({ size = 1 }: IDividerProps) {
   return (
      <div className={styles.divider} style={{ height: `${size}px` }}></div>
   );
}
