const propuestas = [
  {
    icono: "verified_user",
    titulo: "Te conseguimos gente verificada",
    descripcion:
      "Cada trabajador tiene 3 referencias laborales chequeadas. Sabés a quién estás contratando.",
  },
  {
    icono: "schedule",
    titulo: "En 48 horas",
    descripcion:
      "Nos decís qué necesitás y te presentamos candidatos. Sin vueltas.",
  },
  {
    icono: "school",
    titulo: "Capacitados para tu máquina",
    descripcion:
      "Formamos operarios en maquinaria actual, agricultura de precisión y manejo ganadero. Con INTA y concesionarios de la zona.",
  },
];

export default function Propuesta() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-3">
          Cómo te ayudamos
        </h2>
        <p className="text-on-surface-variant mb-12 text-lg">
          Sin app, sin algoritmos. Personas que verifican referencias y conectan
          gente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {propuestas.map((p) => (
            <div key={p.titulo} className="flex flex-col gap-4">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">
                  {p.icono}
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface">{p.titulo}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {p.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
