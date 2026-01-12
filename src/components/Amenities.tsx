import {
  Wifi,
  Car,
  UtensilsCrossed,
  Flame,
  TreeDeciduous,
  Mountain,
  Tv,
  WashingMachine,
  Coffee,
  Apple,
  Home,
  Droplets,
  Baby,
  Utensils,
  Sofa,
  Sun,
} from "lucide-react";

const amenities = [
  { icon: TreeDeciduous, label: "1.500m² de Terreno", desc: "Jardín con manzanos" },
  { icon: Wifi, label: "WiFi Gratuito", desc: "Conexión de alta velocidad" },
  { icon: Car, label: "Parking Privado", desc: "Amplio y gratuito" },
  { icon: Flame, label: "Chimenea Pellets", desc: "Muy calentito en invierno" },
  { icon: UtensilsCrossed, label: "Cocina Completa", desc: "Vitro, horno, microondas" },
  { icon: Apple, label: "Manzanos", desc: "Cosecha tu propia manzana" },
  { icon: Mountain, label: "Vistas al Valle", desc: "Naturaleza asturiana" },
  { icon: Home, label: "140m² de Casa", desc: "Espacios amplios" },
  { icon: Tv, label: "Smart TV", desc: "Con Chromecast" },
  { icon: WashingMachine, label: "Lavadora", desc: "Para estancias largas" },
  { icon: Coffee, label: "Cafetera Manual", desc: "Desayunos perfectos" },
  { icon: Sun, label: "Porche Cubierto", desc: "Mesa para 10 comensales" },
  { icon: Droplets, label: "Agua de Manantial", desc: "Directa de montaña" },
  { icon: Sofa, label: "Salón Acogedor", desc: "Con juegos de mesa" },
  { icon: Baby, label: "Ideal Familias", desc: "Espacio seguro para niños" },
  { icon: Utensils, label: "Todo el Menaje", desc: "No falta nada" },
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
            Hemos pensado en cada detalle para que tu estancia sea perfecta.
            La casa está cuidada al detalle, no le falta menaje de hogar.
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

        {/* Important notes */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Espacio libre de humos en interior
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              A 7 km de Villaviciosa
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Cerca de Playa Rodiles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
