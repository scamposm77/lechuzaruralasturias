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
import { useLanguage } from "@/contexts/LanguageContext";

const HouseRules = () => {
  const { t, language } = useLanguage();

  const rulesData = [
    {
      category: t("rules.inside"),
      icon: Home,
      rules: [
        {
          icon: CigaretteOff,
          title: t("rules.noSmoking.title"),
          description: t("rules.noSmoking.description"),
        },
        {
          icon: Ban,
          title: t("rules.toilet.title"),
          description: t("rules.toilet.description"),
        },
        {
          icon: Droplets,
          title: t("rules.water.title"),
          description: t("rules.water.description"),
        },
        {
          icon: Sofa,
          title: t("rules.furniture.title"),
          description: t("rules.furniture.description"),
        },
        {
          icon: Sparkles,
          title: t("rules.checkout.title"),
          description: t("rules.checkout.description"),
        },
      ],
    },
    {
      category: t("rules.outside"),
      icon: Trees,
      rules: [
        {
          icon: Trees,
          title: t("rules.nature.title"),
          description: t("rules.nature.description"),
        },
        {
          icon: PawPrint,
          title: t("rules.animals.title"),
          description: t("rules.animals.description"),
        },
        {
          icon: Apple,
          title: t("rules.fruit.title"),
          description: t("rules.fruit.description"),
        },
        {
          icon: Trash2,
          title: t("rules.trash.title"),
          description: t("rules.trash.description"),
        },
      ],
    },
    {
      category: t("rules.general"),
      icon: Clock,
      rules: [
        {
          icon: Clock,
          title: t("rules.hours.title"),
          description: t("rules.hours.description"),
        },
        {
          icon: Users,
          title: t("rules.capacity.title"),
          description: t("rules.capacity.description"),
        },
        {
          icon: Ban,
          title: t("rules.pets.title"),
          description: t("rules.pets.description"),
        },
      ],
    },
  ];

  return (
    <section 
      id="normas" 
      className="py-28 bg-muted/30"
      aria-label={language === "es" ? "Normas de la casa" : "House rules"}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={language === "es" ? "Normas de convivencia" : "House rules"} />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            {t("rules.subtitle")}
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            {t("rules.title")} <span className="text-primary italic">{t("rules.titleAccent")}</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed" itemProp="description">
            {t("rules.description")}
          </p>
        </div>

        {/* Rules by Category */}
        <div className="max-w-6xl mx-auto space-y-12">
          {rulesData.map((section, sectionIndex) => {
            const CategoryIcon = section.icon;
            return (
              <div 
                key={section.category}
                itemScope
                itemType="https://schema.org/ItemList"
                itemProp="itemListElement"
              >
                <meta itemProp="position" content={String(sectionIndex + 1)} />
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary/10 rounded-full" aria-hidden="true">
                    <CategoryIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-foreground text-2xl md:text-3xl" itemProp="name">
                    {section.category}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.rules.map((rule, ruleIndex) => {
                    const RuleIcon = rule.icon;
                    return (
                      <article
                        key={rule.title}
                        className="bg-background p-6 rounded-sm card-shadow hover:hover-lift transition-all duration-300"
                        itemScope
                        itemType="https://schema.org/ListItem"
                        itemProp="itemListElement"
                      >
                        <meta itemProp="position" content={String(ruleIndex + 1)} />
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center" aria-hidden="true">
                            <RuleIcon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-display text-foreground text-base mb-2" itemProp="name">
                              {rule.title}
                            </h4>
                            <p className="font-body text-muted-foreground text-sm leading-relaxed" itemProp="description">
                              {rule.description}
                            </p>
                          </div>
                        </div>
                      </article>
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