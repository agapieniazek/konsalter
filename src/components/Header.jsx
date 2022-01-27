import React, { useContext } from 'react';
import "../styles/header.scss";
import { motion } from 'framer-motion';
import { Context } from '../context/Context';

function Header() {
  const {lang} = useContext(Context);
  return (
    <div 
    className='header'>
      <div className="header__img"> 
      </div>
      <motion.div 
            initial={{opacity:0}} 
            animate={{opacity: 1}} 
            exit={{opacity:0}}
            transition={{duration:1}}        
      className="header__info">
      <h1>{lang ? "Proffesional car transport" : "Profesjonalny transport samochodów"}</h1>
      <button><a href="/offer">{lang ? "SHOW OFFER" : "ZOBACZ OFERTE"}</a></button>
      </motion.div>
    </div>
  )
}

export default Header;
