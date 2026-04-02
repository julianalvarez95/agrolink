import Image from "next/image";

export default function Propuesta() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">
              Servicios Profesionales
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight">
              Nuestra Propuesta
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md font-body italic border-l-4 border-secondary pl-6 py-2">
            &ldquo;Elevamos el estándar del trabajo rural a través de la
            verificación y la capacitación constante.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 — Bolsa de Trabajo */}
          <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <div className="bg-primary-container/10 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">
                  verified_user
                </span>
              </div>
              <h3 className="text-3xl font-bold text-on-surface">
                Bolsa de Trabajo Verificada
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                No somos un simple clasificado. Cada trabajador en nuestra base
                de datos cuenta con referencias chequeadas, antecedentes
                laborales validados y una entrevista técnica previa.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[200px]">
                assignment_turned_in
              </span>
            </div>
          </div>

          {/* Card 2 — Capacitación */}
          <div className="bg-primary p-10 rounded-xl flex flex-col justify-between text-on-primary">
            <div className="space-y-4">
              <span className="material-symbols-outlined text-4xl">school</span>
              <h3 className="text-2xl font-bold">Centro de Capacitación</h3>
            </div>
            <p className="text-on-primary-container text-lg">
              Formamos operarios en maquinaria de última generación, agricultura
              de precisión y manejo de rodeos bajo normas de bienestar animal.
            </p>
          </div>

          {/* Card 3 — Alianzas */}
          <div className="bg-secondary-container p-10 rounded-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="material-symbols-outlined text-4xl text-on-secondary-container">
                handshake
              </span>
              <h3 className="text-2xl font-bold text-on-secondary-container">
                Alianzas Regionales
              </h3>
            </div>
            <p className="text-on-secondary-container/80 text-lg">
              Colaboramos con INTA Lincoln y las cooperativas locales para
              asegurar que nuestra oferta responda a la realidad del partido.
            </p>
          </div>

          {/* Card 4 — Tecnología */}
          <div className="md:col-span-2 bg-surface-container-high p-10 rounded-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-on-surface">
                Tecnología en el Surco
              </h3>
              <p className="text-on-surface-variant">
                Optimizamos la búsqueda mediante algoritmos de geolocalización,
                conectando al productor con personal disponible en la misma zona
                de Lincoln.
              </p>
            </div>
            <div className="w-full md:w-64 h-40 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/farmer-tablet.jpg"
                alt="Productor usando tablet en el campo"
                width={256}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
