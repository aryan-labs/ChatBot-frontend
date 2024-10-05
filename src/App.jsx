import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Login from './Login/Login'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp/SignUp'

const App = () => {
  return (
   
    <div>

      <Navbar></Navbar>
      <div className='middle'>
          <Routes> 
            
        <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/sign-Up' element={<SignUp></SignUp>}></Route>
       </Routes>
       <Hero className='hero'></Hero>
      </div>

    </div>
   

  )
}

export default App
