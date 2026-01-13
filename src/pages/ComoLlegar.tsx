import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Car, Phone, MapPin, Navigation, AlertTriangle, CheckCircle, Play } from "lucide-react";
import rutaVideo from "@/assets/ruta_1.mp4";
import { useLanguage } from "@/contexts/LanguageContext";
const ComoLlegar = () => {
  const {
    language
  } = useLanguage();
  if (language === "en") {
    return <>
        <Helmet>
          <title>How to Get There | La Cabaña de la Lechuza - Rural House in Cabranes, Asturias</title>
          <meta name="description" content="Directions and route to our rural house in La Roza, Cabranes. Includes video tutorial, Google Maps, Waze link and tips for the mountain road." />
          <meta name="keywords" content="how to get to rural house Cabranes, route La Roza Asturias, directions rural house Asturias, Cider Region map, GPS rural house" />
          <link rel="canonical" href="https://www.lechuzaruralasturias.es/como-llegar" />
        </Helmet>

        <div className="min-h-screen bg-background">
          {/* Header */}
          <header className="bg-primary text-primary-foreground py-6">
            <div className="container mx-auto px-6">
              <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" />
                <span className="font-body text-sm">Back to home</span>
              </Link>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl">
                How to Get There
              </h1>
            </div>
          </header>

          <main className="container mx-auto px-6 py-12 max-w-4xl">
            {/* Intro */}
            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                We're looking forward to welcoming you!
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                La Cabaña de la Lechuza is located in La Roza, a traditional village in the municipality of Cabranes, 
                in the heart of the Cider Region. Getting here is part of the experience: 
                you'll leave the hustle behind and immerse yourself in the most authentic and peaceful Asturias.
              </p>
            </section>

            {/* From Villaviciosa */}
            <section className="mb-12 bg-card rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  From Villaviciosa (7 km - approx. 10 minutes)
                </h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                The journey from Villaviciosa is easy on paved regional road, except for the last km 
                which runs along a mountain path, typical of rural Asturian villages.
              </p>
            </section>

            {/* Village road */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  The village road: what you need to know
                </h3>
              </div>
              
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                This last stretch of approximately 1 km is a narrow road where two vehicles cannot pass at once. 
                Don't worry: it's the regular access used by village residents daily and 
                by our house guests without any problem.
              </p>

              <div className="bg-muted/30 rounded-xl p-6 mb-6">
                <h4 className="font-display text-lg text-foreground mb-4">Road characteristics:</h4>
                <ul className="space-y-2 font-body text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Paved but narrow road
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Winding, with mountain curves
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Several natural passing places to meet other vehicles
                  </li>
                  
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    No through traffic
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h4 className="font-display text-lg text-foreground mb-4">Tips for a smooth arrival:</h4>
                <ul className="space-y-3 font-body text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Drive slowly and carefully (no rush, you're on vacation)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>If you see an oncoming vehicle, use the passing places to yield or wait</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>During the day, visibility is perfect and the scenery is spectacular</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Why this road */}
            <section className="mb-12 bg-accent/10 rounded-xl p-6 md:p-8 border-l-4 border-accent">
              <h3 className="font-display text-xl text-foreground mb-4">Why this road?</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Because La Roza is an authentic village, not a tourist complex. Here there's no traffic, 
                noise or crowds. The difficulty of access is precisely what has preserved 
                this unique corner of Asturias.
              </p>
              <p className="font-body text-foreground leading-relaxed italic">
                When you arrive, you'll understand that this last kilometer is the (small) price for enjoying 
                panoramic views, absolute silence and untouched nature. It's the path to 
                total disconnection.
              </p>
            </section>

            {/* Video Tutorial */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  Video tutorial: step by step to the house
                </h3>
              </div>
              
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                So you can arrive with complete safety and confidence, we've recorded a detailed video 
                showing the entire route:
              </p>

              <ul className="space-y-2 font-body text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Departure from Villaviciosa
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Turns and clear visual references
                </li>
                
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Exactly where to turn until you reach the house door
                </li>
              </ul>

              {/* Video tutorial */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <video controls className="w-full h-full object-cover" poster="">
                  <source src={rutaVideo} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
            </section>

            {/* Map and navigation */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  Location and GPS navigation
                </h3>
              </div>

              {/* Google Map */}
              <div className="aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-lg mb-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.5!2d-5.417!3d43.408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368b5d1b1b1b1b%3A0x0!2sLa%20Roza%2C%20Cabranes%2C%20Asturias!5e0!3m2!1ses!2ses!4v1704931200000" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="La Cabaña de la Lechuza Location" />
              </div>

              {/* Navigation buttons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="https://maps.app.goo.gl/kgmiycYPBchbJ9mT8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors shadow-md">
                  <Navigation className="w-5 h-5" />
                  Open in Google Maps
                </a>
                <a href="https://waze.com/ul/hezsph6wy1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#33ccff] text-white px-6 py-4 rounded-lg font-body font-semibold hover:bg-[#33ccff]/90 transition-colors shadow-md">
                  <Navigation className="w-5 h-5" />
                  Open in Waze
                </a>
              </div>
            </section>

            {/* Contact during journey */}
            <section className="bg-card rounded-xl p-6 md:p-8 shadow-lg text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  Questions during the journey?
                </h3>
              </div>
              <p className="font-body text-muted-foreground mb-4">
                If at any point you have doubts about the way, call us without hesitation:
              </p>
              <a href="tel:+34625081519" className="inline-flex items-center gap-2 text-2xl md:text-3xl font-display text-primary hover:text-primary/80 transition-colors">
                <Phone className="w-6 h-6" />
                +34 625 081 519
              </a>
              <p className="font-body text-foreground mt-6 italic text-lg">
                Relax, take your time and enjoy the scenery. <br />
                <span className="text-primary font-semibold">Welcome to authentic Asturias!</span>
              </p>
            </section>
          </main>

          {/* Simple footer */}
          <footer className="bg-muted py-8 mt-12">
            <div className="container mx-auto px-6 text-center">
              <Link to="/" className="font-display text-xl text-foreground hover:text-primary transition-colors">
                La Cabaña de la Lechuza
              </Link>
              <p className="font-body text-muted-foreground text-sm mt-2">
                Rural House in Cabranes, Asturias
              </p>
            </div>
          </footer>
        </div>
      </>;
  }

  // Spanish version (default)
  return <>
      <Helmet>
        <title>Cómo Llegar a La Cabaña de la Lechuza | Casa Rural en Cabranes, Asturias</title>
        <meta name="description" content="Indicaciones y ruta para llegar a nuestra casa rural en La Roza, Cabranes. Incluye video tutorial, mapa de Google Maps, enlace a Waze y consejos para la carretera de montaña." />
        <meta name="keywords" content="cómo llegar casa rural Cabranes, ruta La Roza Asturias, indicaciones casa rural Asturias, mapa Comarca de la Sidra, GPS casa rural" />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/como-llegar" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-primary-foreground py-6">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-body text-sm">Volver al inicio</span>
            </Link>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl">
              Cómo Llegar
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Intro */}
          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              ¡Estamos deseando recibirte!
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              La Cabaña de la Lechuza está situada en La Roza, una aldea tradicional del concejo de Cabranes, 
              en pleno corazón de la Comarca de la Sidra. Llegar hasta aquí es parte de la experiencia: 
              te alejarás del bullicio para sumergirte en la Asturias más auténtica y tranquila.
            </p>
          </section>

          {/* Desde Villaviciosa */}
          <section className="mb-12 bg-card rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                Desde Villaviciosa (7 km - 10 minutos aprox.)
              </h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              El trayecto desde Villaviciosa es sencillo por carretera comarcal asfaltada, excepto el último km. 
              que trascurre por un camino de montaña, típico de las aldeas rurales asturianas.
            </p>
          </section>

          {/* Camino de aldea */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/20 rounded-full">
                <AlertTriangle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                El camino de aldea: lo que debes saber
              </h3>
            </div>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Este último tramo de aproximadamente 1 km es una carretera estrecha donde no caben dos vehículos a la vez. 
              No te preocupes: es el acceso habitual que utilizan los vecinos de la aldea a diario y los visitantes 
              de la casa sin problema alguno.
            </p>

            <div className="bg-muted/30 rounded-xl p-6 mb-6">
              <h4 className="font-display text-lg text-foreground mb-4">Características del camino:</h4>
              <ul className="space-y-2 font-body text-muted-foreground">
                <li className="flex items-center gap-2">
                  
                  Carretera asfaltada pero estrecha
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Sinuosa, con curvas de montaña
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Varios ensanches naturales para cruzarse con otros vehículos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Poca circulación (solo residentes y huéspedes)
                </li>
                
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h4 className="font-display text-lg text-foreground mb-4">Consejos para una llegada tranquila:</h4>
              <ul className="space-y-3 font-body text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Conduce despacio y con atención (no hay prisa, estás de vacaciones)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Si ves un vehículo de frente, usa los ensanches para ceder o esperar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Es más fácil de lo que parece: con calma, todo fluye</span>
                </li>
                
              </ul>
            </div>
          </section>

          {/* Por qué esta carretera */}
          <section className="mb-12 bg-accent/10 rounded-xl p-6 md:p-8 border-l-4 border-accent">
            <h3 className="font-display text-xl text-foreground mb-4">¿Por qué esta carretera?</h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Porque La Roza es una aldea auténtica, no un complejo turístico. Aquí no hay tráfico, 
              ruido ni aglomeraciones. La dificultad del acceso es precisamente lo que ha preservado 
              este rincón único de Asturias.
            </p>
            <p className="font-body text-foreground leading-relaxed italic">
              Cuando llegues, entenderás que ese último kilómetro es el precio (pequeño) de disfrutar 
              de vistas panorámicas, silencio absoluto y una naturaleza intacta. Es el camino hacia 
              la desconexión total.
            </p>
          </section>

          {/* Video Tutorial */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                Video tutorial: paso a paso hasta la casa
              </h3>
            </div>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Para que llegues con total seguridad y confianza, hemos grabado un video detallado 
              que muestra todo el recorrido:
            </p>

            <ul className="space-y-2 font-body text-muted-foreground mb-6">
              
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Desvíos y referencias visuales claras
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Cómo afrontar la carretera de montaña
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Dónde girar exactamente hasta la puerta de la casa
              </li>
            </ul>

            {/* Video tutorial */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <video controls className="w-full h-full object-cover" poster="">
                <source src={rutaVideo} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          </section>

          {/* Mapa y navegación */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                Ubicación y navegación GPS
              </h3>
            </div>

            {/* Mapa de Google */}
            <div className="aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-lg mb-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.5!2d-5.417!3d43.408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368b5d1b1b1b1b%3A0x0!2sLa%20Roza%2C%20Cabranes%2C%20Asturias!5e0!3m2!1ses!2ses!4v1704931200000" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación La Cabaña de la Lechuza" />
            </div>

            {/* Botones de navegación */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="https://maps.app.goo.gl/kgmiycYPBchbJ9mT8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors shadow-md">
                <Navigation className="w-5 h-5" />
                Abrir en Google Maps
              </a>
              <a href="https://waze.com/ul/hezsph6wy1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#33ccff] text-white px-6 py-4 rounded-lg font-body font-semibold hover:bg-[#33ccff]/90 transition-colors shadow-md">
                <Navigation className="w-5 h-5" />
                Abrir en Waze
              </a>
            </div>
          </section>

          {/* Contacto durante el trayecto */}
          <section className="bg-card rounded-xl p-6 md:p-8 shadow-lg text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                ¿Dudas durante el trayecto?
              </h3>
            </div>
            <p className="font-body text-muted-foreground mb-4">
              Si en algún momento tienes dudas sobre el camino, llámanos sin problema:
            </p>
            <a href="tel:+34625081519" className="inline-flex items-center gap-2 text-2xl md:text-3xl font-display text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-6 h-6" />
              625 081 519
            </a>
            <p className="font-body text-foreground mt-6 italic text-lg">
              Relájate, tómate tu tiempo y disfruta del paisaje. <br />
              <span className="text-primary font-semibold">¡Bienvenido a la Asturias auténtica!</span>
            </p>
          </section>
        </main>

        {/* Footer simple */}
        <footer className="bg-muted py-8 mt-12">
          <div className="container mx-auto px-6 text-center">
            <Link to="/" className="font-display text-xl text-foreground hover:text-primary transition-colors">
              La Cabaña de la Lechuza
            </Link>
            <p className="font-body text-muted-foreground text-sm mt-2">
              Casa Rural en Cabranes, Asturias
            </p>
          </div>
        </footer>
      </div>
    </>;
};
export default ComoLlegar;