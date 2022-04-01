import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import "../../styles/Navbar.css";

import HamburgerMenu from "./HamburgerMenu";

function Navbar() {

  return (
    <>
  <nav>  
    <HamburgerMenu />
    <div className="logo">
      <img src={Logo}/>
        </div >
        
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
