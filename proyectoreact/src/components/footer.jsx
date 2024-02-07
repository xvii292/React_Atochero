import React from 'react';
import logoInsta from "../assets/instagram--v1.png";
import logoFace from "../assets/facebook--v1.png";
import logoPin from "../assets/pinterest--v1.png";
import logoTel from "../assets/telegram-app.png";
import './footer.css';

const Pie = () => {
  return (
    <div className="footer-container">
      <div className="contact-column">
        <h2>Contacto</h2>
        <p>
          Si necesitas ayuda o información adicional, puedes contactarnos:
        </p>
        <ul>
          <li>
            <strong>Correo Electrónico:</strong> info@alcoholicosanonimos.org
          </li>
          <li>
            <strong>Teléfono:</strong> +1-800-XXX-XXXX
          </li>
          <li>
            <strong>Dirección:</strong> Calle Principal, Ciudad, País
          </li>
        </ul>
      </div>
      <div className="social-column">
        <h2>Síguenos en Redes Sociales</h2>
        <div id="social-icons">
          <img
            src={logoFace}
            alt="logo Facebook"
          />
          <img
            src={logoTel}
            alt="logo telegram"
          />
          <img
            src={logoPin}
            alt="logo pinterest"
          />
          <img
            src={logoInsta}
            alt="logo instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default Pie;
