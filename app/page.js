"use client";
import Link from "next/link";
import PagePreguntas from "./components/preguntas";
import { Auth } from "./middlewares/auth";
import { useEffect, useState } from "react";
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
    path: "/criterio/2",
    subcriterios: [
      { id: 2.1, title: "Criterio 2.1.- Admisión", path: "/criterio/2.1" },
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
  {
    id: 3,
    title: "Criterio 3.- Plan de Estudios",
    path: "/criterio/3",
    subcriterios: [
      {
        id: 3.1,
        title: "Indicador 3.1.- Grupos de interés del PE",
        path: "/criterio/3.1",
      },
      {
        id: 3.2,
        title: "Indicador 3.2.- Pertinencia",
        path: "/criterio/3.2",
      },
      {
        id: 3.3,
        title: "Indicador 3.3.- Organización curricular",
        path: "/criterio/3.3",
      },
      {
        id: 3.4,
        title: "Indicador 3.4.- Congruencia entre los objetivos educacionales del PE y la misión de la institución",
        path: "/criterio/3.4",
      },
      {
        id: 3.5,
        title: "Indicador 3.5.- Atributos del egresado",
        path: "/criterio/3.5",
      },
      {
        id: 3.6,
        title: "Indicador 3.6.- Flexibilidad curricular",
        path: "/criterio/3.6",
      },
    ],
  },
  {
    id: 4,
    title: "Criterio 4.- Valoración y Mejora Continua",
    path: "/criterio/4",
    subcriterios: [
      {
        id: 4.1,
        title: "Indicador 4.1.- Evaluación de los objetivos educacionales del programa",
        path: "/criterio/4.1",
      },
      {
        id: 4.2,
        title: "Indicador 4.2.- Evaluación y logro de los atributos del egresado",
        path: "/criterio/4.2",
      },
      {
        id: 4.3,
        title: "Indicador 4.3.- Valoración de los índices de rendimiento escolar",
        path: "/criterio/4.3",
      },
      {
        id: 4.4,
        title: "Indicador 4.4.- Mejora continua",
        path: "/criterio/4.4",
      },
    ],
  },
  {
    id: 5,
    title: "Criterio 5.- Infraestructura y Equipamiento",
    path: "/criterio/5",
    subcriterios: [
      {
        id: 5.1,
        title: "Indicador 5.1.- Aulas, laboratorios, cubículos y oficinas de apoyo",
        path: "/criterio/5.1",
      },
      {
        id: 5.2,
        title: "Indicador 5.2.- Recursos informáticos",
        path: "/criterio/5.2",
      },
      {
        id: 5.3,
        title: "Indicador 5.3.- Centro de información",
        path: "/criterio/5.3",
      },
      {
        id: 5.4,
        title: "Indicador 5.4.- Manuales de uso y seguridad",
        path: "/criterio/5.4",
      },
      {
        id: 5.5,
        title: "Indicador 5.5.- Mantenimiento, modernización y actualización",
        path: "/criterio/5.5",
      },
    ],
  },
  {
    id: 6,
    title: "Criterio 6.- Soporte Institucional",
    path: "/criterio/6",
    subcriterios: [
      {
        id: 6.1,
        title: "Indicador 6.1.- Liderazgo institucional",
        path: "/criterio/6.1",
      },
      {
        id: 6.2,
        title: "Indicador 6.2.- Servicios institucionales",
        path: "/criterio/6.2",
      },
      {
        id: 6.3,
        title: "Indicador 6.3.- Recursos financieros",
        path: "/criterio/6.3",
      },
      {
        id: 6.4,
        title: "Indicador 6.4.- Personal de apoyo",
        path: "/criterio/6.4",
      },
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
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const { user } = useUser();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) {
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
        setShow(true);
      }
    };

    fetchData();
  }, [user]);

  const criterioUser = user?.criterio;
  const rolUser = user?.rol;
  console.log(criterioUser);
  console.log(rolUser);
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
      Criterios e indicadores para programas de ingeniería.
      </h1>
      {loading ? (
        <div>cargando...</div>
      ) : rolUser != 0 ? (
        <div className="p-5 bg-white rounded-lg shadow-md my-5 ">
          <div className="p-5">
            {criteriosData.map((criterio) =>
              (criterio?.id == +criterioUser) & (rolUser != 0) ? (
                <div key={criterio.id} className="p-2">
                  <h1
                    className="font-bold text-2xl hover:cursor-pointer flex items-center gap-10"
                    onClick={() => handleCriterio(criterio.id)}
                  >
                    {criterio.title}
                    <svg
                      className={`w-6 h-6 text-gray-800 dark:text-white ${
                        criteriosState[criterio.id]
                          ? "transform rotate-180"
                          : ""
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
                ""
              )
            )}
          </div>
        </div>
      ) : (
        <div className="p-5 bg-white rounded-lg shadow-md my-5 ">
          <div className="p-5">
            {criteriosData.map((criterio) =>
              
                <div key={criterio.id} className="p-2">
                  <h1
                    className="font-bold text-2xl hover:cursor-pointer flex items-center gap-10"
                    onClick={() => handleCriterio(criterio.id)}
                  >
                    {criterio.title}
                    <svg
                      className={`w-6 h-6 text-gray-800 dark:text-white ${
                        criteriosState[criterio.id]
                          ? "transform rotate-180"
                          : ""
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
            }
          </div>
        </div>
      )}
    </main>
  );
}
