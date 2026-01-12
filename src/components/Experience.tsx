import bedroomPrincipal from "@/assets/bedroom-principal.jpg";
import { TreeDeciduous, Home, MapPin, Award, Droplets, Flame } from "lucide-react";

const Experience = () => {
  const features = [
    { icon: TreeDeciduous, title: "Manzanos", desc: "Rodeada de pumarada" },
    { icon: Flame, title: "Chimenea", desc: "Estufa de pellets" },
    { icon: Droplets, title: "Agua de manantial", desc: "Directa de montaña" },
    { icon: Award, title: "Rehabilitada 2023", desc: "Con encanto original" },
  ];

  return (
    <section id="experiencia" className="py-28 bg-card relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={bedroomPrincipal}
              alt="Habitación El Tejo - Dormitorio principal con piedra natural"
              className="relative w-full h-[450px] md:h-[550px] object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 md:-bottom-10 md:-right-10 bg-primary text-primary-foreground p-8 md:p-10 rounded-sm shadow-xl">
              <p className="font-display text-4xl md:text-5xl">1.500m²</p>
              <p className="font-body text-sm uppercase tracking-wider opacity-90 mt-1">
                De terreno privado
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
              La Experiencia
            </span>
            <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.15]">
              Tu Refugio en la
              <span className="text-primary italic"> Comarca de la Sidra</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-6 leading-relaxed">
              Bienvenido a La Cabaña de la Lechuza, tu refugio ideal en plena naturaleza asturiana. 
              Rehabilitada en 2023, nuestra casa ofrece un entorno cálido y cómodo, perfecto para 
              desconectar y disfrutar de la tranquilidad.
            </p>
            <p className="font-body text-muted-foreground text-lg mb-10 leading-relaxed">
              Con 3 habitaciones, un acogedor salón con chimenea de pellets y un amplio porche 
              cubierto con mesa para 10 comensales, es el lugar ideal para familias y grupos de 
              hasta 7 personas. Al levantarte solo escucharás pajaritos.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group/item flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover/item:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-display text-foreground text-lg">
                        {item.title}
                      </p>
                      <p className="font-body text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
