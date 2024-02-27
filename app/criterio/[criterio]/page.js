"use client";

import { useUser } from "@/app/context/useContext";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const { criterio } = params;
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
  // Filtrar las preguntas que comienzan con el criterio deseado
  const preguntasFiltradas = loading
    ? []
    : show &&
      Array.isArray(dataUser) &&
      dataUser.filter((pregunta) => pregunta?.criterio.startsWith(criterio));
  console.log(preguntasFiltradas);

  return (
    <>
      {loading ? (
        <div>cargando...</div>
      ) : (
        show &&
        Array.isArray(preguntasFiltradas) && (
          <form className="w-3/4  mx-auto p-4 border rounded shadow-lg flex flex-col items-center justify-center">
            {preguntasFiltradas.map((pregunta) => (
              <div key={pregunta.id} className="mb-4 p-5 text-center flex items-center justify-center w-full ">
                <div className="w-3/4 p-3 border-r-2">
                  <h2 className="text-lg font-semibold mb-2">
                    {pregunta.criterio + " .-" + pregunta.titulo}
                  </h2>
                  <div className="flex justify-center items-center ">
                    {pregunta.respuestas.map((respuesta) => (
                      <div key={respuesta.id} className="flex items-center mx-2 p-2">
                        <input
                          type="radio"
                          id={`respuesta_${respuesta.id}`}
                          name={`pregunta_${pregunta.id}`}
                          value={respuesta.contenido}
                          className="mx-2"
                        />
                        <label
                          htmlFor={`respuesta_${respuesta.id}`}
                          className="cursor-pointer"
                        >
                          {respuesta.contenido}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/4 flex flex-col p-3">
                  <label for="myfile">Subir evidencia:</label>
                  <input type="file" id="myfile" name="myfile" />
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Guardar respuestas
            </button>
          </form>
        )
      )}
    </>
  );
}
