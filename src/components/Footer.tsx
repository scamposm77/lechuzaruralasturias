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
                href="https://www.airbnb.es/rooms/1232063912950498409"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-[#FF5A5F] hover:text-white transition-all duration-300"
                title={language === "es" ? "Ver en Airbnb" : "View on Airbnb"}
                aria-label="Airbnb"
                itemProp="sameAs"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.001 18.275c-.69 0-1.283-.244-1.752-.708-.469-.469-.703-1.064-.703-1.752 0-.703.244-1.299.703-1.768.469-.469 1.064-.703 1.752-.703.703 0 1.299.234 1.768.703.469.469.703 1.064.703 1.768 0 .688-.234 1.283-.703 1.752-.469.464-1.064.708-1.768.708z"/>
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
          <div className="flex gap-8">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;