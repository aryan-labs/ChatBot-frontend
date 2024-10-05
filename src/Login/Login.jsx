import React, { useContext, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { StoreContext } from '../context/StoreContext'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const {token,setToken}=useContext(StoreContext)

    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

         const onChangeHandler=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setData(data=>({...data,[name]:value}))
    }
    const onLogin=async(e)=>{
        e.preventDefault()
        const response=await axios.post('http://localhost:4000/api/user/login',data)
        if(response.data.success){
                     console.log(response.data.token)
         setToken(response.data.token)
         console.log(response.data.token)
         localStorage.setItem('token',response.data.token)
            
            
        }

    }

  return (<div>
    {!token?
    <div>
    <form onSubmit={onLogin} className='login-pop-up'>
   <h1>Login</h1>
 <input onChange={onChangeHandler} name='email' value={data.email} type='email' placeholder='Enter Your Email'/>
   <input onChange={onChangeHandler} name='password' value={data.password} type='password' placeholder='Enter Password'/>
      <button>Login</button>
    </form>
    </div>:
    <Navigate to='/'></Navigate>}
    </div>
  )
}

export default Login
