"use client";
import { MessageCircle } from 'lucide-react';
import styles from './floatingwhatsappbutton.module.css';

export default function FloatingWhatsAppButton() {
  return (
    <a 
      href="https://wa.me/5511954939422?text=Ol%C3%A1%21%20Vi%20o%20site%20e%20gostaria%20de%20saber%20como%20funciona%20o%20atendimento."
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Entrar em contato via WhatsApp"
      className={styles.floatingWhatsapp} // Usa o estilo do módulo
    >
      <MessageCircle size={32} />
    </a>
  )
}