import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Amenities from "@/components/Amenities";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Casa Los Olivos - Casa Rural en Úbeda, Jaén | Turismo Rural España</title>
        <meta
          name="description"
          content="Descubre Casa Los Olivos, una casa rural de lujo en Úbeda, Jaén. Piscina privada, 3 habitaciones, vistas a olivares. Reserva tu escapada rural perfecta en Andalucía."
        />
        <meta
          name="keywords"
          content="casa rural, Úbeda, Jaén, turismo rural, Andalucía, alojamiento rural, piscina privada, vacaciones rurales"
        />
        <link rel="canonical" href="https://casalosolivos.es" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Gallery />
          <Experience />
          <Amenities />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
