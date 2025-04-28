import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Gallery images from the scraped site
const galleryImages = [
  { id: "obra-1", src: "https://ext.same-assets.com/4226829879/2280939087.jpeg", alt: "Obra 1" },
  { id: "obra-2", src: "https://ext.same-assets.com/4226829879/2780491278.jpeg", alt: "Obra 2" },
  { id: "obra-3", src: "https://ext.same-assets.com/4226829879/2515856495.jpeg", alt: "Obra 3" },
  { id: "obra-4", src: "https://ext.same-assets.com/4226829879/329581194.jpeg", alt: "Obra 4" },
  { id: "obra-5", src: "https://ext.same-assets.com/4226829879/3794183980.jpeg", alt: "Obra 5" },
  { id: "obra-6", src: "https://ext.same-assets.com/4226829879/260207817.jpeg", alt: "Obra 6" },
  { id: "obra-7", src: "https://ext.same-assets.com/4226829879/524924198.jpeg", alt: "Obra 7" },
  { id: "obra-8", src: "https://ext.same-assets.com/4226829879/3002863329.jpeg", alt: "Obra 8" },
  { id: "obra-9", src: "https://ext.same-assets.com/4226829879/3506304268.jpeg", alt: "Obra 9" },
  { id: "obra-10", src: "https://ext.same-assets.com/4226829879/2917537657.jpeg", alt: "Obra 10" },
  { id: "obra-11", src: "https://ext.same-assets.com/4226829879/2879638817.jpeg", alt: "Obra 11" },
  { id: "obra-12", src: "https://ext.same-assets.com/4226829879/933868517.jpeg", alt: "Obra 12" },
  { id: "obra-13", src: "https://ext.same-assets.com/4226829879/1863920999.jpeg", alt: "Obra 13" },
  { id: "obra-14", src: "https://ext.same-assets.com/4226829879/2147825276.jpeg", alt: "Obra 14" },
  { id: "obra-15", src: "https://ext.same-assets.com/4226829879/2045367587.jpeg", alt: "Obra 15" },
  { id: "obra-16", src: "https://ext.same-assets.com/4226829879/1830902576.jpeg", alt: "Obra 16" },
];

export default function ObraPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative aspect-square group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
