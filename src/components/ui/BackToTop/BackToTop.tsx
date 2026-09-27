import styles from "./BackToTop.module.css";
import { ArrowUp } from "lucide-react";
import { usePageScrollPosition } from "@/hooks/usePageScrollPosition";
interface IBackToTopProps {
   distance?: number;
}
export function BackToTop({ distance = 300 }: IBackToTopProps) {
   const passed = usePageScrollPosition(distance);

   if (!passed) return null;

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <div className={styles.backToTop} onClick={scrollToTop}>
         <ArrowUp width={35} height={35} className={styles.backToTopIcon} />
      </div>
   );
}