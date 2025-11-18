import styles from "./footer.module.css";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContent}`}>
        <p>
          &copy; {new Date().getFullYear()} Barbearia do Johnny. Todos os
          direitos reservados.
        </p>
      </div>
      
      <div
        className={`${styles.footerCredit} ${styles.footerContent}`}
      >
        <a
          href="https://portifoliov2-navy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por André Monteiro Rachel
        </a>
      </div>
    </footer>
  );
}
