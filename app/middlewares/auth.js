"use client";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "../context/useContext";

export  function Auth() {
  const router =  useRouter();
  const pathName = usePathname() 
  const { user } =  useUser();
  console.log(user)
  if (user?.rol === 0) {
    if (pathName.startsWith('/admin') || pathName.startsWith('/') && pathName !== '/login') {
      // Permitir navegación en subrutas para el administrador
      // Puedes agregar más lógica específica para las subrutas aquí
    } else {
      // Redirigir a /admin si el usuario tiene rol 0 pero no está en una subruta de /admin
      router.push('/admin');
    }
  } else if (user?.rol === 1) {
    router.push('/');
  } else if (!user) {
    router.push('/login');
  } else if (pathName === '/login') {
    router.push('/');
  }
}
