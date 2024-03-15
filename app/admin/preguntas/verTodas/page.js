"use client";
import { useUser } from "@/app/context/useContext";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
const colums = [
  {
    name: "id",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "titulo",
    selector: (row) => row.titulo,
    sortable: true,
  },
  {
    name: "criterio",
    selector: (row) => row.criterio,
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
      {loading ? (
        <div>cargando...</div>
      ) : (
        show &&
        Array.isArray(dataUser) && (
          <div className=" mx-auto w-full ">
            <DataTable
            className=" mx-auto w-full rounded-lg p-5"
              customStyles={customStyles}
              columns={colums}
              data={dataUser}
              pagination
              responsive
              paginationPerPage={10}
            />
          </div>
        )
      )}
    </div>
  );
};

export default MostrarTodas;
