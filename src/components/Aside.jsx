import React from 'react';
import "../styles/Aside.scss";
import {NavLink} from "react-router-dom";

function Aside() {
  return (
    <div className="aside">
      <div className="aside__trapez"></div>
      <div className="aside__list">
          <NavLink end to="/about"  className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
            O NAS
          </NavLink>
          <NavLink end to="/ofer"  className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
            OFERTA
          </NavLink>
          <NavLink end to="/fleet"   className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
            FLOTA
          </NavLink>
          <NavLink end to="/contact"  className={({isActive})=> (isActive ? "aside__link__active" : "aside__link")}>
            KONTAKT
          </NavLink>
      </div>
      <div className="aside__rodo">
        rodo
      </div>
    </div>
  )
}

export default Aside;