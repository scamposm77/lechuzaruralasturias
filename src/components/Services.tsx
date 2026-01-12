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
  Leaf 
} from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Experiencia rural completa",
    description: "Cocina totalmente equipada (vitrocerámica, horno, microondas, cafetera manual), wifi gratuito y zonas exteriores para relajarte.",
    image: cocinaEquipada,
  },
  {
    icon: TreePine,
    title: "Rincón ajardinado",
    description: "Relájate en nuestro jardín de 1500m² con vistas a las montañas. Gran porche cubierto para 10 comensales y balancín.",
    image: jardinPorche,
  },
  {
    icon: Mountain,
    title: "Actividades y Experiencias",
    description: "Cercanía a rutas de senderismo (P.R. AS-147, Senda del río Viacaba) y el Camino de Santiago para explorar el entorno.",
    image: vistaLejana,
  },
  {
    icon: Flame,
    title: "Confort y Comodidad",
    description: "Salón con chimenea de pellets, Smart TV con Chromecast, 2 baños (1 completo + 1 aseo). Cada detalle pensado para ti.",
    image: salonChimenea,
  },
  {
    icon: MapPin,
    title: "Asesoría Local",
    description: "Te ayudamos con recomendaciones sobre actividades, restaurantes y sidrerías en la Comarca de la Sidra.",
    image: banoCompleto,
  },
  {
    icon: Leaf,
    title: "Entorno Natural Privilegiado",
    description: "Rodeados de manzanos centenarios, un tejo milenario y la tranquilidad del entorno rural. Ideal para desconectar.",
    image: ventanaVistas,
  },
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
            Te ofrecemos todo lo necesario para disfrutar al máximo de tu estancia en Asturias.
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

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-card p-8 md:p-12 rounded-lg card-shadow">
            <h3 className="font-display text-foreground text-2xl md:text-3xl mb-4">
              ¡Reserva tu experiencia rural hoy mismo!
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Disfruta de la paz y el encanto de Asturias.
            </p>
            <a
              href="https://www.airbnb.es/rooms/1232063912950498409"
              target="_blank"
              rel="noopener noreferrer"
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
