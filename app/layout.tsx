import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "AgroLink | Personal Rural Verificado en 48 horas",
  description:
    "Conseguís maquinistas, tractoristas y operarios rurales verificados para tu campo en el noroeste bonaerense. Referencias chequeadas, contacto directo, en 48 horas.",
  openGraph: {
    title: "AgroLink | Personal Rural Verificado en 48 horas",
    description:
      "Vos nos decís qué necesitás, nosotros te conseguimos a alguien con referencias chequeadas en 48 horas.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${manrope.variable} ${inter.variable}`}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌾</text></svg>"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        {/* Tally embed — habilita dynamicHeight en los iframes */}
        <script src="https://tally.so/widgets/embed.js" async={true} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
