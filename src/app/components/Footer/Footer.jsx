import { Heart } from 'lucide-react'
import styles from './Footer.module.css' // Importa o CSS Module

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Usamos a classe global .container */}
      <div className={`${styles.container} ${styles.footerContent}`}>
        <p>&copy; {new Date().getFullYear()} Barbearia do Johnny. Todos os direitos reservados.</p>
        <p className={styles.footerCredits}>
          Desenvolvido com 
          <Heart size={16} className={styles.footerHeart} /> 
          por [Seu Nome/Agência]
        </p>
      </div>
    </footer>
  )
}