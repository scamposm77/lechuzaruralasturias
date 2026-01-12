import porcheExterior from "@/assets/porche-exterior.jpg";
import naturaleza from "@/assets/naturaleza-asturias.jpg";
import habTejo from "@/assets/hab-tejo.jpg";
import { Heart, Leaf, Bed } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Hospitalidad Asturiana",
    description: "Nos esforzamos por hacer que cada huésped se sienta como en casa, ofreciendo un servicio cálido y la auténtica hospitalidad rural asturiana.",
    image: porcheExterior,
    alt: "Porche de la casa rural con vistas al jardín de manzanos en la Comarca de la Sidra",
  },
  {
    icon: Leaf,
    title: "Naturaleza en Estado Puro",
    description: "Rodeados de la belleza natural de la Comarca de la Sidra, ofrecemos un entorno tranquilo para desconectar del estrés urbano.",
    image: naturaleza,
    alt: "Paisaje natural de Asturias con prados verdes y montañas desde la casa rural",
  },
  {
    icon: Bed,
    title: "Confort Rural",
    description: "Nuestras habitaciones y espacios están diseñados para brindar máximo confort durante tu escapada rural en Asturias.",
    image: habTejo,
    alt: "Habitación El Tejo con cama king size y decoración rústica en casa rural Asturias",
  },
];

const Values = () => {
  return (
    <section id="valores" aria-label="Valores de La Cabaña de la Lechuza" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Turismo rural con encanto
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            Nuestros <span className="text-primary italic">Valores</span>
          </h2>
        </header>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-lg card-shadow hover:hover-lift transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={value.image}
                  alt={value.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-full">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-background text-2xl">{value.title}</h3>
                </div>
                <p className="font-body text-background/80 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
