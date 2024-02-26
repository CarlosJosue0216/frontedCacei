"use client";
import Link from "next/link";
import PagePreguntas from "./components/preguntas";
import { Auth } from "./middlewares/auth";

export default function Home() {
  Auth();
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <div className="p-5">
        <h1 className="text-5xl font-black">
          Criterios e indicadores para programas de ingenieria
        </h1>
        <div className="p-5">
          <h1>Criterio 1.- Personal academico</h1>
          <div>
            <Link href={"/criterio/1.1"}>
              Criterio 1.1.- Perfil del personal académico
            </Link>
          </div>
          <div>
            <Link href={"/criterio/1.2"}>
              Criterio 1.2.- Suficiencia de la planta académica
            </Link>
          </div>
          <div>
          <Link href={"/criterio/1.3"}>Criterio 1.3.- Distribución de las actividades sustantivas </Link> 
          
          </div>
          <div>
          <Link href={"/criterio/1.4"}>Criterio 1.4.- Evaluación y desarrollo del personal académico</Link>
          </div>
          <div>
           
          <Link href={"/criterio/1.5"}>Criterio 1.5.- Responsabilidad del personal académico con el plan de estudio</Link> 
          </div>
          <div>
          
          <Link href={"/criterio/1.6"}>Criterio 1.6.- Selección, permanencia y retencion del personal académico </Link> 
          </div>
        </div>
        <div className="p-5">
          <h1>Criterio 2.- Estudiantes</h1>
        </div>
      </div>
    </main>
  );
}
