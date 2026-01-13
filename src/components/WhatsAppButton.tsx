import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppButton = () => {
  const { language } = useLanguage();
  
  const phoneNumber = "34625081519";
  const message = language === "es" 
    ? "Hola, consulta disponibilidad julio" 
    : "Hello, checking availability for July";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label={language === "es" ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-body text-sm font-semibold hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;