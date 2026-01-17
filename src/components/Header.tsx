import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoLechuza from "@/assets/logo-lechuza.png";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

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

  // Handle anchor navigation - scrolls if on home page, navigates then scrolls if on another page
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      // On home page, just scroll to the section
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On another page, navigate to home with hash
      navigate('/' + anchor);
    }
  };

  const navLinks = [
    { href: "#inicio", label: t("nav.home"), isRoute: false },
    { href: "#espacios", label: t("nav.gallery"), isRoute: false },
    { href: "/que-hacer", label: t("nav.whatToDo"), isRoute: true },
    { href: "/como-llegar", label: t("nav.directions"), isRoute: true },
    { href: "/blog", label: t("nav.blog"), isRoute: true },
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
        <Link
          to="/"
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
          <span className="hidden sm:inline">La Cabaña de la Lechuza</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body text-sm font-medium tracking-wider uppercase transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all hover:after:w-full ${
                  isScrolled ? "text-foreground" : "text-background"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`font-body text-sm font-medium tracking-wider uppercase transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all hover:after:w-full cursor-pointer ${
                  isScrolled ? "text-foreground" : "text-background"
                }`}
              >
                {link.label}
              </a>
            )
          ))}
          <LanguageSelector isScrolled={isScrolled} />
          <a
            href="#contacto"
            onClick={(e) => handleAnchorClick(e, "#contacto")}
            className={`px-6 py-3 rounded-sm font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
                : "bg-background/95 text-foreground hover:bg-background shadow-lg"
            }`}
          >
            {t("nav.book")}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSelector isScrolled={isScrolled} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-background"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-fade-in shadow-xl">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-foreground text-lg font-medium py-3 border-b border-border/30 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="font-body text-foreground text-lg font-medium py-3 border-b border-border/30 hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleAnchorClick(e, "#contacto")}
              className="mt-4 px-6 py-4 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider text-center shadow-md cursor-pointer"
            >
              {t("nav.book")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
