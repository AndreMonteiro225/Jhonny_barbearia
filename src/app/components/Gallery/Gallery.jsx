import Image from 'next/image';
import styles from './gallery.module.css'; 

const galleryImages = [
  { src: "/imgCorte1.webp", alt: "Corte degradê fade masculino na Pompeia SP" },
  { src: "/imgCorte2.webp", alt: "Design de barba e barboterapia profissional" },
  { src: "/imgCorte3.webp", alt: "Exemplo de corte degradê (fade)" },
  { src: "/imgCorte4.webp", alt: "Exemplo de corte clássico" },
  { src: "/imgCorte5.webp", alt: "Exemplo de corte navalhado" },
  { src: "/imgCorte6.webp", alt: "Exemplo de barba desenhada" },
  { src: "/imgCorte7.webp", alt: "Exemplo de barba desenhada" },
  { src: "/imgCorte8.webp", alt: "Exemplo de barba desenhada" },
]

export default function Gallery() {
  return (
    <section id="galeria" className="section container">
      <h2 className="section__title">Galeria</h2>
      <h3 className={`section__subtitle ${styles.gallerySubtitle}`}>Veja alguns dos nossos trabalhos</h3>

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