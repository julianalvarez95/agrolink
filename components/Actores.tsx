const actores = [
  {
    icono: "agriculture",
    titulo: "Necesito personal",
    descripcion:
      "Sos productor o contratista y buscás maquinistas, peones u operarios rurales verificados.",
    cta: "Anotarme como productor",
    href: "#productores",
  },
  {
    icono: "person_search",
    titulo: "Busco trabajo en el campo",
    descripcion:
      "Tenés experiencia rural y querés acceder a oportunidades de trabajo en la región.",
    cta: "Anotarme como trabajador",
    href: "#trabajadores",
  },
];

export default function Actores() {
  return (
    <section id="actores" className="py-24 scroll-mt-20" style={{ backgroundColor: "#f5ece6" }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight leading-tight mb-3">
          ¿Para quién es AgroLink?
        </h2>
        <p className="text-on-surface-variant text-lg mb-16 max-w-xl">
          Elegí tu perfil para anotarte en la lista.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {actores.map((actor) => (
            <a
              key={actor.titulo}
              href={actor.href}
              className="group flex flex-col gap-6 p-10 rounded-xl transition-all"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 40px rgba(31, 27, 23, 0.06)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(21, 66, 18, 0.08)" }}
              >
                <span className="material-symbols-outlined text-primary text-3xl">
                  {actor.icono}
                </span>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-2xl font-black text-on-surface font-headline leading-tight">
                  {actor.titulo}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {actor.descripcion}
                </p>
              </div>

              <div className="flex items-center gap-2 font-semibold text-primary font-body text-sm">
                {actor.cta}
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
