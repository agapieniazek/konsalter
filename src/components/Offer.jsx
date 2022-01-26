import "../styles/offer.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react/cjs/react.development";
import { Context } from "../context/Context";

const url = "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";


function Offer() {
  const [isSelected, setIsSelected] = useState(1);
  const [text, setText] = useState("");
  const [title, setTitle ] = useState("");

  const {lang, menu} = useContext(Context);

  useEffect(() => {
    if(isSelected === 1) {
      setTitle(lang ? "Solo transport - car transport and export" :"Transport solo – przewóz i wywóz samochodów")
      setText(
        lang ?
        "We offer professional transport and export of cars to EU countries. All you need to do is contact us to find out about the details of the offer and to establish the terms of cooperation. At the same time, we provide full comfort for our clients. Our experienced drivers are able to ensure safety during transport while maintaining the deadlines agreed with customers. They are allowed by their professional driving skills and knowledge of the realities of Polish and European roads. Properly thought-out logistics also plays an important role. Thanks to this, your car will be where you need it without any problems." 
        : "Oferujemy profesjonalny przewóz i wywóz samochodów do krajów Unii. Wystarczy się z nami skontaktować, by poznać szczegóły oferty i ustalić zasady współpracy. Zapewniamy przy tym pełen komfort dla naszych klientów. Nasi doświadczeni kierowcy potrafią zadbać o bezpieczeństwo w trakcie transportu przy jednoczesnym zachowaniu realizacji ustalonych z klientami terminów. Pozwalają im na to zarówno ich umiejętności zawodowych kierowców, jak i znajomość realiów polskich i europejskich dróg. Dużą rolę gra także odpowiednio przemyślana logistyka. Dzięki temu twoje auto bez najmniejszego problemu znajdzie się tam, gdzie tego potrzebujesz.");
    } else if(isSelected === 2) {
      setTitle(lang ?
        "Transport set - transport up to 8 cars"        
        :"Transport zestaw - przewóz do 8 samochodów")
      setText(lang ?
        "For the most demanding customers who count on fast transport of more cars, we offer transport sets that enable the transport of three vehicles at the same time! Their design and the way in which we secure the transported vehicles guarantee the full safety of your cars. In this case, the experience of our drivers, who are well aware of the challenges that await them on the route, when transporting three vehicles at the same time, plays an important role. They have often faced serious challenges that required them not only to have appropriate skills, but also knowledge and the ability to respond appropriately to changing road conditions, which, after all, differed from country to country."
        :"Dla najbardziej wymagających klientów, którzy liczą na szybki transport większej ilości samochodów, oddajemy do dyspozycji zestawy transportowe umożliwiające przewóz trzech pojazdów jednocześnie! Ich konstrukcja i sposób, w który zabezpieczamy przewożone pojazdy, gwarantują pełne bezpieczeństwo Państwa aut. Dużą rolę gra w tym przypadku doświadczenie naszych kierowców, którzy doskonale zdają sobie sprawę z wyzwań, które czekają ich na trasie w trakcie transportu trzech pojazdów jednocześnie. Niejednokrotnie mierzyli się z poważnymi wyzwaniami, które wymagały od nich nie tylko odpowiednich umiejętności, lecz także wiedzy i zdolności odpowiedniego reagowania na zmieniające się warunki na warunki drogowe, różniące się przecież między krajami.");
    } else if(isSelected ===3){
      setTitle(lang ?
         "tow truck - towing 24h"       
        :"Laweta podkarpackie - holowanie 24h")
      setText( lang ?
        "Our company provides tow trucks for customers who have problems on the route in the province. Pomeranian, as well as those who are interested in the newly purchased vehicle or its transport from and to the garage. A fully operational and serviced tow truck for transporting cars, thanks to the service by an experienced driver and operator, ensures express and safe performance of all activities that will allow the car to be transported to the selected place. It is about pulling the car out of the ditch and securing it for transport, as well as loading it on a tow truck."
        :"Nasza firma oddaje do dyspozycji lawety dla klientów mających problemy na trasie na terenie woj. pomorskiego, a także tych z nich, którzy są zainteresowaniem nowozakupionego pojazdu lub jego przewozu z i do warsztatu samochodowego. W pełni sprawna i serwisowana laweta do transportu samochodów dzięki obsłudze przez doświadczonego kierowcę i operatora zapewnia ekspresowe i bezpieczne wykonanie wszelkich czynności, które pozwolą na przewiezienie auta w wybrane miejsce. Chodzi tu zarówno o wyciagnięcie auta z rowu i jego zabezpieczenie do transportu, jak i załadunek na lawetę.");
    }
  }, [isSelected, lang])


  return (
    <div className={menu ? "offer offer__active" : "offer"}>
            <div className="offer__img">
        <img src={url} alt="" />
      </div>
      <div className="offer__info">
        <div className="offer__options">
          <motion.button              initial={{x:1000}} 
             animate={{x: 0}} 
             exit={{x:1000}}
             transition={{duration: 1}}      

          className={isSelected === 1 ? "activeBtn offer__btn" : "offer__btn "} onClick={()=> setIsSelected(1)}>{lang ? "SOLO": "SOLO"}</motion.button>
          <motion.button initial={{x:1000}} 
             animate={{x: 0}} 
             exit={{x:1000}}
             transition={{duration: 1}}
          className={isSelected === 2 ? "activeBtn offer__btn" : "offer__btn "} onClick={()=> setIsSelected(2)}>{lang ? "SET": "ZESTAW"}</motion.button>
          <motion.button 
              initial={{x:1000}} 
             animate={{x: 0}} 
             exit={{x:1000}}
             transition={{duration: 1}}
          className={isSelected === 3 ? "activeBtn offer__btn" : "offer__btn "} onClick={()=> setIsSelected(3)}>{lang ? "TUG": "HOLOWNIK"}</motion.button>
        </div>
        <div className="offer__bcg">
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
          className="offer__text-btn"><a href="/contact">{lang ? "Ask about price" : "Zapytaj o cenę"}</a></motion.button>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Offer