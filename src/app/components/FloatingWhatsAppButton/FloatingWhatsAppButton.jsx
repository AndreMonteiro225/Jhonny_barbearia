"use client";
import { MessageCircle } from 'lucide-react';
import styles from './floatingwhatsappbutton.module.css';

export default function FloatingWhatsAppButton() {
  return (
    <a 
      href="https://wa.me/5511954939422?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Agendar horário via WhatsApp"
      className={styles.floatingWhatsapp} // Usa o estilo do módulo
    >
      <MessageCircle size={32} />
    </a>
  )
}