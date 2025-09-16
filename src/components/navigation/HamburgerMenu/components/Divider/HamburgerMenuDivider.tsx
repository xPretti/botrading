import styles from "./HamburgerMenuDivider.module.css";

interface HamburgerMenuDividerProps {
   size?: 1;
}

export function HamburgerMenuDivider({ size = 1 }: HamburgerMenuDividerProps) {
   return (
      <div className={styles.menuDivider} style={{ height: `${size}px` }}></div>
   );
}
