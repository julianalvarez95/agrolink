export default function Hero() {
  return (
    <header
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        background:
          "linear-gradient(135deg, #0d2b0a 0%, #154212 60%, #1e5a18 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          ¿Necesitás un maquinista para la próxima campaña{" "}
          <span className="text-primary-fixed">y no lo conseguís?</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
          Conectamos productores y contratistas del noroeste bonaerense con
          trabajadores rurales verificados. Vos nos decís qué necesitás,
          nosotros te conseguimos a alguien con referencias chequeadas en 48
          horas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#productores"
            className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-primary-fixed-dim transition-colors"
          >
            Contanos qué personal necesitás
          </a>
          <a
            href="#trabajadores"
            className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-white/10 transition-colors"
          >
            Busco trabajo en el campo
          </a>
        </div>
      </div>
    </header>
  );
}
