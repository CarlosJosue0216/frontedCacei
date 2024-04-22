"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [preguntas, setPreguntas] = useState({});
  const [archivos, setArchivos] = useState({});
  const [dataUser, setDataUser] = useState({});
  const [allUsers, setAllUsers] = useState({});
  const [resultados, setResultados] = useState([]);

  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage?.getItem('userData');
      return storedUserData ? JSON.parse(storedUserData) : null;
    }
    return null;
  });

  const getPreguntas = async () => {
    const { data } = await axios(`${process.env.NEXT_PUBLIC_Backend_URL}api/preguntas/viewAll`);
    setPreguntas(data);
    setDataUser(data);
  };

  const getFiles = async () => {
    const { data } = await axios(`${process.env.NEXT_PUBLIC_Backend_URL}api/files/getFiles`);
    setArchivos(data);
  };

  const getResults = async () => {
    try {
      const { data } = await axios(`${process.env.NEXT_PUBLIC_Backend_URL}api/resultado/getAllResults`);
      setResultados(data);
    } catch (error) {
      console.error("Error al obtener los resultados:", error);
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await axios(`${process.env.NEXT_PUBLIC_Backend_URL}api/usuarios/getUsers`);
      setAllUsers(data);
    } catch (error) {
      console.error("Error al obtener los resultados:", error);
    }
  };

  useEffect(() => {
    getPreguntas();
    getFiles();
    getUsers();
    getResults();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, preguntas, getPreguntas, dataUser, archivos, resultados, allUsers, getUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
