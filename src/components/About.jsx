import React, { useContext } from 'react';
import "../styles/about.scss";
import {motion} from "framer-motion";
import { Context } from '../context/Context';

function About() {
  const {lang, menu} = useContext(Context);
  
  const setText = () =>{
    if(lang){
      return(
        <>
        Company  <span>KONSALTER </span> provides car transport services in the territory of Poland and the EU. We are distinguished by our knowledge of the market and we have many years of experience in the automotive industry, which allows us to provide reliable services. We are focused on achieving our goals, and the main one is your satisfaction. We operate efficiently and quickly.
          <br/><br/>
We carry out orders for large enterprises, small businesses and individual clients. We have all the necessary insurance, thanks to which the transported goods are always safe. We know how important your time is, which is why we value it and we execute all orders efficiently and reliably.
     </>
      )
    } else {
      return (
        <>

        Firma <span>KONSALTER </span> świadczy usługi w zakresie transportu samochodów osobowych na terenie kraju oraz UE. Wyróżniamy się znajomością rynku oraz posiadamy wieloletnie doświadczenie w branży motoryzacyjnej, co pozwala na rzetelną realizację usług. Jesteśmy skupieni na osiąganiu celów, a głównym z nich jest Twoje zadowolenie. Działamy sprawnie i szybko.

<br /><br/>Realizujemy zamówienia dla dużych przedsiębiorstw, małych firm oraz klientów indywidualnych. Posiadamy wszystkie niezbędne ubezpieczenia, dzięki czemu przewożony towar jest zawsze bezpieczny. Wiemy, jak ważny jest Twój czas, dlatego cenimy go i wszystkie realizowane przez nas zlecenia wykonujemy sprawnie i rzetelnie.

       </>
      )
    }
  }
  
  return (
    <div className={menu ? "about about__active" : "about"}>
      <div className="about__img">
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
