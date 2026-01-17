import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import activity images
import tazonesImg from "@/assets/quehacer/tazones.png";
import rutaSidraImg from "@/assets/quehacer/ruta-sidra.png";
import covadongaImg from "@/assets/quehacer/covadonga.png";
import playaRodilesImg from "@/assets/quehacer/playa-rodiles.png";
import sendaOsoImg from "@/assets/quehacer/senda-oso.png";
import lastresImg from "@/assets/quehacer/lastres.png";

const activities = [
  {
    id: 1,
    titleEs: "Tazones",
    titleEn: "Tazones",
    descriptionEs: "Puerto pesquero histórico a 10 km",
    descriptionEn: "Historic fishing port 10 km away",
    image: tazonesImg,
    altEs: "Puerto pesquero de Tazones en la costa asturiana cerca de la casa rural",
    altEn: "Tazones fishing port on the Asturian coast near the rural house",
  },
  {
    id: 2,
    titleEs: "Ruta de la Sidra",
    titleEn: "Cider Route",
    descriptionEs: "Visita llagares y prueba la sidra",
    descriptionEn: "Visit cider houses and taste cider",
    image: rutaSidraImg,
    altEs: "Escanciado de sidra asturiana tradicional en la Comarca de la Sidra",
    altEn: "Traditional Asturian cider pouring in the Cider Region",
  },
  {
    id: 3,
    titleEs: "Covadonga",
    titleEn: "Covadonga",
    descriptionEs: "Lagos y santuario a 45 min",
    descriptionEn: "Lakes and sanctuary 45 min away",
    image: covadongaImg,
    altEs: "Lagos de Covadonga en los Picos de Europa Asturias",
    altEn: "Covadonga Lakes in Picos de Europa Asturias",
  },
  {
    id: 4,
    titleEs: "Playa de Rodiles",
    titleEn: "Rodiles Beach",
    descriptionEs: "Una de las mejores playas a 15 km",
    descriptionEn: "One of the best beaches 15 km away",
    image: playaRodilesImg,
    altEs: "Playa de Rodiles en Villaviciosa playa de arena dorada Asturias",
    altEn: "Rodiles Beach in Villaviciosa golden sand beach Asturias",
  },
  {
    id: 5,
    titleEs: "Senda del Oso",
    titleEn: "Bear Trail",
    descriptionEs: "Ruta en bici y osos en semilibertad",
    descriptionEn: "Cycling route and semi-free bears",
    image: sendaOsoImg,
    altEs: "Senda del Oso ruta de senderismo y ciclismo en Asturias",
    altEn: "Bear Trail hiking and cycling route in Asturias",
  },
  {
    id: 6,
    titleEs: "Lastres",
    titleEn: "Lastres",
    descriptionEs: "Pueblo marinero con encanto",
    descriptionEn: "Charming fishing village",
    image: lastresImg,
    altEs: "Pueblo marinero de Lastres en la costa asturiana",
    altEn: "Lastres fishing village on the Asturian coast",
  },
];

const ThingsToDo = () => {
  const { language } = useLanguage();

  const seo = {
    es: {
      title: "Qué Hacer",
      subtitle: "Descubre lo mejor de Asturias",
      description: "Playas, montañas, gastronomía y cultura a pocos minutos",
      cta: "Ver todas las actividades",
    },
    en: {
      title: "Things to Do",
      subtitle: "Discover the best of Asturias",
      description: "Beaches, mountains, gastronomy and culture just minutes away",
      cta: "See all activities",
    },
  };

  const content = seo[language];

  return (
    <section id="que-hacer" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-2 block">
            {content.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            {content.subtitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={activity.image}
                alt={language === "es" ? activity.altEs : activity.altEn}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{language === "es" ? activity.descriptionEs : activity.descriptionEn}</span>
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {language === "es" ? activity.titleEs : activity.titleEn}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/que-hacer">
            <Button variant="default" size="lg" className="group">
              {content.cta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
