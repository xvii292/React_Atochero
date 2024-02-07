import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

export const ContactUs = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_68q5wqt",
        "template_cfalc4q",
        form.current,
        "RGWahj2K0JGevqo5L"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Cambia el estado a true cuando se envía correctamente
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="formo">

      <h1>FORMULARIO DE CONTACTO</h1>

      <form ref={form} onSubmit={sendEmail} className="form-restrictive">
        <input type="text" name="user_name" placeholder="Nombre (opcional)"/>
        <input type="email" name="user_email" placeholder="Email" required/>
        <textarea name="message" placeholder="Escribe tu historia aquí..." />
        <input type="submit" value="Send" />
      </form>

      {isSubmitted && <p>¡El formulario se envió correctamente!</p>}
    </div>
  );
};

export default ContactUs;
