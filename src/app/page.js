import styles from './page.module.css' // 
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Location from './components/Location/Location';

export default function Home() {
  return (
    <>
      
      <main className={`${styles.mainContainer}`}>
        
        <Hero />
        <Services />
        <Gallery />
        <Location />
      </main>
    </>
  )
}

