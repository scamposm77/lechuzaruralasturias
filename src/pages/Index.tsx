import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Gallery from "@/components/Gallery";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import HouseRules from "@/components/HouseRules";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>La Cabaña de la Lechuza - Casa Rural en Cabranes, Asturias | Comarca de la Sidra</title>
        <meta
          name="description"
          content="Descubre La Cabaña de la Lechuza, una casa rural de 140m² para 7 personas en La Roza, Cabranes. 3 habitaciones, salón con chimenea, porche y 1500m² de terreno con manzanos en la Comarca de la Sidra asturiana."
        />
        <meta
          name="keywords"
          content="casa rural, Asturias, Cabranes, turismo rural, Comarca de la Sidra, alojamiento rural, manzanos, sidra, La Roza"
        />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es" />
        
        {/* Open Graph */}
        <meta property="og:title" content="La Cabaña de la Lechuza - Casa Rural en la Comarca de la Sidra" />
        <meta property="og:description" content="Un refugio de paz entre manzanos y valles asturianos. 7 plazas, 140m², 1500m² de terreno." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lechuzaruralasturias.es" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Cabaña de la Lechuza - Casa Rural en Asturias" />
        <meta name="twitter:description" content="Descubre La Cabaña de la Lechuza, una casa rural con encanto en la Comarca de la Sidra." />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Values />
          <Gallery />
          <Rooms />
          <Services />
          <Reviews />
          <HouseRules />
          <Location />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
