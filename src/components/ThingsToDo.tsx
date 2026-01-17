import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Imágenes
import playaRodilesImg from "@/assets/quehacer/playa-rodiles.png";
import tazonesImg from "@/assets/quehacer/tazones.png";
import rutaSidraImg from "@/assets/quehacer/ruta-sidra.png";
import miradorFituImg from "@/assets/quehacer/mirador-fitu.png";
import lastresImg from "@/assets/quehacer/lastres.png";
import covadongaImg from "@/assets/quehacer/covadonga.png";

interface Activity {
  id: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  distance: string;
  duration: string;
  image: string;
  altEs: string;
  altEn: string;
}

const featuredActivities: Activity[] = [
  {
    id: "playa-rodiles",
    nameEs: "Playa de Rodiles",
    nameEn: "Rodiles Beach",
    descriptionEs: "Una de las playas más emblemáticas de Asturias, famosa por sus dunas y olas perfectas para surf.",
    descriptionEn: "One of the most iconic beaches in Asturias, famous for its dunes and perfect waves for surfing.",
    distance: "15 km",
    duration: "20 min",
    image: playaRodilesImg,
    altEs: "Playa de Rodiles con dunas - Excursión desde casa rural La Cabaña de la Lechuza",
    altEn: "Rodiles Beach with dunes - Day trip from La Cabaña de la Lechuza",
  },
  {
    id: "tazones",
    nameEs: "Puerto de Tazones",
    nameEn: "Tazones Port",
    descriptionEs: "Pintoresco pueblo marinero donde desembarcó Carlos V en 1517. Casas coloridas y mariscos frescos.",
    descriptionEn: "Picturesque fishing village where Charles V landed in 1517. Colorful houses and fresh seafood.",
    distance: "12 km",
    duration: "15 min",
    image: tazonesImg,
    altEs: "Puerto pesquero de Tazones con casas coloridas",
    altEn: "Tazones fishing port with colorful houses",
  },
  {
    id: "ruta-sidra",
    nameEs: "Ruta de la Sidra",
    nameEn: "Cider Route",
    descriptionEs: "Descubre las auténticas sidrerías asturianas en Villaviciosa. Visita lagares y degusta sidra natural.",
    descriptionEn: "Discover authentic Asturian cider houses in Villaviciosa. Visit cider mills and taste natural cider.",
    distance: "7 km",
    duration: "10 min",
    image: rutaSidraImg,
    altEs: "Escanciado de sidra asturiana tradicional",
    altEn: "Traditional Asturian cider pouring",
  },
  {
    id: "mirador-fitu",
    nameEs: "Mirador del Fitu",
    nameEn: "Fitu Viewpoint",
    descriptionEs: "Espectacular mirador a 635m con vistas panorámicas de 360° sobre la costa y los Picos de Europa.",
    descriptionEn: "Spectacular viewpoint at 635m with 360° panoramic views over the coast and Picos de Europa.",
    distance: "25 km",
    duration: "30 min",
    image: miradorFituImg,
    altEs: "Atardecer desde el Mirador del Fitu con vistas a los Picos de Europa",
    altEn: "Sunset from Fitu Viewpoint with views to Picos de Europa",
  },
  {
    id: "lastres",
    nameEs: "Lastres",
    nameEn: "Lastres Village",
    descriptionEs: "Uno de los pueblos más bonitos de España, premio Pueblo Ejemplar 2010. Calles empedradas y vistas al mar.",
    descriptionEn: "One of the most beautiful villages in Spain, Exemplary Village Award 2010. Cobblestone streets and sea views.",
    distance: "20 km",
    duration: "25 min",
    image: lastresImg,
    altEs: "Vista panorámica de Lastres pueblo pesquero",
    altEn: "Panoramic view of Lastres fishing village",
  },
  {
    id: "covadonga",
    nameEs: "Lagos de Covadonga",
    nameEn: "Covadonga Lakes",
    descriptionEs: "Los impresionantes Lagos de Enol y Ercina en plenos Picos de Europa. Excursión de día completo.",
    descriptionEn: "The stunning Enol and Ercina Lakes in the Picos de Europa. Full day excursion.",
    distance: "55 km",
    duration: "50 min",
    image: covadongaImg,
    altEs: "Lago Enol en Covadonga rodeado de montañas",
    altEn: "Lake Enol in Covadonga surrounded by mountains",
  },
];

const ThingsToDo = () => {
  const { language } = useLanguage();

  return (
    <section id="que-hacer" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            {language === "es" ? "Descubre el Entorno" : "Discover the Area"}
          </span>
          <h2 className="font-display text-foreground text-3xl md:text-4xl lg:text-5xl mb-4">
            {language === "es" ? "Qué Hacer" : "What to Do"}{" "}
            <span className="text-primary italic">
              {language === "es" ? "Cerca de Aquí" : "Nearby"}
            </span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "es"
              ? "Desde la casa tienes acceso privilegiado a playas, sidrerías, rutas de senderismo y los mejores rincones de Asturias."
              : "From the house you have privileged access to beaches, cider houses, hiking trails and the best spots in Asturias."}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {featuredActivities.map((activity) => (
            <article
              key={activity.id}
              className="bg-background rounded-lg overflow-hidden card-shadow hover:hover-lift transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={activity.image}
                  alt={language === "es" ? activity.altEs : activity.altEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {language === "es" ? activity.nameEs : activity.nameEn}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-3 line-clamp-2">
                  {language === "es" ? activity.descriptionEs : activity.descriptionEn}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {activity.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {activity.duration}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <Link
            to="/que-hacer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
          >
            {language === "es" ? "Ver Todas las Actividades" : "View All Activities"}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
