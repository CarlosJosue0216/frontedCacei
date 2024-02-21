"use client"
import Dashboar from "../components/dashboar";
import { Auth } from "../middlewares/auth";

export default function LoginLayout({ children }) {
  Auth()
  return (

      <div className="w-screen flex">
        <Dashboar className="w-1/5" />
        <div className="w-4/5">{children}</div>
      </div>

  );
}
