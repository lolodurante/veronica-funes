import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Gallery images from the scraped site
const galleryImages = [
  { id: "taller-1", src: "https://ext.same-assets.com/4226829879/2911324671.jpeg", alt: "Taller 1" },
  { id: "taller-2", src: "https://ext.same-assets.com/4226829879/3033374512.jpeg", alt: "Taller 2" },
  { id: "taller-3", src: "https://ext.same-assets.com/4226829879/1010517313.jpeg", alt: "Taller 3" },
  { id: "taller-4", src: "https://ext.same-assets.com/4226829879/1127255381.jpeg", alt: "Taller 4" },
  { id: "taller-5", src: "https://ext.same-assets.com/4226829879/453020962.jpeg", alt: "Taller 5" },
  { id: "taller-6", src: "https://ext.same-assets.com/4226829879/2047594812.jpeg", alt: "Taller 6" },
  { id: "taller-7", src: "https://ext.same-assets.com/4226829879/4230249536.jpeg", alt: "Taller 7" },
  { id: "taller-8", src: "https://ext.same-assets.com/4226829879/744681652.jpeg", alt: "Taller 8" },
  { id: "taller-9", src: "https://ext.same-assets.com/4226829879/529239621.jpeg", alt: "Taller 9" },
  { id: "taller-10", src: "https://ext.same-assets.com/4226829879/980617822.jpeg", alt: "Taller 10" },
  { id: "taller-11", src: "https://ext.same-assets.com/4226829879/588264795.jpeg", alt: "Taller 11" },
];

export default function TallerPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="https://ext.same-assets.com/4226829879/1912866854.jpeg"
            alt="Taller de Cerámica"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-8 max-w-lg text-center">
              <h1 className="text-4xl md:text-5xl font-basic mb-4">EL TALLER</h1>
              <p className="text-lg md:text-xl">Un espacio de experimentación y encuentro.</p>
            </div>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-basic mb-6">Horarios</h2>
                <p className="mb-4">Tres clases presenciales por mes.</p>
                <p>La última semana de cada mes no hay clases.</p>
              </div>

              <div className="md:w-2/3">
                <div className="mb-8">
                  <h3 className="text-xl uppercase mb-4 font-bold">ADULTOS</h3>
                  <div className="space-y-1">
                    <p className="flex justify-between max-w-sm">
                        <span>Lunes</span>
                      <span>18 a 20:30 hs</span>
                      </p>
                    <p className="flex justify-between max-w-sm">
                        <span>Martes</span>
                      <span>14 a 16:30 hs</span>
                      </p>
                    <p className="flex justify-between max-w-sm">
                        <span>Miércoles</span>
                      <span>9:30 a 12 hs / 18 a 20:30 hs</span>
                      </p>
                    <p className="flex justify-between max-w-sm">
                        <span>Jueves</span>
                      <span>9:30 a 12 hs</span>
                      </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl uppercase mb-4 font-bold">NIÑOS</h3>
                  <div className="space-y-1">
                    <p className="flex justify-between max-w-sm">
                      <span>Martes</span>
                      <span>17:30 a 19 hs</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl uppercase mb-4 font-bold">ADOLESCENTES</h3>
                  <div className="space-y-1">
                    <p className="flex justify-between max-w-sm">
                      <span>Jueves</span>
                      <span>17:30 a 19:30 hs</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="tel:+5491168339971"
                className="inline-block bg-ceramica-dark text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
              >
                ¿Dudas?
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative aspect-square group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
