import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Imágenes
import playaRodilesImg from "@/assets/quehacer/playa-rodiles.png";
import tazonesImg from "@/assets/quehacer/tazones.png";
import rutaSidraImg from "@/assets/quehacer/ruta-sidra.png";
import miradorFituImg from "@/assets/quehacer/mirador-fitu.png";
import lastresImg from "@/assets/quehacer/lastres.png";
import covadongaImg from "@/assets/quehacer/covadonga.png";

const highlights = [
  { id: "playa-rodiles", nameEs: "Playa de Rodiles", nameEn: "Rodiles Beach", image: playaRodilesImg },
  { id: "tazones", nameEs: "Puerto de Tazones", nameEn: "Tazones Port", image: tazonesImg },
  { id: "ruta-sidra", nameEs: "Ruta de la Sidra", nameEn: "Cider Route", image: rutaSidraImg },
  { id: "mirador-fitu", nameEs: "Mirador del Fitu", nameEn: "Fitu Viewpoint", image: miradorFituImg },
  { id: "lastres", nameEs: "Lastres", nameEn: "Lastres Village", image: lastresImg },
  { id: "covadonga", nameEs: "Lagos de Covadonga", nameEn: "Covadonga Lakes", image: covadongaImg },
];

const ThingsToDo = () => {
  const { language } = useLanguage();

  return (
    <section id="que-hacer" className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-3 font-semibold">
            {language === "es" ? "Descubre el Entorno" : "Discover the Area"}
          </span>
          <h2 className="font-display text-foreground text-3xl md:text-4xl mb-3">
            {language === "es" ? "Qué Hacer" : "What to Do"}{" "}
            <span className="text-primary italic">
              {language === "es" ? "Cerca" : "Nearby"}
            </span>
          </h2>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 max-w-4xl mx-auto mb-8">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={language === "es" ? item.nameEs : item.nameEn}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium leading-tight">
                {language === "es" ? item.nameEs : item.nameEn}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <Link
            to="/que-hacer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
          >
            {language === "es" ? "Ver Todas las Actividades" : "View All Activities"}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
