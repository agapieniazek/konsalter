import React, { useContext } from 'react';
import "../styles/about.scss";
import {motion} from "framer-motion";
import { Context } from '../context/Context';

function About() {
  const {lang, menu} = useContext(Context);
  const img= "https://images.pexels.com/photos/2348359/pexels-photo-2348359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  
  const setText = () =>{
    if(lang){
      return(
        <>
        Company  <span>KONSALTER </span> leads
        The order marked a reversal from remarks made by Canadian Prime Minister Justin Trudeau on Monday. During a press conference, reporters pressed him on whether or not the nation's diplomats' families would be evacuated from Ukraine, Reuters reported.
        <br/> <br/>The order marked a reversal from remarks made by Canadian Prime Minister Justin Trudeau on Monday. During a press conference, reporters pressed him on whether or not the nation's diplomats' families would be evacuated from Ukraine, Reuters reported.
     </>
      )
    } else {
      return (
        <>

        Firma <span>KONSALTER </span> świadczy usługi w zakresie transportu samochodów osobowych na terenie kraju oraz UE. Wyróżniamy się znajomością rynku oraz posiadamy wieloletnie doświadczenie w branży motoryzacyjnej, co pozwala na rzetelną realizację usług. Jesteśmy skupieni na osiąganiu celów, a głównym z nich jest Twoje zadowolenie. Działamy sprawnie i szybko.

<br /><br/>Realizujemy zamówienia dla dużych Przedsiębiorstw, małych Firm oraz Klientów indywidualnych. Posiadamy wszystkie niezbędne ubezpieczenia, dzięki czemu przewożony towar jest zawsze bezpieczny. Wiemy, jak ważny jest Twój czas, dlatego cenimy go i wszystkie realizowane przez nas zlecenia wykonujemy sprawnie i rzetelnie tak, abyś Ty mógł spać spokojnie.

       </>
      )
    }
  }
  
  return (
    <div className={menu ? "about about__active" : "about"}>
      <div className="about__img">
        <img src={img} alt="" />
      </div>
      <div className="about__info">
      <motion.h1 className="about__title" 
       initial={{x:100}} 
       animate={{x: 0}} 
       exit={{x:100}}
       transition={{duration: 1}}
       >
        {lang ? "About us" : "O nas"}
      </motion.h1>
      <motion.div  
             initial={{x:100}} 
             animate={{x: 0}} 
             exit={{x:100}}
             transition={{duration: 1}}      
      className="about__line"></motion.div>
      <motion.p 
             initial={{y:100}} 
             animate={{y:0}} 
             exit={{y:100}}
             transition={{duration: 1}}
      
      className="about__text">
        {setText()}
      </motion.p>
      </div>
    </div>
  )
}

export default About
