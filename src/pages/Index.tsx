import { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

// Lazy load below-the-fold components for faster initial load
const Values = lazy(() => import("@/components/Values"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Rooms = lazy(() => import("@/components/Rooms"));
const Services = lazy(() => import("@/components/Services"));
const Reviews = lazy(() => import("@/components/Reviews"));
const HouseRules = lazy(() => import("@/components/HouseRules"));
const ThingsToDo = lazy(() => import("@/components/ThingsToDo"));
const Location = lazy(() => import("@/components/Location"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading skeleton for lazy components
const SectionSkeleton = () => (
  <div className="py-28 bg-card animate-pulse">
    <div className="container mx-auto px-6">
      <div className="h-8 bg-muted rounded w-48 mx-auto mb-4" />
      <div className="h-12 bg-muted rounded w-96 mx-auto mb-6" />
      <div className="h-4 bg-muted rounded w-full max-w-2xl mx-auto" />
    </div>
  </div>
);

const Index = () => {
  const { language } = useLanguage();
  const location = useLocation();

  // Handle hash navigation when coming from another page
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure the page is loaded
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);
  const seo = {
    es: {
      title: "Casa Rural con Encanto en Asturias | La Cabaña de la Lechuza | Cabranes, Comarca de la Sidra",
      description: "Escápate a una casa rural rehabilitada en 2023 en plena naturaleza asturiana. Capacidad para 7 personas, jardín privado de 1500m² y porche con vistas. Tu refugio ideal en la Comarca de la Sidra. ¡Reserva ahora!",
      keywords: "casa rural Asturias, alquiler íntegro Cabranes, casa rural Comarca de la Sidra, turismo rural Asturias 7 personas, alojamiento rural familiar Asturias",
      ogTitle: "Casa Rural con Encanto en Asturias | La Cabaña de la Lechuza",
      ogDescription: "Escápate a una casa rural rehabilitada en 2023 en plena naturaleza asturiana. Capacidad 7 personas, jardín 1500m², porche con vistas. ¡Reserva ahora!",
      twitterTitle: "Casa Rural con Encanto en Asturias | La Cabaña de la Lechuza",
      twitterDescription: "Escápate a una casa rural rehabilitada en 2023 en plena naturaleza asturiana. Capacidad 7 personas, jardín 1500m², porche con vistas.",
    },
    en: {
      title: "Charming Rural House in Asturias | La Cabaña de la Lechuza | Cabranes, Cider Region",
      description: "Escape to a rural house renovated in 2023 in the heart of Asturian nature. Capacity for 7 guests, 1500m² private garden and porch with views. Your ideal retreat in the Cider Region. Book now!",
      keywords: "rural house Asturias, whole house rental Cabranes, rural house Cider Region, rural tourism Asturias 7 guests, family rural accommodation Asturias",
      ogTitle: "Charming Rural House in Asturias | La Cabaña de la Lechuza",
      ogDescription: "Escape to a rural house renovated in 2023 in the heart of Asturian nature. Capacity 7 guests, 1500m² garden, porch with views. Book now!",
      twitterTitle: "Charming Rural House in Asturias | La Cabaña de la Lechuza",
      twitterDescription: "Escape to a rural house renovated in 2023 in the heart of Asturian nature. Capacity 7 guests, 1500m² garden, porch with views.",
    },
  };

  const currentSeo = seo[language];

  // JSON-LD structured data - VacationRental
  // Nota: usamos @graph + referencias por @id para evitar que algunos validadores
  // interpreten `containsPlace` como campo duplicado cuando hay múltiples habitaciones.
  const vacationRentalId = "https://www.lechuzaruralasturias.es/#vacation-rental";

  const roomNodes = [
    {
      "@type": "Room",
      "@id": "https://www.lechuzaruralasturias.es/#room-tejo",
      "additionalType": "https://schema.org/Bedroom",
      "name": "El Tejo",
      "description":
        language === "es"
          ? "Habitación principal con cama King size y vistas al valle"
          : "Master bedroom with King size bed and valley views",
      "bed": { "@type": "BedDetails", "typeOfBed": "King size", "numberOfBeds": 1 },
      "occupancy": { "@type": "QuantitativeValue", "value": 2 },
      "numberOfBedrooms": 1,
      "numberOfBathroomsTotal": 0,
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Valley Views", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Wardrobe", "value": true },
      ],
    },
    {
      "@type": "Room",
      "@id": "https://www.lechuzaruralasturias.es/#room-pumarada",
      "additionalType": "https://schema.org/Bedroom",
      "name": "La Pumarada",
      "description":
        language === "es"
          ? "Habitación doble con cama de matrimonio y vistas al campo"
          : "Double room with double bed and countryside views",
      "bed": { "@type": "BedDetails", "typeOfBed": "Double", "numberOfBeds": 1 },
      "occupancy": { "@type": "QuantitativeValue", "value": 2 },
      "numberOfBedrooms": 1,
      "numberOfBathroomsTotal": 0,
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Countryside Views", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Wardrobe", "value": true },
      ],
    },
    {
      "@type": "Room",
      "@id": "https://www.lechuzaruralasturias.es/#room-lechuza",
      "additionalType": "https://schema.org/Bedroom",
      "name": "La Lechuza",
      "description": language === "es" ? "Habitación familiar con litera" : "Family room with bunk beds",
      "bed": { "@type": "BedDetails", "typeOfBed": "Bunk bed", "numberOfBeds": 1 },
      "occupancy": { "@type": "QuantitativeValue", "value": 2 },
      "numberOfBedrooms": 1,
      "numberOfBathroomsTotal": 0,
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Natural Light", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Wardrobe", "value": true },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VacationRental",
        "@id": vacationRentalId,
        "additionalType": "https://schema.org/House",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "RENTAL_ID",
          "value": "lechuza-rural-asturias-cabranes"
        },
        "name": "La Cabaña de la Lechuza",
        "description": currentSeo.description,
        "url": "https://www.lechuzaruralasturias.es/",
        "telephone": "+34625081519",
        "email": "info@lechuzaruralasturias.es",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Barrio la Roza s/n",
          "addressLocality": "Cabranes",
          "addressRegion": "Asturias",
          "postalCode": "33310",
          "addressCountry": {
            "@type": "Country",
            "name": "ES"
          }
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.4083,
          "longitude": -5.4169,
        },
        "priceRange": "€100-200",
        "checkinTime": "18:00",
        "checkoutTime": "11:00",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Fireplace", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Kitchen", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Garden", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Smart TV", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Porch", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Mountain Views", "value": true },
        ],
        "numberOfRooms": 3,
        "numberOfBedrooms": 3,
        "numberOfBathroomsTotal": 2,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 140,
          "unitCode": "MTK",
        },
        "occupancy": {
          "@type": "QuantitativeValue",
          "maxValue": 7,
        },
        "petsAllowed": false,
        "smokingAllowed": false,
        "containsPlace": roomNodes.map((r) => ({ "@id": r["@id"] })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.88",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "25",
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Audrie" },
            "datePublished": "2025-07-15",
            "reviewBody":
              language === "es"
                ? "Casa muy bonita y renovada. En un lugar tranquilo y perfecto para relajarse."
                : "A very beautiful and renovated house. In a quiet place, perfect for relaxing.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Matteo" },
            "datePublished": "2025-08-10",
            "reviewBody":
              language === "es"
                ? "Un sitio muy bonito, está muy cuidado. Se nota que tiene cariño."
                : "A very beautiful place, very well maintained.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Laura" },
            "datePublished": "2025-07-20",
            "reviewBody":
              language === "es"
                ? "Perfecto para familias que buscan desconectar y disfrutar de la naturaleza."
                : "Perfect for families looking to disconnect and enjoy nature.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          },
        ],
        "sameAs": [
          "https://www.instagram.com/lechuza.casaruralasturias",
          "https://www.facebook.com/profile.php?id=61586207769517",
          "https://www.airbnb.es/rooms/1134703286904548225",
        ],
        "image": [
          "https://www.lechuzaruralasturias.es/assets/exterior/ext-00-portada.jpg",
          "https://www.lechuzaruralasturias.es/assets/exterior/ext-03.jpg",
          "https://www.lechuzaruralasturias.es/assets/exterior/ext-09.jpg",
          "https://www.lechuzaruralasturias.es/assets/exterior/ext-10.jpg",
          "https://www.lechuzaruralasturias.es/assets/cocina/cocina-01.jpg",
          "https://www.lechuzaruralasturias.es/assets/salon/salon-01.jpg",
          "https://www.lechuzaruralasturias.es/assets/habitaciones/tejo-01.jpg",
          "https://www.lechuzaruralasturias.es/assets/habitaciones/pumarada-01.jpg",
        ],
        "potentialAction": {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.lechuzaruralasturias.es/#contacto",
            "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
          },
          "result": {
            "@type": "LodgingReservation",
            "name": language === "es" ? "Reserva en La Cabaña de la Lechuza" : "Booking at La Cabaña de la Lechuza",
          },
        },
      },
      ...roomNodes,
    ],
  };

  // Breadcrumb JSON-LD - Main navigation pages (sin trailing slash para consistencia)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === "es" ? "Inicio" : "Home",
        "item": "https://www.lechuzaruralasturias.es"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === "es" ? "Qué Hacer" : "What to Do",
        "item": "https://www.lechuzaruralasturias.es/que-hacer"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": "https://www.lechuzaruralasturias.es/blog"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": language === "es" ? "Cómo Llegar" : "Directions",
        "item": "https://www.lechuzaruralasturias.es/como-llegar"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="keywords" content={currentSeo.keywords} />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/" />
        <link rel="alternate" hrefLang="es" href="https://www.lechuzaruralasturias.es/" />
        <link rel="alternate" hrefLang="en" href="https://www.lechuzaruralasturias.es/?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.lechuzaruralasturias.es/" />
        
        {/* Open Graph */}
        <meta property="og:title" content={currentSeo.ogTitle} />
        <meta property="og:description" content={currentSeo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lechuzaruralasturias.es/" />
        <meta property="og:locale" content={language === "es" ? "es_ES" : "en_GB"} />
        <meta property="og:locale:alternate" content={language === "es" ? "en_GB" : "es_ES"} />
        <meta property="og:site_name" content="La Cabaña de la Lechuza" />
        <meta property="og:image" content="https://www.lechuzaruralasturias.es/assets/exterior/ext-00-portada.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={language === "es" ? "Exterior de La Cabaña de la Lechuza, casa rural en Asturias" : "Exterior of La Cabaña de la Lechuza, rural house in Asturias"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSeo.twitterTitle} />
        <meta name="twitter:description" content={currentSeo.twitterDescription} />
        <meta name="twitter:image" content="https://www.lechuzaruralasturias.es/assets/exterior/ext-00-portada.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="La Cabaña de la Lechuza" />
        <meta name="geo.region" content="ES-AS" />
        <meta name="geo.placename" content="Cabranes, Asturias" />
        <meta name="geo.position" content="43.4083;-5.4169" />
        <meta name="ICBM" content="43.4083, -5.4169" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main role="main">
          <Hero />
          <Breadcrumbs items={[
            { label: language === "es" ? "Inicio" : "Home", href: "/" },
            { label: "Cabranes", href: "/#ubicacion" },
            { label: language === "es" ? "Habitaciones" : "Rooms" }
          ]} />
          <Suspense fallback={<SectionSkeleton />}>
            <Values />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Gallery />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Rooms />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Services />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Reviews />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <HouseRules />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <ThingsToDo />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Location />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-64 bg-foreground" />}>
          <Footer />
        </Suspense>
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;