import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./ButtonLink.module.css";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface IButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
   title?: string;
   variant?: ButtonVariant;
   fontSize?: string | number;
   fontWeight?: string | number;
   fullWidth?: boolean;
   external?: boolean;
   disabled?: boolean;
   children?: ReactNode;
}

export function ButtonLink({
   title,
   variant = "primary",
   fontSize,
   fontWeight,
   fullWidth = false,
   external = false,
   disabled = false,
   children,
   className = "",
   style,
   href,
   onClick,
   ...rest
}: IButtonLinkProps) {
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

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
         e.preventDefault();
         return;
      }
      onClick?.(e);
   };

   return (
      <a
         href={disabled ? undefined : href}
         onClick={handleClick}
         aria-disabled={disabled}
         target={external ? "_blank" : undefined}
         rel={external ? "noopener noreferrer" : undefined}
         className={`
        ${styles.baseContainer}
        ${getVariantClass()}
        ${disabled ? styles.disabled : ""}
        ${className}
      `.trim()}
         style={{
            fontSize,
            fontWeight,
            width: fullWidth ? "100%" : "fit-content",
            ...style,
         }}
         {...rest}
      >
         {children ?? title}
      </a>
   );
}