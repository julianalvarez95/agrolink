const beneficios = [
  "Publicación de vacante gratuita en todos nuestros canales.",
  "Pre-selección y chequeo de referencias incluido.",
  "Garantía de reposición de 15 días.",
];

export default function Precios() {
  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-8 leading-tight">
            Precios Transparentes,
            <br />
            Cuentas Claras.
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
            Sabemos que en el campo la palabra vale. Por eso nuestro esquema es
            simple: usted solo paga cuando el trabajador ideal comienza sus
            labores. Sin costos ocultos de mantenimiento mensual.
          </p>
          <ul className="space-y-6">
            {beneficios.map((b) => (
              <li key={b} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary font-bold">
                  check_circle
                </span>
                <span className="text-on-surface font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface-container-lowest p-12 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col items-center text-center">
          <span className="bg-tertiary-container/20 text-tertiary font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
            Tarifa Única
          </span>
          <div className="text-6xl font-black text-primary mb-2">1 Jornal</div>
          <div className="text-xl font-bold text-on-surface-variant mb-8 uppercase tracking-tighter">
            Por trabajador colocado
          </div>
          <hr className="w-full border-outline-variant/20 mb-8" />
          <p className="text-on-surface-variant text-sm mb-8 px-6">
            Equivalente al valor de un jornal de la categoría solicitada según
            escalas de la CNTA.
          </p>
          <button className="w-full bg-primary text-on-primary py-4 rounded-md font-bold text-lg hover:bg-primary-container transition-colors">
            Solicitar Presupuesto
          </button>
        </div>
      </div>
    </section>
  );
}
