import terrace from "@/assets/terrace.jpg";

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={terrace}
              alt="Terraza al atardecer"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-primary text-primary-foreground p-6 md:p-8 rounded-sm">
              <p className="font-display text-3xl md:text-4xl font-medium">15+</p>
              <p className="font-body text-sm uppercase tracking-wider opacity-90">
                Años de experiencia
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-3">
              La Experiencia
            </p>
            <h2 className="font-display text-foreground text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              Donde el Tiempo Se Detiene
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              Casa Los Olivos es más que un alojamiento rural. Es una invitación
              a reconectar con lo esencial, a despertar con el canto de los
              pájaros y a contemplar atardeceres que pintan el cielo de oro sobre
              los olivares.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Nuestra casa de piedra centenaria ha sido restaurada con esmero,
              conservando su carácter original mientras ofrece todas las
              comodidades modernas. Un refugio perfecto para familias, parejas o
              grupos de amigos que buscan desconectar.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Arquitectura", desc: "Piedra y madera originales" },
                { title: "Entorno", desc: "Olivares y naturaleza" },
                { title: "Tranquilidad", desc: "Sin ruido, sin estrés" },
                { title: "Gastronomía", desc: "Productos locales km0" },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-primary pl-4">
                  <p className="font-display text-foreground text-lg font-medium">
                    {item.title}
                  </p>
                  <p className="font-body text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
