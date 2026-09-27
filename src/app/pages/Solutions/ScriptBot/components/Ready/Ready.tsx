import { Button } from "@/components/ui/Button/Button";
import styles from "./Ready.module.css";
import { Section } from "@/components/ui/Sections/Section/Section";

export function Ready() {
   return (
      <Section className={styles.readySection}>
         <div className={styles.readyContent}>
            <h2>Pronto para automatizar sua estratégia?</h2>
            <p>Baixe a versão de teste agora ou garanta a licença completa e opere sem limites.</p>
            <div className={styles.actions}>
               <div className={styles.buttons}>
                  <a href="https://www.mql5.com" rel="noopener noreferrer">
                     <Button
                        title="Compre no MQL5"
                        variant="primary"
                        fontSize="1rem"
                        disabled
                     />
                  </a>

                  <a href="https://sb.botrading.net/resources/downloads/" rel="noopener noreferrer">
                     <Button
                        title="Baixar versão gratuita"
                        variant="outline"
                        fontSize="1rem"
                     />
                  </a>
                  <a href="https://sb.botrading.net/" rel="noopener noreferrer">
                     <Button
                        title="Acessar documentação"
                        variant="ghost"
                        fontSize="1rem"
                     />
                  </a>
               </div>
            </div>
         </div>
      </Section>
   );
}