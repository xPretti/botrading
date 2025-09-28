import { Badge, type BadgeType } from '../../Badge/Badge';
import { Divider } from "../../Divider/Divider";
import styles from "./ProductCard.module.css";


interface IProductCardProps {
   img: string;
   version: string;
   title: string;
   description: string;
   link: string;

   badges?: {
      type: BadgeType;
      Message: string;
   }[];

}
export function ProductCard({ img, version, title, description, link, badges }: IProductCardProps) {
   return (
      <div className={styles.productCard}>
         <div className={styles.header}>
            <img className={styles.img} src={img} alt="Product Image"></img>
            <div className={styles.badges}>
               <p className={`${styles.badgeVersion}`}>{version}</p>
               {badges && badges.map((badge, index) => (
                  <span key={index}>
                     <Badge type={badge.type}>{badge.Message}</Badge>
                  </span>
               ))}
            </div>
         </div>
         <div className={styles.body}>
            <Divider thickness={1} />
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.description}>{description}</p>
         </div>
         <div className={styles.footer}>
            <a className={styles.button} href={link} target="_blank" rel="noreferrer">Conferir</a>
         </div>
      </div>
   );
}