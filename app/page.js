"use client";
import Link from "next/link";
import PagePreguntas from "./components/preguntas";
import { Auth } from "./middlewares/auth";
import { useState } from "react";

export default function Home() {
  const [criterio1, setCriterio1] = useState(false);
  const handleCriterio = () => {
    setCriterio1(!criterio1);
  };

  Auth();
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-gray-100 p-24">
      <h1 className="text-5xl font-black p-5 my-5">
        Criterios e indicadores para programas de ingenieria
      </h1>
      <div className="p-5 bg-white rounded-lg shadow-md my-5 ">
        <div className="p-5">
          <h1
            className="font-bold text-2xl hover:cursor-pointer flex items-center gap-10"
            onClick={handleCriterio}
          >
            Criterio 1.- Personal academico
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m8 7 4 4 4-4m-8 6 4 4 4-4"
              />
            </svg>
          </h1>
          {criterio1 && (
            <div>
              <div className="p-2">
                <Link
                  className="font-semibold ms-3 flex justify-between"
                  href={"/criterio/1.1"}
                >
                  Criterio 1.1.- Perfil del personal académico
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white mx-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 0 0-.8 1.6L6.6 12l-4.4 6.4A1 1 0 0 0 3 20h13.2c.3 0 .6-.2.8-.4l4.8-7a1 1 0 0 0 0-1.2l-4.8-7a1 1 0 0 0-.8-.4H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="p-2">
                <Link
                  className="font-semibold ms-3 justify-between flex"
                  href={"/criterio/1.2"}
                >
                  Criterio 1.2.- Suficiencia de la planta académica
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white mx-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 0 0-.8 1.6L6.6 12l-4.4 6.4A1 1 0 0 0 3 20h13.2c.3 0 .6-.2.8-.4l4.8-7a1 1 0 0 0 0-1.2l-4.8-7a1 1 0 0 0-.8-.4H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="p-2">
                <Link
                  className="font-semibold ms-3 justify-between flex"
                  href={"/criterio/1.3"}
                >
                  Criterio 1.3.- Distribución de las actividades sustantivas{" "}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white mx-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 0 0-.8 1.6L6.6 12l-4.4 6.4A1 1 0 0 0 3 20h13.2c.3 0 .6-.2.8-.4l4.8-7a1 1 0 0 0 0-1.2l-4.8-7a1 1 0 0 0-.8-.4H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="p-2">
                <Link
                  className="font-semibold ms-3 justify-between flex"
                  href={"/criterio/1.4"}
                >
                  Criterio 1.4.- Evaluación y desarrollo del personal académico
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white mx-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 0 0-.8 1.6L6.6 12l-4.4 6.4A1 1 0 0 0 3 20h13.2c.3 0 .6-.2.8-.4l4.8-7a1 1 0 0 0 0-1.2l-4.8-7a1 1 0 0 0-.8-.4H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="p-2">
                <Link
                  className="font-semibold ms-3 justify-between flex"
                  href={"/criterio/1.5"}
                >
                  Criterio 1.5.- Responsabilidad del personal académico con el
                  plan de estudio
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white mx-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 0 0-.8 1.6L6.6 12l-4.4 6.4A1 1 0 0 0 3 20h13.2c.3 0 .6-.2.8-.4l4.8-7a1 1 0 0 0 0-1.2l-4.8-7a1 1 0 0 0-.8-.4H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="p-2">
                <Link
                  className="font-semibold ms-3 justify-between flex"
                  href={"/criterio/1.6"}
                >
                  Criterio 1.6.- Selección, permanencia y retencion del personal
                  académico{" "}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white mx-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 0 0-.8 1.6L6.6 12l-4.4 6.4A1 1 0 0 0 3 20h13.2c.3 0 .6-.2.8-.4l4.8-7a1 1 0 0 0 0-1.2l-4.8-7a1 1 0 0 0-.8-.4H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="p-5">
          <h1>Criterio 2.- Estudiantes</h1>
        </div>
      </div>
    </main>
  );
}
