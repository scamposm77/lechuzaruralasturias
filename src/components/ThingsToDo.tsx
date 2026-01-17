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

const highlights = [
  { id: "playa-rodiles", nameEs: "Playa de Rodiles", nameEn: "Rodiles Beach", image: playaRodilesImg, distance: "15 km", time: "20 min" },
  { id: "tazones", nameEs: "Puerto de Tazones", nameEn: "Tazones Port", image: tazonesImg, distance: "12 km", time: "15 min" },
  { id: "ruta-sidra", nameEs: "Ruta de la Sidra", nameEn: "Cider Route", image: rutaSidraImg, distance: "7 km", time: "10 min" },
  { id: "mirador-fitu", nameEs: "Mirador del Fitu", nameEn: "Fitu Viewpoint", image: miradorFituImg, distance: "25 km", time: "30 min" },
  { id: "lastres", nameEs: "Lastres", nameEn: "Lastres Village", image: lastresImg, distance: "20 km", time: "25 min" },
  { id: "covadonga", nameEs: "Lagos de Covadonga", nameEn: "Covadonga Lakes", image: covadongaImg, distance: "55 km", time: "50 min" },
];

const ThingsToDo = () => {
  const { language } = useLanguage();

  return (
    <section id="que-hacer" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-3 font-semibold">
            {language === "es" ? "Descubre el Entorno" : "Discover the Area"}
          </span>
          <h2 className="font-display text-foreground text-3xl md:text-4xl lg:text-5xl mb-4">
            {language === "es" ? "Qué Hacer" : "What to Do"}{" "}
            <span className="text-primary italic">
              {language === "es" ? "Cerca" : "Nearby"}
            </span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "es"
              ? "Una ubicación privilegiada para explorar lo mejor de Asturias. Playas, montañas, sidrerías y pueblos con encanto, todo a pocos minutos."
              : "A privileged location to explore the best of Asturias. Beaches, mountains, cider houses and charming villages, all just minutes away."}
          </p>
        </div>

        {/* Attractive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 max-w-6xl mx-auto mb-10">
          {highlights.map((item) => (
            <div key={item.id} className="group">
              {/* Image with hover overlay */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 card-shadow">
                <img
                  src={item.image}
                  alt={language === "es" ? item.nameEs : item.nameEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Hover overlay with name */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                  <span className="text-primary-foreground font-display text-center text-sm md:text-base font-medium">
                    {language === "es" ? item.nameEs : item.nameEn}
                  </span>
                </div>
              </div>
              {/* Distance and time info */}
              <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-primary" />
                  {item.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-primary" />
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <Link
            to="/que-hacer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors group shadow-lg hover:shadow-xl"
          >
            {language === "es" ? "Descubre Todas las Actividades" : "Discover All Activities"}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
