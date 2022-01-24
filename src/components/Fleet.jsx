import React from 'react';
import { useState } from 'react/cjs/react.development';
import images from "../images/images.json";
import Modal from './Modal';
import "../styles/fleet.scss";
import { motion } from 'framer-motion';

function Fleet() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);



  const handleClick= (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.src);
}

const handleRotationRight = () =>{
    const totalLength = images.images.length;
    if (currentIndex === totalLength - 1) {
      setCurrentIndex(0);
      const newUrl = images.images[0].src;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = images.images.filter((item) => {
      return images.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].src;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  

const handelRotationLeft = () => {
  const totalLength = images.images.length;
  if (currentIndex === 0) {
    setCurrentIndex(totalLength - 1);
    const newUrl = images.images[totalLength - 1].src;
    setClickedImg(newUrl);
    return;
  }
  const newIndex = currentIndex - 1;
  const newUrl = images.images.filter((item) => {
    return images.images.indexOf(item) === newIndex;
  });
  const newItem = newUrl[0].src;
  setClickedImg(newItem);
  setCurrentIndex(newIndex);
};


  return (
    <div className='fleet'>
      {images.images.map((item, index)=> (
        <div key={index} className='fleet__wrapper'>
          <motion.img 
            initial={{opacity:0}} 
            animate={{opacity: 1}} 
            exit={{opacity:0}}
            transition={{duration: 0.3}}      
          
          src={item.src} className="fleet__img" alt={item.title} onClick={()=> handleClick(item, index)}/>
        </div>
      ))}
      {clickedImg && <Modal clickedImg={clickedImg} handelRotationLeft={handelRotationLeft} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg}/>}
    </div>
  )
}

export default Fleet
