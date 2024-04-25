import React from 'react'
import './header.css'
import { assets } from '../../../assests/assets'

const Header = () => {
  return (
    <div className='header-container'>
        
        <img src={assets.header_img} alt="header.img" className='header-img'/>
        <div className='header-content'>      
            <h1>Order your favourite food here</h1>
            
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, officia temporibus. Tempore laborum inventore, itaque facilis perferendis Et ad laudantium labore quas cumque facilis adipisci?</p>
            <button className='header-btn'>View more</button>
        </div>
    </div>
  )
}

export default Header