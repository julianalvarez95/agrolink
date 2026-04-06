# AgroLink — Personal Rural Verificado

> Conectamos productores y contratistas del noroeste bonaerense con trabajadores rurales verificados.

---

## El problema

En la región pampeana, el 70% de los productores tiene dificultades para conseguir personal calificado en momentos pico de campaña. Los maquinistas, peones y operarios existen — pero no hay un canal confiable para encontrarlos. La contratación informal, sin referencias chequeadas ni respaldo legal, genera fricciones costosas para ambas partes.

AgroLink nació para resolver eso.

---

## Qué es AgroLink

Un servicio de intermediación laboral rural especializado en el noroeste bonaerense. Sin app, sin algoritmos. Personas que verifican referencias y conectan gente.

- **Para productores y contratistas:** conseguís personal verificado (3 referencias chequeadas) en 48 horas.
- **Para trabajadores rurales:** accedés a oportunidades de trabajo continuas, acompañamiento con la Libreta de Trabajo Rural y registro en RENATRE.

Articulamos con INTA Lincoln, la Sociedad Rural y cooperativas locales de la región.

---

## Estado actual: Pre-lanzamiento

Esta web es una **landing de validación**. Estamos circulándola entre actores de la cadena productiva para medir interés real antes de operar a escala.

Si llegaste hasta acá y trabajás en el agro — como productor, contratista o trabajador rural — tu opinión define cómo construimos esto.

---

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **UI:** React 19 + Tailwind CSS 4
- **Tipografía:** Manrope (headlines) + Inter (body)
- **Formularios:** Tally (embeds)
- **Analytics:** Vercel Analytics
- **Deploy:** Vercel

---

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## Estructura

```
app/
  page.tsx          — Composición de secciones
  layout.tsx        — Metadata, fuentes, analytics
  globals.css       — Design system (tokens, Tailwind 4)
components/
  Hero.tsx          — Sección principal con mensaje pre-launch
  Problema.tsx      — Estadísticas del problema
  Actores.tsx       — Selección de perfil (productor / trabajador)
  FormularioProductores.tsx — Lista de espera para empleadores
  Trabajadores.tsx  — Lista de espera para trabajadores
  Propuesta.tsx     — Qué estamos construyendo
  Calendario.tsx    — Calendario agrícola regional
  Feedback.tsx      — Formulario de feedback cualitativo
  Footer.tsx        — Pie de página
```

---

## Producción

[agrolink-oficial.vercel.app](https://agrolink-oficial.vercel.app)
