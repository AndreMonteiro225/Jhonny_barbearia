import styles from './services.module.css' // Importa o CSS Module

const servicesList = [
  { name: "Corte ", description: "Tradição e estilo no seu dia a dia.", price: "R$ 60" },
  { name: "Barba", description: "Navalha, desenho de barba.", price: "R$ 60" },
  { name: "Combo (Corte + Barba)", description: "O pacote completo para o cavalheiro.", price: "R$ 110" },
  { name: "Corte só 1 pente na máquina ", description: "Manutenção rápida.", price: "R$ 45" },
  { name: "Sobrancelha ", description: "Design e limpeza de sobrancelhas.", price: "R$ 30" }
]

export default function Services() {
  return (
    // Usamos as classes globais .section e .section__title
    <section id="servicos" className="container section">
      <h2 className="section__title">Nossos Serviços</h2>
      <div className={styles.servicesCard}>
        <ul className={styles.servicesList}>
          
          {servicesList.map((service) => (
            <li key={service.name} className={styles.servicesItem}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <span className={styles.servicesPrice}>{service.price}</span>
            </li>
          ))}

        </ul>
      </div>
    </section>
  )
}