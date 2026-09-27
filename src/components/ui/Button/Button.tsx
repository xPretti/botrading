import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title?: string;
   variant?: ButtonVariant;
   fontSize?: string | number;
   fontWeight?: string | number;
   children?: ReactNode;
}

export function Button({
   title,
   variant = "primary",
   fontSize,
   fontWeight,
   children,
   className = "",
   style,
   ...rest
}: IButtonProps) {
   const getVariantClass = () => {
      switch (variant) {
         case "secondary":
            return styles.secondaryContainer;
         case "outline":
            return styles.outlineContainer;
         case "ghost":
            return styles.ghostContainer;
         case "primary":
         default:
            return styles.primaryContainer;
      }
   };

   return (
      <button
         className={`${styles.baseContainer} ${getVariantClass()} ${className}`}
         style={{ ...style, fontSize: fontSize ? fontSize : undefined, fontWeight: fontWeight ? fontWeight : undefined }}
         {...rest}
      >
         {children ? children : title}
      </button>
   );
}