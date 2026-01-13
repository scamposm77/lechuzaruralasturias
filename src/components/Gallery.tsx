import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

// Salon images
import salon01 from "@/assets/salon/salon-01.jpg";
import salonChimenea from "@/assets/salon-chimenea.jpg";

type Space = {
  id: string;
  name: string;
  description: string;
  cover: string;
  images: string[];
};

const Gallery = () => {
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();

  const spaces: Space[] = [
    {
      id: "exterior",
      name: t("gallery.exterior"),
      description: t("gallery.exterior.desc"),
      cover: extPortada,
      images: [extPortada, ext02, ext03, ext04, ext05, ext06, ext07, ext08, ext09, ext10],
    },
    {
      id: "cocina",
      name: t("gallery.kitchen"),
      description: t("gallery.kitchen.desc"),
      cover: cocina01,
      images: [cocina01, cocina06, cocina05, cocina02, cocina03, cocina04],
    },
    {
      id: "salon",
      name: t("gallery.living"),
      description: t("gallery.living.desc"),
      cover: salonChimenea,
      images: [salonChimenea, salon01],
    },
    {
      id: "bano",
      name: t("gallery.bathroom"),
      description: t("gallery.bathroom.desc"),
      cover: bano01,
      images: [bano01, bano02],
    },
  ];

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "Escape") closeSlideshow();
  };

  return (
    <section 
      id="espacios" 
      className="py-28 bg-background"
      aria-label={language === "es" ? "Galería de espacios" : "Spaces gallery"}
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      <meta itemProp="name" content={language === "es" ? "Galería de La Cabaña de la Lechuza" : "La Cabaña de la Lechuza Gallery"} />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-20">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            {t("gallery.subtitle")}
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            {t("gallery.title")} <span className="text-primary italic">{t("gallery.titleAccent")}</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
            {t("gallery.description")}
          </p>
        </header>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" itemProp="associatedMedia">
          {spaces.map((space, index) => (
            <button
              key={space.id}
              onClick={() => openSlideshow(space)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer text-left card-shadow hover:hover-lift transition-all duration-500 ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              aria-label={language === "es" ? `Ver galería de ${space.name}` : `View ${space.name} gallery`}
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <div className={`overflow-hidden ${index === 0 ? "aspect-[2/1]" : "aspect-[4/3]"}`}>
                <img
                  src={space.cover}
                  alt={language === "es" 
                    ? `Foto ${space.name.toLowerCase()} La Cabaña de la Lechuza casa rural Cabranes Asturias - Alojamiento rural Comarca de la Sidra`
                    : `${space.name} photo La Cabaña de la Lechuza rural house Cabranes Asturias - Rural accommodation Cider Region`
                  }
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "low"}
                  itemProp="contentUrl"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-background text-xl md:text-2xl mb-1" itemProp="name">
                      {space.name}
                    </h3>
                    <p className="font-body text-background/70 text-sm" itemProp="description">
                      {space.description}
                    </p>
                  </div>
                  {space.images.length > 1 && (
                    <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-1.5 rounded-full" aria-label={`${space.images.length} ${language === "es" ? "fotos" : "photos"}`}>
                      <Images className="w-4 h-4 text-background" aria-hidden="true" />
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
          aria-label={selectedSpace.name}
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
              aria-label={t("gallery.closeGallery")}
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
                aria-label={t("gallery.prevPhoto")}
              >
                <ChevronLeft size={48} strokeWidth={1.5} />
              </button>

              <button
                onClick={goNext}
                className="absolute right-4 md:right-8 text-background/70 hover:text-background transition-colors p-3 hover:bg-background/10 rounded-full z-10"
                aria-label={t("gallery.nextPhoto")}
              >
                <ChevronRight size={48} strokeWidth={1.5} />
              </button>
            </>
          )}

          {/* Main Image */}
          <img
            src={selectedSpace.images[currentIndex]}
            alt={language === "es"
              ? `Foto ${selectedSpace.name.toLowerCase()} La Cabaña de la Lechuza casa rural Cabranes Asturias - Imagen ${currentIndex + 1}`
              : `${selectedSpace.name} photo La Cabaña de la Lechuza rural house Cabranes Asturias - Image ${currentIndex + 1}`
            }
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-sm shadow-2xl"
          />

          {/* Thumbnail Navigation */}
          {selectedSpace.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2" role="tablist">
              {selectedSpace.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden transition-all duration-300 ${
                    idx === currentIndex 
                      ? "ring-2 ring-primary opacity-100 scale-110" 
                      : "opacity-50 hover:opacity-80"
                  }`}
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-label={`${t("gallery.thumbnail")} ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt=""
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