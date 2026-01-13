import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images, Bed, Mountain, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Habitación El Tejo
import habTejo from "@/assets/hab-tejo.jpg";
import tejo01 from "@/assets/habitaciones/tejo-01.jpg";
import tejo02 from "@/assets/habitaciones/tejo-02.jpg";
import tejo03 from "@/assets/habitaciones/tejo-03.jpg";
import tejo04 from "@/assets/habitaciones/tejo-04.jpg";
import tejo05 from "@/assets/habitaciones/tejo-05.jpg";

// Habitación La Pumarada
import habPumarada from "@/assets/hab-pumarada.jpg";
import pumarada01 from "@/assets/habitaciones/pumarada-01.jpg";
import pumarada02 from "@/assets/habitaciones/pumarada-02.jpg";
import pumarada03 from "@/assets/habitaciones/pumarada-03.jpg";
import pumarada04 from "@/assets/habitaciones/pumarada-04.jpg";

// Habitación La Lechuza
import habLechuza from "@/assets/hab-lechuza.jpg";
import lechuza01 from "@/assets/habitaciones/lechuza-01.jpg";
import lechuza02 from "@/assets/habitaciones/lechuza-02.jpg";
import lechuza03 from "@/assets/habitaciones/lechuza-03.jpg";
import lechuza04 from "@/assets/habitaciones/lechuza-04.jpg";
import lechuza05 from "@/assets/habitaciones/lechuza-05.jpg";

type Room = {
  name: string;
  subtitle: string;
  description: string;
  cover: string;
  images: string[];
  icon: any;
  features: string[];
};

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();

  const rooms: Room[] = [
    {
      name: t("rooms.tejo.name"),
      subtitle: t("rooms.tejo.subtitle"),
      description: t("rooms.tejo.description"),
      cover: habTejo,
      images: [habTejo, tejo01, tejo02, tejo03, tejo04, tejo05],
      icon: Mountain,
      features: [t("rooms.tejo.bed"), t("rooms.tejo.stone"), t("rooms.tejo.views"), t("rooms.tejo.wardrobe")],
    },
    {
      name: t("rooms.pumarada.name"),
      subtitle: t("rooms.pumarada.subtitle"),
      description: t("rooms.pumarada.description"),
      cover: habPumarada,
      images: [habPumarada, pumarada01, pumarada02, pumarada03, pumarada04],
      icon: Bed,
      features: [t("rooms.pumarada.bed"), t("rooms.pumarada.views"), t("rooms.pumarada.light"), t("rooms.pumarada.wardrobe")],
    },
    {
      name: t("rooms.lechuza.name"),
      subtitle: t("rooms.lechuza.subtitle"),
      description: t("rooms.lechuza.description"),
      cover: habLechuza,
      images: [habLechuza, lechuza01, lechuza02, lechuza03, lechuza04, lechuza05],
      icon: Users,
      features: [t("rooms.lechuza.bunk"), t("rooms.lechuza.light"), t("rooms.lechuza.kids")],
    },
  ];

  const openSlideshow = (room: Room) => {
    setSelectedRoom(room);
    setCurrentIndex(0);
  };

  const closeSlideshow = () => {
    setSelectedRoom(null);
    setCurrentIndex(0);
  };

  const goNext = () => {
    if (selectedRoom) {
      setCurrentIndex((prev) => (prev + 1) % selectedRoom.images.length);
    }
  };

  const goPrev = () => {
    if (selectedRoom) {
      setCurrentIndex((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "Escape") closeSlideshow();
  };

  return (
    <section 
      id="habitaciones" 
      className="py-28 bg-card"
      aria-label={language === "es" ? "Habitaciones de la casa rural" : "Rural house bedrooms"}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={language === "es" ? "Habitaciones" : "Rooms"} />
      <meta itemProp="numberOfItems" content="3" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-20">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            {t("rooms.subtitle")}
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            {t("rooms.title")} <span className="text-primary italic">{t("rooms.titleAccent")}</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
            {t("rooms.description")}
          </p>
        </header>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <article
              key={room.name}
              onClick={() => openSlideshow(room)}
              className="group bg-background rounded-lg overflow-hidden card-shadow hover:hover-lift transition-all duration-500 text-left cursor-pointer"
              itemScope
              itemType="https://schema.org/HotelRoom"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={room.cover}
                  alt={language === "es"
                    ? `Habitación ${room.name} - ${room.subtitle} en casa rural La Cabaña de la Lechuza, Asturias`
                    : `${room.name} Room - ${room.subtitle} at La Cabaña de la Lechuza rural house, Asturias`
                  }
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  itemProp="photo"
                />
                <div className="absolute top-4 left-4 p-3 bg-primary/90 backdrop-blur-sm rounded-full" aria-hidden="true">
                  <room.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                {room.images.length > 1 && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Images className="w-4 h-4 text-background" aria-hidden="true" />
                    <span className="font-body text-background text-sm">
                      {room.images.length}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <p className="font-body text-primary text-xs uppercase tracking-[0.2em] mb-2">
                  {room.subtitle}
                </p>
                <h3 className="font-display text-foreground text-2xl mb-3" itemProp="name">
                  {room.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4" itemProp="description">
                  {room.description}
                </p>
                
                <div className="flex flex-wrap gap-2" itemProp="amenityFeature">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-body"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Slideshow Modal */}
      {selectedRoom && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/98 flex items-center justify-center animate-fade-in"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label={selectedRoom.name}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10">
            <div>
              <h3 className="font-display text-background text-2xl">
                {selectedRoom.name}
              </h3>
              <p className="font-body text-background/60 text-sm">
                {currentIndex + 1} / {selectedRoom.images.length}
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
          {selectedRoom.images.length > 1 && (
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
            src={selectedRoom.images[currentIndex]}
            alt={language === "es"
              ? `Habitación ${selectedRoom.name} - ${selectedRoom.subtitle} en casa rural Asturias - Foto ${currentIndex + 1}`
              : `${selectedRoom.name} Room - ${selectedRoom.subtitle} in Asturias rural house - Photo ${currentIndex + 1}`
            }
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-sm shadow-2xl"
          />

          {/* Thumbnail Navigation */}
          {selectedRoom.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2" role="tablist">
              {selectedRoom.images.map((img, idx) => (
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

export default Rooms;