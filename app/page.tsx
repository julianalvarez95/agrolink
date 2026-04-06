import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Propuesta from "@/components/Propuesta";
import Calendario from "@/components/Calendario";
import FormularioProductores from "@/components/FormularioProductores";
import Trabajadores from "@/components/Trabajadores";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Problema />
      <Propuesta />
      <Calendario />
      <FormularioProductores />
      <Trabajadores />
      <Footer />
    </main>
  );
}
