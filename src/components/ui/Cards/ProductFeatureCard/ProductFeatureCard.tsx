import styles from "./ProductFeatureCard.module.css";
interface IProductFeatureCardProps {
   icon: React.ReactNode;
   title: string;
   desc: string;
   width?: string;
   height?: string;
   maxWidth?: string;
   maxHeight?: string;
   className?: string;
}
export function ProductFeatureCard({ icon, title, desc, width, height, maxWidth, maxHeight, className }: IProductFeatureCardProps) {
   return (
      <div className={`${styles.featureCard} ${className}`} style={{ width, height, maxWidth, maxHeight }}>
         {icon && <div className={styles.featureCardIcon}>
            {icon}
         </div>}
         <div className={styles.featureCardContent}>
            <h4 className={styles.featureCardTitle}>{title}</h4>
            <p className={styles.featureCardDesc}>{desc}</p>
         </div>
      </div >
   );
}