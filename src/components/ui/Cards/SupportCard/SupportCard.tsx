import styles from "./SupportCard.module.css";
interface ISupportCardProps {
   type: "link" | "text";
   img: string;
   title?: string;
   message?: string;
   url?: string;
}
export function SupportCard({ type, img, title, message, url }: ISupportCardProps) {

   return (
      <div className={styles.supportCard}>
         <div className={styles.header}>
            <img className={styles.img} src={img} alt="Support Image" />
            <h3 className={styles.title}>{title}</h3>
         </div>
         <div className={styles.body}>
            {type === "link" && <a className={styles.link} href={url} target="_blank" rel="noreferrer">{message}</a>}
            {type === "text" && <p className={styles.text}>{message}</p>}
         </div>
      </div >
   );
}