"use client"
import { useUser } from "@/app/context/useContext";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
function formatearFecha(fechaEnviada) {
  const fecha = new Date(fechaEnviada);
  const fechaFormateada = `${String(fecha.getDate()).padStart(2, '0')}/${String(fecha.getMonth() + 1).padStart(2, '0')}/${fecha.getFullYear()}`;
  return fechaFormateada;
}
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
  {
    name: "Criterio",
    selector: (row) => row.criterio,
    sortable: true,
  },
  {
    name: "Fecha Enviada",
    selector: (row) => formatearFecha(row.Fecha_Enviada),
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
      backgroundColor: "#083344",
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
            striped={true}
            responsive
            paginationPerPage={10}
          />
        </div>
      )}
    </div>
  );
};

export default MostrarTodas;
