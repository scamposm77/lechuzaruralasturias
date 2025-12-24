import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#espacios", label: "Espacios" },
    { href: "#experiencia", label: "La Experiencia" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#inicio"
          className={`font-display text-2xl font-semibold tracking-wide transition-colors ${
            isScrolled ? "text-foreground" : "text-background"
          }`}
        >
          Casa Los Olivos
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium tracking-wide uppercase transition-all hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservar"
            className={`px-5 py-2.5 rounded-sm font-body text-sm font-semibold uppercase tracking-wider transition-all ${
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-background text-foreground hover:bg-background/90"
            }`}
          >
            Reservar
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-background"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-foreground text-base font-medium py-2 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-5 py-3 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider text-center"
            >
              Reservar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
