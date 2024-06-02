import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'

function Navbar() {
    const [activeItem,setActive] = useState('Home')
  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo' />
      <ul className='navbar-menu'>
        <li className={activeItem === 'Home' ? 'active' : ''} onClick={()=>setActive('Home')}>Home</li>
        <li className={activeItem === 'Menu' ? 'active' : ''} onClick={()=>setActive('Menu')}>Menu</li>
        <li className={activeItem === 'Mobile-app' ? 'active' : ''} onClick={()=>setActive('Mobile-app')}>Mobile-app</li>
        <li className={activeItem === 'Contact Us' ? 'active' : ''} onClick={()=>setActive('Contact Us')}>Contact Us</li>
         </ul>
         <div className='navbar-right'>
        <div className='navbar-search-icon'>
     <img src={assets.search_icon} alt='' />
     </div>
    <div className='navbar-basket-icon'>
    <img src={assets.basket_icon} alt='' />
    <div className='dot'></div>
    </div>
    <button>Sign In</button>
    </div>
    </div>
  )
}

export default Navbar
