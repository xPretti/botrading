import styles from "./Help.module.css";
interface IHelpProps {
   children?: React.ReactNode;
}
export function Help({ children }: IHelpProps) {
   return (
      <div className={styles.help}>
         <p>PÁGINA DE AJUDA</p>
      </div >
   );
}