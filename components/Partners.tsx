const partners = [
  { icon: "token", nombre: "INTA Lincoln" },
  { icon: "groups", nombre: "Sociedad Rural Lincoln" },
  { icon: "home_work", nombre: "Cooperativa Regional" },
];

export default function Partners() {
  return (
    <section className="py-12 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        {partners.map((p) => (
          <div key={p.nombre} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl">{p.icon}</span>
            <span className="font-bold tracking-tighter">{p.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
