import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-background text-2xl font-medium mb-4">
              La Cabaña de la Lechuza
            </h3>
            <p className="font-body text-background/70 text-sm leading-relaxed mb-6">
              Un refugio de paz entre manzanos y valles asturianos.
              Tu escapada rural perfecta en la Comarca de la Sidra.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-background text-lg font-medium mb-4">
              Enlaces
            </h4>
            <nav className="flex flex-col gap-2">
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
                  className="font-body text-background/70 text-sm hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-background text-lg font-medium mb-4">
              Contacto
            </h4>
            <div className="font-body text-background/70 text-sm space-y-2">
              <p>La Roza, Cabranes</p>
              <p>Comarca de la Sidra, Asturias</p>
              <p className="pt-2">+34 600 123 456</p>
              <p>info@cabanadellechuza.es</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-background/50 text-sm">
            © {new Date().getFullYear()} La Cabaña de la Lechuza. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-background/50 text-sm hover:text-background/70 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="font-body text-background/50 text-sm hover:text-background/70 transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
