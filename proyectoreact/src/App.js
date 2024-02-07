import Formulario from './components/ContactUs';
import Carrusel from './components/Carrusel';
import MovingBanner from './components/MovingBanner'
import Navbar from './components/NavBar';
import FAQ from './components/FAQ';
import PIE from './components/footer';
import BloqueMap from './components/BloqueMap'
import { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import Zoom from 'react-reveal/Zoom';
import "./App.css";

function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (


    <div className="App">

      {
        loading ?
          <BounceLoader
            color="#36d7b7"
            cssOverride={{
              display: 'flex',
              marginTop: '20%',
              marginLeft: '45%'
            }}
            loading
            size={100}
          />
          :
          <div>
            <header className="App-header">
              <Navbar></Navbar>
            </header>

            <main>
              <section id="inicio" className="section">
                <div className="container">
                  <MovingBanner text="Bienvenido a Alcohólicos Anónimos" />
                  <p>
                    Somos una comunidad dedicada a ayudar a aquellos que buscan
                    recuperarse del alcoholismo.
                  </p>
                  <p>
                    ¡Estamos aquí para ayudarte en tu viaje hacia una vida libre del
                    alcoholismo!
                  </p>
                  <div id="recursos">
                    <div id='recursosh2'>
                      <h2>Recursos Disponibles</h2>
                      <h2>Lee testimonios inspiradores de otros usuarios.</h2>
                    </div>
                    <ul>
                      <Zoom>
                        <Carrusel />
                      </Zoom>
                      <li id="ultEnlace">
                        <a href="#pasos">Descubre los pasos hacia la recuperación</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <BloqueMap></BloqueMap>

              <Zoom>
                <FAQ />
              </Zoom>

              <section id="BYN" className="section">
                <div className="container">

                  <Zoom>
                    <Formulario />
                  </Zoom>
                  
                </div>
              </section>

            </main>

            <footer>
              <PIE />
            </footer>
          </div>
      }

    </div >
  );
}

export default App;
