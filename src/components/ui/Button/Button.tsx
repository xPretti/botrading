import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title?: string;
   variant?: ButtonVariant;
   fontSize?: string | number;
   fontWeight?: string | number;
   handleClick?: () => void;
   children?: ReactNode;
   fullWidth?: boolean;
}

export function Button({
   title,
   variant = "primary",
   fontSize,
   fontWeight,
   fullWidth = false, // 1. Desestruturado com valor padrão
   children,
   className = "",
   style,
   handleClick,
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
         onClick={handleClick}
         className={`${styles.baseContainer} ${getVariantClass()} ${className}`}
         style={{
            fontSize,
            fontWeight,
            width: fullWidth ? "100%" : "fit-content", // 2. Sintaxe ternária corrigida
            ...style,
         }}
         {...rest}
      >
         {children ?? title}
      </button>
   );
}