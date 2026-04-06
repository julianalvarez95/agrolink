import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Actores from "@/components/Actores";
import FormularioProductores from "@/components/FormularioProductores";
import Trabajadores from "@/components/Trabajadores";
import Propuesta from "@/components/Propuesta";
import Calendario from "@/components/Calendario";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Problema />
      <Actores />
      <FormularioProductores />
      <Trabajadores />
      <Propuesta />
      <Calendario />
      <Feedback />
      <Footer />
    </main>
  );
}
