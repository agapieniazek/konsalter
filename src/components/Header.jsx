import React from 'react';
import "../styles/header.scss";
import { motion } from 'framer-motion';

const url ="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

function Header() {
  return (
    <div 
    className='header'>
      <motion.div className="header__img" initial={{opacity:0}} 
    animate={{opacity: 1}} 
    exit={{opacity:0}}>
        <img src={url} alt="header" />
      </motion.div>
      <div className="header__info">
      <h1>Profesjonalny transport samochodów</h1>
      <button>DOWIEDZ SIĘ WIĘCEJ</button>
      </div>
    </div>
  )
}

export default Header;
