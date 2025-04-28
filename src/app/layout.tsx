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
  description: "Soy Veronica Funes, artista visual y ceramista. En mi casa taller, trabajo en mis obras, y piezas de cerámica funcionales, donde exploro mi fascinación por los esmaltes.",
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
