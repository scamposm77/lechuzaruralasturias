import { MapPin, Plane, Mountain, Waves, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Location = () => {
  const { t, language } = useLanguage();

  const highlightedDistances = [
    {
      icon: Waves,
      name: language === "es" ? "Playas" : "Beaches",
      time: "15 min",
      description: language === "es" ? "Rodiles, Tazones" : "Rodiles, Tazones"
    },
    {
      icon: Building2,
      name: "Oviedo",
      time: "30 min",
      description: language === "es" ? "Capital de Asturias" : "Capital of Asturias"
    },
    {
      icon: Plane,
      name: language === "es" ? "Aeropuerto" : "Airport",
      time: "20 min",
      description: language === "es" ? "Aeropuerto de Asturias" : "Asturias Airport"
    },
    {
      icon: Mountain,
      name: "Picos de Europa",
      time: "45 min",
      description: language === "es" ? "Parque Nacional" : "National Park"
    }
  ];

  return (
    <section
      id="ubicacion"
      aria-label={language === "es" ? "Ubicación de la casa rural en Cabranes, Asturias" : "Rural house location in Cabranes, Asturias"}
      className="py-20 bg-background"
      itemScope
      itemType="https://schema.org/Place"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div>
            <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-3 font-semibold">
              {t("location.subtitle")}
            </span>
            <h2 className="font-display text-foreground text-3xl md:text-4xl mb-5">
              <span className="text-primary italic">{t("location.title")}</span> {t("location.titleAccent")}
            </h2>

            <div className="flex items-start gap-4 mb-6" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <p className="font-display text-foreground text-lg mb-1" itemProp="streetAddress">Barrio la Roza s/n</p>
                <p className="font-body text-muted-foreground">
                  <span itemProp="postalCode">33310</span> <span itemProp="addressLocality">Cabranes</span>, <span itemProp="addressRegion">Asturias</span>
                </p>
                <p className="font-body text-muted-foreground" itemProp="addressCountry">
                  {language === "es" ? "Comarca de la Sidra" : "Cider Region"}, <span>Spain</span>
                </p>
              </div>
            </div>

            {/* A tu alcance - Grid */}
            <div className="p-5 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-display text-foreground text-lg mb-4">
                {language === "es" ? "A tu alcance" : "Within reach"}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {highlightedDistances.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 p-3 bg-background rounded-lg"
                  >
                    <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-foreground text-sm font-medium truncate">{item.name}</p>
                      <p className="font-display text-primary text-sm font-semibold">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-body text-muted-foreground text-xs mt-3 text-center">
                {language === "es" ? "* Tiempos en coche desde La Roza" : "* Drive times from La Roza"}
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-3">
            <div className="aspect-[4/3] rounded-lg overflow-hidden card-shadow" itemProp="hasMap" itemScope itemType="https://schema.org/Map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5787.6744!2d-5.4169!3d43.4083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368b5d1c8b8b8b%3A0x0!2sLa%20Roza%2C%20Cabranes%2C%20Asturias!5e0!3m2!1ses!2ses!4v1699876543210"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={language === "es" ? "Mapa de ubicación de La Cabaña de la Lechuza en La Roza, Cabranes" : "Location map of La Cabaña de la Lechuza in La Roza, Cabranes"}
                itemProp="url"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/RAUYH5vjUNvub4Nn9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-5 bg-primary text-primary-foreground rounded-lg font-body text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              {language === "es" ? "Ver en Google Maps" : "View on Google Maps"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;