import { useState } from "react";
import { MapPin, Phone, Mail, Send, ArrowRight, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
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
    // Enviar por email
    const subject = encodeURIComponent('Consulta sobre La Cabaña de la Lechuza');
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Fechas: ${formData.dates}\n` +
      `Huéspedes: ${formData.guests}\n\n` +
      `Mensaje:\n${formData.message}`
    );
    window.location.href = `mailto:info@lechuzaruralasturias.es?subject=${subject}&body=${body}`;
    
    toast({
      title: "¡Abriendo cliente de correo!",
      description: "Se abrirá tu aplicación de email para enviar la consulta.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      lines: ["Barrio la Roza s/n", "33310 Cabranes, Asturias"],
      link: "https://maps.google.com/?q=La+Roza+Cabranes+Asturias",
    },
    {
      icon: Phone,
      title: "Teléfono",
      lines: ["+34 625 08 15 19"],
      link: "tel:+34625081519",
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["info@lechuzaruralasturias.es"],
      link: "mailto:info@lechuzaruralasturias.es",
    },
  ];

  return (
    <section id="contacto" aria-label="Contacto y reservas de la casa rural" className="py-28 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
              Reserva tu estancia
            </span>
            <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.15]">
              ¿Listo para tu
              <span className="text-primary italic"> Escapada Rural?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              Reserva tu alojamiento en la Comarca de la Sidra. Consulta disponibilidad para tu escapada rural en Asturias
              o pregúntanos cualquier duda sobre La Cabaña de la Lechuza.
            </p>
            <p className="font-body text-muted-foreground mb-12">
              <strong className="text-foreground">Susana</strong>, nuestra anfitriona, estará encantada de atenderte personalmente.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={item.title} 
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-5 group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-display text-foreground text-xl mb-1 flex items-center gap-2">
                        {item.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          <div id="reservar" className="bg-background p-10 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
            
            <h3 className="font-display text-foreground text-2xl mb-2 relative">
              Solicitar Información
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-8">
              Te responderemos a la mayor brevedad posible
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  required
                  className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <input
                  type="text"
                  name="dates"
                  value={formData.dates}
                  onChange={handleChange}
                  placeholder="Fechas aproximadas"
                  className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              >
                <option value="">Número de huéspedes</option>
                <option value="2">2 huéspedes</option>
                <option value="3">3 huéspedes</option>
                <option value="4">4 huéspedes</option>
                <option value="5">5 huéspedes</option>
                <option value="6">6 huéspedes</option>
                <option value="7">7 huéspedes</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu mensaje o consulta..."
                rows={4}
                className="w-full px-5 py-4 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Enviar Consulta
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
