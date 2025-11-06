import styles from './footer.module.css' // Importa o CSS Module

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Usamos a classe global .container */}
      <div className={`${styles.container} ${styles.footerContent}`}>
        <p>&copy; {new Date().getFullYear()} Barbearia do Johnny. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}