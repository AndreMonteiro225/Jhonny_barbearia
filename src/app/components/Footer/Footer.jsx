import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContent}`}>
        <p>&copy; {new Date().getFullYear()} Barbearia do Johnny. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}