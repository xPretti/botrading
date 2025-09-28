import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import styles from "./Solutions.module.css";
import { Section } from "@/components/ui/Section/Section";
import { Details } from "@/components/ui/Details/Details";
import { ProductCard } from "@/components/ui/Cards/ProductCard/ProductCard";




export function Solutions() {

   return (
      <div className={styles.solutions}>
         <Section type="hero">
            <PageTitle title="Soluções" subtitle="Aqui você encontra todas as nossas soluções." />
         </Section>
         <Section margin="40px 0">
            <Details title="Nossos robôs para Metatrader 5" open={true}>
               <ul className={styles.solutionsList}>
                  <li>
                     <ProductCard
                        img="/ScriptBot.png"
                        title="ScriptBot"
                        description="Ferramente de automação de estratégias."
                        version="v2.0"
                        link="https://sb.botrading.net"
                        badges={[{ type: "new", Message: "NOVO" }, { type: "alpha", Message: "DEV-BUILD" }]} />
                  </li>
                  <li>
                     <ProductCard
                        img="/Map.png"
                        title="ScriptBot Plus"
                        description="Ferramente de automação de estratégias."
                        version="v1.25"
                        link="https://botrading.gitbook.io/sb-plus/" />
                  </li>
                  <li>
                     <ProductCard
                        img="/Map.png"
                        title="ScriptBot Plus"
                        description="Ferramente de automação de estratégias."
                        version="v1.25"
                        link="https://botrading.gitbook.io/sb-plus/" />
                  </li>
                  <li>
                     <ProductCard
                        img="/Map.png"
                        title="ScriptBot Plus"
                        description="Ferramente de automação de estratégias."
                        version="v1.25"
                        link="https://botrading.gitbook.io/sb-plus/" />
                  </li>
                  <li>
                     <ProductCard
                        img="/Map.png"
                        title="ScriptBot Plus"
                        description="Ferramente de automação de estratégias."
                        version="v1.25"
                        link="https://botrading.gitbook.io/sb-plus/" />
                  </li>
                  <li>
                     <ProductCard
                        img="/Map.png"
                        title="ScriptBot Plus"
                        description="Ferramente de automação de estratégias."
                        version="v1.25"
                        link="https://botrading.gitbook.io/sb-plus/" />
                  </li>
                  <li>
                     <ProductCard
                        img="/Map.png"
                        title="ScriptBot Plus"
                        description="Ferramente de automação de estratégias."
                        version="v1.25"
                        link="https://botrading.gitbook.io/sb-plus/" />
                  </li>
               </ul>
            </Details>
         </Section>
      </div>
   );
}