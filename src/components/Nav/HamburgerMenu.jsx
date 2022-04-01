import { useState } from 'react'
import "./HamburgerMenu.css"
import MobileNav from './MobileNav'

export default function HamburgerMenu() {
const [close, setClose] = useState(false)

  return (
    <>
    
    <div className='burger' close={close} onClick={() => setClose(!close)} >
    
      <div style={ 
        close ? 
        { backgroundColor:'', 
        transform: 'rotate(45deg)',
        transformOrigin: '-4px'} 
        : // false statement 
        {backgroundColor: 'black', 
        transform: 'rotate(0deg)',
        transformOrigin: '1px'}
        }>
      </div>
      
      <div style={ 
        close ? 
        { backgroundColor:'', 
        transform: 'translateX(100%)',
        transformOrigin: '1px', 
        opacity: '0'} 
        : // false statement 
        {backgroundColor: 'black', 
        transform: 'translateX(0)', 
        opacity: '1'}
        }>
      </div>
      
      <div style={ 
        close ? 
        { backgroundColor:'', 
        transform: 'rotate(-45deg)',
        transformOrigin: '-2px'} 
        : // false statement 
        {backgroundColor: 'black', 
        transform: 'rotate(0deg)'
        ,transformOrigin: '1px'}  
        }>
      </div>
    </div>
    <MobileNav close={close} setClose={setClose} />
    </>
  )
}
