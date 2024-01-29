import React, { lazy, Suspense } from 'react';
import logo from "./assets/logo.png";
import "./App.css";
const Formulario = lazy(() => import('./components/ContactUs'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#inicio">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sobre-nosotros">
                  Sobre Nosotros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#FAQ">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#BYN">
                  Formulario de contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="inicio" className="section">
          <div className="container">
            <h1>Bienvenido a Alcohólicos Anónimos</h1>
            <p>
              Somos una comunidad dedicada a ayudar a aquellos que buscan
              recuperarse del alcoholismo.
            </p>
            <p>
              Nuestro propósito es proporcionar apoyo, recursos y orientación
              para iniciar el camino hacia la sobriedad.
            </p>
            <p>
              En Alcohólicos Anónimos, creemos en la esperanza y la posibilidad
              de la recuperación.
            </p>
            <p>
              ¡Estamos aquí para ayudarte en tu viaje hacia una vida libre del
              alcoholismo!
            </p>
            <div id="recursos">
              <h2>Recursos Disponibles</h2>
              <ul>
                <h2>Encuentra uno de nuestros locales</h2>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397047.6794183145!2d-3.669028372413183!3d38.97115228594087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd69379d9f949f79%3A0xe0325449bee9620a!2sCentro%20tu%20mejor%20t%C3%BA!5e0!3m2!1ses!2ses!4v1706208992299!5m2!1ses!2ses" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                <h2>Lee testimonios inspiradores de otros usuarios.</h2>

                <iframe width="560" height="315" src="https://www.aagrupopv.com/testimonios-hombres/#javier" frameborder="0" allowfullscreen></iframe>


                <li>
                  <a href="#pasos">Descubre los pasos hacia la recuperación</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="encuentra-nuestros-locales" className="section">
          <div className="container">
          <div className="content">
              <h1>Sobre Nosotros</h1>
              <p>
                Alcohólicos Anónimos es una comunidad de hombres y mujeres que comparten
                su mutua experiencia, fortaleza y esperanza para resolver su problema
                común y ayudar a otros a recuperarse del alcoholismo.
              </p>
              <p>
                Nuestro programa de recuperación se basa en los Doce Pasos, que ofrecen
                un camino probado para la recuperación de la enfermedad del alcoholismo.
              </p>
              <p>
                En AA, el único requisito para ser miembro es el deseo de dejar de
                beber. No hay cuotas ni honorarios para ser miembro; nos mantenemos a
                través de nuestras propias contribuciones.
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


        <section id="FAQ" className="section">
          <div className="container">
            <h1>Preguntas Frecuentes (FAQ)</h1>
            <p>
              Respuestas a preguntas comunes sobre Alcohólicos Anónimos y la
              recuperación del alcoholismo:
            </p>
            <ul>
              <li>
                <strong>¿Cómo encuentro una reunión local?</strong>
              </li>
              <li>
                <strong>
                  ¿Cuál es el proceso para convertirse en miembro?
                </strong>
              </li>
              <li>
                <strong>
                  ¿Puedo asistir a reuniones si todavía estoy bebiendo?
                </strong>
              </li>
              <li>
                <strong>¿Existen programas especiales para familiares?</strong>
              </li>
              {/* Agrega más preguntas frecuentes */}
            </ul>
          </div>
        </section>

        <section id="BYN" className="section">
          <div className="container">

            <Suspense fallback={<div>Loading...</div>}>
              <Formulario />
            </Suspense>

          </div>
        </section>
      </main>

      <footer>
        <div class="footer-container">
          <div class="contact-column">
            <h2>Contacto</h2>
            <p>
              Si necesitas ayuda o información adicional, puedes contactarnos:
            </p>
            <ul>
              <li>
                <strong>Correo Electrónico:</strong>{" "}
                info@alcoholicosanonimos.org
              </li>
              <li>
                <strong>Teléfono:</strong> +1-800-XXX-XXXX
              </li>
              <li>
                <strong>Dirección:</strong> Calle Principal, Ciudad, País
              </li>
            </ul>
          </div>
          <div class="social-column">
            <h2>Síguenos en Redes Sociales</h2>
            <div id="social-icons">
              <img
                src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"
                alt="logo Facebook"
              />
              <img
                src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png"
                alt="logo telegram"
              />
              <img
                src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png"
                alt="logo pinterest"
              />
              <img
                src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"
                alt="logo instagram"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
