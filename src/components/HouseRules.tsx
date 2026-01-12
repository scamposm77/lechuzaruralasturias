import { 
  Home,
  CigaretteOff, 
  Droplets,
  Sofa,
  Sparkles,
  Trees,
  PawPrint,
  Apple,
  Trash2,
  Clock,
  Users,
  Ban
} from "lucide-react";

const rulesData = [
  {
    category: "Dentro de la casa",
    icon: Home,
    rules: [
      {
        icon: CigaretteOff,
        title: "Espacio libre de humo",
        description: "No está permitido fumar en el interior de la vivienda. Podéis hacerlo en las zonas exteriores (porche, jardín), utilizando los ceniceros disponibles.",
      },
      {
        icon: Ban,
        title: "Sistema de saneamiento",
        description: "Importante: No tiréis papel higiénico ni ningún otro objeto al inodoro. La casa no cuenta con alcantarillado público. Utilizad siempre la papelera del baño.",
      },
      {
        icon: Droplets,
        title: "Agua potable de manantial",
        description: "El agua del grifo es completamente potable y proviene de un manantial natural de montaña. Está analizada regularmente y es segura para beber.",
      },
      {
        icon: Sofa,
        title: "Mobiliario",
        description: "Por motivos de seguridad y funcionalidad, no está permitido mover los muebles de sitio ni trasladarlos entre habitaciones.",
      },
      {
        icon: Sparkles,
        title: "Al finalizar vuestra estancia",
        description: "Os pedimos que dejéis la casa en condiciones similares a como la encontrasteis. No es necesaria una limpieza a fondo, pero sí apreciamos orden y recogida de vajilla.",
      },
    ],
  },
  {
    category: "En el exterior",
    icon: Trees,
    rules: [
      {
        icon: Trees,
        title: "Respeto al entorno natural",
        description: "Este es un espacio rural privilegiado. Por favor, no tiréis basura, no arranquéis plantas ni dañéis el paisaje.",
      },
      {
        icon: PawPrint,
        title: "Convivencia con animales",
        description: "Es habitual ver aves, gatos rurales, vacas en prados cercanos y otros animales autóctonos. Observadlos con respeto, sin molestarlos.",
      },
      {
        icon: Apple,
        title: "Fruta de temporada",
        description: "Si hay fruta madura en los árboles del jardín durante vuestra estancia, podéis recogerla con moderación y cuidado.",
      },
      {
        icon: Trash2,
        title: "Gestión de residuos",
        description: "La aldea no dispone de recogida de basura. Os pedimos que os llevéis vuestros residuos y los depositéis en los contenedores más cercanos (Villaviciosa, 7 km).",
      },
    ],
  },
  {
    category: "Normas generales",
    icon: Clock,
    rules: [
      {
        icon: Clock,
        title: "Horarios",
        description: "Entrada: 18:00-21:00h · Salida: Antes de las 11:00h. Agradecemos moderación en el volumen, especialmente en horario nocturno.",
      },
      {
        icon: Users,
        title: "Capacidad máxima",
        description: "El alojamiento tiene capacidad para 7 personas. No está permitido superar este número por motivos de seguridad y confort.",
      },
      {
        icon: Ban,
        title: "Mascotas",
        description: "No se admiten animales con pelo, para respetar las necesidades sanitarias de todos nuestros huéspedes.",
      },
    ],
  },
];

const HouseRules = () => {
  return (
    <section id="normas" className="py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Convivencia
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            Normas de la <span className="text-primary italic">Casa</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Queremos que vuestra estancia sea una experiencia inolvidable. Para garantizar la comodidad 
            de todos y preservar este rincón especial, os pedimos que tengáis en cuenta estas sencillas normas.
          </p>
        </div>

        {/* Rules by Category */}
        <div className="max-w-6xl mx-auto space-y-12">
          {rulesData.map((section) => {
            const CategoryIcon = section.icon;
            return (
              <div key={section.category}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <CategoryIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-foreground text-2xl md:text-3xl">
                    {section.category}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.rules.map((rule) => {
                    const RuleIcon = rule.icon;
                    return (
                      <div
                        key={rule.title}
                        className="bg-background p-6 rounded-sm card-shadow hover:hover-lift transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <RuleIcon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-display text-foreground text-base mb-2">
                              {rule.title}
                            </h4>
                            <p className="font-body text-muted-foreground text-sm leading-relaxed">
                              {rule.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseRules;
