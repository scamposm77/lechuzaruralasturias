import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroPaisaje from "@/assets/hero-paisaje.jpg";
import heroExterior from "@/assets/hero-exterior.jpg";
import heroPorche from "@/assets/hero-porche.jpg";
import heroCasa from "@/assets/hero-casa.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();

  const heroImages = [
    { 
      src: heroCasa, 
      alt: language === "es" 
        ? "Foto fachada exterior La Cabaña de la Lechuza casa rural Cabranes Asturias" 
        : "Exterior facade photo La Cabaña de la Lechuza rural house Cabranes Asturias"
    },
    { 
      src: heroPorche, 
      alt: language === "es"
        ? "Foto porche cubierto La Cabaña de la Lechuza casa rural Cabranes Asturias - Vistas al valle"
        : "Covered porch photo La Cabaña de la Lechuza rural house Cabranes Asturias - Valley views"
    },
    { 
      src: heroPaisaje, 
      alt: language === "es"
        ? "Foto paisaje natural Comarca de la Sidra Cabranes Asturias - Montañas y prados verdes"
        : "Natural landscape photo Cider Region Cabranes Asturias - Mountains and green meadows"
    },
    { 
      src: heroExterior, 
      alt: language === "es"
        ? "Foto jardín La Cabaña de la Lechuza casa rural Cabranes Asturias - Manzanos centenarios"
        : "Garden photo La Cabaña de la Lechuza rural house Cabranes Asturias - Centuries-old apple trees"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const stats = [
    { value: "7", label: t("hero.guests") },
    { value: "3", label: t("hero.bedrooms") },
    { value: "1+1", label: t("hero.bathrooms") },
    { value: "35m²", label: t("hero.porch") },
    { value: "140m²", label: t("hero.surface") },
  ];

  return (
    <section 
      id="inicio" 
      aria-label={language === "es" ? "Bienvenida a La Cabaña de la Lechuza" : "Welcome to La Cabaña de la Lechuza"} 
      className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden"
      itemScope 
      itemType="https://schema.org/LodgingBusiness"
    >
      <meta itemProp="name" content="La Cabaña de la Lechuza" />
      <meta itemProp="description" content={t("hero.description")} />
      <meta itemProp="address" content="Barrio la Roza s/n, 33310 Cabranes, Asturias, Spain" />
      <meta itemProp="telephone" content="+34625081519" />
      <meta itemProp="email" content="info@lechuzaruralasturias.es" />
      <meta itemProp="priceRange" content="€€" />

      {/* Background Slideshow - First image eagerly loaded, rest lazy */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          role="img"
          aria-label={image.alt}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding={index === 0 ? "sync" : "async"}
            fetchPriority={index === 0 ? "high" : "low"}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-20 md:pt-8">
        <h1 
          className="font-display text-background text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-2 md:mb-4 text-shadow animate-fade-up opacity-0 delay-100"
          itemProp="name"
        >
          {t("hero.title")}
          <span className="block italic text-accent">{t("hero.titleAccent")}</span>
        </h1>

        <div className="inline-block mb-3 md:mb-6 animate-fade-up opacity-0 delay-200">
          <span 
            className="font-body text-background/80 text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] px-3 md:px-4 py-1.5 md:py-2 border border-background/30 rounded-full backdrop-blur-sm bg-background/5"
            itemProp="areaServed"
          >
            {t("hero.location")}
          </span>
        </div>
        
        <p 
          className="font-body text-background/85 text-xs md:text-lg lg:text-xl max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-4 md:mb-8 leading-relaxed animate-fade-up opacity-0 delay-300 px-2 md:px-0"
          itemProp="description"
        >
          {t("hero.description")}
        </p>
        
        {/* Price Badge */}
        <div className="mb-4 md:mb-8 animate-fade-up opacity-0 delay-350">
          <span className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-6 py-1.5 md:py-3 bg-primary/90 text-primary-foreground rounded-full font-body text-[10px] md:text-base font-semibold shadow-lg backdrop-blur-sm">
            <span className="opacity-90">{language === "es" ? "Desde" : "From"}</span>
            <span className="text-accent font-display text-sm md:text-xl">120€</span>
            <span className="opacity-90">/</span>
            <span>{language === "es" ? "noche · Sin comisiones" : "night · No fees"}</span>
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 animate-fade-up opacity-0 delay-400">
          <a
            href="#contacto"
            className="group px-6 md:px-10 py-2.5 md:py-4 bg-primary text-primary-foreground rounded-sm font-body text-[10px] md:text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            aria-label={language === "es" ? "Ir al formulario de reserva" : "Go to booking form"}
          >
            {t("hero.bookNow")}
          </a>
          <a
            href="#espacios"
            className="px-6 md:px-10 py-2.5 md:py-4 bg-background/10 text-background border border-background/40 rounded-sm font-body text-[10px] md:text-sm font-semibold uppercase tracking-wider hover:bg-background/20 transition-all duration-300 backdrop-blur-sm"
            aria-label={language === "es" ? "Ver más información sobre la casa" : "Learn more about the house"}
          >
            {t("hero.learnMore")}
          </a>
        </div>

        {/* Property Stats */}
        <div 
          className="mt-6 md:mt-16 grid grid-cols-5 gap-1 md:gap-8 max-w-4xl mx-auto animate-fade-up opacity-0 delay-500"
          itemProp="amenityFeature"
          itemScope
          itemType="https://schema.org/LocationFeatureSpecification"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <p 
                className="font-display text-background text-xl md:text-5xl mb-0.5 md:mb-2 group-hover:text-accent transition-colors duration-300"
                itemProp="value"
              >
                {stat.value}
              </p>
              <p 
                className="font-body text-background/70 text-[8px] md:text-xs uppercase tracking-[0.05em] md:tracking-[0.2em] leading-tight"
                itemProp="name"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Slideshow Indicators */}
        <div className="mt-12 flex justify-center gap-2" role="tablist" aria-label={language === "es" ? "Selector de imágenes" : "Image selector"}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-background w-8"
                  : "bg-background/40 hover:bg-background/60"
              }`}
              aria-label={`${t("hero.viewImage")} ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#espacios"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-background/60 hover:text-background transition-colors animate-float"
        aria-label={language === "es" ? "Desplazarse hacia abajo" : "Scroll down"}
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </a>
    </section>
  );
};

export default Hero;