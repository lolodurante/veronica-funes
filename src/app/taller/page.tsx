import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const galleryImages = [
  {
    id: "taller-1",
    src: "/Taller/20231122_120508.jpg",
    alt: "Piezas en proceso en el taller",
  },
  {
    id: "taller-2",
    src: "/Taller/20240622_131554.jpg",
    alt: "Pieza de cerámica esmaltada",
  },
  {
    id: "taller-3",
    src: "/Taller/20250513_184833.jpg",
    alt: "Modelado en cerámica",
  },
  {
    id: "taller-4",
    src: "/Taller/20250513_185403.jpg",
    alt: "Figura en proceso de modelado",
  },
  {
    id: "taller-5",
    src: "/Taller/20250716_203143.jpg",
    alt: "Mesa de trabajo con piezas",
  },
  {
    id: "taller-6",
    src: "/Taller/20251128_124210.jpg",
    alt: "Piezas pequeñas en secado",
  },
  {
    id: "taller-7",
    src: "/Taller/642209140_10240612308504265_7349170416794760412_n.jpg",
    alt: "Producción del taller",
  },
  {
    id: "taller-8",
    src: "/Taller/643878331_10240613298169006_7333616980038477843_n.jpg",
    alt: "Mesa con objetos cerámicos",
  },
  {
    id: "taller-9",
    src: "/Taller/482021268_10235521745083361_5907039608749815762_n.jpg",
    alt: "Objeto cerámico esmaltado",
  },
  {
    id: "taller-10",
    src: "/Taller/482213305_10235521745403369_6774453415298871594_n.jpg",
    alt: "Escultura de cerámica en proceso",
  },
  {
    id: "taller-11",
    src: "/Taller/84338517_10221473578967988_2122271004561506304_n.jpg",
    alt: "Alumno trabajando una pieza",
  },
];

export default function TallerPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="/Taller/20250513_185403.jpg"
            alt="Taller de Cerámica"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-8 max-w-lg text-center">
              <h1 className="text-4xl md:text-5xl font-basic mb-4">
                EL TALLER
              </h1>
              <p className="text-lg md:text-xl">Pasar el arte por el cuerpo.</p>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-14 text-lg md:text-xl leading-relaxed text-gray-700">
              <p>
                Pasar el arte por el cuerpo. Entrar en contacto con la materia.
                Desarrollar las ideas. Transformar, encontrar, volver a mirar.
                Modelar. Entrar en los tiempos y en los procesos de la cerámica.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-basic mb-6">Horarios</h2>
                <p className="mb-4">
                  El taller consta de tres clases por mes, de dos horas y media
                  de duración cada una.
                </p>
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
                  <h3 className="text-xl uppercase mb-4 font-bold">
                    ADOLESCENTES
                  </h3>
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
