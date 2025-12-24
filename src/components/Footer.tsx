import { Instagram, Facebook, Heart } from "lucide-react";

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
            <p className="font-body text-background/60 text-sm leading-relaxed mb-8">
              Un refugio de paz entre manzanos y valles asturianos.
              Tu escapada rural perfecta en la Comarca de la Sidra.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
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
            <div className="font-body text-background/60 text-sm space-y-3">
              <p>La Roza, Cabranes</p>
              <p>Comarca de la Sidra, Asturias</p>
              <p className="pt-2">+34 600 123 456</p>
              <p>info@cabanadellechuza.es</p>
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
            <a href="#" className="font-body text-background/40 text-sm hover:text-background/70 transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
