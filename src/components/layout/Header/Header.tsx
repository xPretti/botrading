import { useDevice } from "../../../hooks/useDevice";
import { DEVICE } from "../../../types/device.type";
import { HeaderDesktop, HeaderMobile } from "./content";

import styles from "./Header.module.css";

export function Header() {
   const device = useDevice();

   return (
      <header className={styles.header}>
         {device === DEVICE.DESKTOP ? <HeaderDesktop /> : <HeaderMobile />}
      </header >
   );
}
