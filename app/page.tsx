import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Propuesta from "@/components/Propuesta";
import Calendario from "@/components/Calendario";
import Precios from "@/components/Precios";
import Contacto from "@/components/Contacto";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Propuesta />
      <Calendario />
      <Precios />
      <Contacto />
      <Partners />
      <Footer />
    </main>
  );
}
