import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

import "../../styles/Navbar.css";

import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const [ fix, setFix ] = useState(false)

  function setFixed() {
    if (window.scrollY >= 1) {
      setFix(true)
    }else{
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)

  return (
    <>
  <nav className={fix ? "navbar fixed" : "navbar"}> 
    <NavLink to ="/">
    <a href="" className="logo">
    <img className="logo" src={Logo} ></img> 
    </a> 
    </NavLink>
    
    
    <HamburgerMenu />
         < ul className ="navLinks">
           <li className="items"><Link to = "/" > Home </Link> </li>
              <li className = "items"><Link to = "/about" > About </Link> </li >
              <li className = "items"><Link to = "/Recipes" > Recipes </Link> </li >
               <li className = "items"><Link to = "/Donate" > Donate Food </Link></li >
              <li className = "items"><Link to = "/contact" > Contact </Link></li >
          </ul>
          </nav>
          </>
        );
}

export default Navbar;
