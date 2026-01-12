import cocinaEquipada from "@/assets/cocina-equipada.jpg";
import jardinPorche from "@/assets/jardin-porche.jpg";
import vistaLejana from "@/assets/vista-lejana.jpg";
import salonChimenea from "@/assets/salon-chimenea.jpg";
import banoCompleto from "@/assets/bano-completo.jpg";
import ventanaVistas from "@/assets/ventana-vistas.jpg";
import { 
  UtensilsCrossed, 
  TreePine, 
  Mountain, 
  Flame, 
  MapPin, 
  Leaf,
  Wifi,
  Car,
  Tv,
  Droplets,
  BedDouble,
  Shirt,
} from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Cocina Completa",
    description: "Vitrocerámica, horno, microondas, cafetera manual de filtro, nevera y menaje completo (vajilla, cubertería y utensilios) para cocinar como en casa.",
    image: cocinaEquipada,
  },
  {
    icon: Flame,
    title: "Salón Acogedor",
    description: "Chimenea de pellets para el invierno, sofá cama doble, Smart TV con Chromecast y juegos de mesa para disfrutar en familia.",
    image: salonChimenea,
  },
  {
    icon: TreePine,
    title: "Jardín y Porche",
    description: "1.500m² de parcela privada con manzanos y tejo centenario. Gran porche cubierto con mesa para 10 comensales y balancín con vistas.",
    image: jardinPorche,
  },
  {
    icon: BedDouble,
    title: "3 Dormitorios Dobles",
    description: "Dormitorio 1: Cama King size. Dormitorio 2: Cama de matrimonio. Dormitorio 3: Litera con cama de matrimonio inferior. Ropa de cama incluida.",
    image: ventanaVistas,
  },
  {
    icon: MapPin,
    title: "Asesoría Local",
    description: "Te ayudamos con recomendaciones sobre actividades, restaurantes y sidrerías en la Comarca de la Sidra. Conocemos cada rincón.",
    image: banoCompleto,
  },
  {
    icon: Mountain,
    title: "Rutas y Senderismo",
    description: "Cercanía a P.R. AS-147, Senda del río Viacaba y el Camino de Santiago. Entorno natural privilegiado para explorar Asturias.",
    image: vistaLejana,
  },
];

const extras = [
  { icon: Wifi, label: "WiFi gratuito en toda la casa" },
  { icon: Car, label: "Parking privado junto a la casa" },
  { icon: Tv, label: "Smart TV con Chromecast" },
  { icon: Droplets, label: "Agua potable de manantial" },
  { icon: Shirt, label: "Ropa de cama y toallas incluidas" },
  { icon: Leaf, label: "Calefacción con chimenea de pellets" },
];

const Services = () => {
  return (
    <section id="servicios" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Todo lo que necesitas
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            Nuestros <span className="text-primary italic">Servicios</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            La casa está completamente equipada para que te sientas como en casa. Disfruta de uso exclusivo de todas las estancias y zonas exteriores.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-lg card-shadow hover:hover-lift transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary rounded-full">
                    <service.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-background text-xl">{service.title}</h3>
                </div>
                <p className="font-body text-background/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extras Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {extras.map((extra, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-card rounded-lg card-shadow"
            >
              <extra.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-body text-foreground text-sm">{extra.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-card p-8 md:p-12 rounded-lg card-shadow">
            <h3 className="font-display text-foreground text-2xl md:text-3xl mb-4">
              ¡Reserva tu experiencia rural hoy mismo!
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Capacidad máxima: 7 personas. Disfruta de la paz y el encanto de Asturias.
            </p>
            <a
              href="#contacto"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Reservar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
