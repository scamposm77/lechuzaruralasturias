import { Helmet } from "react-helmet-async";
import { ExternalLink, MapPin, Clock, Mountain, Waves, Wine, Church, Leaf, Camera, Footprints, Car } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

interface Activity {
  id: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  distance: string;
  duration?: string;
  image: string;
  externalLink: string;
  category: "nature" | "beach" | "gastronomy" | "culture" | "hiking";
  icon: typeof Mountain;
}

const activities: Activity[] = [
  {
    id: "playa-rodiles",
    nameEs: "Playa de Rodiles",
    nameEn: "Rodiles Beach",
    descriptionEs: "Una de las playas más emblemáticas de Asturias, famosa por sus dunas, olas perfectas para surf y el estuario de la Ría de Villaviciosa. Bandera Azul y entorno natural protegido.",
    descriptionEn: "One of the most iconic beaches in Asturias, famous for its dunes, perfect waves for surfing and the Villaviciosa estuary. Blue Flag beach and protected natural environment.",
    distance: "15 km",
    duration: "20 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/rodiles+%282%29.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/costa/playas/playa-de-rodiles",
    category: "beach",
    icon: Waves
  },
  {
    id: "playa-tazones",
    nameEs: "Puerto y Playa de Tazones",
    nameEn: "Tazones Port and Beach",
    descriptionEs: "Pintoresco pueblo marinero donde desembarcó Carlos V en 1517. Sus coloridas casas, puerto pesquero tradicional y restaurantes de mariscos lo convierten en visita obligada.",
    descriptionEn: "Picturesque fishing village where Charles V landed in 1517. Its colorful houses, traditional fishing port and seafood restaurants make it a must-visit.",
    distance: "12 km",
    duration: "15 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/Tazones-Villaviciosa-Camino-de-Santiago.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/costa/villas-marineras/tazones",
    category: "beach",
    icon: Waves
  },
  {
    id: "ruta-sidra",
    nameEs: "Ruta de la Sidra - Sidrerías",
    nameEn: "Cider Route - Cider Houses",
    descriptionEs: "Descubre las auténticas sidrerías asturianas en Villaviciosa, capital de la manzana. Visita lagares tradicionales, degusta sidra natural y aprende el arte del escanciado.",
    descriptionEn: "Discover authentic Asturian cider houses in Villaviciosa, the apple capital. Visit traditional cider mills, taste natural cider and learn the art of pouring.",
    distance: "7 km",
    duration: "10 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/Escanciando+sidra.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/gastronomia/sidra",
    category: "gastronomy",
    icon: Wine
  },
  {
    id: "senda-viacaba",
    nameEs: "Senda del Río Viacaba",
    nameEn: "Viacaba River Trail",
    descriptionEs: "Ruta de senderismo fácil que recorre el río Viacaba entre bosques de castaños y robles. Ideal para familias, con áreas de descanso y paisajes espectaculares.",
    descriptionEn: "Easy hiking trail along the Viacaba River through chestnut and oak forests. Ideal for families, with rest areas and spectacular landscapes.",
    distance: "3 km",
    duration: "5 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/rio-viacaba-cabranes.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/naturaleza/rutas/pr-as-147-senda-del-viacaba",
    category: "hiking",
    icon: Footprints
  },
  {
    id: "pr-as-147",
    nameEs: "Ruta P.R. AS-147 Cabranes",
    nameEn: "P.R. AS-147 Cabranes Route",
    descriptionEs: "Sendero circular de pequeño recorrido que atraviesa los paisajes más bellos de Cabranes. Pumaradas, aldeas tradicionales y vistas panorámicas del Sueve y los Picos de Europa.",
    descriptionEn: "Circular short-distance trail through the most beautiful landscapes of Cabranes. Apple orchards, traditional villages and panoramic views of Sueve and Picos de Europa.",
    distance: "2 km",
    duration: "3 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/cabranes-asturias-paisaje.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/naturaleza/rutas/pr-as-147-senda-del-viacaba",
    category: "hiking",
    icon: Mountain
  },
  {
    id: "mirador-fitu",
    nameEs: "Mirador del Fitu",
    nameEn: "Fitu Viewpoint",
    descriptionEs: "Espectacular mirador a 635m de altitud con vistas panorámicas de 360° sobre la costa asturiana, los Picos de Europa y la Sierra del Sueve. Imprescindible al atardecer.",
    descriptionEn: "Spectacular viewpoint at 635m altitude with 360° panoramic views over the Asturian coast, Picos de Europa and Sierra del Sueve. A must at sunset.",
    distance: "25 km",
    duration: "30 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/mirador-del-fitu-asturias.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/naturaleza/espacios-naturales/mirador-del-fitu",
    category: "nature",
    icon: Camera
  },
  {
    id: "lastres",
    nameEs: "Lastres - Pueblo Ejemplar",
    nameEn: "Lastres - Exemplary Village",
    descriptionEs: "Uno de los pueblos más bonitos de España, premio Pueblo Ejemplar 2010. Sus calles empedradas, casas de indianos y el famoso Museo del Jurásico (MUJA) cercano.",
    descriptionEn: "One of the most beautiful villages in Spain, Exemplary Village Award 2010. Its cobblestone streets, colonial mansions and the nearby Jurassic Museum (MUJA).",
    distance: "20 km",
    duration: "25 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/Lastres-Colunga.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/costa/villas-marineras/lastres",
    category: "culture",
    icon: Church
  },
  {
    id: "muja",
    nameEs: "Museo del Jurásico de Asturias (MUJA)",
    nameEn: "Jurassic Museum of Asturias (MUJA)",
    descriptionEs: "Museo con forma de huella de dinosaurio con réplicas a tamaño real, fósiles y la Costa de los Dinosaurios. Ideal para familias con niños. Vistas impresionantes al mar.",
    descriptionEn: "Dinosaur footprint-shaped museum with life-size replicas, fossils and the Dinosaur Coast. Ideal for families with children. Stunning sea views.",
    distance: "22 km",
    duration: "25 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/MUJA-Colunga.jpg",
    externalLink: "https://www.museojurasico.com",
    category: "culture",
    icon: Leaf
  },
  {
    id: "covadonga",
    nameEs: "Santuario de Covadonga y Lagos",
    nameEn: "Covadonga Sanctuary and Lakes",
    descriptionEs: "Lugar sagrado de la historia de España con la Santa Cueva, Basílica y los impresionantes Lagos de Enol y Ercina en plenos Picos de Europa. Excursión de día completo.",
    descriptionEn: "Sacred place in Spanish history with the Holy Cave, Basilica and the stunning Enol and Ercina Lakes in the Picos de Europa. Full day excursion.",
    distance: "55 km",
    duration: "50 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/basilica-covadonga-asturias.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/naturaleza/espacios-naturales/parque-nacional-de-los-picos-de-europa",
    category: "nature",
    icon: Mountain
  },
  {
    id: "villaviciosa",
    nameEs: "Villaviciosa - Capital de la Manzana",
    nameEn: "Villaviciosa - Apple Capital",
    descriptionEs: "Encantadora villa con casco histórico medieval, iglesias románicas, tiendas locales y la mejor sidra de Asturias. Mercado semanal los miércoles.",
    descriptionEn: "Charming town with medieval historic center, Romanesque churches, local shops and the best cider in Asturias. Weekly market on Wednesdays.",
    distance: "7 km",
    duration: "10 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/villaviciosa-asturias.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/ciudades-y-pueblos/villas/villaviciosa",
    category: "culture",
    icon: Church
  },
  {
    id: "sueve",
    nameEs: "Sierra del Sueve - Asturcones",
    nameEn: "Sueve Mountains - Asturcón Ponies",
    descriptionEs: "Cordillera costera con rutas de senderismo, miradores y los famosos caballos asturcones en libertad. El pico Pienzu (1.161m) ofrece vistas de costa a montaña.",
    descriptionEn: "Coastal mountain range with hiking trails, viewpoints and the famous wild Asturcón ponies. Pienzu peak (1,161m) offers coast to mountain views.",
    distance: "18 km",
    duration: "20 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/asturcon-sierra-sueve.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/naturaleza/espacios-naturales/paisaje-protegido-de-la-sierra-del-sueve",
    category: "nature",
    icon: Mountain
  },
  {
    id: "camino-santiago",
    nameEs: "Camino de Santiago del Norte",
    nameEn: "Northern Way of St. James",
    descriptionEs: "El Camino del Norte pasa cerca de nuestra casa. Etapas espectaculares entre Villaviciosa y Gijón con paisajes costeros únicos. Albergues y señalización oficial.",
    descriptionEn: "The Northern Way passes near our house. Spectacular stages between Villaviciosa and Gijón with unique coastal landscapes. Hostels and official signage.",
    distance: "5 km",
    duration: "7 min",
    image: "https://www.turismoasturias.es/documents/39908/332816/camino-santiago-asturias-norte.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/rutas/camino-de-santiago/camino-del-norte",
    category: "hiking",
    icon: Footprints
  }
];

