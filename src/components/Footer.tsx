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
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.001 1.5c-1.616 0-3.053.595-4.295 1.775-1.243 1.18-2.162 2.87-2.757 5.07-.893 3.302-.297 5.63 1.787 6.985.297.193.595.356.922.475.209.327.416.685.624 1.072.416.773.773 1.576 1.072 2.409.297.833.446 1.546.446 2.14 0 .773-.208 1.427-.624 1.96-.416.535-.952.803-1.606.803-.654 0-1.19-.268-1.606-.803-.416-.535-.624-1.188-.624-1.96 0-.594.149-1.307.446-2.14.297-.833.654-1.636 1.072-2.409.208-.387.415-.745.624-1.072.327-.119.625-.282.922-.475 2.084-1.355 2.68-3.683 1.787-6.985-.595-2.2-1.514-3.89-2.757-5.07C15.054 2.095 13.617 1.5 12.001 1.5zm0 2.974c.892 0 1.696.386 2.409 1.16.713.773 1.248 1.845 1.606 3.217.654 2.439.297 4.056-1.072 4.85-.178.118-.356.208-.565.268-.297-.535-.624-1.04-.981-1.517-.654-.892-1.307-1.606-1.96-2.14-.356-.297-.683-.505-.981-.625.654-.178 1.308-.416 1.96-.713-.773.178-1.576.297-2.409.297-.832 0-1.636-.119-2.409-.297.654.297 1.308.535 1.961.713-.297.12-.625.328-.981.625-.654.534-1.307 1.248-1.961 2.14-.356.476-.683.982-.98 1.517-.21-.06-.388-.15-.566-.268-1.368-.794-1.725-2.411-1.071-4.85.357-1.372.892-2.444 1.606-3.217.713-.774 1.517-1.16 2.409-1.16.535 0 1.011.148 1.427.446.416.297.743.713.981 1.248.238-.535.565-.951.981-1.248.416-.298.892-.446 1.427-.446z"/>
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