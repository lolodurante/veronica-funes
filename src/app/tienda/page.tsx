import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Sample products
const products = [
  {
    id: "prod-1",
    name: "Cuenco Azul",
    price: 4500,
    image: "https://ext.same-assets.com/4226829879/2515856495.jpeg",
  },
  {
    id: "prod-2",
    name: "Plato Decorativo",
    price: 5800,
    image: "https://ext.same-assets.com/4226829879/3794183980.jpeg",
  },
  {
    id: "prod-3",
    name: "Taza de Cerámica",
    price: 3200,
    image: "https://ext.same-assets.com/4226829879/260207817.jpeg",
  },
  {
    id: "prod-4",
    name: "Maceta Pequeña",
    price: 3800,
    image: "https://ext.same-assets.com/4226829879/524924198.jpeg",
  },
  {
    id: "prod-5",
    name: "Escultura Decorativa",
    price: 12000,
    image: "https://ext.same-assets.com/4226829879/3506304268.jpeg",
  },
  {
    id: "prod-6",
    name: "Set de Cuencos",
    price: 9500,
    image: "https://ext.same-assets.com/4226829879/2917537657.jpeg",
  },
];

export default function TiendaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[40vh] w-full">
          <Image
            src="https://ext.same-assets.com/4226829879/4208146399.jpeg"
            alt="Tienda de Cerámica"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 p-8 max-w-lg text-center">
              <h1 className="text-4xl md:text-5xl font-basic mb-4">TIENDA</h1>
              <p className="text-lg md:text-xl">Piezas únicas hechas a mano</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-square mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">${product.price.toLocaleString()}</p>
                <button className="bg-ceramica-dark text-white px-4 py-2 w-full hover:bg-opacity-90 transition-colors">
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              Para pedidos personalizados o consultas específicas, contactame por email o teléfono.
            </p>
            <Link
              href="/info"
              className="text-ceramica-dark underline underline-offset-4 hover:text-ceramica-brown"
            >
              Ver información de contacto
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
