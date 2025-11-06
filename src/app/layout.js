import { Oswald, Roboto } from 'next/font/google';
import './globals.css';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton/FloatingWhatsAppButton';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Otimização de Fontes (RFN-04 / RFN-05)
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-oswald', // Variável CSS para o globals.css
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto', // Variável CSS para o globals.css
})

// Meta Tags de SEO (RFN-06)
export const metadata = {
  title: 'Barbearia do Johnny - Cortes, Barba e Estilo',
  description: 'Barbearia do Johnny: Especialistas em cortes de cabelo e barba. Veja nossos serviços, preços e agende seu horário via WhatsApp.',
  keywords: 'barbearia, barbeiro, corte de cabelo, barba, agendamento, [Nome do Bairro/Cidade]',
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

