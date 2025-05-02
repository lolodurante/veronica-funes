"use client"; // Added for useState

import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react"; // Import useState
import Lightbox from "yet-another-react-lightbox"; // Import Lightbox
import type { Slide } from "yet-another-react-lightbox"; // Import Slide type
import "yet-another-react-lightbox/styles.css"; // Import default styles

// Updated gallery images with titles
const galleryImages = [
  { id: "obra-1", src: "https://ext.same-assets.com/4226829879/2280939087.jpeg", title: "Retratos de familia" },
  { id: "obra-2", src: "https://ext.same-assets.com/4226829879/2780491278.jpeg", title: "Microcentro" },
  { id: "obra-3", src: "https://ext.same-assets.com/4226829879/2515856495.jpeg", title: "#3/12" },
  { id: "obra-4", src: "https://ext.same-assets.com/4226829879/329581194.jpeg", title: "Dulce montón" },
  { id: "obra-5", src: "https://ext.same-assets.com/4226829879/3794183980.jpeg", title: "#24/8" },
  { id: "obra-6", src: "https://ext.same-assets.com/4226829879/260207817.jpeg", title: "Sin titulo" }, // Corrected typo 'tutulo' -> 'titulo'
  { id: "obra-7", src: "https://ext.same-assets.com/4226829879/524924198.jpeg", title: "Ella tiene su louis vitton aunque salga con un raton" },
  { id: "obra-8", src: "https://ext.same-assets.com/4226829879/3002863329.jpeg", title: "#3/12" },
  { id: "obra-9", src: "https://ext.same-assets.com/4226829879/3506304268.jpeg", title: "Frivolada" },
  { id: "obra-10", src: "https://ext.same-assets.com/4226829879/2917537657.jpeg", title: "Catalogo" },
  { id: "obra-11", src: "https://ext.same-assets.com/4226829879/2879638817.jpeg", title: "Cuantas veces te lo.tengo que decir" },
  { id: "obra-12", src: "https://ext.same-assets.com/4226829879/933868517.jpeg", title: "Tierra adentro" },
  { id: "obra-13", src: "https://ext.same-assets.com/4226829879/1863920999.jpeg", title: "Mascaron" },
  { id: "obra-14", src: "https://ext.same-assets.com/4226829879/2147825276.jpeg", title: "La vaca atada" }, // Corrected typo '114.la' -> 'La'
  { id: "obra-15", src: "https://ext.same-assets.com/4226829879/2045367587.jpeg", title: "Guardianes" },
  { id: "obra-16", src: "https://ext.same-assets.com/4226829879/1830902576.jpeg", title: "Microcentro" },
];

// Format images for lightbox (needs src and title)
const lightboxSlides = galleryImages.map(image => ({
  src: image.src,
  title: image.title,
  width: 1000, // Provide estimate dimensions for better layout
  height: 1000,
}));

// Custom slide renderer
function renderSlide({ slide }: { slide: Slide }) {
  // Ensure slide has src and title
  if (!slide.src || !slide.title) return null;

  // Basic responsive check (example)
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: isSmallScreen ? '1' : '0 0 70%', position: 'relative', width: isSmallScreen ? '90%' : '70%', height: isSmallScreen ? 'auto' : '90%' }}>
        <img
          src={slide.src}
          alt={slide.title}
          style={{ objectFit: 'contain', width: '100%', height: '100%', display: 'block' }}
        />
      </div>
      {!isSmallScreen && (
        <div style={{ flex: '1', padding: '20px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ margin: 0, textAlign: 'center' }}>{slide.title}</h2>
        </div>
      )}
      {isSmallScreen && (
         <div style={{ width: '90%', padding: '10px 0', color: '#fff', textAlign: 'center' }}>
           <h2 style={{ margin: 0 }}>{slide.title}</h2>
        </div>
      )}
    </div>
  );
}

export default function ObraPage() {
  const [index, setIndex] = useState(-1); // State for lightbox index (-1 means closed)

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, idx) => (
              <div
                key={image.id}
                className="relative aspect-square group cursor-pointer" // Added cursor-pointer
                onClick={() => setIndex(idx)} // Open lightbox on click
              >
                <Image
                  src={image.src}
                  alt={image.title} // Use title for alt text
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end justify-center p-2">
                  {/* Optional: Show title on hover */}
                  {/* <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 px-2 py-1 rounded">
                    {image.title}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Lightbox Component */}
      <Lightbox
        styles={{ backdrop: { backgroundColor: '#ffffff' } }} // White background
        render={{ slide: renderSlide }} // Use custom slide renderer
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={lightboxSlides} // Use slides with width/height estimates
      />
    </main>
  );
}
