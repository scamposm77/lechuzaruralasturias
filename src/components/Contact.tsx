import { useState } from "react";
import { Phone, Mail, Send, ArrowRight, MessageCircle, Instagram, Facebook } from "lucide-react";
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


  const contactInfo = [
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

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/34625081519?text=${encodeURIComponent(language === "es" ? "Hola, me gustaría consultar disponibilidad en La Cabaña de la Lechuza." : "Hello, I would like to check availability at La Cabaña de la Lechuza.")}`,
      className: "bg-[#25D366] hover:bg-[#20BA5C]",
      label: "WhatsApp",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/lechuza.casaruralasturias",
      className: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90",
      label: "Instagram",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61586207769517",
      className: "bg-[#1877F2] hover:bg-[#166FE5]",
      label: "Facebook",
    },
    {
      name: "Airbnb",
      icon: null,
      href: "https://www.airbnb.es/rooms/1134703286904548225?guests=1&adults=1&s=67&unique_share_id=9e3d8fa8-48d8-49ab-a24e-c39cf096703e",
      className: "bg-[#FF5A5F] hover:bg-[#E74E52]",
      label: "Airbnb",
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
                    className="flex items-start gap-5 group cursor-pointer"
                    itemProp={item.title === t("contact.phone") ? "telephone" : "email"}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300" aria-hidden="true">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-display text-foreground text-xl mb-1">
                        {item.title}
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

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="font-display text-foreground text-lg mb-4">
                {language === "es" ? "Síguenos y Contáctanos" : "Follow & Contact Us"}
              </h3>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-white text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap ${social.className}`}
                      aria-label={`${social.name} - ${language === "es" ? "Contactar o seguirnos en" : "Contact or follow us on"} ${social.name}`}
                    >
                      {Icon ? (
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
                      ) : (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                          <path d="M16 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15 8.285 0 15-6.716 15-15 0-8.284-6.715-15-15-15zm-.438 5.067c1.083 0 1.96.877 1.96 1.96 0 1.083-.877 1.96-1.96 1.96-1.083 0-1.96-.877-1.96-1.96 0-1.083.877-1.96 1.96-1.96zM16 25.933c-2.45 0-4.273-.924-5.47-2.248-.685-.756-1.143-1.647-1.399-2.537-.256-.89-.312-1.795-.152-2.592.168-.84.553-1.573 1.134-2.07.564-.484 1.303-.756 2.168-.756.608 0 1.135.123 1.583.357.428.224.78.537 1.07.901.14.176.267.366.383.564.116-.198.243-.388.383-.564.29-.364.642-.677 1.07-.901.448-.234.975-.357 1.583-.357.865 0 1.604.272 2.168.756.581.497.966 1.23 1.134 2.07.16.797.104 1.702-.152 2.592-.256.89-.714 1.781-1.399 2.537-1.197 1.324-3.02 2.248-5.47 2.248h-.634z"/>
                        </svg>
                      )}
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            id="reservar" 
            className="bg-background p-10 md:p-12 rounded-xl shadow-2xl relative overflow-hidden"
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