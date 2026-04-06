export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <div className="text-2xl font-black font-headline mb-2">
              AgroLink
            </div>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed">
              Conectando el talento rural con el campo que lo necesita.
            </p>
          </div>
          <a
            href="https://wa.me/+5491136260707"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-fixed hover:text-white transition-colors font-semibold text-sm"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            WhatsApp de contacto
          </a>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            Articulamos con INTA Lincoln · Sociedad Rural · Cooperativas locales
          </p>
          <p>© 2026 AgroLink</p>
        </div>
      </div>
    </footer>
  );
}
