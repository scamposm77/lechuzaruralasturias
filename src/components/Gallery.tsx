import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

// Exterior images
import extPortada from "@/assets/exterior/ext-00-portada.jpg";
import ext02 from "@/assets/exterior/ext-02.jpg";
import ext03 from "@/assets/exterior/ext-03.jpg";
import ext04 from "@/assets/exterior/ext-04.jpg";
import ext05 from "@/assets/exterior/ext-05.jpg";
import ext06 from "@/assets/exterior/ext-06.jpg";
import ext07 from "@/assets/exterior/ext-07.jpg";
import ext08 from "@/assets/exterior/ext-08.jpg";
import ext09 from "@/assets/exterior/ext-09.jpg";
import ext10 from "@/assets/exterior/ext-10.jpg";

// Cocina images
import cocina01 from "@/assets/cocina/cocina-01.jpg";
import cocina02 from "@/assets/cocina/cocina-02.jpg";
import cocina03 from "@/assets/cocina/cocina-03.jpg";
import cocina04 from "@/assets/cocina/cocina-04.jpg";
import cocina05 from "@/assets/cocina/cocina-05.jpg";
import cocina06 from "@/assets/cocina/cocina-06.jpg";

// Baños images
import bano01 from "@/assets/banos/bano-01.jpg";
import bano02 from "@/assets/banos/bano-02.jpg";

// Other spaces (placeholder for salon)
import salonChimenea from "@/assets/salon-chimenea.jpg";

type Space = {
  id: string;
  name: string;
  description: string;
  cover: string;
  images: string[];
};

const spaces: Space[] = [
  {
    id: "exterior",
    name: "Exterior y Jardín",
    description: "1.500m² de parcela con porche, balancín y vistas panorámicas",
    cover: extPortada,
    images: [extPortada, ext02, ext03, ext04, ext05, ext06, ext07, ext08, ext09, ext10],
  },
  {
    id: "cocina",
    name: "Cocina",
    description: "Cocina totalmente equipada con todo el menaje",
    cover: cocina01,
    images: [cocina01, cocina06, cocina05, cocina02, cocina03, cocina04],
  },
  {
    id: "salon",
    name: "Salón",
    description: "Acogedor salón con chimenea de pellets y Smart TV",
    cover: salonChimenea,
    images: [salonChimenea],
  },
  {
    id: "bano",
    name: "Baños",
    description: "1 baño completo + 1 aseo",
    cover: bano01,
    images: [bano01, bano02],
  },
];

const Gallery = () => {
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlideshow = (space: Space) => {
    setSelectedSpace(space);
    setCurrentIndex(0);
  };

  const closeSlideshow = () => {
    setSelectedSpace(null);
    setCurrentIndex(0);
  };

  const goNext = () => {
    if (selectedSpace) {
      setCurrentIndex((prev) => (prev + 1) % selectedSpace.images.length);
    }
  };

  const goPrev = () => {
    if (selectedSpace) {
      setCurrentIndex((prev) => (prev - 1 + selectedSpace.images.length) % selectedSpace.images.length);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "Escape") closeSlideshow();
  };

  return (
    <section id="espacios" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Descubre cada rincón
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            Nuestros <span className="text-primary italic">Espacios</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            3 habitaciones, un acogedor salón con chimenea y un amplio porche. 
            El lugar ideal para familias y grupos que buscan desconectar.
          </p>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space, index) => (
            <button
              key={space.id}
              onClick={() => openSlideshow(space)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer text-left card-shadow hover:hover-lift transition-all duration-500 ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden ${index === 0 ? "aspect-[2/1]" : "aspect-[4/3]"}`}>
                <img
                  src={space.cover}
                  alt={space.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-background text-xl md:text-2xl mb-1">
                      {space.name}
                    </h3>
                    <p className="font-body text-background/70 text-sm">
                      {space.description}
                    </p>
                  </div>
                  {space.images.length > 1 && (
                    <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Images className="w-4 h-4 text-background" />
                      <span className="font-body text-background text-sm">
                        {space.images.length}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Slideshow Modal */}
      {selectedSpace && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/98 flex items-center justify-center animate-fade-in"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10">
            <div>
              <h3 className="font-display text-background text-2xl">
                {selectedSpace.name}
              </h3>
              <p className="font-body text-background/60 text-sm">
                {currentIndex + 1} / {selectedSpace.images.length}
              </p>
            </div>
            <button
              onClick={closeSlideshow}
              className="text-background/70 hover:text-background transition-colors p-2 hover:bg-background/10 rounded-full"
              aria-label="Cerrar galería"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation Arrows */}
          {selectedSpace.images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 md:left-8 text-background/70 hover:text-background transition-colors p-3 hover:bg-background/10 rounded-full z-10"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={48} strokeWidth={1.5} />
              </button>

              <button
                onClick={goNext}
                className="absolute right-4 md:right-8 text-background/70 hover:text-background transition-colors p-3 hover:bg-background/10 rounded-full z-10"
                aria-label="Foto siguiente"
              >
                <ChevronRight size={48} strokeWidth={1.5} />
              </button>
            </>
          )}

          {/* Main Image */}
          <img
            src={selectedSpace.images[currentIndex]}
            alt={`${selectedSpace.name} - Foto ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-sm shadow-2xl"
          />

          {/* Thumbnail Navigation */}
          {selectedSpace.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2">
              {selectedSpace.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden transition-all duration-300 ${
                    idx === currentIndex 
                      ? "ring-2 ring-primary opacity-100 scale-110" 
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Gallery;
