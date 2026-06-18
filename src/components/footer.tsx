"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="bg-gray-100 py-12 scroll-mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-basic mb-4">CONTACTO</h2>
            <Link
              href="tel:+5491168339971"
              className="block font-medium text-lg hover:underline"
            >
              +54 9 11 6833 9971
            </Link>
            <Link
              href="mailto:veronicafunes@hotmail.com?subject=Contacto desde el sitio web de Verónica Funes"
              className="block text-gray-700 hover:underline"
            >
              veronicafunes@hotmail.com
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://www.facebook.com/veronica.funes1"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de Verónica Funes"
              className="inline-flex items-center gap-2 bg-black rounded-full px-4 py-2 text-white hover:bg-gray-800"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/vetonica05/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Verónica Funes"
              className="inline-flex items-center gap-2 bg-black rounded-full px-4 py-2 text-white hover:bg-gray-800"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </Link>
            <Link
              href="tel:+5491168339971"
              aria-label="Llamar a Verónica Funes"
              className="inline-flex items-center gap-2 bg-black rounded-full px-4 py-2 text-white hover:bg-gray-800"
            >
              <Phone size={20} />
              <span>Teléfono</span>
            </Link>
          </div>

          <p className="text-sm text-gray-600">
            © 2016 Verónica Funes - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
