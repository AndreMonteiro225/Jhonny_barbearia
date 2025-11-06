"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import styles from './header.module.css' // Importa o CSS Module

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      {/* Usamos a classe global .container e a local .headerNav */}
      <nav className={`container ${styles.headerNav}`}>
        <Link href="/" className={styles.headerLogo} onClick={handleLinkClick}>
          JOHNNY'S
        </Link>

        <div className={styles.headerLinks}>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#local">Localização</a>
        </div>

        <a 
          href="https://wa.me/5511999998888?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.headerCta}
        >
          Agendar Horário
        </a>

        <button 
          onClick={() => setIsMobileMenuOpen(true)} 
          aria-label="Abrir menu"
          className={styles.headerMobileToggle}
        >
          <Menu size={28} />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.headerLogo} onClick={handleLinkClick}>
              JOHNNY'S
            </Link>
            <button onClick={handleLinkClick} aria-label="Fechar menu" className={styles.headerMobileToggle}>
              <X size={28} />
            </button>
          </div>
          
          <nav className={styles.mobileMenuNav}>
            <a href="#servicos" onClick={handleLinkClick}>
              Serviços
            </a>
            <a href="#galeria" onClick={handleLinkClick}>
              Galeria
            </a>
            <a href="#local" onClick={handleLinkClick}>
              Localização
            </a>
            
            <a 
              href="https://wa.me/5511999998888?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileMenuCta}
              onClick={handleLinkClick}
            >
              Agendar Horário
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}