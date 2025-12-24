import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
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

  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-3">
              Contacto
            </p>
            <h2 className="font-display text-foreground text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              ¿Listo para Desconectar?
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
              Escríbenos para consultar disponibilidad, resolver cualquier duda
              o simplemente para saber más sobre Casa Los Olivos. Estaremos
              encantados de atenderte.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-foreground text-lg font-medium">
                    Ubicación
                  </p>
                  <p className="font-body text-muted-foreground">
                    Camino de los Olivos s/n<br />
                    Úbeda, Jaén, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-foreground text-lg font-medium">
                    Teléfono
                  </p>
                  <p className="font-body text-muted-foreground">
                    +34 600 123 456
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-foreground text-lg font-medium">
                    Email
                  </p>
                  <p className="font-body text-muted-foreground">
                    info@casalosolivos.es
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="reservar" className="bg-background p-8 md:p-10 rounded-sm card-shadow">
            <h3 className="font-display text-foreground text-2xl font-medium mb-6">
              Solicitar Información
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
                <input
                  type="text"
                  name="dates"
                  value={formData.dates}
                  onChange={handleChange}
                  placeholder="Fechas aproximadas"
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>

              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              >
                <option value="">Número de huéspedes</option>
                <option value="2">2 huéspedes</option>
                <option value="3">3 huéspedes</option>
                <option value="4">4 huéspedes</option>
                <option value="5">5 huéspedes</option>
                <option value="6">6 huéspedes</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu mensaje o consulta..."
                rows={4}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all"
              >
                <Send className="w-4 h-4" />
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
