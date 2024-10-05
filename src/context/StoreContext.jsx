import React, { createContext, useState } from 'react'

export const StoreContext=createContext(null)
const StoreContextProvider = (props)=>{
    const [token,setToken]=useState('')
   


    const value={
setToken,token
    }
  return (
<StoreContext.Provider value={value}>
    {props.children}
</StoreContext.Provider>
  )
}

export default StoreContextProvider
