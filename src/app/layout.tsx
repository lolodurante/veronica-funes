import type { Metadata } from "next";
import { Overlock, Basic } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const overlock = Overlock({
  variable: "--font-overlock",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const basic = Basic({
  variable: "--font-basic",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veronica Funes | arte en cerámica | san isidro",
  description:
    "Verónica Funes es artista ceramista argentina. Su práctica transcurre entre el más allá y el más acá, entre lo animal y lo humano, entre el cielo y la tierra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${overlock.variable} ${basic.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
