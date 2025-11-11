import { Calendar } from 'lucide-react'
import styles from './hero.module.css' 

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Estilo Clássico,
        <br />
        <span>Corte Moderno.</span>
      </h1>
      <p className={styles.heroSubtitle}>
        A sua melhor versão começa aqui na Barbearia do Johnny.
      </p>
      
      <a 
        href="https://wa.me/5511954939422?text=Ol%C3%A1%21%20Vi%20o%20site%20e%20gostaria%20de%20saber%20como%20funciona%20o%20atendimento." 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.heroCta}
      >
        <Calendar size={20} />
        Entrar em contato
      </a>
    </section>
  )
}