"use client";
import React from "react";
import { useUser } from "../context/useContext";

const admin = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Titulo pregunta
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
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
          <select id="tipo" className="w-full bg-slate-100 rounded border">
            <option value="0" key="tipo1">0</option>
            <option value="1" key="tipo2">1</option>
            <option value="2" key="tipo3">2</option>
          </select>
          
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Enviar
          </button>
          
        </div>
      </form>
     
    </div>
  );
};

export default admin;
