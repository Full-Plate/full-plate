import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import "../styles/Navbar.css";

/*function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };*/

  const Navbar = ( ) =>{
  return (
  <nav> 
    <div className="logo">
      <img src={Logo}/>
        </div >
         < ul className ="navLinks-ul">
            <li className="navLinks-li">
              <Link to = "/" > Home </Link>
              <Link to="/about"> About </Link>
              <Link to="/Recipes"> Recipes </Link>
              <Link to = "/Donate" > Donate Food </Link>
              <Link to = "/contact" > Contact </Link>
            </li>
          </ul>
          </nav>
        );
}

export default Navbar;
