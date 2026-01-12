import { 
  Ban, 
  CigaretteOff, 
  PawPrint, 
  Trash2, 
  AlertTriangle,
  Clock
} from "lucide-react";

const rules = [
  {
    icon: CigaretteOff,
    title: "Prohibido fumar",
    description: "No se permite fumar en el interior de la casa.",
  },
  {
    icon: PawPrint,
    title: "Sin mascotas con pelo",
    description: "No se admiten mascotas con pelo por motivos de alergias.",
  },
  {
    icon: Ban,
    title: "No tirar papel al WC",
    description: "Sistema de fosa séptica. Por favor, usa la papelera.",
  },
  {
    icon: Trash2,
    title: "Gestión de residuos",
    description: "La basura debe gestionarse por el huésped. Punto limpio a 7km.",
  },
  {
    icon: Clock,
    title: "Horarios",
    description: "Check-in desde las 16:00. Check-out hasta las 11:00.",
  },
  {
    icon: AlertTriangle,
    title: "Respeto al entorno",
    description: "Respeta la tranquilidad y el entorno natural de la zona.",
  },
];

const HouseRules = () => {
  return (
    <section id="normas" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Para tu comodidad
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl mb-6">
            Normas de la <span className="text-primary italic">Casa</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Pequeñas normas para garantizar una estancia agradable para todos
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="bg-background p-6 rounded-lg card-shadow text-center hover:hover-lift transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <rule.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-foreground text-sm mb-2">{rule.title}</h4>
              <p className="font-body text-muted-foreground text-xs leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseRules;
