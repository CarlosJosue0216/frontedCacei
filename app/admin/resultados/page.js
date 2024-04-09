"use client"
import { useUser } from "@/app/context/useContext";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
  
  
  {
    name: "Título de Pregunta",
    selector: (row) => row.titulo_pregunta,
    sortable: true,
  },
  
  {
    name: "Contenido de Respuesta",
    selector: (row) => row.contenido_respuesta,
    sortable: true,
  },
  {
    name: "Nombre de Usuario",
    selector: (row) => row.nombre_usuario,
    sortable: true,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      textTransform: "capitalize",
      backgroundColor: "blue",
      color: "white",
      fontWeight: "700",
      fontSize: "1rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const MostrarTodas = () => {
  const { resultados } = useUser(); // Ajusta esto según tu contexto
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="mx-auto w-full">
          <DataTable
            className="mx-auto w-full rounded-lg p-5"
            customStyles={customStyles}
            columns={columns}
            data={resultados}
            pagination
            responsive
            paginationPerPage={10}
          />
        </div>
      )}
    </div>
  );
};

export default MostrarTodas;
