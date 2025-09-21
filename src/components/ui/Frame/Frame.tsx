import styles from "./Frame.module.css";
interface IFrameProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export function Frame({ children, className, onClick }: IFrameProps) {

  return (
    <div className={`${className} ${styles.container}`} onClick={onClick}>
      {children}
    </div >
  );
}