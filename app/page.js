"use client";
import Link from "next/link";
import PagePreguntas from "./components/preguntas";
import { Auth } from "./middlewares/auth";
import { useState } from "react";
import { useUser } from "./context/useContext";
const criteriosData = [
  {
    id: 1,
    title: "Criterio 1.- Personal academico",
    path: "/criterio/1",
    subcriterios: [
      {
        id: 1.1,
        title: "Criterio 1.1.- Perfil del personal académico",
        path: "/criterio/1.1",
      },
      {
        id: 1.2,
        title: "Criterio 1.2.- Suficiencia de la planta académica",
        path: "/criterio/1.2",
      },
      {
        id: 1.3,
        title: "Criterio 1.3.- Distribución de las actividades sustantivas",
        path: "/criterio/1.3",
      },
      {
        id: 1.4,
        title: "Criterio 1.4.- Evaluación y desarrollo del personal académico",
        path: "/criterio/1.4",
      },
      {
        id: 1.5,
        title:
          "Criterio 1.5.- Responsabilidad del personal académico con el plan de estudio",
        path: "/criterio/1.5",
      },
      {
        id: 1.6,
        title:
          "Criterio 1.6.- Selección, permanencia y retención del personal académico",
        path: "/criterio/1.6",
      },
    ],
  },
  {
    id: 2,
    title: "Criterio 2.- Estudiantes",
    path: "/criterio/1",
    subcriterios: [
      { id: 2.1, title: "Criterio 1.1.- Admisión", path: "/criterio/2.1" },
      {
        id: 2.2,
        title:
          "Criterio 2.2.- Revalidación, equivalencia, y reconocimiento de otros estudios",
        path: "/criterio/2.2",
      },
      {
        id: 2.3,
        title: "Criterio 2.3.- Trayectoria escolar",
        path: "/criterio/2.3",
      },
      {
        id: 2.4,
        title: "Criterio 2.4.- Asesoría y tutoría",
        path: "/criterio/2.4",
      },
      { id: 2.5, title: "Criterio 2.5.- Titulación", path: "/criterio/2.5" },
    ],
  },
];
export default function Home() {
  const [criteriosState, setCriteriosState] = useState(
    criteriosData.reduce(
      (acc, criterio) => ({ ...acc, [criterio.id]: false }),
      {}
    )
  );
  const { user } = useUser();
  const criterioUser = user?.criterio;
  console.log(criterioUser);
  const handleCriterio = (criterioId) => {
    setCriteriosState((prevState) => ({
      ...prevState,
      [criterioId]: !prevState[criterioId],
    }));
  };

  Auth();
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-gray-100 p-24">
      <h1 className="text-5xl font-black p-5 my-5">
        Criterios e indicadores para programas de ingenieria
      </h1>
      <div className="p-5 bg-white rounded-lg shadow-md my-5 ">
        <div className="p-5">
          {criteriosData.map((criterio) =>
            criterio.id == criterioUser ? (
              <div key={criterio.id} className="p-2">
                <h1
                  className="font-bold text-2xl hover:cursor-pointer flex items-center gap-10"
                  onClick={() => handleCriterio(criterio.id)}
                >
                  {criterio.title}
                  <svg
                    className={`w-6 h-6 text-gray-800 dark:text-white ${
                      criteriosState[criterio.id] ? "transform rotate-180" : ""
                    }`}
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
                {criteriosState[criterio.id] && (
                  <div>
                    {criterio.subcriterios.map((subcriterio) => (
                      <div key={subcriterio.id} className="p-2">
                        <Link
                          className="font-semibold ms-3 justify-between flex"
                          href={subcriterio.path}
                        >
                          {subcriterio.title}
                          <svg
                            className="w-6 h-6 text-gray-800 dark:text-white mx-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 0 0-.8 1.6L6.6 12l-4.4 6.4A1 1 0 0 0 3 20h13.2c.3 0 .6-.2.8-.4l4.8-7a1 1 0 0 0 0-1.2l-4.8-7a1 1 0 0 0-.8-.4H3Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={criterio.id} className="p-2">
                <h1
                  className="font-bold text-2xl hover:cursor-pointer flex items-center gap-10"
                  onClick={() => handleCriterio(criterio.id)}
                >
                  {criterio.title}
                  <svg
                    className={`w-6 h-6 text-gray-800 dark:text-white ${
                      criteriosState[criterio.id] ? "transform rotate-180" : ""
                    }`}
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
                {criteriosState[criterio.id] && (
                  <div>
                    {criterio.subcriterios.map((subcriterio) => (
                      <div key={subcriterio.id} className="p-2">
                        <Link
                          className="font-semibold ms-3 justify-between flex"
                          href={subcriterio.path}
                        >
                          {subcriterio.title}
                          <svg
                            className="w-6 h-6 text-gray-800 dark:text-white mx-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 0 0-.8 1.6L6.6 12l-4.4 6.4A1 1 0 0 0 3 20h13.2c.3 0 .6-.2.8-.4l4.8-7a1 1 0 0 0 0-1.2l-4.8-7a1 1 0 0 0-.8-.4H3Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
