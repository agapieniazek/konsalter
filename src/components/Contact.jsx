import React from 'react';
import { useState } from 'react/cjs/react.development';
import "../styles/contact.scss";
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");
  
  
  
    function sendEmail(e) {
      e.preventDefault();
  
      const validation = formValidation();
  
      if(validation){
        setUsername("");
        setMessage("");
        setEmail("");
        emailjs.sendForm(
          "service_ou3pmir", 
          "template_jd31j7p", 
          e.target, 
          "user_cbkFPpp1MZW64fXLEg9Zr"
          )    
        setInfo("Formularz został wysłany poprawnie");
      } else {
        setInfo("Proszę uzupełnić wszystkie pola i jeszcze raz wysłać wiadomość")
      }
    }
  
    function formValidation(){
      let usernameCheck = false;
      let emailCheck = false;
      let messageCheck = false;
  
      if(username.length > 3){
        usernameCheck = true;
      }
      if(email.length > 3 && email.indexOf("@")!== -1){
        emailCheck = true;
      }
      if(message.length > 1){
        messageCheck = true;
      }
  
      if(usernameCheck && emailCheck && messageCheck){
       return true;
      } else {
        return  false;
      }
      
    }
  
  return (
    <div className="contact">
      <motion.h1 
             initial={{x:200}} 
             animate={{x: 0}} 
             exit={{x:100}}
             transition={{duration: 1.1}}      
      className="contact__title">
        Kontakt
      </motion.h1>
      <motion.p 
      initial={{x:100}} 
        animate={{x: 0}} 
         exit={{x:100}}
        transition={{duration: 0.7}}      
      
      className="contact__info">
        Jeżeli masz pytanie napisz do nas wiadomość.<br/> Z chęcią odpowiemy na każde Twoje pytanie.
      </motion.p>
      <div className="contact__form">
          <motion.form initial={{y:100}} animate={{y: 0}} exit={{y: 100}} transition={{duration: 0.5}} onSubmit={sendEmail}>
            <label className="contact__label" htmlFor="username">Imię:</label>
            <input value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" id="username" name="username" placeholder="Podaj imię..."/><br/>
            <label className="contact__label" htmlFor="email">Nazwisko: </label>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" id="email" name="email" placeholder="Podaj email..."/><br/>
            <label className="contact__label" htmlFor="message">Wiadomość: </label> <br/>
            <textarea rows="6" cols="80" value={message} onChange={(e) => {setMessage(e.target.value)}} type="text" id="message" name="message" placeholder="Wpisz treść wiadomości..."/><br/>
            <button className="contact__btn" type="submit">Wyślij</button>
          </motion.form>
          <p className="contact__msg">{info}</p>      
        </div>
    </div>
  )
}

export default Contact
