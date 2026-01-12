import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images, Bed, Mountain, Users } from "lucide-react";

// Habitación El Tejo
import habTejo from "@/assets/hab-tejo.jpg";

// Habitación La Pumarada
import habPumarada from "@/assets/hab-pumarada.jpg";

// Habitación La Lechuza
import habLechuza from "@/assets/hab-lechuza.jpg";
import lechuza01 from "@/assets/habitaciones/lechuza-01.jpg";
import lechuza02 from "@/assets/habitaciones/lechuza-02.jpg";
import lechuza03 from "@/assets/habitaciones/lechuza-03.jpg";
import lechuza04 from "@/assets/habitaciones/lechuza-04.jpg";

type Room = {
  name: string;
  subtitle: string;
  description: string;
  cover: string;
  images: string[];
  icon: any;
  features: string[];
};

const rooms: Room[] = [
  {
    name: "El Tejo",
    subtitle: "Habitación Principal",
    description: "Cama King size (180x200cm), paredes de piedra natural y ventana con vistas al valle. El dormitorio más espacioso y acogedor.",
    cover: habTejo,
    images: [habTejo],
    icon: Mountain,
    features: ["Cama King 180x200", "Pared de piedra", "Vistas al valle"],
  },
  {
    name: "La Pumarada",
    subtitle: "Habitación Doble",
    description: "Cama de matrimonio (135x190cm) con vistas a los valles y a la pumarada. Ambiente tranquilo y luminoso.",
    cover: habPumarada,
    images: [habPumarada],
    icon: Bed,
    features: ["Cama 135x190", "Vistas a pumarada", "Luz natural"],
  },
  {
    name: "La Lechuza",
    subtitle: "Habitación Familiar",
    description: "Ideal para niños, con litera metálica (cama inferior de matrimonio). Perfecta para familias con pequeños aventureros.",
    cover: habLechuza,
    images: [habLechuza, lechuza01, lechuza02, lechuza03, lechuza04],
    icon: Users,
    features: ["Litera metálica", "Cama inferior doble", "Ideal niños"],
  },
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section id="habitaciones" className="py-28 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Descanso Asegurado
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            Nuestras <span className="text-primary italic">Habitaciones</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            3 dormitorios dobles con capacidad para 7 personas. 
            Cada habitación ha sido decorada con encanto para tu máximo confort.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <button
              key={room.name}
              onClick={() => openSlideshow(room)}
              className="group bg-background rounded-lg overflow-hidden card-shadow hover:hover-lift transition-all duration-500 text-left cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={room.cover}
                  alt={`Habitación ${room.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-3 bg-primary/90 backdrop-blur-sm rounded-full">
                  <room.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                {room.images.length > 1 && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Images className="w-4 h-4 text-background" />
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
                <h3 className="font-display text-foreground text-2xl mb-3">
                  {room.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {room.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
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
            </button>
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
              aria-label="Cerrar galería"
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
            src={selectedRoom.images[currentIndex]}
            alt={`${selectedRoom.name} - Foto ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-sm shadow-2xl"
          />

          {/* Thumbnail Navigation */}
          {selectedRoom.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2">
              {selectedRoom.images.map((img, idx) => (
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

export default Rooms;
