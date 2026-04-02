export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
        <div className="text-lg font-bold text-on-surface font-headline">
          Agencia de Empleo Rural
        </div>
        <div className="text-on-surface/60 font-body text-sm uppercase tracking-wider text-center">
          © 2024 Agencia de Empleo Rural Lincoln. El Terreno de las
          Oportunidades.
        </div>
        <div className="flex justify-end space-x-6 text-on-surface/60 font-body text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-all">
            WhatsApp
          </a>
          <a href="#" className="hover:text-primary transition-all">
            Ubicación
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all underline text-primary"
          >
            Términos y Condiciones
          </a>
        </div>
      </div>
    </footer>
  );
}
