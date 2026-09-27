import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface IDefaultPageProps {
   children?: React.ReactNode;
}

export function DefaultPage({ children }: IDefaultPageProps) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
}