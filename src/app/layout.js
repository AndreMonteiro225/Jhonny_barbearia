import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton/FloatingWhatsAppButton";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GoogleTagManager } from '@next/third-parties/google';

// Otimização de Fontes
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});


export const viewport = {
  themeColor: '#f59e0b', // Sua cor primária (Dourado/Amarelo) para a barra do navegador mobile
  width: 'device-width',
  initialScale: 1,
}

// Meta Tags de SEO
export const metadata = {
  title: "Barbearia do Johnny | Melhor Corte e Barba na Pompeia, SP",
  description:
"Procurando barbearia na Pompeia? O Johnny é especialista em cortes modernos, degradê e navalhado.",
keywords:
    "barbearia, barbeiro, corte de cabelo, barba, Pompeia, São Paulo, Perdizes, serviços de barbearia",
  authors: [{ name: "Johnny Anchieta" }],
  creator: "Barbearia do Johnny",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://barbeariadojohnny.com.br",
    siteName: "Barbearia do Johnny",
    images: [
      {
        url: "/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Barbearia do Johnny",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    twitter: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* src/app/layout.js */

// ... imports anteriores

export default function RootLayout({ children }) {
  // URL base do seu site (substitua pela URL final de produção)
  const baseUrl = "https://barbeariadojohnny.com.br"; 

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "Barbearia do Johnny",
    "image": `${baseUrl}/hero-bg.webp`, // URL Absoluta da imagem
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": "+5511954939422",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Prof. Alfonso Bovero, 1016",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "05019-011", 
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5353927,
      "longitude": -46.6801928
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-MNS8R2H8" />
      <body className={`${oswald.variable} ${roboto.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}