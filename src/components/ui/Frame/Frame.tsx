import styles from "./Frame.module.css";
interface IFrameProps {
  children?: React.ReactNode;
  className?: string;
}
export function Frame({ children, className }: IFrameProps) {

  return (
    <div className={`${className} ${styles.container}`}>
      {children}
    </div >
  );
}