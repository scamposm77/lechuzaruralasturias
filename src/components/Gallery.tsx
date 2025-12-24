import { useState } from "react";
import exteriorHouse from "@/assets/exterior-house.jpg";
import livingRoom from "@/assets/living-room.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bedroomDouble from "@/assets/bedroom-double.jpg";
import bedroomBunk from "@/assets/bedroom-bunk.jpg";
import bedroomViews from "@/assets/bedroom-views.jpg";
import officeNook from "@/assets/office-nook.jpg";
import bathroomShower from "@/assets/bathroom-shower.jpg";
import bunkViews from "@/assets/bunk-views.jpg";
import terrace from "@/assets/terrace.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: exteriorHouse, alt: "Exterior de la cabaña", label: "Exterior" },
  { src: livingRoom, alt: "Salón con pared de piedra", label: "Salón" },
  { src: kitchen, alt: "Cocina equipada", label: "Cocina" },
  { src: bedroomDouble, alt: "Dormitorio doble", label: "Dormitorio" },
  { src: bedroomBunk, alt: "Dormitorio con litera", label: "Litera" },
  { src: bedroomViews, alt: "Dormitorio con vistas", label: "Vistas" },
  { src: officeNook, alt: "Rincón de trabajo", label: "Oficina" },
  { src: bathroomShower, alt: "Baño con ducha", label: "Baño" },
  { src: bunkViews, alt: "Litera con vistas al valle", label: "Valle" },
  { src: terrace, alt: "Terraza panorámica", label: "Terraza" },
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
    <section id="espacios" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Nuestros Espacios
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            Un Refugio en la
            <span className="text-primary italic"> Naturaleza</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada rincón de La Cabaña de la Lechuza ha sido diseñado para
            ofrecerte confort y autenticidad en el corazón de Asturias.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[350px] md:min-h-[450px]" : "h-52 md:h-60"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <span className="font-display text-background text-lg p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/98 flex items-center justify-center animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-background/70 hover:text-background transition-colors"
          >
            <X size={36} strokeWidth={1.5} />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-6 md:left-12 text-background/70 hover:text-background transition-colors p-2 hover:bg-background/10 rounded-full"
          >
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>

          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-sm shadow-2xl"
          />

          <button
            onClick={goNext}
            className="absolute right-6 md:right-12 text-background/70 hover:text-background transition-colors p-2 hover:bg-background/10 rounded-full"
          >
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-background w-8" : "bg-background/30 w-2 hover:bg-background/50"
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
