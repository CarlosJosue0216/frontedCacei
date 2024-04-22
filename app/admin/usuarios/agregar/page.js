"use client";
import Banner from "@/app/components/banner";
import axios from "axios";
import { useState } from "react";

const AgregarUsuarios = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState(null);
  const [criterio, setCriterio] = useState(null);
  const [rol, setRol] = useState(null);
  const [alerta, setAlerta] = useState(false);
  const [message, setMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if ([nombre, password, criterio, rol].includes("")) {
      setAlerta(true);
      setMessage({
        msg: "Todos los campos son obligatorios",
        typeAlert: false,
      });
    } else {
      try {
        const url = `${process.env.NEXT_PUBLIC_Backend_URL}api/usuarios/register`;
        const { data } = await axios.post(url, {
          nombre,
          password,
          rol,
          criterio,
        });
        setMessage({
          msg: data.msg,
          typeAlert: true,
        });
        setAlerta(true);
      } catch (error) {
        setAlerta(true);
        setMessage({
          msg: error?.response.data.msg,
          error: false,
        });
      }
    }
    setNombre("")
    setPassword(null)
    setRol(null)
    setCriterio(null)
    setTimeout(() => {
      setAlerta(false)
      setMessage({})
    }, 4000);
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-black ">Añadir nuevo usuario</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Nombre de usuario
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-wrap text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pass"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-wrap text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pass"
            type="number"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Contraseña (numero de control)"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="criterio"
          >
            Criterio asignado
          </label>
          <select
            id="criterio"
            className="w-full bg-slate-100 rounded border"
            onChange={(e) => setCriterio(e.target.value)}
            value={criterio}
          >
            <option value="1" key="tipo1">
              1
            </option>
            <option value="2" key="tipo2">
              2
            </option>
            <option value="3" key="tipo3">
              3
            </option>
            <option value="4" key="tipo4">
              4
            </option>
            <option value="5" key="tipo5">
              5
            </option>
            <option value="6" key="tipo6">
              6
            </option>
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rol"
          >
            Rol
          </label>
          <select
            id="rol"
            className="w-full bg-slate-100 rounded border"
            onChange={(e) => setRol(e.target.value)}
            value={rol}
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

        <div className="flex items-center justify-between">
          <button
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default AgregarUsuarios;
