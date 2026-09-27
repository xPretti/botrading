import { Section } from "@/components/ui/Sections/Section/Section";
import styles from "./Compatibility.module.css";

export function Compatibility() {
   return (
      <Section className={styles.compatibility}>
         <p className={styles.compatibilityText}>Compatível com <strong>MetaTrader 5</strong> · Netting e Hedge · Forex, Índices e mais</p>
      </Section>
   );
}