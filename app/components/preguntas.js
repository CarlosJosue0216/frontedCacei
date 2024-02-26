"use client";

import { useEffect, useState } from "react";
import { useUser } from "../context/useContext";

const PagePreguntas = () => {
    const { getPreguntas, dataUser } = useUser(); // Ajusta esto según tu contexto
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (!dataUser) {
            await getPreguntas();
          }
        } catch (error) {
          console.error("Error al obtener datos:", error);
        } finally {
          setLoading(false);
          setShow(true);
        }
      };
  
      fetchData();
    }, [dataUser, getPreguntas]);
  return (
   <>
    {loading ? <div>cargando...</div> : show && Array.isArray(dataUser) && (
         <form className="w-full mx-auto p-4 border rounded shadow-lg">
         {dataUser.map((pregunta) => (
           <div key={pregunta.id} className="mb-4 p-5 text-center">
             <h2 className="text-lg font-semibold mb-2">{pregunta.criterio + " .-" + pregunta.titulo}</h2>
             <div className="flex justify-center items-center ">

             {pregunta.respuestas.map((respuesta) => (
               <div key={respuesta.id} className="mx-2 p-3">
                 <input
                   type="radio"
                   id={`respuesta_${respuesta.id}`}
                   name={`pregunta_${pregunta.id}`}
                   value={respuesta.contenido}
                   className="mx-2"
                   />
                 <label htmlFor={`respuesta_${respuesta.id}`} className="cursor-pointer">
                   {respuesta.contenido}
                 </label>
               </div>
             ))}
             </div>
           </div>
         ))}
         <button
           type="submit"
           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
         >
           Enviar respuestas
         </button>
       </form>
    )}
   </>
  );
};

export default PagePreguntas;
