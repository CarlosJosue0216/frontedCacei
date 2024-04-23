"use client";
import React from "react";

const CerrarSesion = () => {
  const handleCerrar = () => {
    if (typeof window !== "undefined") {
      // Tu código que utiliza localStorage aquí
      localStorage.removeItem("userData");
      window.location.href = "/login";
    }

  }
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="relative ml-3">
        <div>
          <button
            type="button"
            className="relative flex rounded-full text-white font-black hover:bg-gray-700 p-2  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            onClick={handleCerrar}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default CerrarSesion;
