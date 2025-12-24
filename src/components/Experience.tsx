import livingRoom from "@/assets/living-room.jpg";

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={livingRoom}
              alt="Salón con pared de piedra"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-primary text-primary-foreground p-6 md:p-8 rounded-sm">
              <p className="font-display text-3xl md:text-4xl font-medium">1.500m²</p>
              <p className="font-body text-sm uppercase tracking-wider opacity-90">
                De terreno privado
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-3">
              La Experiencia
            </p>
            <h2 className="font-display text-foreground text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              En el Corazón de la Comarca de la Sidra
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              La Cabaña de la Lechuza es más que un alojamiento rural. Es una invitación
              a descubrir la auténtica Asturias, a despertar con el canto de los
              pájaros y a contemplar los verdes valles que rodean La Roza, en Cabranes.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Nuestra cabaña de piedra y madera ha sido restaurada con esmero,
              conservando los techos de madera originales y las paredes de piedra vista. 
              Un refugio perfecto para familias de hasta 7 personas que buscan desconectar
              entre manzanos y praderas asturianas.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Arquitectura", desc: "Piedra y madera originales" },
                { title: "Entorno", desc: "Manzanos y valles verdes" },
                { title: "Región", desc: "Comarca de la Sidra" },
                { title: "Gastronomía", desc: "Sidra y fabada asturiana" },
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
