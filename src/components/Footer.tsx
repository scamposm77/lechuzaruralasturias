import { Instagram, Facebook, Heart, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#espacios", label: t("footer.spaces") },
    { href: "#habitaciones", label: t("nav.rooms") },
    { href: "#servicios", label: t("footer.services") },
    { href: "/blog", label: t("nav.blog"), isExternal: true },
    { href: "#contacto", label: t("footer.contact") },
  ];

  return (
    <footer 
      className="bg-foreground text-background/90 py-20 relative overflow-hidden"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 w-96 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent -translate-x-1/2" aria-hidden="true" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div itemScope itemType="https://schema.org/Organization">
            <h3 className="font-display text-background text-2xl mb-6" itemProp="name">
              La Cabaña de la Lechuza
            </h3>
            <p className="font-body text-background/60 text-sm leading-relaxed mb-6" itemProp="description">
              {t("footer.description")}
            </p>
            <p className="font-body text-background/60 text-sm mb-8">
              {t("footer.rehabilitated")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lechuza.casaruralasturias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                title={language === "es" ? "Síguenos en Instagram" : "Follow us on Instagram"}
                aria-label="Instagram"
                itemProp="sameAs"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586207769517&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                title={language === "es" ? "Síguenos en Facebook" : "Follow us on Facebook"}
                aria-label="Facebook"
                itemProp="sameAs"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.airbnb.es/rooms/1134703286904548225?guests=1&adults=1&s=67&unique_share_id=9e3d8fa8-48d8-49ab-a24e-c39cf096703e"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-[#FF5A5F] hover:text-white transition-all duration-300"
                title={language === "es" ? "Ver en Airbnb" : "View on Airbnb"}
                aria-label="Airbnb"
                itemProp="sameAs"
              >
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M16 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15 8.285 0 15-6.716 15-15 0-8.284-6.715-15-15-15zm-.438 5.067c1.083 0 1.96.877 1.96 1.96 0 1.083-.877 1.96-1.96 1.96-1.083 0-1.96-.877-1.96-1.96 0-1.083.877-1.96 1.96-1.96zM16 25.933c-2.45 0-4.273-.924-5.47-2.248-.685-.756-1.143-1.647-1.399-2.537-.256-.89-.312-1.795-.152-2.592.168-.84.553-1.573 1.134-2.07.564-.484 1.303-.756 2.168-.756.608 0 1.135.123 1.583.357.428.224.78.537 1.07.901.14.176.267.366.383.564.116-.198.243-.388.383-.564.29-.364.642-.677 1.07-.901.448-.234.975-.357 1.583-.357.865 0 1.604.272 2.168.756.581.497.966 1.23 1.134 2.07.16.797.104 1.702-.152 2.592-.256.89-.714 1.781-1.399 2.537-1.197 1.324-3.02 2.248-5.47 2.248h-.634z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-background text-lg mb-6">
              {t("footer.links")}
            </h4>
            <nav className="flex flex-col gap-3" aria-label={language === "es" ? "Enlaces rápidos" : "Quick links"}>
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-background/60 text-sm hover:text-background hover:translate-x-1 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="La Cabaña de la Lechuza" />
            <h4 className="font-display text-background text-lg mb-6">
              {t("footer.contact")}
            </h4>
            <div className="font-body text-background/60 text-sm space-y-4">
              <a 
                href="https://maps.app.goo.gl/RAUYH5vjUNvub4Nn9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-background transition-colors"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <span itemProp="streetAddress">Barrio la Roza s/n</span><br />
                  <span itemProp="postalCode">33310</span> <span itemProp="addressLocality">Cabranes</span>, <span itemProp="addressRegion">Asturias</span>
                </span>
              </a>
              <a 
                href="tel:+34625081519"
                className="flex items-center gap-3 hover:text-background transition-colors"
                itemProp="telephone"
              >
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>+34 625 08 15 19</span>
              </a>
              <a 
                href="mailto:info@lechuzaruralasturias.es"
                className="flex items-center gap-3 hover:text-background transition-colors"
                itemProp="email"
              >
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>info@lechuzaruralasturias.es</span>
              </a>
            </div>
            
            <div className="mt-8">
              <p className="font-body text-background/40 text-xs">
                {t("footer.nearVillaviciosa")}<br />
                {t("footer.nearBeaches")}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-background/40 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} La Cabaña de la Lechuza. {t("footer.madeWith")} <Heart className="w-4 h-4 text-primary fill-primary" aria-hidden="true" /> {t("footer.inAsturias")}
          </p>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8" aria-label={language === "es" ? "Enlaces legales" : "Legal links"}>
            <a 
              href="/politica-privacidad"
              className="font-body text-background/40 text-sm hover:text-background/70 transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a 
              href="/aviso-legal"
              className="font-body text-background/40 text-sm hover:text-background/70 transition-colors"
            >
              {t("footer.legal")}
            </a>
            <a 
              href="/politica-cookies"
              className="font-body text-background/40 text-sm hover:text-background/70 transition-colors"
            >
              {language === "es" ? "Política de Cookies" : "Cookie Policy"}
            </a>
            <a 
              href="/terminos-reserva"
              className="font-body text-background/40 text-sm hover:text-background/70 transition-colors"
            >
              {language === "es" ? "Condiciones de Reserva" : "Booking Terms"}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;