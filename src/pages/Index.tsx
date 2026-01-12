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
        <title>La Cabaña de la Lechuza | Casa Rural con Encanto en Cabranes, Asturias</title>
        <meta
          name="description"
          content="Alquiler de casa rural en La Roza, Cabranes (Asturias). Alojamiento para 7 personas con 3 habitaciones, salón con chimenea de pellets, cocina equipada y 1500m² de jardín privado con manzanos. Turismo rural en la Comarca de la Sidra."
        />
        <meta
          name="keywords"
          content="casa rural Asturias, alojamiento rural Cabranes, turismo rural Comarca de la Sidra, vacaciones Asturias, casa rural familiar, escapada rural, alquiler casa rural, sidra asturiana, naturaleza Asturias, La Roza"
        />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es" />
        
        {/* Open Graph */}
        <meta property="og:title" content="La Cabaña de la Lechuza - Casa Rural con Encanto en Asturias" />
        <meta property="og:description" content="Escapada rural perfecta en la Comarca de la Sidra. Casa rural para 7 personas con chimenea, jardín y vistas panorámicas. ¡Reserva tu estancia!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lechuzaruralasturias.es" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Cabaña de la Lechuza - Casa Rural en Asturias" />
        <meta name="twitter:description" content="Casa rural con encanto en la Comarca de la Sidra. 7 plazas, 3 habitaciones, chimenea y jardín privado." />
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
