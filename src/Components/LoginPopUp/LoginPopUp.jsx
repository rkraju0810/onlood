import React from 'react'
import { assets } from '../../assests/assets'
import './LoginPopUp.css'
import { useState } from 'react'


const Signin = ({setIsSignin}) => {

  const [currstate , setCurrstate] = useState(true)
  return (
    
    <div className='popup'>
      <form className='popup-container'>
        <div className='popup-title'>
        <h2>{currstate ? 'Sign Up' : 'Login'}</h2>
        <img src={assets.cross_icon} alt="" onClick={()=>setIsSignin(false)} />
        </div>
        {
          currstate &&
           <div className='input-group'>
           <label htmlFor="Username">Username</label>
           <input type="text" placeholder='Your name'/>
           </div>
        }
 
        <div className='input-group'>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Your email'/>
        </div>
       
        <div className='input-group'>
        <label htmlFor="Password">Password</label>
        <input type="text" placeholder='Your Password'/>
        </div>
       
        <button className='popup-btn'>{currstate  ? "Create an account" : "Log In"}</button>
        
        <div className='popup-term'>
        <input type="checkbox" />
        <label htmlFor="login">By continuing, i agree to the terms of use & privacy policy.</label>
        </div>
        
        <div className='popup-link'>
       <p>{currstate ? 'Already have an account ?' : " Create a new account ?"}</p>
       <span onClick={()=>setCurrstate(!currstate)}>{currstate ? 'Login here'  : "Click here"}</span>
       </div>

       
    </form>
    </div>
  )
}

export default Signin