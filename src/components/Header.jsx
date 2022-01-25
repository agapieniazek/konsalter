import React, { useContext } from 'react';
import "../styles/header.scss";
import { motion } from 'framer-motion';
import video from "../images/header.mp4";
import { Context } from '../context/Context';

function Header() {
  const {lang} = useContext(Context);
  return (
    <div 
    className='header'>
      <motion.div className="header__img" 
      initial={{opacity:0, y:-1000}} 
    animate={{opacity: 1, y: 0}} 
    exit={{opacity:0, y:-1000}}
    transition={{duration:1.5}}>
                <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video>
      </motion.div>
      <div className="header__info">
      <h1>{lang ? "Proffesional car transport company" : "Profesjonalny transport samochodów"}</h1>
      <button><a href="/offer">{lang ? "OFFER" : "ZOBACZ OFERTE"}</a></button>
      </div>
    </div>
  )
}

export default Header;
