import React from 'react';
import logo from "../assets/logo.png";
import "./NavBar.css";

function Navbar() {
  const scrollToSection = (id, event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const navStyle = {
    backgroundColor: '#ffffff',
    padding: '10px',
    borderBottom: '2px solid #dddddd',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navStyle}>
      <img src={logo} className="App-logo" alt="logo" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#inicio" className="nav-link" onClick={(e) => scrollToSection('inicio', e)}>
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#encuentra-nuestros-locales" className="nav-link" onClick={(e) => scrollToSection('encuentra-nuestros-locales', e)}>
              Sobre Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a href="#FAQ" className="nav-link" onClick={(e) => scrollToSection('FAQ', e)}>
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a href="#BYN" className="nav-link" onClick={(e) => scrollToSection('BYN', e)}>
              Formulario de contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
