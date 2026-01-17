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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Playa_de_Rodiles_%28Villaviciosa%2C_Asturias%29.jpg/1280px-Playa_de_Rodiles_%28Villaviciosa%2C_Asturias%29.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Puerto_de_Tazones.jpg/1280px-Puerto_de_Tazones.jpg",
    externalLink: "https://www.turismovillaviciosa.es/pueblos/tazones/",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Escanciano_sidra.jpg/800px-Escanciano_sidra.jpg",
    externalLink: "https://www.sidratrabanco.com/",
    category: "gastronomy",
    icon: Wine
  },
  {
    id: "museo-sidra",
    nameEs: "Museo de la Sidra de Asturias",
    nameEn: "Asturias Cider Museum",
    descriptionEs: "En Nava, descubre la historia y tradición de la sidra asturiana. Exposiciones interactivas, degustaciones y tienda. Ideal para entender la cultura sidrera.",
    descriptionEn: "In Nava, discover the history and tradition of Asturian cider. Interactive exhibitions, tastings and shop. Ideal to understand cider culture.",
    distance: "12 km",
    duration: "15 min",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Manzanas_sidra.jpg/1280px-Manzanas_sidra.jpg",
    externalLink: "https://www.museodelasidra.com/",
    category: "gastronomy",
    icon: Wine
  },
  {
    id: "mirador-fitu",
    nameEs: "Mirador del Fitu",
    nameEn: "Fitu Viewpoint",
    descriptionEs: "Espectacular mirador a 635m de altitud con vistas panorámicas de 360° sobre la costa asturiana, los Picos de Europa y la Sierra del Sueve. Imprescindible al atardecer.",
    descriptionEn: "Spectacular viewpoint at 635m altitude with 360° panoramic views over the Asturian coast, Picos de Europa and Sierra del Sueve. A must at sunset.",
    distance: "25 km",
    duration: "30 min",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mirador_del_Fitu%2C_Parres%2C_Asturias.jpg/1280px-Mirador_del_Fitu%2C_Parres%2C_Asturias.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/naturaleza/otros-espacios/miradores/mirador-del-fito",
    category: "nature",
    icon: Camera
  },
  {
    id: "lastres",
    nameEs: "Lastres - Pueblo Ejemplar",
    nameEn: "Lastres - Exemplary Village",
    descriptionEs: "Uno de los pueblos más bonitos de España, premio Pueblo Ejemplar 2010. Sus calles empedradas, casas de indianos y vistas al Cantábrico te enamorarán.",
    descriptionEn: "One of the most beautiful villages in Spain, Exemplary Village Award 2010. Its cobblestone streets, colonial mansions and Cantabrian views will captivate you.",
    distance: "20 km",
    duration: "25 min",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lastres_%28Colunga%2C_Asturias%29.jpg/1280px-Lastres_%28Colunga%2C_Asturias%29.jpg",
    externalLink: "https://www.turismocolunga.es/llastres/",
    category: "culture",
    icon: Church
  },
  {
    id: "muja",
    nameEs: "Museo del Jurásico (MUJA)",
    nameEn: "Jurassic Museum (MUJA)",
    descriptionEs: "Museo con forma de huella de dinosaurio con réplicas a tamaño real, fósiles y la Costa de los Dinosaurios. Ideal para familias con niños. Vistas impresionantes al mar.",
    descriptionEn: "Dinosaur footprint-shaped museum with life-size replicas, fossils and the Dinosaur Coast. Ideal for families with children. Stunning sea views.",
    distance: "22 km",
    duration: "25 min",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/MUJA_Museo_del_Jur%C3%A1sico_de_Asturias.jpg/1280px-MUJA_Museo_del_Jur%C3%A1sico_de_Asturias.jpg",
    externalLink: "https://www.museojurasicoasturias.com/",
    category: "culture",
    icon: Leaf
  },
  {
    id: "covadonga",
    nameEs: "Santuario y Lagos de Covadonga",
    nameEn: "Covadonga Sanctuary and Lakes",
    descriptionEs: "Lugar sagrado de la historia de España con la Santa Cueva, Basílica y los impresionantes Lagos de Enol y Ercina en plenos Picos de Europa. Excursión de día completo.",
    descriptionEn: "Sacred place in Spanish history with the Holy Cave, Basilica and the stunning Enol and Ercina Lakes in the Picos de Europa. Full day excursion.",
    distance: "55 km",
    duration: "50 min",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Covadonga_-_Bas%C3%ADlica_de_Santa_Mar%C3%ADa_la_Real.jpg/1280px-Covadonga_-_Bas%C3%ADlica_de_Santa_Mar%C3%ADa_la_Real.jpg",
    externalLink: "https://lagosdecovadonga.org/",
    category: "nature",
    icon: Mountain
  },
  {
    id: "bufones-pria",
    nameEs: "Bufones de Pría",
    nameEn: "Pría Blowholes",
    descriptionEs: "Espectáculo natural único: géiseres marinos que expulsan agua y aire con fuerza por fisuras en los acantilados. Mejor con mareas vivas y mar de fondo.",
    descriptionEn: "Unique natural spectacle: sea geysers that expel water and air through cliff fissures. Best with spring tides and ocean swells.",
    distance: "45 km",
    duration: "40 min",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bufones_de_Pria_17.jpg/1280px-Bufones_de_Pria_17.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/naturaleza/otros-espacios/bufones/bufones-de-pria",
    category: "nature",
    icon: Waves
  },
  {
    id: "villaviciosa",
    nameEs: "Villaviciosa - Capital Manzana",
    nameEn: "Villaviciosa - Apple Capital",
    descriptionEs: "Encantadora villa con casco histórico medieval, iglesias románicas, tiendas locales y la mejor sidra de Asturias. Mercado semanal los miércoles.",
    descriptionEn: "Charming town with medieval historic center, Romanesque churches, local shops and the best cider in Asturias. Weekly market on Wednesdays.",
    distance: "7 km",
    duration: "10 min",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Villaviciosa_-_Parque_Ballina_01.jpg/1280px-Villaviciosa_-_Parque_Ballina_01.jpg",
    externalLink: "https://www.turismovillaviciosa.es/",
    category: "culture",
    icon: Church
  },
  {
    id: "senda-oso",
    nameEs: "Senda del Oso",
    nameEn: "Bear Trail",
    descriptionEs: "Vía verde de 36km ideal para bicicleta o senderismo. Paisajes de montaña, túneles y el famoso cercado con osos pardos Paca, Tola y Furaco.",
    descriptionEn: "36km greenway ideal for cycling or hiking. Mountain landscapes, tunnels and the famous enclosure with brown bears Paca, Tola and Furaco.",
    distance: "50 km",
    duration: "45 min",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Senda_del_Oso.jpg/1280px-Senda_del_Oso.jpg",
    externalLink: "https://www.turismoasturias.es/descubre/naturaleza/rutas/rutas-a-pie/senda-del-oso",
    category: "hiking",
    icon: Footprints
  },
  {
    id: "cangas-onis",
    nameEs: "Cangas de Onís - Puente Romano",
    nameEn: "Cangas de Onís - Roman Bridge",
    descriptionEs: "Primera capital del Reino de Asturias con su icónico puente medieval sobre el río Sella. Punto de partida hacia Picos de Europa y Covadonga.",
    descriptionEn: "First capital of the Kingdom of Asturias with its iconic medieval bridge over the Sella river. Starting point to Picos de Europa and Covadonga.",
    distance: "45 km",
    duration: "40 min",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Cangas_de_On%C3%ADs_-_Puente_romano.jpg/1280px-Cangas_de_On%C3%ADs_-_Puente_romano.jpg",
    externalLink: "https://www.cangasdeonis.com/",
    category: "culture",
    icon: Church
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
