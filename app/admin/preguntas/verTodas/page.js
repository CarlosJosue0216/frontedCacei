"use client";
import { useUser } from "@/app/context/useContext";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
const colums = [
  {
    name: "id",
    selector: (row) => row.id,
  },
  {
    name: "titulo",
    selector: (row) => row.titulo,
  },
  {
    name: "criterio",
    selector: (row) => row.criterio,
  },
];
const MostrarTodas = () => {
  const { getPreguntas, dataUser } = useUser(); // Ajusta esto según tu contexto
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!dataUser) {
          await getPreguntas();
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
        setShow(true);
      }
    };

    fetchData();
  }, [dataUser, getPreguntas]);

  return (
    <div>
      {loading ? <div>cargando...</div> : show && Array.isArray(dataUser) && <DataTable columns={colums} data={dataUser} />}

    </div>
  );
};

export default MostrarTodas;
