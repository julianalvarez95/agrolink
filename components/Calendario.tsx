const periodos = [
  {
    meses: "ENE - FEB",
    titulo: "Mantenimiento",
    descripcion: "Control de plagas y cuidado de rodeos.",
    destacado: false,
  },
  {
    meses: "MAR - ABR",
    titulo: "Cosecha Gruesa",
    descripcion: "Pico máximo de demanda de operarios de cosechadora y logística.",
    destacado: true,
  },
  {
    meses: "MAY - OCT",
    titulo: "Siembra Fina",
    descripcion: "Preparación de suelos y siembra de trigo/cebada.",
    destacado: false,
  },
  {
    meses: "NOV - DIC",
    titulo: "Cosecha & Siembra",
    descripcion: "Cosecha de fina y siembra de gruesa en simultáneo.",
    destacado: true,
  },
];

export default function Calendario() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8 text-center mb-16">
        <h2 className="text-4xl font-black text-on-surface mb-4">
          Calendario de Campaña
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Planifique su necesidad de personal según el ciclo agronómico de
          nuestra zona.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {periodos.map((p) =>
            p.destacado ? (
              <div
                key={p.meses}
                className="p-8 bg-primary-container text-on-primary rounded-t-xl scale-105 shadow-xl"
              >
                <span className="font-bold text-primary-fixed">{p.meses}</span>
                <h4 className="font-bold text-xl mt-2 uppercase tracking-widest">
                  {p.titulo}
                </h4>
                <p className="text-sm mt-2 text-on-primary-container">
                  {p.descripcion}
                </p>
              </div>
            ) : (
              <div
                key={p.meses}
                className="p-8 bg-surface-container-low border-b-4 border-tertiary"
              >
                <span className="font-bold text-tertiary">{p.meses}</span>
                <h4 className="font-bold text-xl mt-2">{p.titulo}</h4>
                <p className="text-sm mt-2 text-on-surface-variant italic">
                  {p.descripcion}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
