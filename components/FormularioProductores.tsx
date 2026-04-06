import PreLaunchBadge from "@/components/PreLaunchBadge";

const TALLY_PRODUCTORES_URL =
  "https://tally.so/embed/1Avzv1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export default function FormularioProductores() {
  return (
    <section id="productores" className="py-20 bg-surface scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-6">
          <PreLaunchBadge />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-3">
          Sos productor o contratista
        </h2>
        <p className="text-on-surface-variant mb-10 text-lg">
          Anotate en la lista. Te contactamos antes del lanzamiento para
          entender qué necesitás y mostrarte cómo funciona.
        </p>
        <iframe
          src={TALLY_PRODUCTORES_URL}
          width="100%"
          height="700"
          title="Lista de espera productores — AgroLink"
          loading="lazy"
          style={{ border: "none", minHeight: "600px" }}
        />
      </div>
    </section>
  );
}
