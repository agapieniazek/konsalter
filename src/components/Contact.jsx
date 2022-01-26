import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import "../styles/contact.scss";
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Context } from '../context/Context';

function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");

  const {lang, menu} = useContext(Context);
  
  
  
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
    <div className={menu ? "contact contact__active" : "contact"}>
      <div className="contact__left">
      <motion.h1 
             initial={{x:200}} 
             animate={{x: 0}} 
             exit={{x:100}}
             transition={{duration: 1.1}}      
      className="contact__title">
       {lang ? "Contact us" : "Kontakt"}
      </motion.h1>
      <motion.p 
      initial={{x:100}} 
        animate={{x: 0}} 
         exit={{x:100}}
        transition={{duration: 0.7}}      
      
      className="contact__info">
        {lang ? "If you have any questions feel free to use this form to contact us" 
        : "Jeżeli masz pytanie napisz do nas wiadomość Z chęcią odpowiemy na każde Twoje pytanie."}
        
      </motion.p>
      <div className="contact__form">
          <motion.form initial={{y:100}} animate={{y: 0}} exit={{y: 100}} transition={{duration: 0.5}} onSubmit={sendEmail}>
            <label className="contact__label" htmlFor="username">{lang ? "Name:" : "Imię:"}</label>
            <input value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" id="username" name="username" placeholder={lang ? "Your name...":"Podaj imię..."}/><br/>
            <label className="contact__label" htmlFor="email">Email: </label>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" id="email" name="email" placeholder={lang ? "Your email...":"Podaj email..."}/><br/>
            <label className="contact__label" htmlFor="message">{lang ? "Message:" : "Wiadomość:"} </label> <br/>
            <textarea rows="5" cols="30" value={message} onChange={(e) => {setMessage(e.target.value)}} type="text" id="message" name="message" placeholder={lang ? "Write your message...":"Wpisz treść wiadomości..."}/><br/>
            <p className="contact__msg">{info}</p>      
            <button className="contact__btn" type="submit">{lang ? "Send" : "Wyślij"}</button>
          </motion.form>
        </div>
        </div>
        <div className="contact__right">
          <motion.div 
                initial={{y:300}} 
                animate={{y: 0}} 
                 exit={{y:300}}
                transition={{duration: 0.7}}   
                className='contact__card'           
          >
          <h2>KONSALTER</h2>
          <h3>Jarosław Dzieszko</h3>
          <p><i class="fas fa-map-marker-alt"></i> Głogów Małopolski,
        <br /> woj. podkarpackie
        </p>

        <p><i class="fas fa-phone-alt"></i> +48 606 473 267</p>
        <p><i class="fas fa-at"></i> dzieszko@op.pl</p>
        </motion.div>
        </div>
    </div>
  )
}

export default Contact
