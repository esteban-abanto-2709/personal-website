import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n/components/LocaleProvider";
import { getMessages } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esteban Abanto | Portafolio",
  description: "Software Developer - Backend & Game Development",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  const initialMessages = await getMessages('en');

  return (
    <html lang="en">
      <body className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#111827] to-[#000000] text-white">
        <LocaleProvider initialMessages={initialMessages}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}