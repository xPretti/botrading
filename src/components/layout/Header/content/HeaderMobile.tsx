
import { HeaderMenu } from "./HeaderMenu";
import styles from "./HeaderMobile.module.css";


export function HeaderMobile() {
   return (
      <div className={styles.headerContent}>
         <div className={styles.headerLeft}>
            <a href="/" className={styles.headerLogo}>
               <img src="/Botrading.png" alt="Logo" />
               <p>Botrading</p>
            </a>
         </div>
         <div className={styles.headerRight}>
            <HeaderMenu />
         </div>
      </div>
   );
}