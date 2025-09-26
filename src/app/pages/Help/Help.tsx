import { Section } from "@/components/ui/Section/Section";
import styles from "./Help.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import { SupportCard } from "@/components/ui/Cards/SupportCard/SupportCard";
import { useTheme } from "@/hooks/useTheme";
import { getThemeValue } from "@/utils/theme-utils";

export function Help() {

   const { theme } = useTheme();

   return (
      <div className={styles.help}>
         <Section type="hero" margin="240px 0">
            <PageTitle title="Central de Suporte" subtitle="Aqui você encontra os principais canais de suporte disponíveis para você." />
         </Section>
         <Section className={styles.discordSection}>
            <div className={styles.discordContent}>
               <div className={styles.discordHeader}>
                  <h2 className={styles.discordTitle}>Discord</h2>
                  <p className={styles.discordDescription}>Junte-se à comunidade Botrading no Discord e aproveite suporte rápido, troca de ideias com outros traders, compartilhamento de estratégias, acesso a downloads exclusivos, atualizações de produtos e muito mais!</p>
               </div>
               <a className={styles.discordButton} href="https://discord.botrading.net" target="_blank" rel="noreferrer">Juntar-se à comunidade</a>
            </div>
         </Section>
         <Section classNameContent={styles.channelsSection} margin="40px 0">
            <h2 className={styles.channelsTitle}>Todos os canais de suporte</h2>
            <ul className={styles.channelsList}>
               <li>
                  <SupportCard type="link" img={getThemeValue(theme, "/support/Whatzapp.png", "/support/Whatzapp.png")} title="WhatsApp" message="Entrar em contato" url="https://google.com/" />
               </li>
               <li>
                  <SupportCard type="text" img={getThemeValue(theme, "/support/Mail.png", "/support/Mail.png")} title="E-mail" message="support@botrading.net" />
               </li>
               <li>
                  <SupportCard type="link" img={getThemeValue(theme, "/support/Discord.png", "/support/Discord.png")} title="Discord" message="Entrar em contato" url="https://google.com/" />
               </li>
            </ul>
         </Section>
      </div>
   );
}