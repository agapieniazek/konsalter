import React from 'react';
import { useContext, useState } from 'react/cjs/react.development';
import Modal from './Modal';
import "../styles/fleet.scss";
import { motion } from 'framer-motion';
import { Context } from "../context/Context";

import img1 from "../images/fleet/1.JPG";
import img2 from "../images/fleet/2.jpg";
import img3 from "../images/fleet/3.JPG";
import img4 from "../images/fleet/4.jpg";
import img5 from "../images/fleet/5.JPG";
import img6 from "../images/fleet/6.jpg";

const cars = [img1, img2, img3, img4, img5, img6];


function Fleet() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const {menu} = useContext(Context);

  const handleClick= (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
    window.scrollTo(0,0);
}
const handleRotationRight = () =>{
    const totalLength = cars.length;
    if (currentIndex === totalLength - 1) {
      setCurrentIndex(0);
      const newUrl = cars[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = cars.filter((item) => {
      return cars.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  

const handelRotationLeft = () => {
  const totalLength = cars.length;
  if (currentIndex === 0) {
    setCurrentIndex(totalLength - 1);
    const newUrl = cars[totalLength - 1];
    setClickedImg(newUrl);
    return;
  }
  const newIndex = currentIndex - 1;
  const newUrl = cars.filter((item) => {
    return cars.indexOf(item) === newIndex;
  });
  const newItem = newUrl[0];
  setClickedImg(newItem);
  setCurrentIndex(newIndex);
};


  return (
    <div className={menu ? "fleet__active fleet" : 'fleet'}>
      {cars.map((item, index)=> (
        <div key={index} className='fleet__wrapper'>
          <motion.img 
            initial={{opacity:0}} 
            animate={{opacity: 1}} 
            exit={{opacity:0}}
            transition={{duration: 0.3}}      
          
          src={item} className="fleet__img" alt="xx" onClick={()=> handleClick(item, index)}/>
        </div>
      ))}
      {clickedImg && <Modal clickedImg={clickedImg} handelRotationLeft={handelRotationLeft} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg}/>}
    </div>
  )
}

export default Fleet
