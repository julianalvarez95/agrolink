const periodos = [
  {
    emoji: "🔴",
    meses: "Mar – May",
    titulo: "Cosecha gruesa",
    descripcion: "Pico máximo. Maquinistas, tractoristas, camioneros.",
    alta: true,
  },
  {
    emoji: "🟡",
    meses: "Jun – Sep",
    titulo: "Siembra fina + valle",
    descripcion: "Momento ideal para capacitar a tu equipo.",
    alta: false,
  },
  {
    emoji: "🔴",
    meses: "Oct – Dic",
    titulo: "Cosecha fina + siembra gruesa",
    descripcion: "Doble demanda simultánea.",
    alta: true,
  },
  {
    emoji: "🟡",
    meses: "Ene – Feb",
    titulo: "Monitoreo y mantenimiento",
    descripcion: "Recorredores, banderilleros, aplicadores.",
    alta: false,
  },
];

export default function Calendario() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-3">
          Sabemos cuándo necesitás gente
        </h2>
        <p className="text-on-surface-variant mb-12 text-lg">
          Trabajamos con el calendario agronómico de la zona pampeana.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {periodos.map((p) => (
            <div
              key={p.meses}
              className={`rounded-xl p-6 flex flex-col gap-3 ${
                p.alta
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-lowest border border-outline-variant/30"
              }`}
            >
              <span className="text-3xl">{p.emoji}</span>
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  p.alta ? "text-primary-fixed/80" : "text-on-surface-variant"
                }`}
              >
                {p.meses}
              </span>
              <h4
                className={`font-bold text-lg leading-tight ${
                  p.alta ? "text-white" : "text-on-surface"
                }`}
              >
                {p.titulo}
              </h4>
              <p
                className={`text-sm leading-relaxed ${
                  p.alta ? "text-white/80" : "text-on-surface-variant"
                }`}
              >
                {p.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
