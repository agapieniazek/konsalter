import React, { useContext } from 'react';
import "../styles/Aside.scss";
import {NavLink} from "react-router-dom";
import { Context } from '../context/Context';
import Footer from './Footer';
import {motion} from "framer-motion";

function Aside() {
  const {lang, menu, dispatch} = useContext(Context);

  const toggleMenu = () => {
    dispatch({type: "SWITCH_MENU"})
  }


  return (
    <div className="aside">
      <div className="aside__toggle">
        <input type="checkbox" value={menu} onClick={toggleMenu}></input>
        {menu ? (<i class="far fa-window-close"></i> ): (<i class="fas fa-bars"></i>)}
      </div>
      <div 
             onClick={toggleMenu}  
     className={menu ? "aside__list aside__active" : "aside__list"}>
          <NavLink end to="/about"  className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
           {lang ? "ABOUT" : "O NAS"}
          </NavLink>
          <NavLink end to="/offer" className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
          {lang ? "OFFER" : "OFERTA"}
          </NavLink>
          <NavLink end to="/fleet"   className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
          {lang ? "FLEET" : "FLOTA"}
          </NavLink>
          <NavLink end to="/contact"  className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
          {lang ? "CONTACT" : "KONTAKT"}
          </NavLink>

        <div className="aside__rodo">
        <Footer/>
        </div>
      </div>
      <div className='aside__bcg'></div>
    </div>
  )
}

export default Aside;