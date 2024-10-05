import React, { useContext } from 'react'
import logo from './ps.png'
import './Hero.css'
import { StoreContext } from '../context/StoreContext'
const Hero = () => {
    const {token}=useContext(StoreContext)
  return (
    <div className='hero'>
        {!token?
      <img className='hero' src={logo} alt=''/>:""
        }
    </div>
  )
}

export default Hero
