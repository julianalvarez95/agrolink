const FEEDBACK_TALLY_URL =
  "https://tally.so/embed/RGY9JQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export default function Feedback() {
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
        <iframe
          src={FEEDBACK_TALLY_URL}
          width="100%"
          height="600"
          title="Formulario de feedback — AgroLink"
          loading="lazy"
          style={{ border: "none", minHeight: "500px" }}
        />
      </div>
    </section>
  );
}
