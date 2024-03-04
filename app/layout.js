import { Inter } from "next/font/google";
import "./globals.css";
import UserProvider from "./context/useContext";
import NavBar from "./components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sistema Evidencias CACEI",
  description: "Sistema Evidencias CACEI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
