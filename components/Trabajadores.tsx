import PreLaunchBadge from "@/components/PreLaunchBadge";

const TALLY_TRABAJADORES_URL =
  "https://tally.so/embed/GxDagj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

const beneficios = [
  "Acceso continuo a oportunidades de trabajo todo el año",
  "Te ayudamos con la Libreta de Trabajo Rural y el registro en RENATRE",
  "Cursos de capacitación para mejorar tu perfil y ganar más",
];

export default function Trabajadores() {
  return (
    <section
      id="trabajadores"
      className="py-20 scroll-mt-20"
      style={{ backgroundColor: "#fbf2ec" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-6">
          <PreLaunchBadge />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-3">
          Buscás trabajo en el campo
        </h2>
        <p className="text-on-surface-variant mb-6 text-lg">
          Anotate en la lista. Cuando lancemos, vas a ser de los primeros en
          recibir oportunidades de trabajo en la región.
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
          title="Lista de espera trabajadores — AgroLink"
          loading="lazy"
          style={{ border: "none", minHeight: "500px" }}
        />
      </div>
    </section>
  );
}
