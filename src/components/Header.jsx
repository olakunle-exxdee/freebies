import React, { useState,useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import { Logo } from "./Footer";
import { Link as LinkScroll } from "react-scroll";




const Header = () => {
  const [openMenu,setOpenMenu]= useState(false)
  const openHambuger = openMenu ?"navbar-2 open":"navbar-2"
   const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
   <div className={scrollActive?"header-section fixed":"header-section"}>
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
             <li className="item"><LinkScroll onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={() => {
                  setActiveLink("about");
                }}className={
                  activeLink === "about" ? "links active " : "links"
                }>About</LinkScroll></li>
             <li className="item">
               <LinkScroll 
                onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={() => {
                setActiveLink("features");}}
                className={
                  activeLink === "features" ? "links active" : "links"}>Features</LinkScroll></li> 
             <li className="item">
               <LinkScroll 
                onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={() => {
                setActiveLink("pricing");}}
                className={
                  activeLink === "pricing" ? "links active" : "links"}>pricing</LinkScroll></li>  
             <li className="item"><LinkScroll 
                onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="testimonies"
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={() => {
                setActiveLink("testimonies");}}
                className={
                  activeLink === "testimonies" ? "links active" : "links"}>testimonies</LinkScroll></li>
             <li className="item"><LinkScroll 
                onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={() => {
                setActiveLink("footer");}}
                className={
                  activeLink === "footer" ? "links active" : "links"}>Help</LinkScroll></li>
            
          </ul>
         </div>
         <div className="auth-group">
           <a href="" className="btn-header signin">Sign In</a>
           <a href="" className="btn-header signup">Sign Up</a>
         </div>
        </div>
      </nav>
    </header>
   </div>
  );
};

export default Header;
