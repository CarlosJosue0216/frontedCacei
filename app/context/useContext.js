"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [preguntas, setPreguntas] = useState({});
  const [archivos, setArchivos] = useState({})
  const [dataUser, setDataUser] = useState({})
  const [allUsers, setAllUsers] = useState({})
  const [user, setUser] = useState(() => {
    const storedUserData = localStorage?.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  const getPreguntas = async () => {
    const { data } = await axios("http://localhost:4000/api/preguntas/viewAll");
    setDataUser(data)
  };
  const getFiles = async () => {
    const { data } = await axios("http://localhost:4000/api/files/getFiles");
    setArchivos(data)
    
  }
  const getUsers = async()=>{
    const { data } = await axios("http://localhost:4000/api/usuarios/getUsers");
    setAllUsers(data)
  }
  useEffect(() => {
    getPreguntas();
    getFiles()
    getUsers()
    console.log(archivos)
  }, []);

  return (
    <UserContext.Provider value={{ user,setUser, preguntas,getPreguntas,dataUser,archivos,getFiles,allUsers,getUsers }}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = () => {
  return useContext(UserContext);
};
