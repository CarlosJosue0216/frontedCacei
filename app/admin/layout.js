import Dashboar from "../components/dashboar";

export default function LoginLayout({ children }) {
  return (

      <div className="w-screen flex">
        <Dashboar className="w-2/5" />
        <div className="w-3/5">{children}</div>
      </div>

  );
}
