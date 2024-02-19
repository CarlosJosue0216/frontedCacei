'use client'
 
import { createContext, useContext, useState } from 'react'
 
export const UserContext = createContext()
 
export default function UserProvider({ children }) {
    const [user, setUser] = useState("carlos");
    const usuarioLogeado = (data) =>{
        setUser(data)
        console.log(data)
    }
  return <UserContext.Provider value={{user,usuarioLogeado}}>{children}</UserContext.Provider>
}
export const useUser = () => {
    return useContext(UserContext);
  };