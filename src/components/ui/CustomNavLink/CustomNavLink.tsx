// CustomNavLink.tsx

import { NavLink, type NavLinkProps } from "react-router";

interface CustomNavLinkProps extends NavLinkProps {
   scrollToTop?: boolean;
}

export function CustomNavLink({ scrollToTop = true, ...props }: CustomNavLinkProps) {
   const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (scrollToTop) {
         window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (props.onClick) props.onClick(e);
   };

   return <NavLink {...props} onClick={handleClick} />;
}
