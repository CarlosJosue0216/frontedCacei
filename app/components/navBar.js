"use client"
import React, { useEffect, useState } from "react";
import logotec from "../../public/logotec.png";
import Image from "next/image";
import CerrarSesion from "./cerrarSesion";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();
  const [showNav, setshowNav] = useState(true);

  useEffect(() => {
    // Actualiza el estado solo si la ruta no es "/"
    if (path == "/login" || path.startsWith("/admin")) {
      setshowNav(false);
    } else {
      setshowNav(true);
    }
  }, [path]);
  return (
    <>
      {showNav && (
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center justify-center">
                  <Image
                    className="h-12 w-auto filter grayscale"
                    src={logotec}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="/"
                      className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      Inicio
                    </a>
                  </div>
                </div>
              </div>
              <CerrarSesion />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
