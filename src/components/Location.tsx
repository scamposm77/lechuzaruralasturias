import { MapPin, Car, TreeDeciduous, Mountain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Location = () => {
  const { t, language } = useLanguage();

  const nearbyPlaces = [
    { name: "Villaviciosa", distance: "7 km", time: "10 min" },
    { name: "Oviedo", distance: "25 km", time: "30 min" },
    { name: "Gijón", distance: "30 km", time: "35 min" },
    { name: language === "es" ? "Aeropuerto de Asturias" : "Asturias Airport", distance: "15 km", time: "20 min" },
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

            {/* Nearby Places */}
            <div className="mb-8">
              <h4 className="font-display text-foreground text-xl mb-4">{t("location.distances")}</h4>
              <div className="grid grid-cols-2 gap-4">
                {nearbyPlaces.map((place) => (
                  <div key={place.name} className="flex items-center gap-3">
                    <Car className="w-4 h-4 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-body text-foreground text-sm font-medium">{place.name}</p>
                      <p className="font-body text-muted-foreground text-xs">{place.distance} · {place.time}</p>
                    </div>
                  </div>
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
          <div 
            className="aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden card-shadow"
            itemProp="hasMap"
            itemScope
            itemType="https://schema.org/Map"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.8372!2d-5.4169!3d43.4083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368a3a6b6b6b6b%3A0x0!2sLa%20Roza%2C%20Cabranes%2C%20Asturias!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === "es" ? "Ubicación La Cabaña de la Lechuza" : "La Cabaña de la Lechuza Location"}
              itemProp="url"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;