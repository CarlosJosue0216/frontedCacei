"use client";
import Image from "next/image";
import React, { useState } from "react";
import logotec from "../../public/logotec.png";
import cacei from "../../public/cacei.png";
import { login, userLoged } from "../middlewares/actions";
import Banner from "../components/banner";
import { useRouter } from "next/navigation";
import { useUser } from "../context/useContext";
import { Auth } from "../middlewares/auth";
import axios from "axios";

const page = () => {
  Auth()
  const { user, setUser } = useUser();
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [numControl, setNumControl] = useState("");
  const [alerta, setAlerta] = useState([]);
  const [show, setShow] = useState(false);

  const formLogin = async (e) => {
    e.preventDefault();
    
    const rawFormData = {
      nombre: nombre,
      numControl: numControl,
    };
    try {
      await login(rawFormData)
        .then((result) => {
          setAlerta(result);
          setShow(true);
          if (result.msg == "Login exitoso") {
            userLoged(rawFormData.nombre)
              .then((result) => {
                setUser(result);
                if (typeof window !== "undefined") {
                  // Tu código que utiliza localStorage aquí
                  localStorage.setItem("userData", JSON.stringify(result));
                }

                router.push("/admin");
                
              })
              .catch((err) => {
              });
            setShow(false);
          }
        })
        .catch((err) => {
        });
    } catch (error) {
      setShow(false);
      setNombre("");
      setNumControl("");
    }
  };

  return (
    <div className="flex bg-slate-100">
      <div className=" w-3/5 ">
        <div className="h-1/6 flex items-center justify-center">
          <Image src={logotec} width={150} height={150} alt="logo tec" />
          <h1 className="font-bold text-2xl">
            Proyecto realizado por el Tecnologico de Minatitlan
          </h1>
        </div>
        <div className="px-10 mx-5 rounded-xl bg-white h-5/6">
          <h1 className="text-7xl text-center font-black p-5">
            Sistema de evidencias CACEI
          </h1>
          <h2 className="text-2xl text-center font-bold mt-10 ">
            Inicio de sesion
          </h2>
          <form className="p-5" onSubmit={formLogin}>
            <div className="flex flex-col p-3">
              <label className="text-xl py-3 font-bold">Usuario</label>
              <input
                type="text"
                placeholder="Ingrese su usuario"
                name="nombre"
                className="p-3 border border-indigo-500 border-1 rounded-lg"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="flex flex-col p-3">
              <label className="text-xl py-3 font-bold">Contraseña</label>
              <input
                type="text"
                name="numControl"
                placeholder="Ingrese su contraseña"
                className="p-3 border border-indigo-500 border-1 rounded-lg"
                onChange={(e) => setNumControl(e.target.value)}
              />
            </div>
            {show && <Banner alerta={alerta} />}
            <div className="flex justify-center items-center my-5">
              <input
                type="submit"
                value={"Iniciar Sesion"}
                className="p-3 bg-indigo-800 text-white font-bold rounded-lg w-full hover:cursor-pointer hover:bg-indigo-600"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-indigo-900 to-indigo-200 w-2/5 h-screen flex justify-center items-center">
        <Image src={cacei} alt="logo cacei" />
      </div>
    </div>
  );
};

export default page;
