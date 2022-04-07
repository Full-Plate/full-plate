import { Link } from "react-router-dom";
import { Ul } from './MobileNav.styled';

const MobileNav = (closeMobileNav) => {
  const {close, setClose} = closeMobileNav; 

  return (

<Ul close={close} >
  <div className="navLinks">
    <div className="linksContainerOne">
    <li className="items" ><Link to = "/" onClick={() => setClose(!close)}> Home </Link> </li>
    <li className = "items" ><Link to = "/about" onClick={() => setClose(!close)} > About </Link> </li >
    <li className='divider'></li>
    </div>
    <div className="linksContainerTwo">
    <li className = "items"><Link to = "/Recipes" onClick={() => setClose(!close)} > Recipes </Link> </li >
    <li className = "items"><Link to = "/Donate" onClick={() => setClose(!close)} > Donate Food </Link></li >
    <li className='divider'></li>
    </div>
    <div className="linksContainerThree">
    <li className = "items"><Link to = "/contact" onClick={() => setClose(!close)} > Contact </Link></li >
    </div>
  </div>
    
</Ul>
)
}

export default MobileNav

