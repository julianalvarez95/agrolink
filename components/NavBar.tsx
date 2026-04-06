"use client";

import { useState } from "react";

const links = [
  { label: "Productores", href: "#productores", external: false },
  { label: "Trabajadores", href: "#trabajadores", external: false },
  { label: "Contacto", href: "https://wa.me/TUNUMERO", external: true },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fff8f4]/90 backdrop-blur-md border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <a
          href="#inicio"
          className="text-xl font-black text-primary font-headline tracking-tight"
        >
          AgroLink
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-on-surface/70 hover:text-primary transition-colors font-headline text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#fff8f4]/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4 border-t border-outline-variant/20">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="text-on-surface/70 font-headline text-sm font-semibold pt-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
