import { Instagram, Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90 py-20 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 w-96 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent -translate-x-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-background text-2xl mb-6">
              La Cabaña de la Lechuza
            </h3>
            <p className="font-body text-background/60 text-sm leading-relaxed mb-6">
              Un refugio de paz entre manzanos y valles asturianos.
              Tu escapada rural perfecta en la Comarca de la Sidra.
            </p>
            <p className="font-body text-background/60 text-sm mb-8">
              Rehabilitada en 2023 con todo el encanto de la arquitectura tradicional asturiana.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.airbnb.es/rooms/1232063912950498409"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-[#FF5A5F] hover:text-white transition-all duration-300"
                title="Ver en Airbnb"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 18.275c-.69 0-1.283-.244-1.752-.708-.469-.469-.703-1.064-.703-1.752 0-.703.244-1.299.703-1.768.469-.469 1.064-.703 1.752-.703.703 0 1.299.234 1.768.703.469.469.703 1.064.703 1.768 0 .688-.234 1.283-.703 1.752-.469.464-1.064.708-1.768.708z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-background text-lg mb-6">
              Enlaces
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#espacios", label: "Espacios" },
                { href: "#experiencia", label: "La Experiencia" },
                { href: "#servicios", label: "Servicios" },
                { href: "#opiniones", label: "Opiniones" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
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
          <div>
            <h4 className="font-display text-background text-lg mb-6">
              Contacto
            </h4>
            <div className="font-body text-background/60 text-sm space-y-4">
              <a 
                href="https://maps.google.com/?q=La+Roza+Cabranes+Asturias"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-background transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Barrio la Roza s/n<br />33310 Cabranes, Asturias</span>
              </a>
              <a 
                href="tel:+34625081519"
                className="flex items-center gap-3 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+34 625 08 15 19</span>
              </a>
              <a 
                href="mailto:info@lechuzaruralasturias.es"
                className="flex items-center gap-3 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@lechuzaruralasturias.es</span>
              </a>
            </div>
            
            <div className="mt-8">
              <p className="font-body text-background/40 text-xs">
                A 7 km de Villaviciosa<br />
                Cerca de Playa Rodiles y Tazones
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-background/40 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} La Cabaña de la Lechuza. Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> en Asturias
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-body text-background/40 text-sm hover:text-background/70 transition-colors">
              Política de Privacidad
            </a>
            <a 
              href="/aviso-legal"
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-background/40 text-sm hover:text-background/70 transition-colors"
            >
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
