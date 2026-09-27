import { Button } from '@/components/ui/Button/Button';
import styles from './ScriptBotHero.module.css';
import { useDevice } from '@/hooks/useDevice';
import { Section } from '@/components/ui/Section/Section';

export function ScriptBotHero() {
   const { isDesktop } = useDevice();

   return (
      <Section type="hero">
         <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
               {/* Badges / Tags do topo */}
               <div className={styles.heroNews}>
                  <span className={styles.heroNewsLabel}><div className={styles.heroNewsPulse} />MetaTrader 5</span>
                  <span className={styles.heroNewsLabel}><div className={styles.heroNewsPulse} />Netting & Hedge</span>
                  <span className={styles.heroNewsLabel}><div className={styles.heroNewsPulse} />+250 funções</span>
               </div>

               {/* Títulos e Descrição */}
               <div className={styles.heroTitles}>
                  <div className={styles.heroTitlesContent}>
                     <h1 className={styles.heroTitle}>ScriptBot</h1>
                     <h2 className={styles.heroTitleSub}>Automação de estratégias no MetaTrader 5</h2>
                  </div>
                  <p className={styles.heroDescription}>
                     <strong>ScriptBot</strong> é um avançado robô programável desenvolvido especialmente para automatizar estratégias no MetaTrader 5. Projetado
                     tanto para traders iniciantes quanto experientes, permite criar estratégias flexíveis e altamente personalizáveis, com todos os recursos para
                     testar, ajustar e executar operações automatizadas com precisão.
                  </p>
               </div>

               {/* Botões de Ação e nota de rodapé */}
               <div className={styles.heroActions}>
                  <div className={styles.heroButtonsGroup}>
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

                  <p className={styles.heroNote}>
                     Versão de teste <strong>gratuita</strong>, com limite de faturamento de <strong>R$300/mês</strong>. Sem esse limite na versão completa.
                  </p>
               </div>
            </div>
            {isDesktop && <div className={styles.heroRight}>
               <div className={styles.heroFrame}>
                  <img src="/ScriptBot-red-fit.png" alt="ScriptBot Frame" className={styles.heroFrameImage} />
               </div>
            </div>}
         </div>
      </Section>
   );
}