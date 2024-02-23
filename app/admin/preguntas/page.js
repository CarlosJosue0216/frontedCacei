"use client";

import Banner from "@/app/components/banner";
import axios from "axios";
import { useState } from "react";

const PreguntasPage = () => {
  const [pregunta, setPregunta] = useState("");
  const [criterio, setCriterio] = useState("");
  const [respuestas, setRespuestas] = useState([])
  const [tipo, setTipo] = useState(0);
  const [alerta, setAlerta] = useState(false);
  const [message, setMessage] = useState(null);
  const guardarPreguntaYRespuestas = async (e) => {
    e.preventDefault();
    if([pregunta,criterio,respuestas,tipo].includes("") ){
        setMessage({
            msg:"Todos los campos son obligatorios",
            typeAlert:false
        })
        return
    }
    try {
        const url = `http://localhost:4000/api/preguntas/addQuestionAndAnswers`
        const {data} = await axios.post(url, {titulo:pregunta,criterio,tipo,respuestas})
        console.log(data)
        setMessage({
            msg: data.msg,
            typeAlert:true
          })
          setAlerta(true)
          
      } catch (error) {
        console.log(error)
        setAlerta(true)
        setMessage({
          msg: error.response.data.msg,
          error:false
        })
      }
      
    setPregunta("")
    setCriterio("")
    setTipo(0)
    setRespuestas([])
    setTimeout(() => {
      setAlerta(false)
      setMessage({})
    }, 4000);
    // Aquí puedes guardar la pregunta y las respuestas donde sea necesario,
    // por ejemplo, en una base de datos, en el localStorage, o en un estado
    // más global de la aplicación.

};
  const agregarRespuesta = () => {
    setRespuestas([...respuestas, '']);
};

const actualizarRespuesta = (index, texto) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = {contenido:texto};
    setRespuestas(nuevasRespuestas);
};

const eliminarRespuesta = (index) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas.splice(index, 1);
    setRespuestas(nuevasRespuestas);
};

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4"
        onSubmit={guardarPreguntaYRespuestas}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pregunta"
          >
            Titulo pregunta
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-wrap text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pregunta"
            type="text"
            onChange={(e) => setPregunta(e.target.value)}
            value={pregunta}
            placeholder="Titulo pregunta"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="criterio"
          >
            Criterio
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="criterio"
            type="text"
            onChange={(e) => setCriterio(e.target.value)}
            value={criterio}
            placeholder="Criterio"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tipo"
          >
            Tipo
          </label>
          <select
            id="tipo"
            className="w-full bg-slate-100 rounded border"
            onChange={(e) => setTipo(e.target.value)}
            value={tipo}
          >
            <option value="0" key="tipo1">
              0
            </option>
            <option value="1" key="tipo2">
              1
            </option>
            <option value="2" key="tipo3">
              2
            </option>
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="respuestas"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Respuestas
          </label>
          {respuestas.map((respuesta, index) => (
            <div key={index} className="">
              <input
                type="text"
                id="respuestas"
                onChange={(e) => actualizarRespuesta(index, e.target.value)}
                className="w-10/12 mt-3 p-3 border rounded-xl bg-gray-50"
              />
              <button
                onClick={() => eliminarRespuesta(index)}
                className="w-2/12 rounded-xl bg-red-500 p-3 font-bold"
              >
                Eliminar
              </button>
            </div>
          ))}

          <button
            onClick={agregarRespuesta}
            type="button"
            className="p-3 m-3 bg-indigo-600  text-white  font-bold rounded-lg hover:cursor-pointer hover:bg-indigo-700 transition-colors"
          >
            Agregar Respuesta
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
        {alerta && <Banner alerta={message} />}
      </form>
    </div>
  );
};

export default PreguntasPage;
