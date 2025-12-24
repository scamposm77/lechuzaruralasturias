import {
  Wifi,
  Car,
  UtensilsCrossed,
  Flame,
  TreeDeciduous,
  Mountain,
  Dog,
  Tv,
  WashingMachine,
  Coffee,
  Apple,
  Home,
} from "lucide-react";

const amenities = [
  { icon: TreeDeciduous, label: "1.500m² de Terreno", desc: "Jardín y manzanos" },
  { icon: Wifi, label: "WiFi Gratuito", desc: "Conexión de alta velocidad" },
  { icon: Car, label: "Parking Privado", desc: "Amplio y seguro" },
  { icon: Flame, label: "Chimenea", desc: "Noches acogedoras" },
  { icon: UtensilsCrossed, label: "Cocina Equipada", desc: "Todo lo necesario" },
  { icon: Apple, label: "Manzanos", desc: "Cosecha tu propia manzana" },
  { icon: Mountain, label: "Vistas al Valle", desc: "Naturaleza asturiana" },
  { icon: Dog, label: "Pet Friendly", desc: "Mascotas bienvenidas" },
  { icon: Home, label: "140m² de Casa", desc: "Espacios amplios" },
  { icon: Tv, label: "Smart TV", desc: "Netflix incluido" },
  { icon: WashingMachine, label: "Lavadora", desc: "Para estancias largas" },
  { icon: Coffee, label: "Cafetera", desc: "Desayunos perfectos" },
];

const Amenities = () => {
  return (
    <section id="servicios" className="py-28 bg-background relative">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent h-32" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Servicios y Comodidades
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            Todo lo que
            <span className="text-primary italic"> Necesitas</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Hemos pensado en cada detalle para que tu estancia sea perfecta
            en la Comarca de la Sidra asturiana.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-sm card-shadow hover:hover-lift transition-all duration-500 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-500 group-hover:shadow-lg">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-foreground text-lg mb-2">
                    {amenity.label}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {amenity.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
