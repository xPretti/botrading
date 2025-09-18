import { Heart } from "lucide-react";
import { FooterLinks } from "./components/FooterLinks";
import styles from "./Footer.module.css";

const LINKS = {
   DISCORD: 'http://discord.botrading.net/',
   MQL5: 'https://www.mql5.com/en/users/fabiopretti'
};

export function Footer() {

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
                  <FooterLinks title="PRODUTOS"
                     links={
                        [
                           { title: "Robôs", link: "#" },
                           { title: "Indicadores", link: "#" },
                        ]} />
                  <FooterLinks title="RECURSOS"
                     links={
                        [
                           { title: "Documentações", link: "#" },
                        ]} />
                  <FooterLinks title="EMPRESA"
                     links={
                        [
                           { title: "Sobre", link: "#" },
                           { title: "Contato", link: "#" },
                        ]} />
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
