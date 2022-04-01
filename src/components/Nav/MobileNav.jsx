import { useState } from 'react'
import { Link } from "react-router-dom";

import { Ul } from './MobileNav.styled';


const MobileNav = ({ close }) => {
  return (

<Ul close={close}>
  <div className="navLinks">
    <div className="linksContainerOne">
    <li className="items"><Link to = "/" > Home </Link> </li>
    <li className = "items"><Link to = "/about" > About </Link> </li >
    <li className='divider'></li>
    </div>
    <div className="linksContainerTwo">
    <li className = "items"><Link to = "/Recipes" > Recipes </Link> </li >
    <li className = "items"><Link to = "/Donate" > Donate Food </Link></li >
    <li className='divider'></li>
    </div>
    <div className="linksContainerThree">
    <li className = "items"><Link to = "/contact" > Contact </Link></li >
    </div>
  </div>
    
</Ul>
)
}

export default MobileNav

{/* <ul className='mobileLinks' style={ close ? {display:'none'} : {display:'block'}}> */}