import { MapPin, Car, TreeDeciduous, Mountain, ExternalLink, Waves } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Location = () => {
  const { t, language } = useLanguage();

  const highlightedDistances = [
    { 
      icon: TreeDeciduous,
      name: language === "es" ? "Sidrerías" : "Cider houses", 
      time: "5 min",
      description: language === "es" ? "Ruta de la Sidra" : "Cider Route",
      link: "https://www.google.com/maps/search/sidrería+villaviciosa+asturias"
    },
    { 
      icon: Waves,
      name: language === "es" ? "Playas" : "Beaches", 
      time: "15 min",
      description: language === "es" ? "Rodiles, Tazones" : "Rodiles, Tazones",
      link: "https://www.google.com/maps/dir/La+Roza,+Cabranes/Playa+de+Rodiles"
    },
    { 
      icon: Mountain,
      name: language === "es" ? "Picos de Europa" : "Picos de Europa", 
      time: "45 min",
      description: language === "es" ? "Parque Nacional" : "National Park",
      link: "https://www.google.com/maps/dir/La+Roza,+Cabranes/Picos+de+Europa"
    },
  ];

  const nearbyPlaces = [
    { 
      name: "Villaviciosa", 
      distance: "7 km", 
      time: "10 min",
      link: "https://www.google.com/maps/dir/La+Roza,+Cabranes/Villaviciosa,+Asturias"
    },
    { 
      name: "Oviedo", 
      distance: "25 km", 
      time: "30 min",
      link: "https://www.google.com/maps/dir/La+Roza,+Cabranes/Oviedo,+Asturias"
    },
    { 
      name: "Gijón", 
      distance: "30 km", 
      time: "35 min",
      link: "https://www.google.com/maps/dir/La+Roza,+Cabranes/Gijón,+Asturias"
    },
    { 
      name: language === "es" ? "Aeropuerto de Asturias" : "Asturias Airport", 
      distance: "15 km", 
      time: "20 min",
      link: "https://www.google.com/maps/dir/La+Roza,+Cabranes/Aeropuerto+de+Asturias"
    },
  ];

  const activities = [
    {
      icon: TreeDeciduous,
      title: t("location.route147"),
      description: t("location.route147.desc"),
    },
    {
      icon: Mountain,
      title: t("location.viacaba"),
      description: t("location.viacaba.desc"),
    },
    {
      icon: MapPin,
      title: t("location.ciderRoute"),
      description: t("location.ciderRoute.desc"),
    },
  ];

  return (
    <section 
      id="ubicacion" 
      aria-label={language === "es" ? "Ubicación de la casa rural en Cabranes, Asturias" : "Rural house location in Cabranes, Asturias"} 
      className="py-28 bg-background"
      itemScope
      itemType="https://schema.org/Place"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
              {t("location.subtitle")}
            </span>
            <h2 className="font-display text-foreground text-4xl md:text-5xl mb-6">
              <span className="text-primary italic">{t("location.title")}</span> {t("location.titleAccent")}
            </h2>
            
            <div 
              className="flex items-start gap-4 mb-8"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
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

            {/* Highlighted Distances - Key selling points */}
            <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-display text-foreground text-xl mb-4">
                {language === "es" ? "A tu alcance" : "Within reach"}
              </h4>
              <div className="grid gap-4">
                {highlightedDistances.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-background rounded-lg hover:shadow-md transition-all duration-300 group"
                    aria-label={`${item.name} - ${item.time} ${language === "es" ? "en coche" : "by car"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-body text-foreground font-medium">{item.name}</p>
                        <p className="font-body text-muted-foreground text-xs">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-primary text-lg font-semibold">{item.time}</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                    </div>
                  </a>
                ))}
              </div>
              <p className="font-body text-muted-foreground text-xs mt-3 text-center">
                {language === "es" ? "* Tiempos en coche desde La Roza" : "* Drive times from La Roza"}
              </p>
            </div>

            {/* Nearby Places */}
            <div className="mb-8">
              <h4 className="font-display text-foreground text-xl mb-4">{t("location.distances")}</h4>
              <div className="grid grid-cols-2 gap-4">
                {nearbyPlaces.map((place) => (
                  <a 
                    key={place.name} 
                    href={place.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <Car className="w-4 h-4 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-body text-foreground text-sm font-medium group-hover:text-primary transition-colors">{place.name}</p>
                      <p className="font-body text-muted-foreground text-xs">{place.distance} · {place.time}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h4 className="font-display text-foreground text-xl mb-4">{t("location.activities")}</h4>
              <div 
                className="space-y-4"
                itemScope
                itemType="https://schema.org/ItemList"
              >
                <meta itemProp="name" content={t("location.activities")} />
                {activities.map((activity, index) => (
                  <div 
                    key={activity.title} 
                    className="flex items-center gap-4 p-4 bg-card rounded-lg"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                  >
                    <meta itemProp="position" content={String(index + 1)} />
                    <div className="p-2 bg-primary/10 rounded-full" aria-hidden="true">
                      <activity.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-foreground font-medium" itemProp="name">{activity.title}</p>
                      <p className="font-body text-muted-foreground text-sm" itemProp="description">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <div 
              className="aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden card-shadow"
              itemProp="hasMap"
              itemScope
              itemType="https://schema.org/Map"
            >
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
              href="https://www.google.com/maps/place/La+Roza,+Cabranes,+Asturias/@43.4083,-5.4169,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-6 bg-primary text-primary-foreground rounded-lg font-body text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              {language === "es" ? "Ver en Google Maps" : "View on Google Maps"}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;