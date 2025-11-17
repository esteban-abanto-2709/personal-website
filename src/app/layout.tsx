import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esteban Abanto | Portafolio",
  description: "Desarrollador de Software - Backend & Game Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#111827] to-[#000000] text-white">
        {children}
      </body>
    </html>
  );
}