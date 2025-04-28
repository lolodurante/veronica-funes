import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ShoppingCart, ChevronLeft } from "lucide-react";

export default function CartPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-basic mb-8 text-center">Carrito</h1>

            {/* Empty cart state */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-6">
                <ShoppingCart size={64} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-basic mb-4">Tu carrito está vacío</h2>
              <p className="text-gray-600 mb-8">
                No tienes productos en tu carrito de compras. Explora nuestra tienda para ver las piezas disponibles.
              </p>
              <Link
                href="/tienda"
                className="flex items-center justify-center gap-2 bg-ceramica-dark text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors w-full md:w-auto md:mx-auto"
              >
                <ChevronLeft size={18} />
                <span>Volver a la tienda</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
