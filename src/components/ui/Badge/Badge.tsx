import styles from "./Badge.module.css";


export const BADGE = {
   NEW: "new",
   OUTDATED: "outdated",
   ALPHA: "alpha",
} as const;

export type BadgeType = (typeof BADGE)[keyof typeof BADGE];

export interface IBadgeProps {
   type: BadgeType;
   children?: React.ReactNode;
}
export function Badge({ type, children }: IBadgeProps) {
   return (
      <span className={styles.badges} data-badge={type}>
         <p className={styles.badge}>{children}</p>
      </span>
   );
}