"use client";

import { FormEvent, useState } from "react";

const WA_NUMBER = "5491136260707"; // TODO: reemplazar con el número real

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [interes, setInteres] = useState("Necesito personal");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = `Hola! Soy ${nombre} de ${localidad}. Mi interés: ${interes}.`;
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-8 bg-surface-container-lowest p-12 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <span className="material-symbols-outlined text-9xl">chat</span>
        </div>

        <div className="relative z-10 text-center mb-10">
          <h2 className="text-3xl font-black text-on-surface mb-2">
            Contacto Directo
          </h2>
          <p className="text-on-surface-variant italic">
            Envíanos un mensaje y te responderemos en el día.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">
              Nombre o Empresa
            </label>
            <input
              type="text"
              placeholder="Juan Pérez - Estancia La Aurora"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary focus:outline-none px-4 py-3 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">
                Localidad
              </label>
              <input
                type="text"
                placeholder="Lincoln, Roberts, Pasteur..."
                value={localidad}
                onChange={(e) => setLocalidad(e.target.value)}
                className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary focus:outline-none px-4 py-3 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">
                Interés
              </label>
              <select
                value={interes}
                onChange={(e) => setInteres(e.target.value)}
                className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary focus:outline-none px-4 py-3 transition-all"
              >
                <option>Necesito personal</option>
                <option>Busco empleo</option>
                <option>Capacitación</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#25D366] text-white py-4 rounded-md font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.406.832 3.391 1.547 5.233 1.548 5.453.003 9.893-4.437 9.896-9.888.001-2.64-1.03-5.121-2.892-6.985-1.862-1.864-4.346-2.892-6.989-2.893-5.454 0-9.894 4.439-9.897 9.889-.001 2.13.633 4.103 1.83 5.776l-1.02 3.725 3.839-1.072zm11.076-7.559c-.09-.15-.331-.24-.693-.42-.36-.18-2.131-1.05-2.461-1.17-.33-.12-.57-.18-.811.18-.24.36-.931 1.17-1.141 1.41-.21.24-.421.27-.781.09-.36-.18-1.522-.561-2.9-1.792-1.071-.955-1.793-2.135-2.004-2.495-.21-.36-.022-.555.158-.734.161-.161.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.811-1.951-1.112-2.672-.292-.705-.589-.609-.811-.62-.21-.01-.451-.01-.691-.01-.24 0-.63.09-.961.45-.33.36-1.262 1.23-1.262 3 0 1.77 1.291 3.48 1.472 3.72.181.24 2.541 3.881 6.156 5.441.861.371 1.531.591 2.052.756.861.27 1.641.23 2.261.14.691-.1 2.131-.87 2.431-1.71.3-.84.3-1.56.21-1.71z" />
            </svg>
            Enviar WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
