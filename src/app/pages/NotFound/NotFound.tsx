import styles from "./NotFound.module.css";

export function NotFound() {

   return (
      <div className={styles.container}>
         <div className={styles.content}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>Ops! A página que você procura não foi encontrada.</p>
         </div>
      </div>
   );
}