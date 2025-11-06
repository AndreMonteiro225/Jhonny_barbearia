// DesignMind: Esta é a nossa página principal.
// Note que Header e Footer foram movidos para layout.jsx
// Esta página agora contém apenas o <main>.
import styles from './page.module.css' // 
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Location from './components/Location/Location';

export default function Home() {
  return (
    <>
      {/* Usamos as classes 'container' e 'main-container'
        definidas em globals.css para centrar o conteúdo.
      */}
      <main className={`${styles.mainContainer} ${styles.container}`}>
        {/* RFN-02: Navegação One-Page.
          As seções abaixo têm os IDs correspondentes
          para os links âncora do Header.
        */}
        <Hero />
        <Services />
        <Gallery />
        <Location />
      </main>
    </>
  )
}

