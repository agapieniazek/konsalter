import React from 'react';
import "../styles/header.scss";
import { motion } from 'framer-motion';
import video from "../images/header.mp4";

function Header() {
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
      <h1>Profesjonalny transport samochodów</h1>
      <button>ZOBACZ OFERTE</button>
      </div>
    </div>
  )
}

export default Header;
