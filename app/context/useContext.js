"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [preguntas, setPreguntas] = useState({});
  const [user, setUser] = useState(() => {
    const storedUserData = localStorage?.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  const getPreguntas = async () => {
    const { data } = await axios("http://localhost:4000/api/preguntas/viewAll");
    console.log(data)
  };
  useEffect(() => {
    getPreguntas();
    console.log(preguntas)
  }, []);

  return (
    <UserContext.Provider value={{ user,setUser, preguntas,getPreguntas }}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = () => {
  return useContext(UserContext);
};
