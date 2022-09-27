import React, { useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useContext } from 'react'
import {themeContext} from '../../Context.js'
export default function Contact() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const form = useRef();
    const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f2awsfk', 'template_mycqors', form.current, 'GFQLTn4N7F0QxE_nR')
      .then((result) => {
          console.log(result.text);
          setSent(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id='Contacto'>
        <div className="intro-left">
            <div className="intro-name">
                <span style={
                  darkMode
                  ? {color: 'white'}
                  : {color: ''}
                }
                >Deja Tu Mensaje</span>
                <span>Contactame</span>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}>

                </div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input
                 type="text" 
                name='user_name' className='user'
                placeholder='Nombre'/>
                <input
                 type="email" 
                name='user_email' className='user'
                placeholder='Correo electrónico'/>
                <textarea 
                name="message"
                className='user'
                placeholder='Mensaje'    
                    />
                <input type="submit" value="Enviar" className="button" />    
                <span>{sent && 'Mensaje enviado! Te responderé pronto'}</span>
                <div className="blur c-blur1"
                style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}
