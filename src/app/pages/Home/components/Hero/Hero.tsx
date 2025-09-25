import { ChevronDown, ExternalLink } from "lucide-react";
import styles from "./Hero.module.css";
import { Frame } from "@/components/ui/Frame/Frame";
import { useDevice } from "@/hooks/useDevice";
import { DEVICE } from "@/types/device-type";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/types/theme-type";

export function Hero() {
   const device = useDevice();
   const { theme } = useTheme();

   return (
      <div className={styles.hero}>
         <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
               <div className={styles.heroNews}>
                  <p className={styles.heroNewsLabel}>ScriptBot v2 Dev Build está disponível!</p>
                  <a className={styles.heroNewsButton} href="https://sb.botrading.net/" target="_blank" rel="noreferrer">
                     Conferir
                     <span><ExternalLink width={18} height={18} /></span>
                  </a>
               </div>
               <div className={styles.heroTitles}>
                  <div className={styles.heroTitlesContent}>
                     <h2 className={styles.heroTitle}>Botrading</h2>
                     <h3 className={styles.heroTitleSub}>Soluções Automatizadas</h3>
                  </div>
                  <h4 className={styles.heroDescription}>Soluções personalizadas para automação, análise e performance no mercado financeiro.</h4>
               </div>
            </div>
            {
               device == DEVICE.DESKTOP &&
               <div className={styles.heroRight}>
                  <Frame className={styles.heroFrame}>
                     <img src="/Candle.png" alt="Logo" width="100%" height="100%" />
                     <Frame className={`${styles.heroFrameItem} ${styles.heroFrameItem1}`}>
                        <img src="/Mql5-Logo.png" alt="Logo" width={100} height={100} title="MetaTrader 5" />
                     </Frame>
                     <Frame className={`${styles.heroFrameItem} ${styles.heroFrameItem3}`}>
                        <img src={theme == THEME.DARK ? "/ScriptBot.png" : "/ScriptBot-red.png"} alt="Logo" width={116} height={116} title="ScriptBot" />
                     </Frame>
                     <Frame className={`${styles.heroFrameItem} ${styles.heroFrameItem2}`}>
                        <img src="/Botrading.png" alt="Logo" width={130} height={130} title="Botrading" />
                     </Frame>
                  </Frame>
               </div>
            }
         </div>
         <div className={styles.heroContinue}>
            <ChevronDown className={styles.heroContinueIcon} width={70} height={70} />
         </div>
      </div>
   );
}