const categoryColors = {
  nature: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  beach: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  gastronomy: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  culture: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  hiking: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
};

const categoryLabels = {
  nature: { es: "Naturaleza", en: "Nature" },
  beach: { es: "Playas", en: "Beaches" },
  gastronomy: { es: "Gastronomía", en: "Gastronomy" },
  culture: { es: "Cultura", en: "Culture" },
  hiking: { es: "Senderismo", en: "Hiking" }
};

const QueHacer = () => {
  const { language } = useLanguage();

  const seo = {
    es: {
      title: "Qué Hacer en Cabranes | Rutas, Playas y Sidrerías | La Cabaña de la Lechuza",
      description: "Descubre las mejores actividades cerca de nuestra casa rural en Asturias: Playa de Rodiles, Ruta de la Sidra, Mirador del Fitu, Lagos de Covadonga y más. Guía completa del entorno.",
    },
    en: {
      title: "What to Do in Cabranes | Routes, Beaches & Cider Houses | La Cabaña de la Lechuza",
      description: "Discover the best activities near our rural house in Asturias: Rodiles Beach, Cider Route, Fitu Viewpoint, Covadonga Lakes and more. Complete area guide.",
    }
  };

  const currentSeo = seo[language];

  return (
    <>
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/que-hacer" />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:url" content="https://www.lechuzaruralasturias.es/que-hacer" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            {/* Header Section */}
            <div className="text-center mb-16">
              <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
                {language === "es" ? "Descubre la Comarca de la Sidra" : "Discover the Cider Region"}
              </span>
              <h1 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
                {language === "es" ? "Qué Hacer" : "What to Do"}{" "}
                <span className="text-primary italic">
                  {language === "es" ? "en el Entorno" : "in the Area"}
                </span>
              </h1>
              <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                {language === "es" 
                  ? "Desde La Cabaña de la Lechuza tienes acceso privilegiado a las mejores playas, rutas de senderismo, sidrerías y monumentos de Asturias. Aquí te dejamos nuestras recomendaciones favoritas."
                  : "From La Cabaña de la Lechuza you have privileged access to the best beaches, hiking trails, cider houses and monuments in Asturias. Here are our favorite recommendations."}
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors.beach}`}>
                🏖️ {categoryLabels.beach[language]}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors.hiking}`}>
                🥾 {categoryLabels.hiking[language]}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors.nature}`}>
                🌲 {categoryLabels.nature[language]}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors.gastronomy}`}>
                🍎 {categoryLabels.gastronomy[language]}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors.culture}`}>
                🏛️ {categoryLabels.culture[language]}
              </span>
            </div>

            {/* Activities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {activities.map((activity) => {
                const IconComponent = activity.icon;
                return (
                  <article 
                    key={activity.id}
                    className="bg-card rounded-lg overflow-hidden card-shadow hover:hover-lift transition-all duration-300 group"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={language === "es" ? activity.nameEs : activity.nameEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop";
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[activity.category]}`}>
                          {categoryLabels[activity.category][language]}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="font-display text-foreground text-xl leading-tight">
                          {language === "es" ? activity.nameEs : activity.nameEn}
                        </h2>
                      </div>

                      <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                        {language === "es" ? activity.descriptionEs : activity.descriptionEn}
                      </p>

                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {activity.distance}
                        </span>
                        {activity.duration && (
                          <span className="flex items-center gap-1">
                            <Car className="w-4 h-4" />
                            {activity.duration}
                          </span>
                        )}
                      </div>

                      {/* External Link */}
                      <a
                        href={activity.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                      >
                        {language === "es" ? "Más información" : "More info"}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Additional Resources Section */}
            <div className="mt-20 bg-muted/30 rounded-lg p-8 md:p-12 max-w-4xl mx-auto text-center">
              <h2 className="font-display text-foreground text-2xl md:text-3xl mb-4">
                {language === "es" ? "Recursos Oficiales de Turismo" : "Official Tourism Resources"}
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                {language === "es" 
                  ? "Consulta información actualizada sobre horarios, precios y eventos en las webs oficiales de turismo."
                  : "Check updated information about schedules, prices and events on official tourism websites."}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.turismoasturias.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Turismo Asturias
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.villaviciosa.es/turismo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border text-foreground rounded-sm font-body text-sm font-semibold hover:bg-muted transition-colors"
                >
                  Turismo Villaviciosa
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.cabranes.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border text-foreground rounded-sm font-body text-sm font-semibold hover:bg-muted transition-colors"
                >
                  Ayuntamiento Cabranes
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <p className="font-body text-muted-foreground mb-6">
                {language === "es" 
                  ? "¿Necesitas más recomendaciones personalizadas? ¡Escríbenos!"
                  : "Need more personalized recommendations? Contact us!"}
              </p>
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-lg"
              >
                {language === "es" ? "Contactar" : "Contact Us"}
              </a>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default QueHacer;
