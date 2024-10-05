import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

import logo from './ss.png'
import { StoreContext } from '../context/StoreContext'
const Navbar = () => {
    const {token,setToken}=useContext(StoreContext)
  return (
    <div className='navbar'>
        <img className='chat-logo' src="https://freepnglogo.com/images/all_img/1700403373logo-chatgpt-png.png" alt=''/>
     <h3>Mern-GPT</h3>
      {!token?<>
      
     <div className='Auth'>
       <NavLink to='/login'> <button className='login-but'>LOGIN</button></NavLink>
        <NavLink to='/sign-Up'><button className='signUp-but'>SIGNUP</button></NavLink>
        
     </div></>:<div className='Auth'>
       <NavLink to='/chat'> <button className='login-but1'>GO TO CHAT</button></NavLink>
        <button onClick={()=>{setToken('')}} className='signUp-but'>LOGOUT</button>
        
     </div>
}
    </div>
  )
}

export default Navbar
