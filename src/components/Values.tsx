import porcheExterior from "@/assets/porche-exterior.jpg";
import naturaleza from "@/assets/naturaleza-asturias.jpg";
import habTejo from "@/assets/hab-tejo.jpg";
import { Heart, Leaf, Bed } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Values = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t("values.hospitality.title"),
      description: t("values.hospitality.description"),
      image: porcheExterior,
      alt: language === "es" 
        ? "Porche de la casa rural con vistas al jardín de manzanos en la Comarca de la Sidra"
        : "Rural house porch with views of the apple orchard in the Cider Region",
    },
    {
      icon: Leaf,
      title: t("values.nature.title"),
      description: t("values.nature.description"),
      image: naturaleza,
      alt: language === "es"
        ? "Paisaje natural de Asturias con prados verdes y montañas desde la casa rural"
        : "Natural Asturian landscape with green meadows and mountains from the rural house",
    },
    {
      icon: Bed,
      title: t("values.comfort.title"),
      description: t("values.comfort.description"),
      image: habTejo,
      alt: language === "es"
        ? "Habitación El Tejo con cama king size y decoración rústica en casa rural Asturias"
        : "El Tejo room with king size bed and rustic decor in Asturias rural house",
    },
  ];

  return (
    <section 
      id="valores" 
      aria-label={language === "es" ? "Valores de La Cabaña de la Lechuza" : "Values of La Cabaña de la Lechuza"} 
      className="py-24 bg-card"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={language === "es" ? "Nuestros Valores" : "Our Values"} />
      <meta itemProp="numberOfItems" content="3" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            {t("values.subtitle")}
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            {t("values.title")} <span className="text-primary italic">{t("values.titleAccent")}</span>
          </h2>
        </header>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="group relative overflow-hidden rounded-lg card-shadow hover:hover-lift transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={value.image}
                  alt={value.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  itemProp="image"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-full" aria-hidden="true">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-background text-2xl" itemProp="name">{value.title}</h3>
                </div>
                <p className="font-body text-background/80 text-sm leading-relaxed" itemProp="description">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;