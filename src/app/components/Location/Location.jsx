import { MapPin, Clock, Navigation, Phone, Instagram } from "lucide-react";
import styles from "./location.module.css";

export default function Location() {
  return (
    <section id="local" className="section container">
      <h2 className="section__title">Onde Estamos</h2>

      <div className={styles.locationContainer}>
        <div className={styles.locationInfo}>
          <h3>Barbearia do Johnny</h3>

          <div className={styles.locationDetails}>
            <p className={styles.locationDetailItem}>
              <MapPin size={20} />
              <strong>
                Avenida professor alfonso bovero 1016 - Pompéia
                <br />
                São Paulo - SP, 05019-011
              </strong>
            </p>
            <p className={styles.locationDetailItem}>
              <Clock size={20} />
              <span>
                <strong>Terça a Sexta:</strong> 9h às 18:30h
              </span>

            </p>
            <p className={`${styles.locationDetailItem} ${styles.indent}`}>
              <span>
                <strong>Sábado:</strong> 9h às 19h
              </span>
            </p>
            <p className={`${styles.locationDetailItem} ${styles.indent}`}>
              <span>
                <strong>Segunda e Domingo:</strong> Fechado
              </span>
            </p>
            <p className={`${styles.locationDetailItem}`}>
              <Phone size={20} />
              <span className={styles.ident}>
                <strong>WhatsApp: </strong>(11) 95493-9422
              </span>
            </p>
            <p className={`${styles.locationDetailItem}`}>
              
                <strong><Instagram /> </strong>
              <span className={styles.ident}>
                <a
                href="https://www.instagram.com/johnnyanchietaa/"
                target="_blank"
                rel="noopener noreferrer"
              ><strong>@johnnyanchietaa</strong></a>
              </span>
            </p>
          
          </div>

          <a
            href="https://www.google.com/maps/dir//Barbearia+do+Johnny,+Av.+Prof.+Alfonso+Bovero,+1016+-+Pompeia,+S%C3%A3o+Paulo+-+SP,+05019-010/@-23.5373648,-46.6869884,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce57ef5a9fc0cd:0xf9fffc5bb39e7a9a!2m2!1d-46.6869884!2d-23.5373648!3e0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.locationMapLink}
          >
            <Navigation size={20} />
            Ver Rotas no Mapa
          </a>
        </div>

        <div className={styles.locationMapEmbed}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8647969703716!2d-46.686988424843264!3d-23.537364778816322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57ef5a9fc0cd%3A0xf9fffc5bb39e7a9a!2sAv.%20Prof.%20Alfonso%20Bovero%2C%201016%20-%20Pompeia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005019-010!5e0!3m2!1spt-BR!2sbr!4v1762431336697!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da localização da Barbearia do Johnny"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
