import porcheHero from "@/assets/porche-hero.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${porcheHero})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 animate-fade-up opacity-0 delay-100">
          <span className="font-body text-background/80 text-xs md:text-sm uppercase tracking-[0.4em] px-4 py-2 border border-background/30 rounded-full backdrop-blur-sm bg-background/5">
            Comarca de la Sidra · La Roza, Cabranes
          </span>
        </div>
        
        <h1 className="font-display text-background text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-shadow animate-fade-up opacity-0 delay-200">
          La Cabaña de
          <span className="block italic text-accent">la Lechuza</span>
        </h1>
        
        <p className="font-body text-background/85 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0 delay-300">
          Bienvenido a tu refugio ideal en plena naturaleza asturiana. Rehabilitada en 2023, 
          nuestra casa ofrece un entorno cálido y cómodo, perfecto para desconectar y disfrutar de la tranquilidad.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-400">
          <a
            href="https://www.airbnb.es/rooms/1232063912950498409"
            target="_blank"
            rel="noopener noreferrer"
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
            { value: "2", label: "Baños" },
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
