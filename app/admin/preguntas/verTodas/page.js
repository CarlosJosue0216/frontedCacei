"use client";
import { useUser } from "@/app/context/useContext";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
const colums = [
    {
		name: 'id',
		selector: row => row.id,
	},
	{
		name: 'titulo',
		selector: row => row.titulo,
	},
    {
		name: 'criterio',
		selector: row => row.criterio,
	},
    
]
const MostrarTodas = () => {
  const { preguntas, getPreguntas } = useUser(); // Ajusta esto según tu contexto
  console.log(preguntas);
  
  useEffect(() => {
    // Llamar a la función para obtener las preguntas cuando se monta el componente
    getPreguntas();
  }, [getPreguntas]);
	if (!preguntas) {
	  return <div>cargando...</div>;
	}
	console.log(preguntas);

  return (
    <div>
      
    </div>
  );
};

export default MostrarTodas;
