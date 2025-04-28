"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="text-center md:text-left">
            <p className="font-medium">+54 9 11 6833 9971</p>
            <Link
              href="mailto:veronicafunes@hotmail.com?subject=Contacto desde el sitio web de Verónica Funes"
              className="text-gray-700 hover:underline"
            >
              veronicafunes@hotmail.com
            </Link>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600">© 2016 Verónica Funes - Todos los derechos reservados.</p>
          </div>

          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/veronica.funes1"
              target="_blank"
              className="bg-black rounded-full p-2 text-white hover:bg-gray-800"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/vetonica05/"
              target="_blank"
              className="bg-black rounded-full p-2 text-white hover:bg-gray-800"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="tel:+5491168339971"
              className="bg-black rounded-full p-2 text-white hover:bg-gray-800"
            >
              <Phone size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
