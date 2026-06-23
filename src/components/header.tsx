"use client";

import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { contact } from "@/lib/contact";
import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "INICIO", path: "/" },
  { name: "OBRA", path: "/obra" },
  { name: "TALLER", path: "/taller" },
  { name: "BIO", path: "/bio" },
  { name: "CONTACTO", path: "#contacto" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="relative">
      <div className="border-b border-ceramica-light/20">
        <div className="container mx-auto py-6 flex flex-col items-center">
          {/* Logo centered at the top */}
          <div className="flex justify-center mb-4">
            <Link href="/">
              <Image
                src="/veronica-funes-logo.avif"
                alt="Verónica Funes Logo"
                width={240}
                height={240}
                priority
                className="mx-auto drop-shadow veronica-logo"
              />
            </Link>
          </div>
          {/* Navigation items below logo */}
          <nav className="flex flex-wrap justify-center gap-x-1 gap-y-0 px-2 mb-0">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${
                  pathname === item.path ? "text-black" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-b border-gray-200 bg-gray-100/80">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-3 text-sm">
          <Link
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp de Verónica Funes: ${contact.phone}`}
            className="inline-flex items-center gap-2 font-medium transition-opacity hover:opacity-60"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            <span>WhatsApp</span>
          </Link>
          <Link
            href={contact.instagramHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`Instagram de Verónica Funes: ${contact.instagram}`}
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
          >
            <Instagram size={18} />
            <span className="hidden sm:inline">{contact.instagram}</span>
            <span className="sm:hidden">Instagram</span>
          </Link>
          <Link
            href={contact.facebookHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook de Verónica Funes"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
          >
            <Facebook size={18} />
            <span>Facebook</span>
          </Link>
          <Link
            href={contact.emailHref}
            aria-label={`Email de Verónica Funes: ${contact.email}`}
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
          >
            <Mail size={18} />
            <span className="hidden md:inline">{contact.email}</span>
            <span className="md:hidden">Email</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
