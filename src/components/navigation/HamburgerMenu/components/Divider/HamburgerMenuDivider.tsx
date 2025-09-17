import styles from "./HamburgerMenuDivider.module.css";

interface IHamburgerMenuDividerProps {
   size?: 1;
}

export function HamburgerMenuDivider({ size = 1 }: IHamburgerMenuDividerProps) {
   return (
      <div className={styles.menuDivider} style={{ height: `${size}px` }}></div>
   );
}
