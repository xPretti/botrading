import styles from "./Divider.module.css";

interface IDividerProps {
   thickness?: 1;
   size?: string;

   type?: "horizontal" | "vertical";
   className?: string;
}

export function Divider({ thickness = 1, size = "100%", type = "horizontal", className }: IDividerProps) {

   if (type === "vertical") {
      return (
         <div className={`${styles.divider} ${className}`} style={{ width: `${thickness}px`, height: `${size}` }}></div>
      );
   }

   return (
      <div className={`${styles.divider} ${className}`} style={{ width: `${size}`, height: `${thickness}px` }}></div>
   );
}
