"use client"; // Added for useState

import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react"; // Import useState
import Lightbox from "yet-another-react-lightbox"; // Import Lightbox
import type { Slide } from "yet-another-react-lightbox"; // Import Slide type
import "yet-another-react-lightbox/styles.css"; // Import default styles

const galleryImages = [
  { id: "obra-1", src: "/Obra/2280939087.jpg", title: "Retratos de familia" },
  { id: "obra-2", src: "/Obra/3002863329.jpg", title: "Microcentro" },
  { id: "obra-3", src: "/Obra/2515856495.jpg", title: "#3/12" },
  { id: "obra-4", src: "/Obra/329581194.jpg", title: "Dulce montón" },
  { id: "obra-5", src: "/Obra/3794183980.jpg", title: "#24/8" },
  { id: "obra-6", src: "/Obra/IMG_0861.JPG", title: "Sin título" },
  { id: "obra-7", src: "/Obra/IMG_0871.JPG", title: "Ella tiene su Louis Vuitton aunque salga con un ratón" },
  { id: "obra-8", src: "/Obra/IMG_0879.JPG", title: "#3/12" },
  { id: "obra-9", src: "/Obra/46c8068d-0bed-4161-a4ef-77e2eeadaa5a.jpg", title: "Frivolada" },
  { id: "obra-10", src: "/Obra/IMG_0854.JPG", title: "Catálogo" },
  { id: "obra-11", src: "/Obra/Detalle%203.jpeg", title: "Cuántas veces te lo tengo que decir" },
  { id: "obra-12", src: "/Obra/El%20negro.jpeg", title: "Tierra adentro" },
  { id: "obra-13", src: "/Obra/IMG_0857.JPG", title: "Mascarón" },
  { id: "obra-14", src: "/Obra/IMG_0858.JPG", title: "La vaca atada" },
  { id: "obra-15", src: "/Obra/IMG_0869.JPG", title: "Guardianes" },
  { id: "obra-16", src: "/Obra/09a26a2b-06d9-4980-bf2b-76b7af6dd351.jpg", title: "Microcentro" },
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
  const gallerySlide = slide as Slide & { src?: string; title?: string };
  if (!gallerySlide.src || !gallerySlide.title) return null;

  // Basic responsive check (example)
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: isSmallScreen ? '1' : '0 0 70%', position: 'relative', width: isSmallScreen ? '90%' : '70%', height: isSmallScreen ? 'auto' : '90%' }}>
        <img
          src={gallerySlide.src}
          alt={gallerySlide.title}
          style={{ objectFit: 'contain', width: '100%', height: '100%', display: 'block' }}
        />
      </div>
      {!isSmallScreen && (
        <div style={{ flex: '1', padding: '20px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ margin: 0, textAlign: 'center' }}>{gallerySlide.title}</h2>
        </div>
      )}
      {isSmallScreen && (
         <div style={{ width: '90%', padding: '10px 0', color: '#fff', textAlign: 'center' }}>
           <h2 style={{ margin: 0 }}>{gallerySlide.title}</h2>
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
        styles={{ container: { backgroundColor: '#ffffff' } }} // White background
        render={{ slide: renderSlide }} // Use custom slide renderer
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={lightboxSlides} // Use slides with width/height estimates
      />
    </main>
  );
}
