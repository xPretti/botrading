import styles from "./Metatrader.module.css";

export function Metatrader() {
  return (
    <section className={styles.metatrader}>
      <div className={styles.metatraderContent}>
        <div className={styles.metatraderLeft}>
          <h3>
            Soluções para Metatrader 5
          </h3>
          <div className={styles.metatraderDescriptions}>
            <p>Desenvolvemos robôs e indicadores robustos, com foco em segurança, estabilidade e alta otimização, oferecendo automação confiável para suas estratégias.</p>
            <p>O MetaTrader 5 oferece alto desempenho, suporte a múltiplos ativos e recursos avançados de análise e backtesting, tornando-se a plataforma ideal para traders que buscam confiabilidade e eficiência na automação de suas operações.</p>
          </div>
        </div>
        <div className={styles.metatraderRight}>
          <img src="/Metatrader5.png" alt="Logo" width="289" height="289" />
        </div>
      </div>
    </section >
  );
}