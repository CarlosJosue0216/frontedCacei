"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Dashboar() {
  const [showPreguntas, setSetshowPreguntas] = useState(false);
  const subMenu = () => {
    setSetshowPreguntas(!showPreguntas);
  };
  return (
    <div className=" bg-sky-100 p-4 h-screen">
      <h1 className="text-black text-2xl font-black">Administracion</h1>
      <div className="mt-10 flex flex-col justify-center  text-center">
        <div className="mb-2 p-5 text-xl font-bold bg-sky-200 rounded-lg w-full">
          <Link href="/admin/usuarios" className=" p-5 ">
            Usuarios
          </Link>
        </div>
        <div className="mb-2  text-xl font-bold bg-sky-200 rounded-lg w-full">
          <button onClick={subMenu} className="p-5">
            Preguntas
          </button>
        </div>
        {showPreguntas && (
          <div>
            <div className="mb-2 ms-3 py-5 text-xl font-bold bg-sky-200 rounded-lg w-full">
              <Link href="/admin/preguntas" className=" py-5 ">
                Añadir Preguntas
              </Link>
            </div>
            <div className="mb-2 ms-3 py-5 text-xl font-bold bg-sky-200 rounded-lg w-full">
              <Link href="/admin/preguntas/verTodas" className=" py-5 ">
                Todas las preguntas
              </Link>
            </div>
          </div>
        )}
        <div className="mb-2 p-5 text-xl font-bold bg-sky-200 rounded-lg w-full">
          <Link href="#" className=" p-5">
            Resultados
          </Link>
        </div>
        <div className="mb-2 p-5 text-xl font-bold bg-sky-200 rounded-lg w-full">
          <Link href="#" className=" p-5">
            Evidencias
          </Link>
        </div>
      </div>
    </div>
  );
}
