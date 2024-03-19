"use client";
import { useUser } from "@/app/context/useContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Evidencias = () => {
  const { getFiles, archivos } = useUser(); // Ajusta esto según tu contexto
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!archivos) {
          await getFiles();
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
        setShow(true);
      }
    };

    fetchData();
    console.log(archivos);
  }, [archivos, getFiles]);
  return (
    <div className="w-full  justify-center items-center p-5">
      <h1 className="text-3xl font-black ">
        Aquí se muestran todas las evidencias almacenadas
      </h1>
      <div>
        {loading ? (
          <div>cargando...</div>
        ) : (
          show &&
          Array.isArray(archivos) && (
            <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Archivos:</h1>
            <div className="grid grid-cols-1 gap-4">
              {archivos.map(archivo => (
                <div key={archivo.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <Link className="text-lg font-semibold hover:cursor-pointer hover:text-blue-500" target="_blank" href={`http://localhost:4000/uploads/${archivo.originalname}`}>
                    {archivo.filename}
                  </Link>
                  <p>Originalname: {archivo.originalname}</p>
                  <p>Mimetype: {archivo.mimetype}</p>
                  <p>Size: {archivo.size}</p>
                  <p>ID Usuario: {archivo.idUsuario}</p>
                  <p>ID Pregunta: {archivo.idPregunta}</p>
                  <p>Created at: {archivo.created_at}</p>
                </div>
              ))}
            </div>
          </div>
          )
        )}
      </div>
    </div>
  );
};

export default Evidencias;
