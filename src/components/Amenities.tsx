import {
  Wifi,
  Car,
  UtensilsCrossed,
  Flame,
  Waves,
  TreeDeciduous,
  Mountain,
  Dog,
  Wind,
  Tv,
  WashingMachine,
  Coffee,
} from "lucide-react";

const amenities = [
  { icon: Waves, label: "Piscina Privada", desc: "Refrescante y exclusiva" },
  { icon: Wifi, label: "WiFi Gratuito", desc: "Conexión de alta velocidad" },
  { icon: Car, label: "Parking Privado", desc: "Amplio y seguro" },
  { icon: Flame, label: "Chimenea", desc: "Noches acogedoras" },
  { icon: UtensilsCrossed, label: "Cocina Equipada", desc: "Todo lo necesario" },
  { icon: TreeDeciduous, label: "Jardín Privado", desc: "2.000m² de naturaleza" },
  { icon: Mountain, label: "Vistas Panorámicas", desc: "Olivares y montañas" },
  { icon: Dog, label: "Pet Friendly", desc: "Mascotas bienvenidas" },
  { icon: Wind, label: "Aire Acondicionado", desc: "Confort todo el año" },
  { icon: Tv, label: "Smart TV", desc: "Netflix incluido" },
  { icon: WashingMachine, label: "Lavadora", desc: "Para estancias largas" },
  { icon: Coffee, label: "Cafetera Nespresso", desc: "Desayunos perfectos" },
];

const Amenities = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-3">
            Servicios y Comodidades
          </p>
          <h2 className="font-display text-foreground text-3xl md:text-5xl font-medium mb-4">
            Todo lo que Necesitas
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Hemos pensado en cada detalle para que tu estancia sea perfecta.
            Disfruta de todas las comodidades en un entorno natural único.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-sm card-shadow hover:hover-lift transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-foreground text-base font-medium mb-1">
                  {amenity.label}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {amenity.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
