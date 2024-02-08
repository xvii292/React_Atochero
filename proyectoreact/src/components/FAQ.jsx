import React, { useState } from 'react';
import './FAQ.css';

const FAQSection = () => {
  // Contenido de las preguntas y respuestas
  const faqs = [
    {
      question: '¿Cómo encuentro una reunión local?',
      answer: ' Para encontrar una reunión local de Alcohólicos Anónimos, puedes visitar el sitio web oficial de AA (Alcohólicos Anónimos) y utilizar su herramienta de búsqueda de reuniones. Simplemente ingresa tu ubicación y te mostrará una lista de las reuniones más cercanas a ti, junto con detalles como la dirección, el horario y el tipo de reunión.',
    },
    {
      question: '¿Cuál es el proceso para convertirse en miembro?',
      answer: ' El proceso para convertirse en miembro de Alcohólicos Anónimos es simple y no requiere formalidades. No hay cuotas ni requisitos de membresía. Simplemente asiste a una reunión de AA, identifícate como alcohólico si así lo deseas, y participa en las reuniones según tu comodidad. Alcohólicos Anónimos es una comunidad de apoyo mutuo, y todos son bienvenidos a unirse en cualquier momento.',
    },
    {
      question: '¿Puedo asistir a reuniones si todavía estoy bebiendo?',
      answer: ' Sí, absolutamente. Alcohólicos Anónimos acoge a cualquier persona que tenga un problema con la bebida, independientemente de si están sobrios en ese momento o no. Las reuniones de AA son lugares seguros donde puedes compartir tus experiencias, fuerzas y esperanzas con otros que entienden lo que estás pasando. Muchas personas encuentran apoyo y motivación para dejar de beber asistiendo a las reuniones, incluso si aún están bebiendo.',
    },
    {
      question: '¿Existen programas especiales para familiares?',
      answer: ' Sí, Al-Anon y Alateen son programas diseñados específicamente para familiares y amigos de alcohólicos. Al-Anon ofrece apoyo y orientación a aquellos que están afectados por el alcoholismo de un ser querido. Alateen está dirigido a adolescentes cuyas vidas han sido afectadas por el alcoholismo en la familia. Estos programas ofrecen un espacio seguro para compartir experiencias, fuerzas y esperanzas, y brindan herramientas para lidiar con los desafíos relacionados con el alcoholismo en la familia.',
    },
  ];

  // Estado para controlar qué preguntas están abiertas
  const [isOpen, setIsOpen] = useState(Array(faqs.length).fill(false));

  // Función para alternar el estado de apertura de una pregunta
  const toggleQuestion = (index) => {
    setIsOpen(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section id="FAQ" className="section">
      <div className="container">
        <h1>Preguntas Frecuentes (FAQ)</h1>
        <p>
          Respuestas a preguntas comunes sobre Alcohólicos Anónimos y la recuperación del alcoholismo:
        </p>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`faq-question ${isOpen[index] ? 'open' : ''}`}
                onClick={() => toggleQuestion(index)}
              >
                <strong>{faq.question}</strong>
                <span className="arrow">{isOpen[index] ? '▲' : '▼'}</span>
              </div>
              <div className={`faq-answer ${isOpen[index] ? 'open' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
