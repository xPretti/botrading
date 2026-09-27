import styles from "./App.module.css";

import { AppProviders } from "./AppProviders";
import { Outlet } from "react-router";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";


function App() {
   return (
      <AppProviders>
         <div className={styles.app}>
            <BackToTop />
            <Outlet />
         </div>
      </AppProviders>
   );
}

export default App;
