"use client";

import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fff8f4]/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-black text-on-surface font-headline tracking-tight">
          Agencia de Empleo Rural
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#"
            className="text-primary font-bold border-b-2 border-primary pb-1 font-headline text-sm"
          >
            Productores
          </a>
          <a
            href="#"
            className="text-on-surface/70 hover:text-primary transition-colors duration-300 font-headline text-sm"
          >
            Trabajadores
          </a>
          <a
            href="#"
            className="text-on-surface/70 hover:text-primary transition-colors duration-300 font-headline text-sm"
          >
            Capacitación
          </a>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-md font-bold text-sm transition-all hover:bg-primary-container active:scale-95">
            Registrarse
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#fff8f4]/95 backdrop-blur-md px-8 pb-6 flex flex-col gap-4 border-t border-outline-variant/20">
          <a href="#" className="text-primary font-bold font-headline text-sm pt-4">
            Productores
          </a>
          <a href="#" className="text-on-surface/70 font-headline text-sm">
            Trabajadores
          </a>
          <a href="#" className="text-on-surface/70 font-headline text-sm">
            Capacitación
          </a>
          <button className="bg-primary text-on-primary px-6 py-3 rounded-md font-bold text-sm w-full">
            Registrarse
          </button>
        </div>
      )}
    </nav>
  );
}
