"use client"
import { useUser } from "@/app/context/useContext";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
const colums = [
  {
    name: "Id Usuarios",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Criterio Asignado",
    selector: (row) => row.criterio,
    sortable: true,
  },
  {
    name: "Rol usuario",
    selector: (row) => row.rol,
    sortable: true,
  },
];
const Usuarios = () => {
  const { getUsers, allUsers } = useUser(); // Ajusta esto según tu contexto
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!allUsers) {
          await getUsers();
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
        setShow(true);
      }
    };

    fetchData();
  }, [allUsers, getUsers]);
  console.log(allUsers.data)
  return (
    <div>
      {loading ? (
        <div>cargando...</div>
      ) : (
        show &&
        Array.isArray(allUsers.data) && (
          <div className=" mx-auto w-full ">
            <DataTable
            className=" mx-auto w-full rounded-lg p-5"
              
              columns={colums}
              data={allUsers.data}
              pagination
              responsive
              paginationPerPage={10}
            />
          </div>
        )
      )}
    </div>
  )
}

export default Usuarios