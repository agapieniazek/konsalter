import React, { useContext } from 'react';
import "../styles/Aside.scss";
import {NavLink} from "react-router-dom";
import { Context } from '../context/Context';

function Aside() {
  const {lang} = useContext(Context);

  const showRodo=()=>{
    window.alert("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam tempora tempore, maiores tenetur, inventore distinctio voluptatum dolor harum quos, ullam sit quisquam consequatur nihil! Harum sapiente reprehenderit quod optio eligendi")
  }

  return (
    <div className="aside">
      <div className="aside__list">
          <NavLink end to="/about"  className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
           {lang ? "ABOUT" : "O NAS"}
          </NavLink>
          <NavLink end to="/offer"  className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
          {lang ? "OFFER" : "OFERTA"}
          </NavLink>
          <NavLink end to="/fleet"   className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
          {lang ? "FLEET" : "FLOTA"}
          </NavLink>
          <NavLink end to="/contact"  className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
          {lang ? "CONTACT" : "KONTAKT"}
          </NavLink>
      </div>
      <div className="aside__rodo">
        <p onClick={showRodo}>RODO</p>
          <p>&copy; Agnieszka Pieniążek 2022</p>
      </div>
    </div>
  )
}

export default Aside;