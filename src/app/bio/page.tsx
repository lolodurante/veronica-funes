import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const awards = [
  "2014: Mención de Honor en el XXVI Salón Nacional de Pequeño Formato y 2.° Premio Adquisición en el XXII Salón Municipal de Cerámica de Avellaneda.",
  "2015: Seleccionada en el Salón Nacional de Cerámica.",
  "2016: Mención en el Salón Anual Internacional de Cerámica CAAC, Museo Eduardo Sívori.",
  '2017: Mención de Honor en el 58.° Salón Internacional de Cerámica CAAC ("Cerámica y multiplicidad").',
  "2018: Seleccionada en 6x6 ceramictile, IDB Staff Association Art Gallery, Washington (USA).",
  "2021: Ganadora de la Beca Creación del Fondo Nacional de las Artes para trabajar en alta temperatura.",
  "2025: Mención de Honor en el 64.° Salón Anual Internacional de Arte Cerámico CAAC.",
];

export default function BioPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:gap-12 bg-white p-8 md:p-12 shadow-lg">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
              <Image
                src="/BIO/125366376.jpg"
                alt="Verónica Funes"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="space-y-6 text-gray-700 text-base md:text-lg">
              <div>
                <p className="uppercase tracking-wide text-sm text-gray-500 mb-2">
                  BIO
                </p>
                <h1 className="text-3xl md:text-4xl font-basic text-gray-900">
                  Verónica Funes (1970, Argentina)
                </h1>
              </div>
              <p>
                Egresada de la Escuela Superior de Bellas Artes Regina Pacis,
                cuenta con una amplia especialización en cerámica adquirida a
                través de talleres, seminarios y bienales. Su trabajo ha sido
                expuesto en muestras individuales y colectivas en galerías y
                centros culturales de Buenos Aires.
              </p>
              <p>
                Su práctica artística transcurre entre dos mundos; el más allá y
                el más acá, entre el dolor y el gozo, entre lo animal y lo
                humano, entre el cielo y la tierra. Ambas fuerzas conviven y se
                potencian, planteando nuevos escenarios y personajes posibles.
              </p>

              <div className="pt-4">
                <h2 className="text-xl font-basic text-gray-900 mb-4">
                  PREMIOS Y SELECCIONES
                </h2>
                <ul className="space-y-3 text-sm md:text-base leading-relaxed">
                  {awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              </div>

              <p>
                Dicta clases de cerámica en su taller, acompaña a artistas en su
                proceso de creación y producción de obra, y conduce un taller de
                modelado todos los sábados en MALBA Puertos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
