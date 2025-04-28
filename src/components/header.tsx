"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBasket } from "lucide-react";

const navItems = [
  { name: "INICIO", path: "/" },
  { name: "OBRA", path: "/obra" },
  { name: "TALLER", path: "/taller" },
  { name: "BIO", path: "/bio" },
  { name: "INFO", path: "/info" },
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
          <nav className="flex flex-nowrap justify-center space-x-2 mb-0">
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
    </header>
  );
}
