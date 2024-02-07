import React from 'react';
import './FAQ.css';

const FAQSection = () => {
  return (
    <section id="FAQ" className="section">
      <div className="container">
        <h1>Preguntas Frecuentes (FAQ)</h1>
        <p>
          Respuestas a preguntas comunes sobre Alcohólicos Anónimos y la recuperación del alcoholismo:
        </p>
        <ul>
          <li>
            <strong>¿Cómo encuentro una reunión local?</strong>
          </li>
          <li>
            <strong>¿Cuál es el proceso para convertirse en miembro?</strong>
          </li>
          <li>
            <strong>¿Puedo asistir a reuniones si todavía estoy bebiendo?</strong>
          </li>
          <li>
            <strong>¿Existen programas especiales para familiares?</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
