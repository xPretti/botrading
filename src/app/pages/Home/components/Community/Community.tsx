import styles from "./Community.module.css";

export function Community() {
  return (
    <section className={styles.community}>
      <div className={styles.communityContent}>
        <img src="/Map.png" className={styles.communityBackgroundImg} />
        <div className={styles.communityHeader}>
          <h3 className={styles.communityHeaderTitle}>
            Comunidade oficial  no Discord
          </h3>
          <p className={styles.communityHeaderDescription}>
            Junte-se à comunidade Botrading no Discord e aproveite suporte rápido, troca de ideias com outros traders, compartilhamento de estratégias, acesso a downloads exclusivos, atualizações de produtos e muito mais!
          </p>
        </div>
        <div className={styles.communityJoin}>
          <a className={styles.communityJoinButton} href="https://discord.botrading.net" target="_blank" rel="noreferrer">
            Juntar-se à comunidade
          </a>
        </div>
      </div>
    </section >
  );
}