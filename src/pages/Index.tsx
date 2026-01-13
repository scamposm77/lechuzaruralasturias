import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      title: "La Cabaña de la Lechuza | Casa Rural con Encanto en Cabranes, Asturias",
      description: "Alquiler de casa rural en La Roza, Cabranes (Asturias). Alojamiento para 7 personas con 3 habitaciones, salón con chimenea de pellets, cocina equipada y 1500m² de jardín privado con manzanos. Turismo rural en la Comarca de la Sidra.",
      keywords: "casa rural Asturias, alojamiento rural Cabranes, turismo rural Comarca de la Sidra, vacaciones Asturias, casa rural familiar, escapada rural, alquiler casa rural, sidra asturiana, naturaleza Asturias, La Roza",
      ogTitle: "La Cabaña de la Lechuza - Casa Rural con Encanto en Asturias",
      ogDescription: "Escapada rural perfecta en la Comarca de la Sidra. Casa rural para 7 personas con chimenea, jardín y vistas panorámicas. ¡Reserva tu estancia!",
      twitterTitle: "La Cabaña de la Lechuza - Casa Rural en Asturias",
      twitterDescription: "Casa rural con encanto en la Comarca de la Sidra. 7 plazas, 3 habitaciones, chimenea y jardín privado.",
    },
    en: {
      title: "La Cabaña de la Lechuza | Charming Rural House in Cabranes, Asturias, Spain",
      description: "Rural house rental in La Roza, Cabranes (Asturias, Spain). Accommodation for 7 guests with 3 bedrooms, living room with pellet fireplace, equipped kitchen and 1500m² private garden with apple trees. Rural tourism in the Cider Region.",
      keywords: "rural house Asturias, rural accommodation Spain, Cider Region tourism, Asturias holidays, family rural house, rural getaway, house rental Asturias, Asturian cider, nature Spain, La Roza Cabranes",
      ogTitle: "La Cabaña de la Lechuza - Charming Rural House in Asturias, Spain",
      ogDescription: "Perfect rural getaway in the Cider Region. Rural house for 7 guests with fireplace, garden and panoramic views. Book your stay!",
      twitterTitle: "La Cabaña de la Lechuza - Rural House in Asturias, Spain",
      twitterDescription: "Charming rural house in the Cider Region. 7 guests, 3 bedrooms, fireplace and private garden.",
    },
  };

  const currentSeo = seo[language];

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
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
    "priceRange": "€€",
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
      "https://www.airbnb.es/rooms/1232063912950498409"
    ],
    "image": [
      "https://www.lechuzaruralasturias.es/assets/exterior/ext-00-portada.jpg",
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

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="keywords" content={currentSeo.keywords} />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es" />
        <link rel="alternate" hrefLang="es" href="https://www.lechuzaruralasturias.es" />
        <link rel="alternate" hrefLang="en" href="https://www.lechuzaruralasturias.es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.lechuzaruralasturias.es" />
        
        {/* Open Graph */}
        <meta property="og:title" content={currentSeo.ogTitle} />
        <meta property="og:description" content={currentSeo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lechuzaruralasturias.es" />
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
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main role="main">
          <Hero />
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
      </div>
    </>
  );
};

export default Index;