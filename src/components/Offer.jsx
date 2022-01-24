import "../styles/offer.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const url = "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";


function Offer() {
  const [isSelected, setIsSelected] = useState(1);
  const [text, setText] = useState("");
  const [title, setTitle ] = useState("");

  useEffect(() => {
    if(isSelected === 1) {
      setTitle("Transport solo – przewóz i wywóz samochodów")
      setText("Oferujemy profesjonalny przewóz i wywóz samochodów do krajów Unii. Wystarczy się z nami skontaktować, by poznać szczegóły oferty i ustalić zasady współpracy. Zapewniamy przy tym pełen komfort dla naszych klientów. Nasi doświadczeni kierowcy potrafią zadbać o bezpieczeństwo w trakcie transportu przy jednoczesnym zachowaniu realizacji ustalonych z klientami terminów. Pozwalają im na to zarówno ich umiejętności zawodowych kierowców, jak i znajomość realiów polskich i europejskich dróg. Dużą rolę gra także odpowiednio przemyślana logistyka. Dzięki temu twoje auto bez najmniejszego problemu znajdzie się tam, gdzie tego potrzebujesz.");
    } else if(isSelected === 2) {
      setTitle("Transport zestaw - przewóz do 8 samochodów")
      setText("Dla najbardziej wymagających klientów, którzy liczą na szybki transport większej ilości samochodów, oddajemy do dyspozycji zestawy transportowe umożliwiające przewóz trzech pojazdów jednocześnie! Ich konstrukcja i sposób, w który zabezpieczamy przewożone pojazdy, gwarantują pełne bezpieczeństwo Państwa aut. Dużą rolę gra w tym przypadku doświadczenie naszych kierowców, którzy doskonale zdają sobie sprawę z wyzwań, które czekają ich na trasie w trakcie transportu trzech pojazdów jednocześnie. Niejednokrotnie mierzyli się z poważnymi wyzwaniami, które wymagały od nich nie tylko odpowiednich umiejętności, lecz także wiedzy i zdolności odpowiedniego reagowania na zmieniające się warunki na warunki drogowe, różniące się przecież między krajami.");
    } else if(isSelected ===3){
      setTitle("Laweta podkarpackie - holowanie 24h")
      setText("Nasza firma oddaje do dyspozycji lawety dla klientów mających problemy na trasie na terenie woj. pomorskiego, a także tych z nich, którzy są zainteresowaniem nowozakupionego pojazdu lub jego przewozu z i do warsztatu samochodowego. W pełni sprawna i serwisowana laweta do transportu samochodów dzięki obsłudze przez doświadczonego kierowcę i operatora zapewnia ekspresowe i bezpieczne wykonanie wszelkich czynności, które pozwolą na przewiezienie auta w wybrane miejsce. Chodzi tu zarówno o wyciagnięcie auta z rowu i jego zabezpieczenie do transportu, jak i załadunek na lawetę.");
    }
  }, [isSelected])


  return (
    <div className='offer'>
            <div className="offer__img">
        <img src={url} alt="" />
      </div>
      <div className="offer__info">
        <div className="offer__options">
          <motion.button              initial={{x:1000}} 
             animate={{x: 0}} 
             exit={{x:1000}}
             transition={{duration: 1}}      

          className={isSelected === 1 ? "activeBtn offer__btn" : "offer__btn "} onClick={()=> setIsSelected(1)}>SOLO</motion.button>
          <motion.button initial={{x:1000}} 
             animate={{x: 0}} 
             exit={{x:1000}}
             transition={{duration: 1}}
          className={isSelected === 2 ? "activeBtn offer__btn" : "offer__btn "} onClick={()=> setIsSelected(2)}>ZESTAW</motion.button>
          <motion.button 
              initial={{x:1000}} 
             animate={{x: 0}} 
             exit={{x:1000}}
             transition={{duration: 1}}
          className={isSelected === 3 ? "activeBtn offer__btn" : "offer__btn "} onClick={()=> setIsSelected(3)}>HOLOWNIK</motion.button>
        </div>
        <motion.div  initial={{y:100}} 
             animate={{y:0}} 
             exit={{y:100}}
             transition={{duration: 1}}
          className="offer__text">
          <h1>{title}</h1>
          <p>{text}</p>
          <motion.button 
             initial={{opacity:0}} 
             animate={{opacity: 1}} 
             exit={{opacity:0}}
             transition={{duration: 1}}  
          className="offer__text-btn"><a href="/contact">Zapytaj o cenę</a></motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Offer