import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton/FloatingWhatsAppButton";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "BarberShop", //
      name: "Barbearia do Johnny",
      image:
        "[https://seusite.com/hero-bg.webp](https://seusite.com/hero-bg.webp)", // URL completa da imagem
      "@id":
        "[https://johnny-barbearia.vercel.app/](https://johnny-barbearia.vercel.app/)",
      url: "[https://johnny-barbearia.vercel.app/](https://johnny-barbearia.vercel.app/)",
      telephone: "+5511954939422",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Prof. Alfonso Bovero, 1016",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "05019-010",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.5373648,
        longitude: -46.6869884,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "19:00",
        },
      ],
      priceRange: "$$",
    }),
  }}
/>;

export const viewport = {
  themeColor: '#f59e0b', // Sua cor primária (Dourado/Amarelo) para a barra do navegador mobile
  width: 'device-width',
  initialScale: 1,
}

// Meta Tags de SEO
export const metadata = {
  title: "Barbearia do Johnny - Cortes, Barba e Estilo - Pompeia, SP",
  description:
    "Barbearia do Johnny: Especialista em cortes de cabelo e barba. Veja nossos serviços, venha conhecer ou entre em contato via WhatsApp.",
  keywords:
    "barbearia, barbeiro, corte de cabelo, barba, Pompeia, São Paulo, Perdizes, serviços de barbearia",
  authors: [{ name: "Johnny Anchieta" }],
  creator: "Barbearia do Johnny",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://johnny-barbearia.vercel.app/",
    siteName: "Barbearia do Johnny",
    title: "Barbearia do Johnny - Cortes, Barba e Estilo - Pompeia, SP",
    description:
      "Cortes de cabelo e barba com qualidade - Pompeia. Venha conhecer!",
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
  );
}
