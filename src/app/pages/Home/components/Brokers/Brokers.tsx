import { useTheme } from "@/hooks/useTheme";
import styles from "./Brokers.module.css";
import { THEME } from "@/types/theme-type";
import type { ImgThemeType } from "@/types/img-type";

export type BrokerType = {
  name: string;
  link: string;
  img: ImgThemeType;
};
const BROKERS: BrokerType[] = [
  {
    name: "Fbs",
    link: "https://www.fbs.com/",
    img: {
      light: "/brokers/Fbs.png",
      dark: "/brokers/Fbs.png",
    },
  },
  {
    name: "ActiveTrades",
    link: "https://www.activetrades.com.br/",
    img: {
      light: "/brokers/ActiveTrades.png",
      dark: "/brokers/ActiveTrades.png",
    },
  },
  {
    name: "XP Investimentos",
    link: "https://www.xpi.com.br/",
    img: {
      light: "/brokers/Xp-black.svg",
      dark: "/brokers/Xp.svg",
    }
  }
];

export function Brokers() {
  const { theme } = useTheme();

  return (
    <section className={styles.brokers}>
      <div className={styles.brokersContent}>
        <div className={styles.brokersHeader}>
          <h3 className={styles.brokersHeaderTitle}>
            Compatível com as principais corretoras
          </h3>
          <p className={styles.brokersHeaderDescription}>
            Nossas soluções são desenvolvidas para garantir máximo desempenho e estabilidade em diferentes cenários. Seja em corretoras de Forex ou em índices, com operações em netting ou hedge, nossas soluções oferecem segurança, eficiência e confiabilidade.
          </p>
        </div>
        <div className={styles.brokersItems}>
          <ul className={styles.brokersItemsList}>
            {BROKERS.map((broker) => (
              <li key={broker.name}>
                <a href={broker.link} target="_blank" rel="noreferrer" className={styles.brokersItem}>
                  <img src={theme == THEME.DARK ? broker.img.dark : broker.img.light} alt={broker.name} width={50} height={50} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section >
  );
}