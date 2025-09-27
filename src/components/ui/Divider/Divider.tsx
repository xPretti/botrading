import styles from "./Divider.module.css";

interface IDividerProps {
   thickness?: 1;
   size?: string;

   type?: "horizontal" | "vertical";
}

export function Divider({ thickness = 1, size = "100%", type = "horizontal" }: IDividerProps) {

   if (type === "vertical") {
      return (
         <div className={styles.divider} style={{ width: `${thickness}px`, height: `${size}` }}></div>
      );
   }

   return (
      <div className={styles.divider} style={{ width: `${size}`, height: `${thickness}px` }}></div>
   );
}
