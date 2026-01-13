import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images, Bed, Mountain, Users, Eye, User } from "lucide-react";
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
  bedType: string;
  capacity: string;
  views: string;
  description: string;
  cover: string;
  images: string[];
  icon: any;
};

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [detailRoom, setDetailRoom] = useState<Room | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();

  const rooms: Room[] = [
    {
      name: t("rooms.tejo.name"),
      bedType: language === "es" ? "King size (160x200)" : "King size (160x200)",
      capacity: language === "es" ? "2 personas" : "2 guests",
      views: language === "es" ? "Vistas al valle" : "Valley views",
      description: t("rooms.tejo.description"),
      cover: habTejo,
      images: [habTejo, tejo01, tejo02, tejo03, tejo04, tejo05],
      icon: Mountain,
    },
    {
      name: t("rooms.pumarada.name"),
      bedType: language === "es" ? "Matrimonio (135x190)" : "Double (135x190)",
      capacity: language === "es" ? "2 personas" : "2 guests",
      views: language === "es" ? "Vistas al campo" : "Countryside views",
      description: t("rooms.pumarada.description"),
      cover: habPumarada,
      images: [habPumarada, pumarada01, pumarada02, pumarada03, pumarada04],
      icon: Bed,
    },
    {
      name: t("rooms.lechuza.name"),
      bedType: language === "es" ? "Litera (90x190)" : "Bunk beds (90x190)",
      capacity: language === "es" ? "2-3 personas" : "2-3 guests",
      views: language === "es" ? "Ambiente luminoso" : "Bright atmosphere",
      description: t("rooms.lechuza.description"),
      cover: habLechuza,
      images: [habLechuza, lechuza01, lechuza02, lechuza03, lechuza04, lechuza05],
      icon: Users,
    },
  ];

  const openSlideshow = (room: Room, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedRoom(room);
    setCurrentIndex(0);
  };

  const openDetails = (room: Room, e: React.MouseEvent) => {
    e.stopPropagation();
    setDetailRoom(room);
  };

  const closeSlideshow = () => {
    setSelectedRoom(null);
    setCurrentIndex(0);
  };

  const closeDetails = () => {
    setDetailRoom(null);
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
    if (e.key === "Escape") {
      closeSlideshow();
      closeDetails();
    }
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
        <header className="text-center mb-16">
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
              className="group bg-background rounded-lg overflow-hidden card-shadow hover:hover-lift transition-all duration-500"
              itemScope
              itemType="https://schema.org/HotelRoom"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />
              
              {/* Image with photo count badge */}
              <div 
                className="aspect-[4/3] overflow-hidden relative cursor-pointer"
                onClick={(e) => openSlideshow(room, e)}
              >
                <img
                  src={room.cover}
                  alt={language === "es"
                    ? `Foto habitación ${room.name} La Cabaña de la Lechuza casa rural Cabranes Asturias - ${room.bedType}`
                    : `${room.name} room photo La Cabaña de la Lechuza rural house Cabranes Asturias - ${room.bedType}`
                  }
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
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
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 px-4 py-2 rounded-full font-body text-sm text-foreground">
                    {language === "es" ? "Ver fotos" : "View photos"}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Room name and bed type */}
                <h3 className="font-display text-foreground text-2xl mb-1" itemProp="name">
                  {room.name}
                </h3>
                <p className="font-body text-primary text-sm font-semibold mb-4">
                  {room.bedType}
                </p>
                
                {/* Info pills */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span className="font-body text-sm">{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span className="font-body text-sm">{room.views}</span>
                  </div>
                </div>
                
                {/* View details button */}
                <button
                  onClick={(e) => openDetails(room, e)}
                  className="w-full py-3 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground rounded-sm font-body text-sm font-medium transition-all duration-300"
                >
                  {language === "es" ? "Ver detalles" : "View details"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {detailRoom && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeDetails}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label={detailRoom.name}
        >
          <div 
            className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-foreground text-2xl">
                  {detailRoom.name}
                </h3>
                <p className="font-body text-primary text-sm font-semibold">
                  {detailRoom.bedType}
                </p>
              </div>
              <button
                onClick={closeDetails}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
                aria-label={language === "es" ? "Cerrar" : "Close"}
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {/* Quick info */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm">{detailRoom.capacity}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                  <Eye className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm">{detailRoom.views}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                  <Bed className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm">{detailRoom.bedType}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="font-body text-muted-foreground leading-relaxed">
                {detailRoom.description}
              </p>
              
              {/* View photos button */}
              <button
                onClick={(e) => {
                  closeDetails();
                  openSlideshow(detailRoom, e);
                }}
                className="mt-6 w-full py-4 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Images className="w-5 h-5" />
                {language === "es" ? `Ver ${detailRoom.images.length} fotos` : `View ${detailRoom.images.length} photos`}
              </button>
            </div>
          </div>
        </div>
      )}

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
              ? `Foto habitación ${selectedRoom.name} La Cabaña de la Lechuza casa rural Cabranes Asturias - Imagen ${currentIndex + 1}`
              : `${selectedRoom.name} room photo La Cabaña de la Lechuza rural house Cabranes Asturias - Image ${currentIndex + 1}`
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
