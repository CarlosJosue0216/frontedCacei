import Image from "next/image";
import React from "react";
import logotec from "../../public/logotec.png";
import cacei from "../../public/cacei.png";
async function createInvoice(formData) {
  "use server";

  const rawFormData = {
    user: formData.get("user"),
    password: formData.get("password"),
  };
  console.log(rawFormData);

  // mutate data
  // revalidate cache
}
const page = () => {
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
          <form className="p-5" action={createInvoice}>
            <div className="flex flex-col p-3">
              <label className="text-xl py-3 font-bold">Usuario</label>
              <input
                type="text"
                placeholder="Ingrese su usuario"
                name="user"
                className="p-3 border border-indigo-500 border-1 rounded-lg"
              />
            </div>
            <div className="flex flex-col p-3">
              <label className="text-xl py-3 font-bold">Contraseña</label>
              <input
                type="text"
                name="password"
                placeholder="Ingrese su contraseña"
                className="p-3 border border-indigo-500 border-1 rounded-lg"
              />
            </div>
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
        <Image src={cacei} alt="logo cacei"/>
      </div>
    </div>
  );
};

export default page;
