import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import styles from "./DefaultPage.module.css";

interface IDefaultPageProps {
   children?: React.ReactNode;
}

export function DefaultPage({ children }: IDefaultPageProps) {
   return (
      <>
         <Header />
         <div className={styles.content}>
            {children}
         </div>
         <Footer />
      </>
   );
}