import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const PoliticaCookies = () => {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <>
        <Helmet>
          <title>Cookie Policy | La Cabaña de la Lechuza - Rural House Asturias</title>
          <meta name="description" content="Cookie policy of La Cabaña de la Lechuza, rural house in Cabranes, Asturias. Information about cookies used on this website." />
          <meta name="robots" content="noindex, follow" />
          <link rel="canonical" href="https://www.lechuzaruralasturias.es/politica-cookies" />
        </Helmet>
        <div className="min-h-screen bg-background">
          <header className="bg-foreground text-background py-6">
            <div className="container mx-auto px-6">
              <a
                href="/"
                className="inline-flex items-center gap-2 font-body text-background/80 hover:text-background transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to La Cabaña de la Lechuza
              </a>
            </div>
          </header>

          <main className="container mx-auto px-6 py-16 max-w-4xl">
            <h1 className="font-display text-foreground text-4xl md:text-5xl mb-4">
              Cookie Policy
            </h1>
            <p className="font-body text-primary font-semibold mb-2">
              La Cabaña de la Lechuza Rural House
            </p>
            <p className="font-body text-muted-foreground text-sm mb-12">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-8">
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">1. WHAT ARE COOKIES?</h2>
                <p className="leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to site owners.
                </p>
              </section>

              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">2. COOKIES WE USE</h2>
                
                <h3 className="font-display text-foreground text-xl mb-3">2.1. Essential/Technical Cookies</h3>
                <p className="leading-relaxed mb-4">
                  These cookies are strictly necessary for the website to function and cannot be disabled. They include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Language preference cookie:</strong> Stores your language selection (Spanish/English)</li>
                  <li><strong>Cookie consent cookie:</strong> Remembers your cookie preferences</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">2.2. Analytics Cookies (optional)</h3>
                <p className="leading-relaxed mb-4">
                  If you consent, we may use analytics cookies to understand how visitors interact with our website:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Google Analytics:</strong> Collects anonymous statistical information about site usage</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  These cookies are only activated with your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">3. THIRD-PARTY COOKIES</h2>
                <p className="leading-relaxed mb-4">
                  Our website may include content from third parties that may set their own cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Maps:</strong> For displaying location maps</li>
                  <li><strong>Social networks:</strong> If you interact with Instagram, Facebook or Airbnb links</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">4. HOW TO MANAGE COOKIES</h2>
                <p className="leading-relaxed mb-4">
                  You can manage your cookie preferences at any time:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Cookie banner:</strong> Accept or reject cookies when you first visit</li>
                  <li><strong>Browser settings:</strong> Configure your browser to block or delete cookies</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  Note that blocking certain cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">5. CONTACT</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about our cookie policy, please contact us:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Email:</strong> susana@lechuzaruralasturias.es</li>
                  <li><strong className="text-foreground">Phone:</strong> +34 625 08 15 19</li>
                </ul>
              </section>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Política de Cookies | La Cabaña de la Lechuza - Casa Rural Asturias</title>
        <meta name="description" content="Política de cookies de La Cabaña de la Lechuza, casa rural en Cabranes, Asturias. Información sobre las cookies utilizadas en este sitio web." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/politica-cookies" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <header className="bg-foreground text-background py-6">
          <div className="container mx-auto px-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-body text-background/80 hover:text-background transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a La Cabaña de la Lechuza
            </a>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="font-display text-foreground text-4xl md:text-5xl mb-4">
            Política de Cookies
          </h1>
          <p className="font-body text-primary font-semibold mb-2">
            Casa Rural La Cabaña de la Lechuza
          </p>
          <p className="font-body text-muted-foreground text-sm mb-12">
            Última actualización: Enero 2026
          </p>

          <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-8">
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">1. ¿QUÉ SON LAS COOKIES?</h2>
              <p className="leading-relaxed mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, smartphone) cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
              </p>
            </section>

            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">2. COOKIES QUE UTILIZAMOS</h2>
              
              <h3 className="font-display text-foreground text-xl mb-3">2.1. Cookies Esenciales/Técnicas</h3>
              <p className="leading-relaxed mb-4">
                Estas cookies son estrictamente necesarias para el funcionamiento del sitio web y no pueden desactivarse. Incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Cookie de preferencia de idioma:</strong> Almacena tu selección de idioma (español/inglés)</li>
                <li><strong>Cookie de consentimiento:</strong> Recuerda tus preferencias de cookies</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">2.2. Cookies de Análisis (opcionales)</h3>
              <p className="leading-relaxed mb-4">
                Si lo consientes, podemos utilizar cookies de análisis para entender cómo los visitantes interactúan con nuestro sitio web:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Google Analytics:</strong> Recopila información estadística anónima sobre el uso del sitio</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Estas cookies solo se activan con tu consentimiento explícito.
              </p>
            </section>

            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">3. COOKIES DE TERCEROS</h2>
              <p className="leading-relaxed mb-4">
                Nuestro sitio web puede incluir contenido de terceros que pueden establecer sus propias cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Maps:</strong> Para mostrar mapas de ubicación</li>
                <li><strong>Redes sociales:</strong> Si interactúas con los enlaces de Instagram, Facebook o Airbnb</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">4. CÓMO GESTIONAR LAS COOKIES</h2>
              <p className="leading-relaxed mb-4">
                Puedes gestionar tus preferencias de cookies en cualquier momento:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Banner de cookies:</strong> Acepta o rechaza las cookies cuando visites por primera vez</li>
                <li><strong>Configuración del navegador:</strong> Configura tu navegador para bloquear o eliminar cookies</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Ten en cuenta que bloquear ciertas cookies puede afectar la funcionalidad del sitio web.
              </p>
            </section>

            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">5. CONTACTO</h2>
              <p className="leading-relaxed mb-4">
                Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Email:</strong> susana@lechuzaruralasturias.es</li>
                <li><strong className="text-foreground">Teléfono:</strong> +34 625 08 15 19</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default PoliticaCookies;
