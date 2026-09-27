import { DefaultPage } from "@/components/layout/DefaultPage/DefaultPage";
import { Section } from "@/components/ui/Section/Section";

import styles from "./ScriptBotPage.module.css";
import { ScriptBotHero } from "./components/ScriptBotHero/ScriptBotHero";

export function ScriptBotPage() {
   return (
      <DefaultPage>
         <Section type="hero" className={styles.solutionsHeroSection}>
            <ScriptBotHero />
         </Section>
      </DefaultPage>
   );
}