import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

const LanguageSelector = ({ isScrolled = false }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage("es")}
        className={`w-6 h-[18px] rounded-sm overflow-hidden transition-all duration-300 ${
          language === "es" 
            ? "ring-2 ring-primary scale-110" 
            : "opacity-60 hover:opacity-100"
        }`}
        aria-label="Español"
        title="Español"
      >
        {/* Bandera de España */}
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <path fill="#c60b1e" d="M0 0h640v480H0z"/>
          <path fill="#ffc400" d="M0 120h640v240H0z"/>
        </svg>
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`w-6 h-[18px] rounded-sm overflow-hidden transition-all duration-300 ${
          language === "en" 
            ? "ring-2 ring-primary scale-110" 
            : "opacity-60 hover:opacity-100"
        }`}
        aria-label="English"
        title="English"
      >
        {/* Bandera de Reino Unido */}
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <path fill="#012169" d="M0 0h640v480H0z"/>
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
          <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/>
          <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/>
          <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/>
        </svg>
      </button>
    </div>
  );
};

export default LanguageSelector;
