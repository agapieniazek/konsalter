import React, { useContext } from 'react';
import { Context } from '../context/Context';
import "../styles/topbar.scss";


function Topbar() {
  const {lang, dispatch} = useContext(Context);

  const toggleLang = () => {
    dispatch({type: "SWITCH_LANG"})
  }
  
  return (
    <div className='topbar'>
      <div className="topbar__logo">
        <a href="/">     
           <h1>KONSALTER</h1></a>
      </div>
      <div className="topbar__contact">
        <p>+48 606 473 267</p>
        <p>dzieszko@op.pl</p>
      </div>
      <div className='topbar__lang'>
        <span className={lang ? "topbar__active" : null} onClick={toggleLang}>EN</span>
        <span className={lang ? null : "topbar__active"} onClick={toggleLang}>PL</span>
      </div>
    </div>
  )
}

export default Topbar;
