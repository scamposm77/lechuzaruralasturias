import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay to avoid layout shift on initial load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-up"
      role="dialog"
      aria-label={language === "es" ? "Aviso de cookies" : "Cookie notice"}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="bg-foreground text-background rounded-lg shadow-2xl p-6 md:p-8 relative">
          <button
            onClick={rejectCookies}
            className="absolute top-4 right-4 text-background/60 hover:text-background transition-colors"
            aria-label={language === "es" ? "Cerrar" : "Close"}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary" />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-background text-lg md:text-xl mb-2">
                {language === "es" ? "Este sitio web utiliza cookies" : "This website uses cookies"}
              </h3>
              <p className="font-body text-background/70 text-sm leading-relaxed">
                {language === "es" 
                  ? "Utilizamos cookies técnicas esenciales para el funcionamiento del sitio. Puedes aceptar o rechazar las cookies opcionales."
                  : "We use essential technical cookies for the website to function. You can accept or reject optional cookies."
                }
                {" "}
                <a 
                  href="/politica-cookies" 
                  className="text-primary hover:underline"
                >
                  {language === "es" ? "Más información" : "Learn more"}
                </a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={rejectCookies}
                className="px-6 py-3 bg-background/10 text-background rounded-sm font-body text-sm font-medium hover:bg-background/20 transition-colors border border-background/20"
              >
                {language === "es" ? "Solo esenciales" : "Essential only"}
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                {language === "es" ? "Aceptar todas" : "Accept all"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
