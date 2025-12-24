import { useState } from "react";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";
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
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos lo antes posible. ¡Gracias por tu interés!",
    });
    setFormData({ name: "", email: "", phone: "", dates: "", guests: "", message: "" });
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
      lines: ["La Roza, Cabranes", "Comarca de la Sidra, Asturias"],
    },
    {
      icon: Phone,
      title: "Teléfono",
      lines: ["+34 600 123 456"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["info@cabanadellechuza.es"],
    },
  ];

  return (
    <section id="contacto" className="py-28 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
              Contacto
            </span>
            <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.15]">
              ¿Listo para
              <span className="text-primary italic"> Desconectar?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-12 leading-relaxed">
              Escríbenos para consultar disponibilidad, resolver cualquier duda
              o simplemente para saber más sobre La Cabaña de la Lechuza.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-display text-foreground text-xl mb-1">
                        {item.title}
                      </p>
                      {item.lines.map((line, idx) => (
                        <p key={idx} className="font-body text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div id="reservar" className="bg-background p-10 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
            
            <h3 className="font-display text-foreground text-2xl mb-8 relative">
              Solicitar Información
            </h3>
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
