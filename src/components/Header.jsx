import React, { useState,useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import { Logo } from "./Footer";

const Header = () => {
  const [openMenu,setOpenMenu]= useState(false)
  const openHambuger = openMenu ?"navbar-2 open":"navbar-2"
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-1">
          <div className="logo">
            <Logo/>
            <p className="logo-text">
              Lasles<span className="bold">VPN</span>
            </p>
          </div>
          <div className="hamburger">
            <Hamburger toggled={openMenu} toggle={setOpenMenu} duration={0.5} size={20} label="Show menu"/>
          </div>
        </div>
        <div className={openHambuger}>
         <div className="list-group">
          <ul className="list">
             <li className="item"><a className="links" href="#">About</a></li>
             <li className="item"><a className="links" href="#">Features</a></li> 
             <li className="item"><a className="links" href="#">Pricing</a></li> 
             <li className="item"><a className="links" href="#">Testimonials</a></li>
             <li className="item"><a className="links" href="#">Help</a></li>
          </ul>
         </div>
         <div className="auth-group">
           <a href="" className="btn-header signin">Sign In</a>
           <a href="" className="btn-header signup">Sign Up</a>
         </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
