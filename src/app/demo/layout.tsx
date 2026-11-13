import { Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/demo/SmoothScroll";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${instrumentSerif.variable} ${hanken.variable} ${jetbrains.variable} bg-ink text-bone font-body`}
    >
      <SmoothScroll>{children}</SmoothScroll>
    </div>
  );
}
