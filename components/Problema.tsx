const datos = [
  {
    stat: "70%",
    texto:
      "de las empresas agropecuarias no consigue la gente que necesita en campaña",
    fuente: "Bolsa de Comercio de Rosario / Zafrales",
  },
  {
    stat: "90%",
    texto:
      "de la cosecha en Argentina la hacen los contratistas rurales, pero no consiguen operarios",
    fuente: "FACMA",
  },
  {
    stat: "100%",
    texto:
      "artesanal: en la región, la contratación sigue siendo por WhatsApp, sin verificación ni garantía",
    fuente: "Diagnóstico local AgroLink",
  },
];

export default function Problema() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-3">
          El dolor que conocés
        </h2>
        <p className="text-on-surface-variant mb-12 text-lg">
          No es un problema tuyo. Es del sector entero.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {datos.map((d) => (
            <div
              key={d.stat}
              className="bg-surface-container-lowest rounded-xl p-8 border-l-4 border-primary"
            >
              <div className="text-5xl font-black text-primary mb-3">
                {d.stat}
              </div>
              <p className="text-on-surface font-medium leading-relaxed mb-4">
                {d.texto}
              </p>
              <p className="text-xs text-on-surface-variant/60 italic">
                Fuente: {d.fuente}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
