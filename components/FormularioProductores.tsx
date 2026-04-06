const TALLY_PRODUCTORES_URL =
  "https://tally.so/embed/1Avzv1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export default function FormularioProductores() {
  return (
    <section id="productores" className="py-20 bg-surface scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-3">
          Contanos qué personal necesitás
        </h2>
        <p className="text-on-surface-variant mb-10 text-lg">
          Completá este formulario en 2 minutos. Te contactamos para la próxima
          campaña.
        </p>
        <iframe
          src={TALLY_PRODUCTORES_URL}
          width="100%"
          height="700"
          title="Formulario para productores — AgroLink"
          loading="lazy"
          style={{ border: "none", minHeight: "600px" }}
        />
      </div>
    </section>
  );
}
