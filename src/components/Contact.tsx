import { useState } from "react";
import { MapPin, Phone, Mail, Send, ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(language === "es" ? "Consulta sobre La Cabaña de la Lechuza" : "Inquiry about La Cabaña de la Lechuza");
    const body = encodeURIComponent(
      `${language === "es" ? "Nombre" : "Name"}: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `${language === "es" ? "Teléfono" : "Phone"}: ${formData.phone}\n` +
      `${language === "es" ? "Fechas" : "Dates"}: ${formData.dates}\n` +
      `${language === "es" ? "Huéspedes" : "Guests"}: ${formData.guests}\n\n` +
      `${language === "es" ? "Mensaje" : "Message"}:\n${formData.message}`
    );
    window.location.href = `mailto:info@lechuzaruralasturias.es?subject=${subject}&body=${body}`;
    
    toast({
      title: t("contact.toast.title"),
      description: t("contact.toast.description"),
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(language === "es" 
      ? "Hola, me gustaría consultar disponibilidad en La Cabaña de la Lechuza."
      : "Hello, I would like to check availability at La Cabaña de la Lechuza."
    );
    window.open(`https://wa.me/34625081519?text=${message}`, "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.location"),
      lines: ["Barrio la Roza s/n", "33310 Cabranes, Asturias"],
      link: "https://maps.google.com/?q=La+Roza+Cabranes+Asturias",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      lines: ["+34 625 08 15 19"],
      link: "tel:+34625081519",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      lines: ["info@lechuzaruralasturias.es"],
      link: "mailto:info@lechuzaruralasturias.es",
    },
  ];

  return (
    <section 
      id="contacto" 
      aria-label={language === "es" ? "Contacto y reservas de la casa rural" : "Rural house contact and bookings"} 
      className="py-28 bg-card relative overflow-hidden"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden="true" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
              {t("contact.subtitle")}
            </span>
            <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.15]">
              {t("contact.title")}
              <span className="text-primary italic"> {t("contact.titleAccent")}</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              {t("contact.description")}
            </p>
            <p className="font-body text-muted-foreground mb-8">
              <strong className="text-foreground">Susana</strong>{t("contact.hostIntro")}
            </p>

            {/* WhatsApp Button */}
            <button
              onClick={openWhatsApp}
              className="mb-8 w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-[#20BA5C] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              aria-label={language === "es" ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
            >
              <MessageCircle className="w-5 h-5" />
              {t("contact.whatsapp")}
            </button>

            <div 
              className="space-y-8"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <meta itemProp="name" content="La Cabaña de la Lechuza" />
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={item.title} 
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-5 group cursor-pointer"
                    itemProp={item.title === t("contact.phone") ? "telephone" : item.title === t("contact.email") ? "email" : "address"}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300" aria-hidden="true">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-display text-foreground text-xl mb-1 flex items-center gap-2">
                        {item.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      </p>
                      {item.lines.map((line, idx) => (
                        <p key={idx} className="font-body text-muted-foreground group-hover:text-foreground transition-colors">
                          {line}
                        </p>
                      ))}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div 
            id="reservar" 
            className="bg-background p-10 md:p-12 rounded-sm shadow-2xl relative overflow-hidden"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <meta itemProp="contactType" content={language === "es" ? "Reservas" : "Reservations"} />
            <meta itemProp="email" content="info@lechuzaruralasturias.es" />
            <meta itemProp="telephone" content="+34625081519" />
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
            
            <h3 className="font-display text-foreground text-2xl mb-2 relative">
              {t("contact.formTitle")}
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-8">
              {t("contact.formSubtitle")}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.name")}
                  required
                  aria-label={t("contact.name")}
                  className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.emailPlaceholder")}
                  required
                  aria-label={t("contact.emailPlaceholder")}
                  className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("contact.phonePlaceholder")}
                  aria-label={t("contact.phonePlaceholder")}
                  className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <input
                  type="text"
                  name="dates"
                  value={formData.dates}
                  onChange={handleChange}
                  placeholder={t("contact.dates")}
                  aria-label={t("contact.dates")}
                  className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                aria-label={t("contact.guests")}
                className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              >
                <option value="">{t("contact.guests")}</option>
                <option value="2">2 {t("contact.guestsOption")}</option>
                <option value="3">3 {t("contact.guestsOption")}</option>
                <option value="4">4 {t("contact.guestsOption")}</option>
                <option value="5">5 {t("contact.guestsOption")}</option>
                <option value="6">6 {t("contact.guestsOption")}</option>
                <option value="7">7 {t("contact.guestsOption")}</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.message")}
                rows={4}
                aria-label={t("contact.message")}
                className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
                {t("contact.send")}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;