import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BioPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:gap-12 bg-white p-8 md:p-12 shadow-lg">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
              <Image
                src="https://ext.same-assets.com/4226829879/125366376.jpeg"
                alt="Verónica Funes"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="space-y-6 text-gray-700 text-base md:text-lg">
              <p>
                Soy Veronica Funes, artista visual y ceramista. En mi casa taller trabajo con arcilla, todo lo que puedo, cada día que puedo. En mi obra, en mis piezas de cerámica funcionales, en mis objetos decorativos, encuentro excusas para transformar.
              </p>
              <p>
                Monté mi estudio hace ya 12 años. Doy clases a niños y adultos. Exploramos formas y modelados, esmaltes, pigmentos y colores. Nos acompañamos en procesos de creación. Los cuestionamos. Esperamos y acompañamos los tiempos de la arcilla y su paso por el fuego.
              </p>
              <p>
                El barro hermana cuestionamientos existenciales y banales, utilizando el humor como herramienta que desestabiliza y distorsiona las distancias, las perspectivas entre lo hierático y el chiste, lo importante y lo descartable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
