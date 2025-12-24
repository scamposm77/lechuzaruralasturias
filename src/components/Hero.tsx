import heroImage from "@/assets/hero-exterior.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="font-body text-background/90 text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-up opacity-0 delay-100">
          Turismo Rural en España
        </p>
        <h1 className="font-display text-background text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 text-shadow animate-fade-up opacity-0 delay-200">
          Casa Los Olivos
        </h1>
        <p className="font-body text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up opacity-0 delay-300">
          Un refugio de paz entre olivos centenarios y paisajes mediterráneos.
          Descubre la auténtica esencia de la vida rural española.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-400">
          <a
            href="#reservar"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all hover:scale-105"
          >
            Reservar Ahora
          </a>
          <a
            href="#espacios"
            className="px-8 py-4 bg-background/10 text-background border border-background/30 rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-background/20 transition-all backdrop-blur-sm"
          >
            Descubrir Más
          </a>
        </div>

        {/* Property Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 animate-fade-up opacity-0 delay-500">
          {[
            { value: "7", label: "Huéspedes" },
            { value: "3", label: "Habitaciones" },
            { value: "2", label: "Baños" },
            { value: "140m²", label: "Superficie" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-background text-3xl md:text-4xl font-medium">
                {stat.value}
              </p>
              <p className="font-body text-background/70 text-xs uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#espacios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/70 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
