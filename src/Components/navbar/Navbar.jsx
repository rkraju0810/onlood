import React, { useState } from 'react'
import '../navbar/navbar.css'
import { assets } from '../../assests/assets'
import { Link } from "react-router-dom"



const Navbar = ({setIsSignin,setSearch,search}) => {

  const [menu, setmenu] = useState('home')


  return (


    <div className='header'>

      <img src={assets.logo} alt="logo" className='logo' />


      <ul className='navbar-menu'>

        <li onClick={() => setmenu('home')} className={menu === "home" ? 'navbar-menu-active' : " "}><Link to={'/'}>Home</Link></li>
        <li onClick={() => setmenu('menu')} className={menu === "menu" ? 'navbar-menu-active' : " "}>Menu</li>
        <li onClick={() => setmenu('mobile app')} className={menu === "mobile app" ? 'navbar-menu-active' : " "}>Mobile App</li>
        <li onClick={() => setmenu('contact us')} className={menu === "contact us" ? 'navbar-menu-active' : " "}>Contact Us</li>
        
      </ul>

      <div className='navbar-right'>
        <div className='nav-icons'>
          <div className='nav-search'>
            <input type="text" placeholder='search' id='input-search' onChange={(e)=>setSearch(e.target.value)}/>
            
            <img src={assets.search_icon} alt="search-icon" className='search-icon'/>
          </div>
          <Link to={'/cart'}><img src={assets.basket_icon} alt="cart-icon" className='cart-icon' /></Link>
          <div className='dot'></div>
        </div>
        <button className='btn-nav' onClick={() => setIsSignin(true)}>Sign in</button>

       


      </div>

    </div>

  )
}

export default Navbar