import { Calendar } from 'lucide-react'
import styles from './hero.module.css' 
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div style={{ position: 'absolute', zIndex: -1, inset: 10 }}>
  <Image 
    src="/hero-bg.webp" 
    alt="Barbearia Pompeia - SP" 
    fill 
    priority // Carrega imediatamente
    style={{ objectFit: 'cover', objectPosition: 'center' }} 
  />
</div>
      <h1 className={styles.heroTitle}>
        Barbearia do Johnny
        <br />
        <span>Pompeia - SP</span>
      </h1>
      <div className={styles.heroSubtitle}>
        <p>Estilo Clássico, Corte Moderno.
          <br />
           A sua melhor versão começa aqui.</p>
      </div>
      
      <a 
        href= "https://wa.me/5511954939422?text=Ol%C3%A1%21%20Vi%20o%20site%20e%20gostaria%20de%20saber%20como%20funciona%20o%20atendimento." 
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