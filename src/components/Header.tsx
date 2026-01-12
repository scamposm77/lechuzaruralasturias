import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoLechuza from "@/assets/logo-lechuza.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    setIsLogoClicked(true);
    setTimeout(() => setIsLogoClicked(false), 300);
  };

  const navLinks = [
    { href: "#inicio", label: "Inicio", isExternal: false },
    { href: "#habitaciones", label: "Habitaciones", isExternal: false },
    { href: "#opiniones", label: "Opiniones", isExternal: false },
    { href: "/como-llegar", label: "Cómo llegar", isExternal: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-lg shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#inicio"
          className={`flex items-center gap-3 font-display text-xl md:text-2xl transition-colors ${
            isScrolled ? "text-foreground" : "text-background"
          }`}
        >
          <img
            src={logoLechuza}
            alt="Logo La Cabaña de la Lechuza - Casa rural en Asturias"
            onClick={handleLogoClick}
            className={`h-10 md:h-12 w-auto cursor-pointer transition-transform duration-300 ${
              isLogoClicked ? "scale-150" : "hover:scale-110"
            }`}
          />
          <span>La Cabaña de la Lechuza</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-body text-sm font-medium tracking-wider uppercase transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all hover:after:w-full ${
                  isScrolled ? "text-foreground" : "text-background"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium tracking-wider uppercase transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all hover:after:w-full ${
                  isScrolled ? "text-foreground" : "text-background"
                }`}
              >
                {link.label}
              </a>
            )
          ))}
          <a
            href="#contacto"
            className={`px-6 py-3 rounded-sm font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
                : "bg-background/95 text-foreground hover:bg-background shadow-lg"
            }`}
          >
            Reservar
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-background"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-fade-in shadow-xl">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-foreground text-lg font-medium py-3 border-b border-border/30 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-foreground text-lg font-medium py-3 border-b border-border/30 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-4 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider text-center shadow-md"
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
