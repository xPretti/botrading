import styles from "./Section.module.css";
interface ISectionProps {
   type?: "normal" | "hero";
   children?: React.ReactNode;
   className?: string;
   classNameContent?: string;

   margin?: string;
}
export function Section({ type = "normal", children, className, classNameContent, margin }: ISectionProps) {

   const getClassType = () => {
      if (type === "hero") {
         return (styles.hero);
      }
      return ("");
   };

   return (
      <div className={`${styles.section} ${getClassType()} ${className}`}>
         <div className={`${styles.sectionContent} ${classNameContent}`} style={{ margin }}>
            {children}
         </div>
      </div>
   );
}