"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [preguntas, setPreguntas] = useState({});
  const [archivos, setArchivos] = useState({});
  const [dataUser, setDataUser] = useState({});
  const [user, setUser] = useState(() => {
    const storedUserData = localStorage?.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });
  const [resultados, setResultados] = useState([]);

  const getPreguntas = async () => {
    const { data } = await axios("http://localhost:4000/api/preguntas/viewAll");
    setPreguntas(data); // Establece las preguntas en el estado preguntas
    setDataUser(data);
  };

  const getFiles = async () => {
    const { data } = await axios("http://localhost:4000/api/files/getFiles");
    setArchivos(data);
  };

  const getResults = async () => {
    try {
      const { data } = await axios("http://localhost:4000/api/resultado/getAllResults");
      setResultados(data); // Establece los resultados en el estado resultados
    } catch (error) {
      console.error("Error al obtener los resultados:", error);
    }
  };

  useEffect(() => {
    getPreguntas();
    getFiles();
    getResults(); // Llama a la función para obtener los resultados al montar el componente
    
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, preguntas, getPreguntas, dataUser, archivos, resultados }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
