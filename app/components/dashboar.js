"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Dashboar() {
  const [showPreguntas, setSetshowPreguntas] = useState(false);
  const [showUsers, setSetshowUsers] = useState(false);
  const subMenu = () => {
    setSetshowPreguntas(!showPreguntas);
  };
  const subMenu2 = () => {
    setSetshowUsers(!showUsers);
  };
  return (
    <div className=" bg-sky-900 p-4 h-screen text-white">
      <h1 className="text-white text-2xl font-black">Administracion</h1>
      <div className="mt-10 flex flex-col justify-center  text-center">
        <div className="mb-2 p-2 text-xl font-bold hover:bg-sky-800 rounded-lg w-full">
          <button onClick={subMenu2} className="p-3">
            Usuarios
          </button>
        </div>
        {showUsers && (
          <div>
            <div className="mb-2 ms-3 py-5 text-xl font-bold hover:bg-sky-800 rounded-lg w-full">
              <Link href="/admin/usuarios" className=" p-5 ">
                Todos los usuarios
              </Link>
            </div>
            <div className="mb-2 ms-3 py-5 text-xl font-bold hover:bg-sky-800 rounded-lg w-full">
              <Link href="/admin/usuarios/agregar" className=" py-5 ">
                Agregar usuario
              </Link>
            </div>
          </div>
        )}

        <div className="mb-2  text-xl font-bold hover:bg-sky-800 rounded-lg w-full">
          <button onClick={subMenu} className="p-5">
            Preguntas
          </button>
        </div>
        {showPreguntas && (
          <div>
            <div className="mb-2 ms-3 py-5 text-xl font-bold hover:bg-sky-800 rounded-lg w-full">
              <Link href="/admin/preguntas" className=" py-5 ">
                Añadir Preguntas
              </Link>
            </div>
            <div className="mb-2 ms-3 py-5 text-xl font-bold hover:bg-sky-800 rounded-lg w-full">
              <Link href="/admin/preguntas/verTodas" className=" py-5 ">
                Todas las preguntas
              </Link>
            </div>
          </div>
        )}
        <div className="mb-2 p-5 text-xl font-bold hover:bg-sky-800 rounded-lg w-full">
          <Link href="/admin/resultados" className=" p-5">
            Resultados
          </Link>
        </div>
        <div className="mb-2 p-5 text-xl font-bold hover:bg-sky-800 rounded-lg w-full">
          <Link href="/admin/evidencias" className=" p-5">
            Evidencias
          </Link>
        </div>
      </div>
    </div>
  );
}
