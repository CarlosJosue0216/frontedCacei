"use client";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "../context/useContext";
import { userLoged } from "./actions";

export async function Auth() {
    const pathname= usePathname()
    console.log(pathname)
  const router =  useRouter();
  const { user } = await useUser();
  
  if (!user) {
    return router.push("/login");
  }
  console.log(user);
  if (user && pathname =="/login") {
    console.log("login")
    await userLoged(user?.nombre)
    .then((result) => {
        localStorage.setItem("user",JSON.stringify(result))
      if (result?.rol == 1) {
        return router.push("/");
      }
      if (result?.rol == 0) {
        return router.push("/admin");
      }
      if (result?.rol == 0) {
        return router.push("/admin");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
}
