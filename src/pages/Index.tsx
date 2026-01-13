import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
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

  const seo = {
    es: {
      title: "La Cabaña de la Lechuza | Casa Rural Cabranes Asturias - 7 Plazas",
      description: "Casa rural completa Cabranes Asturias. 3 hab, jardín privado tejo centenario, chimenea. Comarca Sidra. Reserva directa 7 personas.",
      keywords: "casa rural Cabranes, alquiler Asturias, casa rural Comarca Sidra, Cabranes alojamiento",
      ogTitle: "La Cabaña de la Lechuza | Casa Rural Cabranes",
      ogDescription: "Alquila casa rural completa en Cabranes. Jardín privado, 3 hab, hasta 7p. Asturias.",
      twitterTitle: "Casa Rural Cabranes | La Cabaña de la Lechuza",
      twitterDescription: "Alquila casa rural completa en Cabranes. Jardín privado, 3 hab, hasta 7p. Asturias.",
    },
    en: {
      title: "La Cabaña de la Lechuza | Rural House Cabranes Asturias - 7 Guests",
      description: "Complete rural house Cabranes Asturias. 3 bedrooms, private garden with centenary yew tree, fireplace. Cider Region. Direct booking 7 people.",
      keywords: "rural house Cabranes, Asturias rental, rural house Cider Region, Cabranes accommodation",
      ogTitle: "La Cabaña de la Lechuza | Rural House Cabranes",
      ogDescription: "Rent complete rural house in Cabranes. Private garden, 3 bedrooms, up to 7p. Asturias.",
      twitterTitle: "Rural House Cabranes | La Cabaña de la Lechuza",
      twitterDescription: "Rent complete rural house in Cabranes. Private garden, 3 bedrooms, up to 7p. Asturias.",
    },
  };

  const currentSeo = seo[language];

  // JSON-LD structured data - VacationRental
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "name": "La Cabaña de la Lechuza",
    "description": currentSeo.description,
    "url": "https://www.lechuzaruralasturias.es",
    "telephone": "+34625081519",
    "email": "info@lechuzaruralasturias.es",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barrio la Roza s/n",
      "addressLocality": "Cabranes",
      "addressRegion": "Asturias",
      "postalCode": "33310",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.4083,
      "longitude": -5.4169
    },
    "priceRange": "100-200€",
    "checkinTime": "18:00",
    "checkoutTime": "11:00",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Fireplace", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Kitchen", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Garden", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Smart TV", "value": true }
    ],
    "numberOfRooms": 3,
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 7
    },
    "petsAllowed": false,
    "containsPlace": [
      {
        "@type": "Room",
        "name": "El Tejo",
        "description": language === "es" ? "Habitación principal con cama King size y vistas al valle" : "Master bedroom with King size bed and valley views",
        "bed": { "@type": "BedDetails", "typeOfBed": "King size", "numberOfBeds": 1 }
      },
      {
        "@type": "Room",
        "name": "La Pumarada",
        "description": language === "es" ? "Habitación doble con cama de matrimonio y vistas al campo" : "Double room with double bed and countryside views",
        "bed": { "@type": "BedDetails", "typeOfBed": "Double", "numberOfBeds": 1 }
      },
      {
        "@type": "Room",
        "name": "La Lechuza",
        "description": language === "es" ? "Habitación familiar con litera" : "Family room with bunk beds",
        "bed": { "@type": "BedDetails", "typeOfBed": "Bunk bed", "numberOfBeds": 1 }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.88",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "25"
    },
    "sameAs": [
      "https://www.instagram.com/lechuza.casaruralasturias",
      "https://www.facebook.com/profile.php?id=61586207769517",
      "https://www.airbnb.es/rooms/1134703286904548225?guests=1&adults=1&s=67&unique_share_id=9e3d8fa8-48d8-49ab-a24e-c39cf096703e"
    ],
    "image": [
      "https://www.lechuzaruralasturias.es/assets/exterior/ext-00-portada.jpg",
      "https://www.lechuzaruralasturias.es/assets/exterior/ext-03.jpg",
      "https://www.lechuzaruralasturias.es/assets/exterior/ext-09.jpg",
      "https://www.lechuzaruralasturias.es/assets/cocina/cocina-01.jpg",
      "https://www.lechuzaruralasturias.es/assets/hero-casa.jpg"
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.lechuzaruralasturias.es/#contacto",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "LodgingReservation",
        "name": language === "es" ? "Reserva en La Cabaña de la Lechuza" : "Booking at La Cabaña de la Lechuza"
      }
    }
  };

  // Breadcrumb JSON-LD
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
        "name": "Cabranes",
        "item": "https://www.lechuzaruralasturias.es/#ubicacion"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": language === "es" ? "Habitaciones" : "Rooms",
        "item": "https://www.lechuzaruralasturias.es/#habitaciones"
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
        <link rel="canonical" href="https://lechuzaruralasturias.es" />
        <link rel="alternate" hrefLang="es" href="https://lechuzaruralasturias.es" />
        <link rel="alternate" hrefLang="en" href="https://lechuzaruralasturias.es" />
        <link rel="alternate" hrefLang="x-default" href="https://lechuzaruralasturias.es" />
        
        {/* Open Graph */}
        <meta property="og:title" content={currentSeo.ogTitle} />
        <meta property="og:description" content={currentSeo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lechuzaruralasturias.es" />
        <meta property="og:locale" content={language === "es" ? "es_ES" : "en_GB"} />
        <meta property="og:locale:alternate" content={language === "es" ? "en_GB" : "es_ES"} />
        <meta property="og:site_name" content="La Cabaña de la Lechuza" />
        <meta property="og:image" content="https://lechuzaruralasturias.es/foto-hero.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={language === "es" ? "Exterior de La Cabaña de la Lechuza, casa rural en Asturias" : "Exterior of La Cabaña de la Lechuza, rural house in Asturias"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSeo.twitterTitle} />
        <meta name="twitter:description" content={currentSeo.twitterDescription} />
        <meta name="twitter:image" content="https://lechuzaruralasturias.es/foto-hero.jpg" />
        
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