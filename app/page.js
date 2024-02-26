"use client"
import PagePreguntas from "./components/preguntas";
import { Auth } from "./middlewares/auth";

export default function Home() {
  Auth()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PagePreguntas/>
    </main>
  );
}
