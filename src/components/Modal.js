import { motion } from "framer-motion";

const Modal = ({clickedImg, handleRotationRight, handelRotationLeft, setClickedImg}) => {

  const handleClick =(e)=>{
    if(e.target.classList.contains("dismiss")){
      setClickedImg(null);
    }
  }

  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{opacity: 1}} 
    exit={{opacity: 0}}
    transition={{duration: 1}}      
    className="overlay dismiss" onClick={handleClick}>
      <img src={clickedImg} alt="" className="overlay__img" />
      <span className="dismiss overlay__close" onClick={handleClick}>X</span>
      <div onClick={handelRotationLeft} className="overlay__arrows overlay__arrows__left">
      <i className="fas fa-chevron-left"></i>
      </div>
      <div onClick={handleRotationRight} className="overlay__arrows overlay__arrows__right">
      <i className="fas fa-chevron-right"></i>  
      </div>
    </motion.div>
  )
};

export default Modal;