import styles from "./App.module.css";

import { Header } from "@/components/layout/Header/Header";
import { Providers } from "./Providers";
import { Footer } from "@/components/layout/Footer/Footer";
import { Outlet } from "react-router";


function App() {
   return (
      <Providers>
         <div className={styles.app}>
            <Header />
            <div className={styles.appContent}>
               <Outlet />
            </div>
            <Footer />
         </div>
      </Providers>
   );
}

export default App;
