import React, { useRef } from 'react'
import './ContactPage.modules.css'
import emailjs from "@emailjs/browser";

import { FaCheckCircle } from "react-icons/fa";

import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

const ContactPage = () => {
    const form = useRef();    

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_t3vpu9b",
          "template_e32aa2a",
          form.current,
          "BCL8tLDZAxY4Jtxgi"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Mensagem Enviada");
            form.current.reset()
            popUpScreen()
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    function popUpScreen () {
         const popUp = document.querySelector('.pop-up');
         popUp.style.display = 'flex';
    }


    return (      
    <>
    <ScrollAnimation />
        <div className="contact-container">
        <div className="pop-up">
            <div className="check-box"><FaCheckCircle/></div>
            <div className="pop-up_text">
                <p>Mensagem Enviada</p>
            </div>
        </div>
            <div className='contact-form hidden-elements'>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Nome</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Mensagem</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    </>
      
    );
  };

export default ContactPage