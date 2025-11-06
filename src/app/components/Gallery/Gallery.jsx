import Image from 'next/image';
import styles from './gallery.module.css'; // Importa o CSS Module

const galleryImages = [
  { src: "/imgCorte1.webp", alt: "Exemplo de corte de cabelo moderno" },
  { src: "/imgCorte2.webp", alt: "Exemplo de barba terapia" },
  { src: "/imgCorte3.webp", alt: "Exemplo de corte degradê (fade)" },
  { src: "/imgCorte4.webp", alt: "Exemplo de corte clássico" },
  { src: "/imgCorte5.webp", alt: "Exemplo de corte navalhado" },
  { src: "/imgCorte6.webp", alt: "Exemplo de barba desenhada" },
  { src: "/imgCorte7.webp", alt: "Exemplo de barba desenhada" },
  { src: "/imgCorte8.webp", alt: "Exemplo de barba desenhada" },
]

export default function Gallery() {
  return (
    // Usamos classes globais
    <section id="galeria" className="section container">
      <h2 className="section__title">Galeria</h2>
      <p className="section__subtitle">Veja alguns dos nossos trabalhos</p>

      <div className={styles.galleryGrid}>
        
        {galleryImages.map((image) => (
          <div key={image.src} data-lightbox="galeria" className={styles.galleryItem}>
            <Image 
              src={image.src}
              alt={image.alt}
              width={600} 
              height={600} 
              className={styles.galleryImage}
            />
          </div>
        ))}

      </div>
    </section>
  )
}