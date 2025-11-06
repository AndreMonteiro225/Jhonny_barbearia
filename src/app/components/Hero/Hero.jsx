import { Calendar } from 'lucide-react'
import styles from './Hero.module.css' // Importa o CSS Module

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Estilo Clássico,
        <br />
        <span>Corte Moderno.</span>
      </h1>
      <p className={styles.heroSubtitle}>
        A navalha perfeita e a tesoura certa. A sua melhor versão começa aqui na Barbearia do Johnny.
      </p>
      
      <a 
        href="https://wa.me/5511999998888?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.heroCta}
      >
        <Calendar size={20} />
        Agendar Agora
      </a>
    </section>
  )
}