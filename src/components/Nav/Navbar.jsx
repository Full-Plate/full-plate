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
    <img className="logo" src={Logo} ></img>
    {/* <img className="mobileLogo" src={Logo}/> */}
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
