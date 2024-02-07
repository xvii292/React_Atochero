import React from 'react';
import "./BloqueMap.css"

const SobreNosotrosSection = () => {
  return (
    <section id="encuentra-nuestros-locales" className="section">
      <div className="container">
        <div className="content">
          <h1>Sobre Nosotros</h1>
          <p>
            Alcohólicos Anónimos es una comunidad de hombres y mujeres que comparten su mutua experiencia, para resolver su problema y ayudar a otros.
          </p>
          <p>
            Nuestro programa de recuperación se basa en los Doce Pasos, que ofrecen un camino probado para la recuperación de la enfermedad del alcoholismo.
          </p>
          <p>
            En AA, el único requisito para ser miembro es el deseo de dejar de beber. No hay cuotas ni honorarios para ser miembro.
          </p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397047.6794183145!2d-3.669028372413183!3d38.97115228594087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd69379d9f949f79%3A0xe0325449bee9620a!2sCentro%20tu%20mejor%20t%C3%BA!5e0!3m2!1ses!2ses!4v1706208992299!5m2!1ses!2ses"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotrosSection;
