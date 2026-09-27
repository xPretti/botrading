
import { Section } from "@/components/ui/Section/Section";
import styles from "./Features.module.css";
import { SectionName } from "@/components/ui/SectionName/SectionName";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { SectionDescription } from "@/components/ui/SectionDescription/SectionDescription";

export function Features() {
   return (
      <Section className={styles.compatibility}>
         <SectionName title="Características" />
         <SectionTitle title="Tudo que sua estratégia precisa" />
         <SectionDescription text="Mais de 250 funções e variáveis prontas, painel intuitivo e controle total sobre suas operações." />
      </Section>
   );
}