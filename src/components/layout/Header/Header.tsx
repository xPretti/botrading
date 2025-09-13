
import ThemeToggle from "../../common/ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerLeft}>
                    <a href="/" className={styles.headerLogo}>
                        <img src="/Botrading.png" alt="Logo" />
                        <p>Botrading</p>
                    </a>
                </div>
                <div className={styles.headerCenter}>
                    <nav className={styles.headerNav}>
                        <a href="/">Inicio</a>
                        <a href="/">Soluções</a>
                        <a href="/">Central de Suporte</a>
                    </nav>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.headerTheme}>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header >
    );
}