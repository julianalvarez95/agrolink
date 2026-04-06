// TODO: Crear un nuevo formulario en tally.so con preguntas de feedback cualitativo:
//   - ¿Cuál es tu rol? (productor / trabajador / otro)
//   - ¿Cuál es tu mayor problema hoy para conseguir personal/trabajo?
//   - Si AgroLink existiera hoy, ¿lo usarías? (Sí / No / Depende)
//   - ¿Qué sería lo más importante para vos?
// Reemplazar FEEDBACK_TALLY_URL con la URL embed de ese formulario.
const FEEDBACK_TALLY_URL =
  "https://tally.so/embed/RGY9JQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export default function Feedback() {
  const hasTallyUrl = FEEDBACK_TALLY_URL !== "PENDIENTE";

  return (
    <section
      className="py-24"
      style={{ backgroundColor: "#f5ece6" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight leading-tight mb-4">
          Contanos más
        </h2>
        <p className="text-on-surface-variant text-lg mb-14 max-w-lg leading-relaxed">
          Tu opinión define cómo construimos esto. Son 3 minutos y nos ayudás
          un montón.
        </p>

        {hasTallyUrl ? (
          <iframe
            src={FEEDBACK_TALLY_URL}
            width="100%"
            height="600"
            title="Formulario de feedback — AgroLink"
            loading="lazy"
            style={{ border: "none", minHeight: "500px" }}
          />
        ) : (
          <div
            className="rounded-xl p-10 flex flex-col gap-4"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <span className="material-symbols-outlined text-white/60 text-4xl">
              edit_note
            </span>
            <p className="text-white/60 text-sm font-mono">
              Formulario de feedback pendiente de configurar.
              <br />
              Reemplazá <code className="text-white/80">FEEDBACK_TALLY_URL</code> en{" "}
              <code className="text-white/80">components/Feedback.tsx</code> con la URL
              embed de tu formulario Tally.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
