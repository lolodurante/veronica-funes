import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { contact } from "@/lib/contact";
import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contacto" className="scroll-mt-8 bg-gray-100 py-14">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-500">
            Consultas, talleres y obras
          </p>
          <h2 className="mb-8 text-3xl font-basic">CONTACTO</h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`WhatsApp de Verónica Funes: ${contact.phone}`}
              className="flex min-h-28 flex-col items-center justify-center gap-2 bg-black px-4 py-5 text-white transition-colors hover:bg-gray-800"
            >
              <WhatsAppIcon className="h-7 w-7" />
              <span className="font-medium">WhatsApp</span>
              <span className="text-sm text-gray-300">{contact.phone}</span>
            </Link>
            <Link
              href={contact.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram de Verónica Funes: ${contact.instagram}`}
              className="flex min-h-28 flex-col items-center justify-center gap-2 bg-black px-4 py-5 text-white transition-colors hover:bg-gray-800"
            >
              <Instagram size={28} />
              <span className="font-medium">Instagram</span>
              <span className="text-sm text-gray-300">{contact.instagram}</span>
            </Link>
            <Link
              href={contact.facebookHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de Verónica Funes"
              className="flex min-h-28 flex-col items-center justify-center gap-2 bg-black px-4 py-5 text-white transition-colors hover:bg-gray-800"
            >
              <Facebook size={28} />
              <span className="font-medium">Facebook</span>
              <span className="text-sm text-gray-300">Verónica Funes</span>
            </Link>
            <Link
              href={contact.emailHref}
              aria-label={`Email de Verónica Funes: ${contact.email}`}
              className="flex min-h-28 flex-col items-center justify-center gap-2 bg-black px-4 py-5 text-white transition-colors hover:bg-gray-800"
            >
              <Mail size={28} />
              <span className="font-medium">Email</span>
              <span className="break-all text-sm text-gray-300">
                {contact.email}
              </span>
            </Link>
          </div>

          <p className="mt-10 text-sm text-gray-600">
            © 2016 Verónica Funes - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
