import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-campo.jpg"
          alt="Campo de trigo en Lincoln, Argentina al atardecer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1]">
            El recurso más valioso de tu campo,{" "}
            <span className="text-primary">ahora al alcance de tu mano.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
            Conectamos el talento rural verificado con las estancias más
            exigentes de la región de Lincoln. Calidad humana y técnica para la
            próxima campaña.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-all">
              Necesito personal calificado
              <span className="material-symbols-outlined">agriculture</span>
            </button>
            <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 hover:bg-secondary-fixed transition-all">
              Busco trabajo en el campo
              <span className="material-symbols-outlined">person_search</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
