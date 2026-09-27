
import { Section } from "@/components/ui/Sections/Section/Section";
import styles from "./Prices.module.css";
import { SectionName } from "@/components/ui/Sections/SectionName/SectionName";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { SectionDescription } from "@/components/ui/Sections/SectionDescription/SectionDescription";

export function Prices() {
   return (
      <Section className={styles.prices} classNameContent={styles.pricesContent}>
         <SectionName title="Preços" />
         <SectionTitle title="Escolha seu plano" />
         <SectionDescription text="Compare o teste gratuito com a licença completa e comece a operar." />

         <div className={styles.pricesCards}>

         </div>
      </Section>
   );
}