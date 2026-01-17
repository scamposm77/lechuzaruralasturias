import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
const TerminosReserva = () => {
  const {
    language
  } = useLanguage();
  if (language === "en") {
    return <>
        <Helmet>
          <title>Booking Terms | La Cabaña de la Lechuza - Rural House Asturias</title>
          <meta name="description" content="Booking terms and conditions of La Cabaña de la Lechuza, rural house in Cabranes, Asturias. Cancellation policy, payment conditions and house rules." />
          <meta name="robots" content="noindex, follow" />
          <link rel="canonical" href="https://www.lechuzaruralasturias.es/terminos-reserva" />
        </Helmet>
        <div className="min-h-screen bg-background">
          <header className="bg-foreground text-background py-6">
            <div className="container mx-auto px-6">
              <a href="/" className="inline-flex items-center gap-2 font-body text-background/80 hover:text-background transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to La Cabaña de la Lechuza
              </a>
            </div>
          </header>

          <main className="container mx-auto px-6 py-16 max-w-4xl">
            <h1 className="font-display text-foreground text-4xl md:text-5xl mb-4">
              Booking Terms and Conditions
            </h1>
            <p className="font-body text-primary font-semibold mb-2">
              La Cabaña de la Lechuza Rural House
            </p>
            <p className="font-body text-muted-foreground text-sm mb-12">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-8">
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">1. BOOKING AND PAYMENT</h2>
                
                <h3 className="font-display text-foreground text-xl mb-3">1.1. Booking Confirmation</h3>
                <p className="leading-relaxed mb-4">
                  The booking will be considered confirmed once:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Payment has been received (deposit or full amount)</li>
                  <li>You receive written confirmation by email</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">1.2. Payment Methods</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Bank transfer</li>
                  <li>Bizum</li>
                  <li>Through Airbnb platform (with platform fees)</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">1.3. Price (from 100€/night)</h3>
                <p className="leading-relaxed mb-2">The booking price includes:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Accommodation for up to 7 guests</li>
                  <li>Exclusive use of the house and garden</li>
                  <li>Water, electricity and heating (reasonable use)</li>
                  <li>Bed linen and towels</li>
                  <li>Final cleaning</li>
                  <li>Free WiFi and private parking</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">2. CANCELLATION POLICY</h2>
                
                <h3 className="font-display text-foreground text-xl mb-3">2.1. Free Cancellation</h3>
                <p className="leading-relaxed mb-4">
                  <strong>More than 30 days before check-in:</strong> Full refund of the amount paid.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">2.2. Partial Cancellation</h3>
                <p className="leading-relaxed mb-4">
                  <strong>Less than 30 days before check-in:</strong> No refund will be made. 100% of the amount will be retained as compensation.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">2.3. No-show</h3>
                <p className="leading-relaxed mb-4">
                  If you do not show up without prior cancellation, 100% of the booking will be charged.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">2.4. How to Cancel</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: info@lechuzaruralasturias.es</li>
                  <li>Phone/WhatsApp: +34 625 08 15 19</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">3. CHECK-IN AND CHECK-OUT</h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Check-in:</strong> From 6:00 PM to 9:00 PM</li>
                  <li><strong>Check-out:</strong> Before 11:00 AM</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  Early check-in or late check-out may be available upon request, subject to availability.
                </p>
              </section>

              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">4. HOUSE RULES</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Maximum capacity:</strong> 7 guests (cannot be exceeded)</li>
                  <li><strong>No smoking:</strong> Inside the house</li>
                  <li><strong>No pets:</strong> Animals with fur are not allowed</li>
                  <li><strong>No parties:</strong> Loud events are not permitted</li>
                  <li><strong>Toilet paper:</strong> Do not flush - use the bin</li>
                  <li><strong>Waste management:</strong> Take your waste to the nearest containers (Villaviciosa, 7 km)</li>
                  <li><strong>Respect quiet hours:</strong> Between 10 PM and 9 AM</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">5. LIABILITY</h2>
                <p className="leading-relaxed mb-4">
                  Guests are responsible for any damages caused during their stay. Repair or financial compensation may be required.
                </p>
              </section>

              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">6. CONTACT</h2>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Host:</strong> Susana Campos Márquez</li>
                  <li><strong className="text-foreground">Email:</strong>Email: info@lechuzaruralasturias.es</li>
                  <li><strong className="text-foreground">Phone/WhatsApp:</strong> +34 625 08 15 19</li>
                  <li><strong className="text-foreground">Tourist Registry:</strong> VV.3561.AS</li>
                </ul>
              </section>
            </div>
          </main>
        </div>
      </>;
  }
  return <>
      <Helmet>
        <title>Términos de Reserva | La Cabaña de la Lechuza - Casa Rural Asturias</title>
        <meta name="description" content="Términos y condiciones de reserva de La Cabaña de la Lechuza, casa rural en Cabranes, Asturias. Política de cancelación, condiciones de pago y normas de la casa." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/terminos-reserva" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <header className="bg-foreground text-background py-6">
          <div className="container mx-auto px-6">
            <a href="/" className="inline-flex items-center gap-2 font-body text-background/80 hover:text-background transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver a La Cabaña de la Lechuza
            </a>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="font-display text-foreground text-4xl md:text-5xl mb-4">
            Términos y Condiciones de Reserva
          </h1>
          <p className="font-body text-primary font-semibold mb-2">
            Casa Rural La Cabaña de la Lechuza
          </p>
          <p className="font-body text-muted-foreground text-sm mb-12">
            Última actualización: Enero 2026
          </p>

          <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-8">
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">1. RESERVA Y PAGO</h2>
              
              <h3 className="font-display text-foreground text-xl mb-3">1.1. Confirmación de Reserva</h3>
              <p className="leading-relaxed mb-4">
                La reserva se considerará confirmada una vez que:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Se haya recibido el pago (señal o importe total)</li>
                <li>Recibas confirmación escrita por email</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">1.2. Métodos de Pago</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Transferencia bancaria</li>
                <li>Bizum</li>
                <li>A través de la plataforma Airbnb (con comisiones de la plataforma)</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">1.3. Precio (desde 100€/noche)</h3>
              <p className="leading-relaxed mb-2">El precio de la reserva incluye:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Alojamiento para hasta 7 huéspedes (sillón cama en el salón)</li>
                <li>Uso exclusivo de la casa y jardín</li>
                <li>Agua, luz y calefacción (uso razonable)</li>
                <li>Ropa de cama y toallas</li>
                <li>Limpieza final</li>
                <li>WiFi gratuito y parking privado</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">2. POLÍTICA DE CANCELACIÓN</h2>
              
              <h3 className="font-display text-foreground text-xl mb-3">2.1. Cancelación Gratuita</h3>
              <p className="leading-relaxed mb-4">
                <strong>Con más de 30 días de antelación:</strong> Reembolso completo del importe pagado.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">2.2. Cancelación Parcial</h3>
              <p className="leading-relaxed mb-4">
                <strong>Con menos de 30 días de antelación:</strong> No se realizará reembolso. Se retendrá el 100% del importe como compensación.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">2.3. No Presentación</h3>
              <p className="leading-relaxed mb-4">
                Si no te presentas sin cancelar previamente, se cobrará el 100% de la reserva.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">2.4. Cómo Cancelar</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: info@lechuzaruralasturias.es</li>
                <li>Teléfono/WhatsApp: +34 625 08 15 19</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">3. ENTRADA Y SALIDA</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Check-in:</strong> De 18:00 a 21:00 h</li>
                <li><strong>Check-out:</strong> Antes de las 11:00 h</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Se puede solicitar check-in anticipado o check-out tardío, sujeto a disponibilidad.
              </p>
            </section>

            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">4. NORMAS DE LA CASA</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Capacidad máxima:</strong> 7 huéspedes (no se puede superar)</li>
                <li><strong>Prohibido fumar:</strong> En el interior de la casa</li>
                <li><strong>No se admiten mascotas:</strong> Animales con pelo no están permitidos</li>
                <li><strong>No se permiten fiestas:</strong> No eventos ruidosos</li>
                <li><strong>Papel higiénico:</strong> No tirar al WC - usar papelera</li>
                <li><strong>Gestión de residuos:</strong> Llevar la basura a los contenedores más cercanos (Villaviciosa, 7 km)</li>
                <li><strong>Respetar horas de descanso:</strong> Entre las 22:00 y las 9:00 h</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">5. RESPONSABILIDAD</h2>
              <p className="leading-relaxed mb-4">
                Los huéspedes son responsables de cualquier daño causado durante su estancia. Se podrá requerir reparación o compensación económica.
              </p>
            </section>

            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">6. CONTACTO</h2>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Anfitriona:</strong> Susana Campos Márquez</li>
                <li><strong className="text-foreground">Email:</strong>Email: info@lechuzaruralasturias.es</li>
                <li><strong className="text-foreground">Teléfono/WhatsApp:</strong> +34 625 08 15 19</li>
                <li><strong className="text-foreground">Registro Turístico:</strong> VV.3561.AS</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>;
};
export default TerminosReserva;