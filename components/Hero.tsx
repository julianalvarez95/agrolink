import PreLaunchBadge from "@/components/PreLaunchBadge";

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
        <div className="mb-8">
          <PreLaunchBadge />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Conectamos personal rural verificado{" "}
          <span className="text-primary-fixed">con quienes lo necesitan</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
          Estamos construyendo AgroLink y queremos hacerlo bien. Contanos qué
          necesitás antes de lanzar — tu experiencia define el servicio.
        </p>
        <a
          href="#actores"
          className="inline-block bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-primary-fixed-dim transition-colors"
        >
          Anotate en la lista
        </a>
      </div>
    </header>
  );
}
