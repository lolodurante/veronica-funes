import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function InfoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-basic mb-8 text-center">INFORMACIÓN</h1>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-basic mb-6">Contacto</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-ceramica-dark" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p>+54 9 11 6833 9971</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-ceramica-dark" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:veronicafunes@hotmail.com?subject=Contacto desde el sitio web de Verónica Funes"
                      className="text-blue-600 hover:underline"
                    >
                      veronicafunes@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-ceramica-dark" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p>San Isidro, Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-basic mb-6">Clases y Talleres</h2>

              <div className="prose prose-lg">
                <p>
                  Las clases se realizan en mi casa taller, con un máximo de 6 alumnos por clase,
                  lo que permite una atención personalizada y adaptada a los intereses de cada alumno.
                </p>

                <p>
                  Se proveen todos los materiales necesarios: arcillas, esmaltes, herramientas y hornos.
                  No se requiere experiencia previa, ya que las clases están diseñadas para todos los niveles.
                </p>

                <p>
                  Para más información sobre disponibilidad y costos, por favor contactarme por
                  teléfono o email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
