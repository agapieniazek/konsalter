import React from 'react';
import "../styles/contact.scss";
import {motion} from "framer-motion";

function Contact() {
  return (
    <motion.div className='contact' initial={{opacity:0, y:500}} animate={{opacity:1, y:0}} exit={{opacity:0, y:100}} transition={{duration:0.5}}>
     <h1>CONTACT MEE</h1>
    </motion.div>
  )
}

export default Contact
