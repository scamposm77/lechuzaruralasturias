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
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: UtensilsCrossed,
      title: t("services.kitchen.title"),
      description: t("services.kitchen.description"),
      image: cocinaEquipada,
      altEs: "Cocina totalmente equipada con vitrocerámica, horno, microondas y utensilios - Casa rural La Cabaña de la Lechuza Cabranes Asturias",
      altEn: "Fully equipped kitchen with ceramic hob, oven, microwave and utensils - La Cabaña de la Lechuza rural house Cabranes Asturias",
    },
    {
      icon: Flame,
      title: t("services.living.title"),
      description: t("services.living.description"),
      image: salonChimenea,
      altEs: "Salón acogedor con chimenea de pellets y sofá cama en casa rural La Cabaña de la Lechuza Asturias",
      altEn: "Cozy living room with pellet fireplace and sofa bed at La Cabaña de la Lechuza rural house Asturias",
    },
    {
      icon: TreePine,
      title: t("services.garden.title"),
      description: t("services.garden.description"),
      image: jardinPorche,
      altEs: "Porche cubierto de 35m² con mesa para 10 comensales y vistas al jardín de manzanos - Alojamiento rural Asturias",
      altEn: "35m² covered porch with table for 10 guests and views to apple orchard - Rural accommodation Asturias",
    },
    {
      icon: BedDouble,
      title: t("services.bedrooms.title"),
      description: t("services.bedrooms.description"),
      image: ventanaVistas,
      altEs: "Ventana con vistas a las montañas y prados verdes desde habitación casa rural Cabranes",
      altEn: "Window with views to mountains and green meadows from bedroom rural house Cabranes",
    },
    {
      icon: MapPin,
      title: t("services.local.title"),
      description: t("services.local.description"),
      image: banoCompleto,
      altEs: "Baño completo con ducha moderna en casa rural La Cabaña de la Lechuza Asturias",
      altEn: "Full bathroom with modern shower at La Cabaña de la Lechuza rural house Asturias",
    },
    {
      icon: Mountain,
      title: t("services.hiking.title"),
      description: t("services.hiking.description"),
      image: vistaLejana,
      altEs: "Vistas panorámicas desde la casa rural a los prados verdes y montañas de la Comarca de la Sidra",
      altEn: "Panoramic views from rural house to green meadows and mountains of the Cider Region",
    },
  ];

  const extras = [
    { icon: Wifi, label: t("services.wifi") },
    { icon: Car, label: t("services.parking") },
    { icon: Tv, label: t("services.tv") },
    { icon: Droplets, label: t("services.water") },
    { icon: Shirt, label: t("services.linens") },
    { icon: Leaf, label: t("services.heating") },
  ];

  return (
    <section 
      id="servicios" 
      aria-label={language === "es" ? "Servicios y comodidades de la casa rural" : "Rural house services and amenities"} 
      className="py-28 bg-background"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={language === "es" ? "Servicios incluidos" : "Included services"} />
      <meta itemProp="numberOfItems" content={String(services.length + extras.length)} />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-20">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            {t("services.subtitle")}
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            {t("services.title")} <span className="text-primary italic">{t("services.titleAccent")}</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
            {t("services.description")}
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-lg card-shadow hover:hover-lift transition-all duration-500"
              itemScope
              itemType="https://schema.org/Offer"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={language === "es" ? service.altEs : service.altEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  itemProp="image"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary rounded-full" aria-hidden="true">
                    <service.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-background text-xl" itemProp="name">{service.title}</h3>
                </div>
                <p className="font-body text-background/80 text-sm leading-relaxed" itemProp="description">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Extras Grid */}
        <div 
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <meta itemProp="name" content={language === "es" ? "Extras incluidos" : "Included extras"} />
          {extras.map((extra, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-card rounded-lg card-shadow"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <extra.icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-body text-foreground text-sm" itemProp="name">{extra.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div 
            className="inline-block bg-card p-8 md:p-12 rounded-lg card-shadow"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <h3 className="font-display text-foreground text-2xl md:text-3xl mb-4" itemProp="name">
              {t("services.cta.title")}
            </h3>
            <p className="font-body text-muted-foreground mb-6" itemProp="description">
              {t("services.cta.description")}
            </p>
            <a
              href="#contacto"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              aria-label={language === "es" ? "Ir al formulario de reserva" : "Go to booking form"}
            >
              {t("hero.bookNow")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;