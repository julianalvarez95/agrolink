const TALLY_TRABAJADORES_URL =
  "https://tally.so/embed/GxDagj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

const beneficios = [
  "Acceso continuo a oportunidades de trabajo todo el año",
  "Te ayudamos con la Libreta de Trabajo Rural y el registro en RENATRE",
  "Cursos de capacitación para mejorar tu perfil y ganar más",
];

export default function Trabajadores() {
  return (
    <section id="trabajadores" className="py-20 bg-surface-container-low scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-3">
          ¿Buscás trabajo en el campo?
        </h2>
        <p className="text-on-surface-variant mb-6 text-lg">
          Registrate en nuestra base. Te conectamos con productores y
          contratistas de la zona que buscan gente con ganas de laburar.
        </p>

        <ul className="space-y-3 mb-10">
          {beneficios.map((b) => (
            <li key={b} className="flex items-start gap-3 text-on-surface">
              <span className="material-symbols-outlined text-primary mt-0.5 flex-shrink-0 text-xl">
                check_circle
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <iframe
          src={TALLY_TRABAJADORES_URL}
          width="100%"
          height="600"
          title="Formulario para trabajadores — AgroLink"
          loading="lazy"
          style={{ border: "none", minHeight: "500px" }}
        />
      </div>
    </section>
  );
}
