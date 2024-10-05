import React, { useContext, useEffect, useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import {StoreContext} from '../context/StoreContext'
import { Navigate } from 'react-router-dom'


const SignUp = () => {
    const {setToken,token}=useContext(StoreContext)
     const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

useEffect(()=>{
    console.log(token)
},[token])

        const onChangeHandler=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setData(data=>({...data,[name]:value}))
    }
    
    const onSignUp= async(e)=>{

        e.preventDefault()
        const response=await axios.post('http://localhost:4000/api/user/sign-up',data)
        if(response.data.success){
            console.log(response.data.token)
         setToken(response.data.token)
         localStorage.setItem('token',response.data.token)
            
            
        }

    }

  
  return (
      <form onSubmit={onSignUp}>
    <div> 
         {!token?
        <div className='login-pop-up'>
         
   <h1>SignUp</h1>
   <input onChange={onChangeHandler} name='name' value={data.name}  type='text' placeholder='Enter Your Name'/>
   <input onChange={onChangeHandler} name='email' value={data.email} type='email' placeholder='Enter Your Email'/>
   <input onChange={onChangeHandler} name='password' value={data.password} type='password' placeholder='Enter Password'/>
      <button>SignUp</button>
      
          
    </div>:<>
    <Navigate to='/'></Navigate>
    </>}
      
    </div> 
     </form> 
  )
}

export default SignUp
