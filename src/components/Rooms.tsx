import habTejo from "@/assets/hab-tejo.jpg";
import habPumarada from "@/assets/hab-pumarada.jpg";
import habLechuza from "@/assets/hab-lechuza.jpg";
import { Bed, Mountain, Users } from "lucide-react";

const rooms = [
  {
    name: "El Tejo",
    subtitle: "Habitación Principal",
    description: "Cama King size (180x200cm), paredes de piedra natural y ventana con vistas al valle. El dormitorio más espacioso y acogedor.",
    image: habTejo,
    icon: Mountain,
    features: ["Cama King 180x200", "Pared de piedra", "Vistas al valle"],
  },
  {
    name: "La Pumarada",
    subtitle: "Habitación Doble",
    description: "Cama de matrimonio (135x190cm) con vistas a los valles y a la pumarada. Ambiente tranquilo y luminoso.",
    image: habPumarada,
    icon: Bed,
    features: ["Cama 135x190", "Vistas a pumarada", "Luz natural"],
  },
  {
    name: "La Lechuza",
    subtitle: "Habitación Familiar",
    description: "Ideal para niños, con litera metálica (cama inferior de matrimonio). Perfecta para familias con pequeños aventureros.",
    image: habLechuza,
    icon: Users,
    features: ["Litera metálica", "Cama inferior doble", "Ideal niños"],
  },
];

const Rooms = () => {
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
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className="group bg-background rounded-lg overflow-hidden card-shadow hover:hover-lift transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={room.image}
                  alt={`Habitación ${room.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-3 bg-primary/90 backdrop-blur-sm rounded-full">
                  <room.icon className="w-5 h-5 text-primary-foreground" />
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
