"use client";

import Banner from "@/app/components/banner";
import { useUser } from "@/app/context/useContext";
import axios from "axios";

import { useEffect, useState } from "react";

export default function Page({ params }) {
  const { criterio } = params;
  const { getPreguntas, dataUser, user } = useUser();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState({});
  const [evidenciaFile, setEvidenciaFile] = useState(null);
  const [valoracion, setValoracion] = useState("");
  const [respuestasFormulario, setRespuestasFormulario] = useState({});
  const idUsuario = user.id;
  const [formReset, setFormReset] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [message, setMessage] = useState(null);
  const resetForm = () => {
    setFormReset(true);
    setRespuestasSeleccionadas({});
    setEvidenciaFile(null);
    setValoracion("");
    setRespuestasFormulario({});
  };
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

  const handleRespuestaChange = (preguntaId, contenido) => {
    setRespuestasSeleccionadas({
      ...respuestasSeleccionadas,
      [preguntaId]: { contenido, idUsuario },
    });
  };

  const handleFileChange = (preguntaId, file) => {
    setEvidenciaFile(file);

    setRespuestasFormulario({
      ...respuestasFormulario,
      [preguntaId]: {
        idUsuario,
        respuesta: respuestasSeleccionadas[preguntaId],
        evidenciaFile: file,
      },
    });
  };
  console.log(respuestasFormulario);
  console.log(respuestasSeleccionadas);
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const clave in respuestasFormulario) {
      console.log("Iteración para clave:", clave);

      const elemento = respuestasFormulario[clave];

      try {
        const response = await axios.post(
          "http://localhost:4000/api/files/upload",
          {
            archivoFront: elemento.evidenciaFile,
            idUsuario: elemento.idUsuario,
            idPregunta: clave,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data.resultado);
        setMessage({
          msg: response?.data.resultado,
          typeAlert: true,
        });
        setAlerta(true);
      } catch (error) {
        console.error("Error al enviar las respuestas al backend:", error);
      }
    }
    for (const clave in respuestasSeleccionadas) {
      const elemento = respuestasSeleccionadas[clave];
      console.log(elemento);
      try {
        const response = await axios.post(
          "http://localhost:4000/api/resultado/addResult",
          {
            idUsuario: elemento.idUsuario,
            idPregunta: clave,
            idRespuesta: elemento.contenido,
          }
        );
        console.log("Respuesta del servidor:", response);
        setMessage({
          msg: response?.data.msg,
          typeAlert: true,
        });
        setAlerta(true);
      } catch (error) {
        console.log("Error en la solicitud:", error);
      }
    }
    resetForm();

    // Resto del código para procesar los datos del formulario
  };

  const preguntasFiltradas = loading
    ? []
    : show &&
      Array.isArray(dataUser) &&
      dataUser.filter((pregunta) => pregunta?.criterio.startsWith(criterio));

  return (
    <>
      {loading ? (
        <div>cargando...</div>
      ) : (
        show &&
        Array.isArray(preguntasFiltradas) && (
          <form
            className="w-3/4 mx-auto p-4 border rounded shadow-lg flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            key={formReset}
          >
            {preguntasFiltradas.map((pregunta) => (
              <div
                key={pregunta.id}
                className="mb-4 p-5 text-center flex items-center justify-center w-full "
              >
                <div
                  className={`w-3/4 p-3 ${
                    pregunta.tipo === 0 ? "border-r-2" : "w-full"
                  } `}
                >
                  <h2 className="text-lg font-semibold mb-2">
                    {pregunta.criterio + " .-" + pregunta.titulo}
                  </h2>
                  <div className="flex justify-center items-center ">
                    {pregunta.respuestas.map((respuesta) => (
                      <div
                        key={respuesta.id}
                        className="flex items-center mx-2 p-2"
                      >
                        <input
                          type="radio"
                          id={`respuesta_${respuesta.id}`}
                          name={`pregunta_${pregunta.id}`}
                          value={respuesta.contenido}
                          className="mx-2"
                          onChange={() =>
                            handleRespuestaChange(pregunta.id, respuesta.id)
                          }
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
                {pregunta.tipo === 0 ? (
                  <div className="w-1/4 flex flex-col p-3">
                    <label htmlFor="files">Subir evidencia:</label>
                    <input
                      type="file"
                      id="files"
                      name="files"
                      onChange={(e) =>
                        handleFileChange(pregunta.id, e.target.files[0])
                      }
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
            <div className="flex flex-col p-3 justify-center items-center">
              <label>Valoracion argumentativa</label>
              <textarea
                cols="40"
                rows="5"
                value={valoracion}
                onChange={(e) => setValoracion(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Guardar respuestas
            </button>
            {alerta && <Banner alerta={message} />}
          </form>
        )
      )}
    </>
  );
}
