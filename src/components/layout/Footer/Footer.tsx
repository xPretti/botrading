import { Heart } from "lucide-react";
import styles from "./Footer.module.css";
import { useDevice } from "@/hooks/useDevice";
import { DEVICE } from "@/types/device-type";
import { FooterLinksGroup } from "./components/FooterLinksGroup";
import type { FooterLinksType } from "@/types/footer-links-type";
import { FooterLinksAccordion } from "./components/FooterLinksAccordion";

const LINKS = {
   DISCORD: 'http://discord.botrading.net/',
   MQL5: 'https://www.mql5.com/en/users/fabiopretti'
};

const FOOTER_LINKS: FooterLinksType[] = [
   {
      category: "PRODUTOS", links: [
         { name: "Robôs", url: "#" },
         { name: "Indicadores", url: "#" },
      ]
   },
   {
      category: "RECURSOS", links: [
         { name: "Documentações", url: "#" },
      ]
   },
   {
      category: "EMPRESA", links: [
         { name: "Sobre", url: "#" },
         { name: "Contato", url: "#" },
      ]
   }
];

export function Footer() {

   const device = useDevice();
   const getCurrentYear = () => new Date().getFullYear();

   return (
      <footer className={styles.footer}>
         <div className={styles.footerContent}>
            <div className={styles.footerUpper}>
               <div className={styles.footerUpperLeft}>
                  <p className={styles.footerUpperLeftLogo}>Botrading</p>
                  <div className={styles.footerUpperLefContent}>
                     <p className={styles.footerUpperLeftContentText}>Feito com muito <Heart className={styles.footerUpperLeftContentHeart} /> no Brasil!</p>
                     <div className={styles.footerUpperLeftContentTech}>
                        <a href={LINKS.DISCORD}><img src="/Discord.svg" alt="Discord" width={25} height={19} /></a>
                        <a href={LINKS.MQL5}><img src="/Mql5.png" alt="MetaTrader" width={60} height={22} /></a>
                     </div>
                  </div>
               </div>
               <div className={styles.footerUpperRight}>
                  {device == DEVICE.MOBILE
                     ?
                     <FooterLinksAccordion links={FOOTER_LINKS} />
                     : <FooterLinksGroup links={FOOTER_LINKS} />}

               </div>
            </div>
            <div className={styles.footerLowerDivider}></div>
            <div className={styles.footerLower}>
               <p className={styles.footerLowerText}>© {getCurrentYear()} Botrading. Todos os direitos reservados.</p>
            </div>
         </div>
      </footer>
   );
}
