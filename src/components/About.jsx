import React from 'react';
import "../styles/about.scss";
import {motion} from "framer-motion";

function About() {
  const img= "https://images.pexels.com/photos/2348359/pexels-photo-2348359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <motion.div className='about'
    initial={{opacity:0}} 
    animate={{opacity: 1}} 
    exit={{opacity:0}}>
      <div className="about__img">
        <img src={img} alt="" />
      </div>


    </motion.div>
  )
}

export default About
