import Link from "next/link";
import React from "react";

export default function Dashboar() {
  return (
    <div className="w-1/4 bg-gray-200 p-4 h-screen">
      <h1 className="text-black text-2xl font-black">Administracion</h1>
      <ul className="mt-10 flex flex-col justify-center ">
        <li className="mb-2 p-5 text-xl font-bold bg-gray-300  rounded-lg">
          <Link href="/admin/usuarios" className=" p-5">
            Usuarios
          </Link>
        </li>
        <li className="mb-2 p-5 text-xl font-bold bg-gray-300 rounded-lg">
          <Link href="/admin/preguntas" className=" p-5">
            Preguntas
          </Link>
        </li>
        <li className="mb-2 p-5 text-xl font-bold bg-gray-300 rounded-lg">
          <Link href="#" className=" p-5">
            Resultados
          </Link>
        </li>
        <li className="mb-2 p-5 text-xl font-bold bg-gray-300 rounded-lg">
          <Link href="#" className=" p-5">
            Evidencias
          </Link>
        </li>
      </ul>
    </div>
  );
}
