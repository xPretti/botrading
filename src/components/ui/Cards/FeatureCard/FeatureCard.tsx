import styles from "./FeatureCard.module.css";
interface IFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
}
export function FeatureCard({ icon, title, desc, width, height, maxWidth, maxHeight, className }: IFeatureCardProps) {
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