import React from 'react';
import "../styles/about.scss";
import {motion} from "framer-motion";

function About() {
  const img= "https://images.pexels.com/photos/2348359/pexels-photo-2348359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <div className='about'
>
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
        O nas 
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
      Firma <span>KONSALTER</span> świadczy usługi w zakresie transportu samochodów osobowych na terenie kraju oraz UE. Wyróżniamy się znajomością rynku oraz posiadamy wieloletnie doświadczenie w branży motoryzacyjnej, co pozwala na rzetelną realizację usług. Jesteśmy skupieni na osiąganiu celów, a głównym z nich jest Twoje zadowolenie. Działamy sprawnie i szybko.

      <br /><br/>Realizujemy zamówienia dla dużych Przedsiębiorstw, małych Firm oraz Klientów indywidualnych. Posiadamy wszystkie niezbędne ubezpieczenia, dzięki czemu przewożony towar jest zawsze bezpieczny. Wiemy, jak ważny jest Twój czas, dlatego cenimy go i wszystkie realizowane przez nas zlecenia wykonujemy sprawnie i rzetelnie tak, abyś Ty mógł spać spokojnie.
      </motion.p>
      </div>
    </div>
  )
}

export default About
