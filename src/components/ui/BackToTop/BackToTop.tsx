import styles from "./BackToTop.module.css";
import { Frame } from "../Frame/Frame";
import { ArrowUp } from "lucide-react";
import { usePageScrollPosition } from "@/hooks/usePageScrollPosition";
import { useDevice } from "@/hooks/useDevice";
import { DEVICE } from "@/types/device-type";
interface IBackToTopProps {
  distance?: number;
}
export function BackToTop({ distance = 300 }: IBackToTopProps) {
  const passed = usePageScrollPosition(distance);
  const device = useDevice();

  if (!passed || device != DEVICE.DESKTOP) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Frame className={styles.backToTop} onClick={scrollToTop}>
      <ArrowUp width={38} height={38} className={styles.backToTopIcon} />
    </Frame>
  );
}