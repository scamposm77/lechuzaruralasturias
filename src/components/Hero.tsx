import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroPaisaje from "@/assets/hero-paisaje.jpg";
import heroExterior from "@/assets/hero-exterior.jpg";
import heroPorche from "@/assets/hero-porche.jpg";
import heroCasa from "@/assets/hero-casa.jpg";

const heroImages = [
  { src: heroCasa, alt: "Fachada exterior de La Cabaña de la Lechuza, casa rural en Cabranes, Asturias" },
  { src: heroPorche, alt: "Porche cubierto con vistas panorámicas al valle asturiano" },
  { src: heroPaisaje, alt: "Paisaje natural de la Comarca de la Sidra con montañas y prados verdes" },
  { src: heroExterior, alt: "Jardín con manzanos centenarios de la casa rural en La Roza" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" aria-label="Bienvenida a La Cabaña de la Lechuza" className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image.src})` }}
          role="img"
          aria-label={image.alt}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20 md:pt-0">
        <h1 className="font-display text-background text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-4 text-shadow animate-fade-up opacity-0 delay-100">
          La Cabaña de
          <span className="block italic text-accent">la Lechuza</span>
        </h1>

        <div className="inline-block mb-8 animate-fade-up opacity-0 delay-200">
          <span className="font-body text-background/80 text-xs md:text-sm uppercase tracking-[0.4em] px-4 py-2 border border-background/30 rounded-full backdrop-blur-sm bg-background/5">
            Comarca de la Sidra · La Roza, Cabranes
          </span>
        </div>
        
        <p className="font-body text-background/85 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0 delay-300">
          Tu casa rural con encanto en el corazón de la Comarca de la Sidra. 
          Rehabilitada en 2023, nuestra casa ofrece un alojamiento íntimo para familias y grupos, perfecto para escapadas rurales y vacaciones en Asturias.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-400">
          <a
            href="#contacto"
            className="group px-10 py-4 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Reservar Ahora
          </a>
          <a
            href="#espacios"
            className="px-10 py-4 bg-background/10 text-background border border-background/40 rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-background/20 transition-all duration-300 backdrop-blur-sm"
          >
            Conoce Más
          </a>
        </div>

        {/* Property Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-3xl mx-auto animate-fade-up opacity-0 delay-500">
          {[
            { value: "7", label: "Huéspedes" },
            { value: "3", label: "Habitaciones" },
            { value: "1+1", label: "Baño y Aseo" },
            { value: "140m²", label: "Superficie" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="font-display text-background text-4xl md:text-5xl mb-2 group-hover:text-accent transition-colors duration-300">
                {stat.value}
              </p>
              <p className="font-body text-background/60 text-xs uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Slideshow Indicators */}
        <div className="mt-12 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-background w-8"
                  : "bg-background/40 hover:bg-background/60"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#espacios"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-background/60 hover:text-background transition-colors animate-float"
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </a>
    </section>
  );
};

export default Hero;
