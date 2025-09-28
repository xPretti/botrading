import { Section } from "@/components/ui/Section/Section";
import styles from "./Help.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import { SupportCard } from "@/components/ui/Cards/SupportCard/SupportCard";
import { useTheme } from "@/hooks/useTheme";
import { getThemeValue } from "@/utils/theme-utils";

export type HelpLinkType = {
   type: "link" | "text";
   img: string;
   imgDark: string;
   title: string;
   message: string;
   url?: string;
};

const channels: HelpLinkType[] = [
   {
      type: "link",
      img: "/support/Discord.png",
      imgDark: "/support/Discord.png",
      title: "Discord",
      message: "Entrar na comunidade",
      url: "https://discord.botrading.net"
   },
   {
      type: "text",
      img: "/support/Whatsapp.png",
      imgDark: "/support/Whatsapp.png",
      title: "WhatsApp",
      message: "(+55) 11 99999-9999"
   },
   {
      type: "text",
      img: "/support/Email.png",
      imgDark: "/support/Email.png",
      title: "E-mail",
      message: "test@example.com"
   },
   {
      type: "link",
      img: "/support/Telegram.png",
      imgDark: "/support/Telegram.png",
      title: "Telegram",
      message: "Entrar na comunidade",
      url: "https://t.me/#"
   }
];

export function Help() {

   const { theme } = useTheme();

   return (
      <div className={styles.help}>
         <Section type="hero">
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
               {channels.map((channel) => (
                  <li key={channel.title}>
                     <SupportCard type={channel.type} img={getThemeValue(theme, channel.img, channel.imgDark)} title={channel.title} message={channel.message} url={channel.url} />
                  </li>
               ))}
            </ul>
         </Section>
      </div>
   );
}