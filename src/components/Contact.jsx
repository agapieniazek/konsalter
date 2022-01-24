import React from 'react';
import { useState } from 'react/cjs/react.development';
import "../styles/contact.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [info, setInfo] = useState(null);

  const handleSubmit= (e) =>{
    e.preventSubmit();

    const validation = formValidation();

    if(validation){
      setName("");
      setEmail("");
      setText("");
      setInfo("Formularz został wysłany pomyślnie")
    } else {
      setInfo("Proszę uzupełnić wszystkie pola i jeszcze raz wysłać wiadomość")
    }

  }
  const formValidation =()=>{
    let usernameCheck = false;
    let emailCheck= false;
    let textCheck = false;

    if(name.length > 3){
      usernameCheck = true;
    }
    if(email.length> 0 && email.indexOf("@")!== -1){
      emailCheck= true;
    }
    if(text.length > 3){
      textCheck = true;
    }
    if(usernameCheck && emailCheck && textCheck){
      return true;
    } else{
      return false;
    }
  }

  return (
    <div className="contact">
      <h1 className="contact__title">
        Kontakt
      </h1>
      <p className="contact__info">
        Jeżeli masz pytanie napisz do nas wiadomość.<br/> Z chęcią odpowiemy na każde Twoje pytanie.
      </p>
      <div className="contact__form">
        <form onSubmit={handleSubmit}>
          <label className="contact__label" htmlFor="name">Imię:</label>
          <input type="text" id="name" placeholder='Wpisz imię...' value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
          <label className="contact__label" htmlFor="mail">E-mail:</label>
          <input type="email" id="mail" placeholder='Wpisz adres email...' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label className="contact__label" htmlFor="message">Wiadomość:</label><br/>
          <textarea rows="6" cols="80" id="message" placeholder='Wpisz treść wiadomości...' value={text} onChange={(e)=>setText(e.target.value)}/>
          <p>{info ? info : null}</p>
          <button className='contact__btn' type='submit'>Wyślij</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
