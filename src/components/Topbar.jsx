import React from 'react';
import "../styles/topbar.scss";

function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbar__logo">
        <a href="/">        <h1>KONSALTER</h1></a>
      </div>
      <div className="topbar__contact">
        <p>+48 606 473 267</p>
        <p>dzieszko@op.pl</p>
      </div>
      <div className='topbar__lang'>
        <span>EN</span>
        <span>PL</span>
      </div>
    </div>
  )
}

export default Topbar;
