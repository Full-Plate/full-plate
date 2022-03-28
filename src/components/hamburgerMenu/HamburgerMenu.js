import { useState } from 'react'
import "../hamburgerMenu/HamburgerMenu.css"

export default function HamburgerMenu() {
const [close, setClose] = useState(false)

  return (
    <div className='burger' close={close} onClick={() => setClose(!close)} >

      <div style={ 
        close ? 
        { backgroundColor:'red', 
        transform: 'rotate(45deg)',
        transformOrigin: '1px'} 
        : // false statement 
        {backgroundColor: 'black', 
        transform: 'rotate(0deg)',
        transformOrigin: '1px'}
        }>
      </div>
      
      <div style={ 
        close ? 
        { backgroundColor:'red', 
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
        { backgroundColor:'red', 
        transform: 'rotate(-45deg)',
        transformOrigin: '1px'} 
        : // false statement 
        {backgroundColor: 'black', 
        transform: 'rotate(0deg)'
        ,transformOrigin: '1px'}  
        }>
      </div>

    </div>
  )
}
