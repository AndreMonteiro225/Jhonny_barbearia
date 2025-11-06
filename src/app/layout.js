import { Oswald, Roboto } from 'next/font/google';
import './globals.css';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton/FloatingWhatsAppButton';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Otimização de Fontes
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-oswald',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto',
})

// Meta Tags de SEO
export const metadata = {
  title: 'Barbearia do Johnny - Cortes, Barba e Estilo',
  description: 'Barbearia do Johnny: Especialistas em cortes de cabelo e barba. Veja nossos serviços, preços e agende seu horário via WhatsApp.',
  keywords: 'barbearia, barbeiro, corte de cabelo, barba, Perdizes, São Paulo',
  robots: 'index, follow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${oswald.variable} ${roboto.variable}`}>

        <Header />
        
        {children}
        
        <Footer />
        
        
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}

