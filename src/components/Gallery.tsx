import { useState } from "react";
import livingRoom from "@/assets/living-room.jpg";
import bedroom from "@/assets/bedroom.jpg";
import kitchen from "@/assets/kitchen.jpg";
import terrace from "@/assets/terrace.jpg";
import pool from "@/assets/pool.jpg";
import heroExterior from "@/assets/hero-exterior.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: heroExterior, alt: "Exterior de la casa", label: "Exterior" },
  { src: livingRoom, alt: "Salón con chimenea", label: "Salón" },
  { src: bedroom, alt: "Dormitorio principal", label: "Dormitorio" },
  { src: kitchen, alt: "Cocina rústica", label: "Cocina" },
  { src: terrace, alt: "Terraza con vistas", label: "Terraza" },
  { src: pool, alt: "Piscina privada", label: "Piscina" },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="espacios" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-3">
            Nuestros Espacios
          </p>
          <h2 className="font-display text-foreground text-3xl md:text-5xl font-medium mb-4">
            Un Hogar Lejos del Hogar
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Cada rincón de Casa Los Olivos ha sido cuidadosamente diseñado para
            ofrecerte comodidad y autenticidad en un entorno rural privilegiado.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[400px]" : "h-64 lg:h-72"
                }`}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-end">
                <span className="font-body text-background text-sm uppercase tracking-wider p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {image.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-background/70 hover:text-background transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 md:left-8 text-background/70 hover:text-background transition-colors p-2"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-sm"
          />

          <button
            onClick={goNext}
            className="absolute right-4 md:right-8 text-background/70 hover:text-background transition-colors p-2"
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-background w-6" : "bg-background/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
