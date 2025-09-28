import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import styles from "./Solutions.module.css";
import { Section } from "@/components/ui/Section/Section";
import { Details } from "@/components/ui/Details/Details";
import { ProductCard } from "@/components/ui/Cards/ProductCard/ProductCard";
import { Badge } from "@/components/ui/Badge/Badge";

//<span className={styles.outdated}>DESCONTINUADO</span>


export function Solutions() {

   return (
      <div className={styles.solutions}>
         <Section type="hero" className={styles.solutionsHeroSection}>
            <PageTitle title="Soluções" subtitle="Aqui você encontra todas as nossas soluções." />
         </Section>
         <Section margin="40px 0">
            <h3 className={styles.solutionsHeaderTitle}>
               Todas as nossas soluções
            </h3>
            <p className={styles.solutionsHeaderDescription}>
               A seguir, você encontra todas as soluções que desenvolvemos para o MetaTrader 5. <br />
               Elas foram projetadas com foco em segurança, estabilidade e performance, garantindo mais eficiência e confiabilidade para seus traders.<br />
               <br />
               <b>Importante:</b><br /> Algumas versões mais antigas deixaram de receber atualizações e podem apresentar problemas. Recomendamos que não utilize versões identificadas com a marcação <Badge type="outdated">DESCONTINUADO</Badge>.
            </p>
            <Details title="Robôs para Metatrader 5" open={true} className={styles.solutionsDetails}>
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
                        img="/ScriptBot-Plus.png"
                        title="ScriptBot Plus"
                        description="Ferramente de automação de estratégias."
                        version="v1.25"
                        link="https://botrading.gitbook.io/sb-plus/" />
                  </li>
                  <li>
                     <ProductCard
                        img="/ScriptBot-Legacy.png"
                        title="ScriptBot Legacy"
                        description="Ferramente de automação de estratégias."
                        version="v2.0"
                        link="https://botrading.gitbook.io/sb-legacy/"
                        badges={[{ type: "outdated", Message: "DESCONTINUADO" }]} />
                  </li>
               </ul>
            </Details>
         </Section>
      </div>
   );
}