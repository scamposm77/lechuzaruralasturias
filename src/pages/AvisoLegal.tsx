import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const AvisoLegal = () => {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <>
        <Helmet>
          <title>Legal Notice | La Cabaña de la Lechuza - Rural House Asturias</title>
          <meta name="description" content="Legal notice of La Cabaña de la Lechuza, vacation rental in Cabranes, Asturias. Information about terms of use, booking conditions and cancellation policy." />
          <meta name="robots" content="noindex, follow" />
          <link rel="canonical" href="https://www.lechuzaruralasturias.es/aviso-legal" />
        </Helmet>
        <div className="min-h-screen bg-background">
          {/* Header */}
          <header className="bg-foreground text-background py-6">
            <div className="container mx-auto px-6">
              <a
                href="/"
                className="inline-flex items-center gap-2 font-body text-background/80 hover:text-background transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to La Cabaña de la Lechuza
              </a>
            </div>
          </header>

          {/* Content */}
          <main className="container mx-auto px-6 py-16 max-w-4xl">
            <h1 className="font-display text-foreground text-4xl md:text-5xl mb-4">
              Legal Notice
            </h1>
            <p className="font-body text-primary font-semibold mb-2">
              La Cabaña de la Lechuza Rural House
            </p>
            <p className="font-body text-muted-foreground text-sm mb-12">
              Last updated: January 11, 2026
            </p>

            <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">1. IDENTIFICATION DATA</h2>
                <p className="leading-relaxed mb-4">
                  In compliance with Spanish Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), we inform users of the following data:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Activity holder:</strong> [Your full name or company name]</li>
                  <li><strong className="text-foreground">Tax ID:</strong> [Your Tax ID]</li>
                  <li><strong className="text-foreground">Registered address:</strong> La Roza, Cabranes, Principality of Asturias, Spain</li>
                  <li><strong className="text-foreground">Email:</strong> [your contact email]</li>
                  <li><strong className="text-foreground">Phone:</strong> [your phone number]</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  <strong className="text-foreground">Activity:</strong> Vacation rental for tourist use<br />
                  <strong className="text-foreground">Asturias Tourist Registry:</strong> VV.3561.AS<br />
                  <strong className="text-foreground">National registry number:</strong> ESFCTU000033009000999701000000000000000000VV.3561.AS3
                </p>
                <p className="mt-4 text-muted-foreground">
                  <strong className="text-foreground">Trade name:</strong> La Cabaña de la Lechuza<br />
                  <strong className="text-foreground">Website URL:</strong> [your-domain.com]
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">2. PURPOSE</h2>
                <p className="leading-relaxed mb-4">
                  This Legal Notice regulates access and use of the website [your-domain.com], owned by [Your name/company name] (hereinafter, the OWNER).
                </p>
                <p className="leading-relaxed mb-4">
                  Browsing the OWNER's website grants the status of user and implies full and unreserved acceptance of all provisions included in this Legal Notice, which may be modified.
                </p>
                <p className="leading-relaxed">
                  The user agrees to make correct use of the website in accordance with laws, good faith, public order, traffic uses and this Legal Notice. The user shall be liable to the OWNER or third parties for any damages that may be caused as a result of breach of this obligation.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">3. ACCESS AND USE CONDITIONS</h2>
                
                <h3 className="font-display text-foreground text-xl mb-3">3.1. Free access</h3>
                <p className="leading-relaxed mb-4">
                  Access and browsing this website is free. However, contracting the offered services (vacation rental) is subject to payment of published rates.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">3.2. User registration</h3>
                <p className="leading-relaxed mb-4">
                  Generally, access and browsing the website does not require prior user registration. However, to make a booking, the user must provide certain personal data that will be processed in accordance with the Privacy Policy.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">3.3. Proper use</h3>
                <p className="leading-relaxed mb-4">
                  The user agrees to use the website, its contents and services lawfully and in accordance with:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Current legislation</li>
                  <li>This Legal Notice</li>
                  <li>Morality and good customs</li>
                  <li>Public order</li>
                </ul>
                <p className="leading-relaxed mb-2">The following is expressly prohibited:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Actions that may damage, disable or overload the website</li>
                  <li>Introducing computer viruses or actions capable of altering the system</li>
                  <li>Attempting to access restricted areas of the website</li>
                  <li>Reproducing, copying or distributing content without express authorization</li>
                  <li>Impersonating other users</li>
                  <li>Using the website for illegal purposes or contrary to this Legal Notice</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">4. CONTENT</h2>
                <p className="leading-relaxed mb-4">
                  The content incorporated in this website (texts, photographs, graphics, images, videos, designs, etc.) is owned by the OWNER or has corresponding authorization for use.
                </p>
                <p className="leading-relaxed mb-4">
                  All rights are reserved. Unauthorized reproduction, distribution, commercialization or transformation of such content constitutes an infringement of the OWNER's intellectual and industrial property rights.
                </p>
                <h3 className="font-display text-foreground text-xl mb-3">4.1. Images</h3>
                <p className="leading-relaxed">
                  Photographs of the accommodation shown on this website are representative of the current state of the property. The OWNER reserves the right to make changes or improvements to decoration and equipment without prior notice, always maintaining the quality and essential characteristics of the accommodation.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">5. BOOKING AND CONTRACT CONDITIONS</h2>
                
                <h3 className="font-display text-foreground text-xl mb-3">5.1. Booking process</h3>
                <p className="leading-relaxed mb-2">To make a booking at La Cabaña de la Lechuza, the user must:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Select desired stay dates</li>
                  <li>Verify accommodation availability</li>
                  <li>Provide requested personal data</li>
                  <li>Accept this Legal Notice and Privacy Policy</li>
                  <li>Make payment according to established conditions</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">5.2. Booking confirmation</h3>
                <p className="leading-relaxed mb-2">The booking will be confirmed once:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Corresponding payment has been received (total or deposit, as applicable)</li>
                  <li>The OWNER has sent written confirmation (email)</li>
                </ul>
                <p className="leading-relaxed mb-4">Until then, the booking will not be considered firm.</p>

                <h3 className="font-display text-foreground text-xl mb-3">5.3. Payment conditions</h3>
                <p className="leading-relaxed mb-2">Bookings require:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Deposit: [specify percentage or amount] at time of booking</li>
                  <li>Remaining payment: [specify when the rest must be paid]</li>
                </ul>
                <p className="leading-relaxed mb-2">Accepted payment methods are:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Bank transfer</li>
                  <li>[Other methods you accept: PayPal, card, etc.]</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">5.4. Price and included services</h3>
                <p className="leading-relaxed mb-2">The booking price includes:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Accommodation at La Cabaña de la Lechuza during indicated dates</li>
                  <li>Exclusive use of all facilities (interior and exterior)</li>
                  <li>Water, electricity and heating consumption (reasonable use)</li>
                  <li>Bed linen and towels</li>
                  <li>Final cleaning</li>
                </ul>
                <p className="leading-relaxed mb-2">Not included:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Additional pellets for fireplace (if consumption exceeds established amount)</li>
                  <li>External tourist activities</li>
                  <li>Meals or beverages</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">6. CANCELLATION AND MODIFICATION POLICY</h2>
                
                <h3 className="font-display text-foreground text-xl mb-3">6.1. Full refund cancellation</h3>
                <p className="leading-relaxed mb-4">
                  To be entitled to a full refund of the amount paid, cancellation must be made at least 30 calendar days before the check-in date.
                </p>
                <p className="leading-relaxed mb-4 text-muted-foreground italic">
                  Example: If your check-in date is August 15, you must cancel before 11:59 PM on July 15 to receive a full refund.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">6.2. Partial or no refund cancellation</h3>
                <p className="leading-relaxed mb-2">Cancellations with less than 30 days notice:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>No refund will be made</li>
                  <li>100% of the amount paid will be retained as compensation for blocked dates</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">6.3. No-show</h3>
                <p className="leading-relaxed mb-4">
                  If you do not show up at the accommodation without having previously cancelled the booking, you will not be entitled to any refund and 100% of the stay amount will be charged.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">6.4. Date modification</h3>
                <p className="leading-relaxed mb-2">Date modification requests are subject to availability:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>More than 30 days in advance: No additional cost (subject to availability)</li>
                  <li>Less than 30 days in advance: Will be treated as cancellation per point 6.2</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">6.5. Shortening the stay</h3>
                <p className="leading-relaxed mb-4">
                  If you decide to shorten your stay once started, no refund will be made for nights not used.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">6.6. Cancellation by the owner</h3>
                <p className="leading-relaxed mb-2">If the OWNER must cancel the booking due to force majeure or unforeseen circumstances:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>100% of the amount paid will be refunded</li>
                  <li>Alternative dates will be offered when possible</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">6.7. Extraordinary circumstances</h3>
                <p className="leading-relaxed mb-4">
                  In case of duly justified extraordinary circumstances (serious illness with hospitalization, death of immediate family member, accident preventing travel), each case will be studied individually.
                </p>
                <p className="leading-relaxed mb-2">Requirements:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Immediate communication of the situation</li>
                  <li>Supporting documentation (medical report, death certificate, police report, etc.)</li>
                  <li>Refund decision will be at the OWNER's discretion</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">6.8. Refund method and timing</h3>
                <p className="leading-relaxed mb-2">Approved refunds will be made:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>By bank transfer or return to original payment method</li>
                  <li>Within a maximum of 14 calendar days from cancellation date</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">6.9. How to cancel or modify</h3>
                <p className="leading-relaxed mb-2">To cancel or modify your booking:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Email: [your email] (recommended, leaves written record)</li>
                  <li>Phone: [your phone]</li>
                </ul>
                <p className="leading-relaxed">
                  Cancellation will be considered effective when you receive written confirmation (email) from us.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">7. HOUSE RULES AND GUEST OBLIGATIONS</h2>
                <p className="leading-relaxed mb-4">By making a booking, the guest agrees to:</p>
                
                <h3 className="font-display text-foreground text-xl mb-3">7.1. Hours</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Check-in: From 6:00 PM to 9:00 PM</li>
                  <li>Check-out: Before 11:00 AM</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">7.2. Maximum capacity</h3>
                <p className="leading-relaxed mb-4">
                  The accommodation has capacity for 7 people. Exceeding this number is expressly prohibited for safety and regulatory reasons.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">7.3. Coexistence rules</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Smoking is not allowed inside the property</li>
                  <li>Do not flush toilet paper (use bin)</li>
                  <li>Respect natural surroundings and local animals</li>
                  <li>Manage waste according to provided instructions</li>
                  <li>Do not move furniture</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">7.4. Pets</h3>
                <p className="leading-relaxed mb-4">
                  Animals with fur are not allowed due to family allergies.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">7.5. Traveler registration</h3>
                <p className="leading-relaxed mb-4">
                  The guest must provide data required by Royal Decree 933/2021 for the Traveler Registry (name, ID/passport, nationality, date of birth, etc.).
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">7.6. Liability for damages</h3>
                <p className="leading-relaxed">
                  The guest shall be liable for any damage caused to facilities, furniture or equipment during their stay. The OWNER may demand repair or corresponding financial compensation.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">8. LIABILITY</h2>
                
                <h3 className="font-display text-foreground text-xl mb-3">8.1. Website availability</h3>
                <p className="leading-relaxed mb-4">
                  The OWNER does not guarantee the continuous and permanent availability of services, and declines any liability for possible damages caused by lack of availability of the service due to force majeure or errors in computer networks.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">8.2. Content</h3>
                <p className="leading-relaxed mb-4">
                  The OWNER reserves the right to modify the content of the website at any time without prior notice.
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">8.3. Links to third parties</h3>
                <p className="leading-relaxed">
                  In case of containing links to third-party websites, the OWNER is not responsible for their content or privacy policies.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">9. INTELLECTUAL AND INDUSTRIAL PROPERTY</h2>
                <p className="leading-relaxed mb-4">
                  All content on this website (texts, images, designs, logos, videos, etc.) is owned by the OWNER or has corresponding licenses for use.
                </p>
                <p className="leading-relaxed">
                  Unauthorized reproduction, distribution or modification of such content is prohibited without express written authorization from the OWNER.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">10. APPLICABLE LAW AND JURISDICTION</h2>
                <p className="leading-relaxed mb-4">
                  This Legal Notice shall be governed by Spanish law. For resolution of any dispute arising from use of this website or contracting of services, the parties submit to the Courts of Oviedo (Asturias), expressly waiving any other jurisdiction that may apply.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">11. CONTACT</h2>
                <p className="leading-relaxed mb-4">
                  For any questions related to this Legal Notice, you can contact us at:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Email:</strong> [your email]</li>
                  <li><strong className="text-foreground">Phone:</strong> [your phone]</li>
                  <li><strong className="text-foreground">Address:</strong> La Roza, Cabranes, Asturias</li>
                </ul>
              </section>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-foreground text-background py-8 mt-16">
            <div className="container mx-auto px-6 text-center">
              <p className="font-body text-background/60 text-sm">
                © {new Date().getFullYear()} La Cabaña de la Lechuza. All rights reserved.
              </p>
              <div className="mt-4 space-x-6">
                <a href="/" className="font-body text-background/60 hover:text-background text-sm transition-colors">
                  Home
                </a>
                <a href="/politica-privacidad" className="font-body text-background/60 hover:text-background text-sm transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }

  // Spanish version (default)
  return (
    <>
      <Helmet>
        <title>Aviso Legal | La Cabaña de la Lechuza - Casa Rural Asturias</title>
        <meta name="description" content="Aviso legal de La Cabaña de la Lechuza, vivienda vacacional en Cabranes, Asturias. Información sobre condiciones de uso, reservas y política de cancelación." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/aviso-legal" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-foreground text-background py-6">
          <div className="container mx-auto px-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-body text-background/80 hover:text-background transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a La Cabaña de la Lechuza
            </a>
          </div>
        </header>

        {/* Content */}
        <main className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="font-display text-foreground text-4xl md:text-5xl mb-4">
            Aviso Legal
          </h1>
          <p className="font-body text-primary font-semibold mb-2">
            Casa Rural La Cabaña de la Lechuza
          </p>
          <p className="font-body text-muted-foreground text-sm mb-12">
            Última actualización: 11 de enero de 2026
          </p>

          <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">1. DATOS IDENTIFICATIVOS</h2>
              <p className="leading-relaxed mb-4">
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Titular de la actividad:</strong> [Tu nombre completo o razón social]</li>
                <li><strong className="text-foreground">NIF/CIF:</strong> [Tu NIF/CIF]</li>
                <li><strong className="text-foreground">Domicilio social:</strong> La Roza, Cabranes, Principado de Asturias, España</li>
                <li><strong className="text-foreground">Correo electrónico:</strong> [tu email de contacto]</li>
                <li><strong className="text-foreground">Teléfono de contacto:</strong> [tu teléfono]</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                <strong className="text-foreground">Actividad:</strong> Alquiler de vivienda vacacional de uso turístico<br />
                <strong className="text-foreground">Registro turístico Asturias:</strong> VV.3561.AS<br />
                <strong className="text-foreground">Número de registro nacional:</strong> ESFCTU000033009000999701000000000000000000VV.3561.AS3
              </p>
              <p className="mt-4 text-muted-foreground">
                <strong className="text-foreground">Nombre comercial:</strong> La Cabaña de la Lechuza<br />
                <strong className="text-foreground">Dirección URL:</strong> [tu-dominio-web.com]
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">2. OBJETO</h2>
              <p className="leading-relaxed mb-4">
                El presente Aviso Legal regula el acceso y uso del sitio web [tu-dominio-web.com], del que es titular [Tu nombre/razón social] (en adelante, el TITULAR).
              </p>
              <p className="leading-relaxed mb-4">
                La navegación por el sitio web del TITULAR atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
              </p>
              <p className="leading-relaxed">
                El usuario se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal. El usuario responderá frente al TITULAR o frente a terceros de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">3. CONDICIONES DE ACCESO Y USO</h2>
              
              <h3 className="font-display text-foreground text-xl mb-3">3.1. Carácter gratuito del acceso</h3>
              <p className="leading-relaxed mb-4">
                El acceso y navegación en este sitio web tiene carácter gratuito. No obstante, la contratación de los servicios ofrecidos (alquiler de la vivienda vacacional) está sujeta al pago de las tarifas publicadas.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">3.2. Registro de usuario</h3>
              <p className="leading-relaxed mb-4">
                Con carácter general, el acceso y navegación en el sitio web no exige el previo registro de los usuarios. No obstante, para realizar una reserva, el usuario deberá facilitar determinados datos personales que serán tratados conforme a lo establecido en la Política de Privacidad.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">3.3. Uso correcto</h3>
              <p className="leading-relaxed mb-4">
                El usuario se compromete a utilizar el sitio web, sus contenidos y servicios de forma lícita y conforme a:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>La legislación vigente</li>
                <li>El presente Aviso Legal</li>
                <li>La moral y las buenas costumbres</li>
                <li>El orden público</li>
              </ul>
              <p className="leading-relaxed mb-2">Queda expresamente prohibido:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Realizar acciones que puedan dañar, inutilizar o sobrecargar el sitio web</li>
                <li>Introducir virus informáticos o realizar acciones susceptibles de alterar el sistema</li>
                <li>Intentar acceder a áreas restringidas del sitio web</li>
                <li>Reproducir, copiar o distribuir el contenido sin autorización expresa</li>
                <li>Suplantar la identidad de otros usuarios</li>
                <li>Utilizar el sitio web con fines ilícitos o contrarios a lo establecido en este Aviso Legal</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">4. CONTENIDOS</h2>
              <p className="leading-relaxed mb-4">
                Los contenidos incorporados en este sitio web (textos, fotografías, gráficos, imágenes, vídeos, diseños, etc.) son propiedad del TITULAR o se dispone de la correspondiente autorización para su uso.
              </p>
              <p className="leading-relaxed mb-4">
                Quedan reservados todos los derechos sobre los mismos. La reproducción, distribución, comercialización o transformación no autorizadas de dichos contenidos constituye una infracción de los derechos de propiedad intelectual e industrial del TITULAR.
              </p>
              <h3 className="font-display text-foreground text-xl mb-3">4.1. Imágenes</h3>
              <p className="leading-relaxed">
                Las fotografías del alojamiento mostradas en este sitio web son representativas del estado actual de la vivienda. El TITULAR se reserva el derecho a realizar cambios o mejoras en la decoración y equipamiento sin previo aviso, siempre manteniendo la calidad y características esenciales del alojamiento.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">5. CONDICIONES DE RESERVA Y CONTRATACIÓN</h2>
              
              <h3 className="font-display text-foreground text-xl mb-3">5.1. Proceso de reserva</h3>
              <p className="leading-relaxed mb-2">Para realizar una reserva en La Cabaña de la Lechuza, el usuario deberá:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Seleccionar las fechas de estancia deseadas</li>
                <li>Verificar la disponibilidad del alojamiento</li>
                <li>Proporcionar los datos personales solicitados</li>
                <li>Aceptar el presente Aviso Legal y la Política de Privacidad</li>
                <li>Realizar el pago según las condiciones establecidas</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">5.2. Confirmación de reserva</h3>
              <p className="leading-relaxed mb-2">La reserva quedará confirmada una vez:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Se haya recibido el pago correspondiente (total o señal, según proceda)</li>
                <li>El TITULAR haya enviado confirmación por escrito (email)</li>
              </ul>
              <p className="leading-relaxed mb-4">Hasta ese momento, la reserva no se considerará firme.</p>

              <h3 className="font-display text-foreground text-xl mb-3">5.3. Condiciones de pago</h3>
              <p className="leading-relaxed mb-2">Las reservas requieren:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Señal/depósito: [especifica el porcentaje o cantidad] en el momento de la reserva</li>
                <li>Pago restante: [especifica cuándo debe abonarse el resto]</li>
              </ul>
              <p className="leading-relaxed mb-2">Los métodos de pago aceptados son:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Transferencia bancaria</li>
                <li>[Otros métodos que aceptes: PayPal, tarjeta, etc.]</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">5.4. Precio y servicios incluidos</h3>
              <p className="leading-relaxed mb-2">El precio de la reserva incluye:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Alojamiento en La Cabaña de la Lechuza durante las fechas indicadas</li>
                <li>Uso exclusivo de todas las instalaciones (interior y exterior)</li>
                <li>Consumos de agua, luz y calefacción (uso razonable)</li>
                <li>Ropa de cama y toallas</li>
                <li>Limpieza final</li>
              </ul>
              <p className="leading-relaxed mb-2">No incluye:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pellets adicionales para la chimenea (si el consumo excede lo establecido)</li>
                <li>Actividades turísticas externas</li>
                <li>Comidas o bebidas</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">6. POLÍTICA DE CANCELACIÓN Y MODIFICACIÓN DE RESERVAS</h2>
              
              <h3 className="font-display text-foreground text-xl mb-3">6.1. Cancelación con reembolso total</h3>
              <p className="leading-relaxed mb-4">
                Para tener derecho al reembolso íntegro del importe abonado, la cancelación debe realizarse con un mínimo de 30 días naturales de antelación a la fecha de entrada (check-in).
              </p>
              <p className="leading-relaxed mb-4 text-muted-foreground italic">
                Ejemplo: Si tu fecha de entrada es el 15 de agosto, deberás cancelar antes de las 23:59h del 15 de julio para obtener el reembolso completo.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">6.2. Cancelación parcial o sin reembolso</h3>
              <p className="leading-relaxed mb-2">Cancelaciones con menos de 30 días de antelación:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>No se realizará reembolso alguno</li>
                <li>Se retendrá el 100% del importe abonado como compensación por las fechas bloqueadas</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">6.3. No presentación (No-show)</h3>
              <p className="leading-relaxed mb-4">
                Si no te presentas en el alojamiento sin haber cancelado previamente la reserva, no tendrás derecho a reembolso alguno y se cobrará el 100% del importe de la estancia.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">6.4. Modificación de fechas</h3>
              <p className="leading-relaxed mb-2">Las solicitudes de modificación de fechas están sujetas a disponibilidad:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Con más de 30 días de antelación: Sin coste adicional (sujeto a disponibilidad)</li>
                <li>Con menos de 30 días de antelación: Se tratará como cancelación según punto 6.2</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">6.5. Acortamiento de la estancia</h3>
              <p className="leading-relaxed mb-4">
                Si decides acortar tu estancia una vez iniciada, no se realizará reembolso por las noches no disfrutadas.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">6.6. Cancelación por parte del titular</h3>
              <p className="leading-relaxed mb-2">Si el TITULAR debe cancelar la reserva por causas de fuerza mayor o circunstancias imprevistas:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Se reembolsará el 100% del importe abonado</li>
                <li>Se ofrecerán fechas alternativas cuando sea posible</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">6.7. Circunstancias extraordinarias</h3>
              <p className="leading-relaxed mb-4">
                En caso de circunstancias extraordinarias debidamente justificadas (enfermedad grave con hospitalización, fallecimiento de familiar directo, accidente con imposibilidad de desplazamiento), se estudiará cada caso individualmente.
              </p>
              <p className="leading-relaxed mb-2">Requisitos:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Comunicación inmediata de la situación</li>
                <li>Documentación acreditativa (parte médico, certificado de defunción, denuncia policial, etc.)</li>
                <li>La decisión sobre el reembolso quedará a criterio del TITULAR</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">6.8. Forma y plazo de reembolso</h3>
              <p className="leading-relaxed mb-2">Los reembolsos aprobados se realizarán:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Mediante transferencia bancaria o devolución al método de pago original</li>
                <li>En un plazo máximo de 14 días naturales desde la fecha de cancelación</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">6.9. Cómo cancelar o modificar</h3>
              <p className="leading-relaxed mb-2">Para cancelar o modificar tu reserva:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Email: [tu email] (recomendado, deja constancia escrita)</li>
                <li>Teléfono: [tu teléfono]</li>
              </ul>
              <p className="leading-relaxed">
                La cancelación se considerará efectiva cuando recibas confirmación por escrito (email) por nuestra parte.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">7. NORMAS DE LA CASA Y OBLIGACIONES DEL HUÉSPED</h2>
              <p className="leading-relaxed mb-4">Al realizar una reserva, el huésped se compromete a:</p>
              
              <h3 className="font-display text-foreground text-xl mb-3">7.1. Horarios</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Entrada (Check-in): De 18:00 a 21:00h</li>
                <li>Salida (Check-out): Antes de las 11:00h</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">7.2. Capacidad máxima</h3>
              <p className="leading-relaxed mb-4">
                El alojamiento tiene capacidad para 7 personas. Queda expresamente prohibido superar este número por motivos de seguridad y normativa.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">7.3. Normas de convivencia</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>No se permite fumar en el interior de la vivienda</li>
                <li>No tirar papel higiénico al WC (usar papelera)</li>
                <li>Respetar el entorno natural y los animales de la zona</li>
                <li>Gestionar los residuos conforme a las indicaciones proporcionadas</li>
                <li>No mover el mobiliario de sitio</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">7.4. Mascotas</h3>
              <p className="leading-relaxed mb-4">
                No se admiten animales con pelo debido a alergias familiares.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">7.5. Registro de viajeros</h3>
              <p className="leading-relaxed mb-4">
                El huésped debe proporcionar los datos exigidos por el Real Decreto 933/2021 para el Registro de Viajeros (nombre, DNI/pasaporte, nacionalidad, fecha de nacimiento, etc.).
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">7.6. Responsabilidad por daños</h3>
              <p className="leading-relaxed">
                El huésped será responsable de cualquier daño causado a las instalaciones, mobiliario o equipamiento durante su estancia. El TITULAR podrá exigir la reparación o compensación económica correspondiente.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">8. RESPONSABILIDAD</h2>
              
              <h3 className="font-display text-foreground text-xl mb-3">8.1. Disponibilidad del sitio web</h3>
              <p className="leading-relaxed mb-4">
                El TITULAR no garantiza la continuidad y disponibilidad permanente de los servicios, quedando exonerado de cualquier responsabilidad por posibles daños causados como consecuencia de la falta de disponibilidad del servicio por causas de fuerza mayor o errores en las redes telemáticas.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">8.2. Contenidos</h3>
              <p className="leading-relaxed mb-4">
                El TITULAR se reserva el derecho a modificar el contenido del sitio web en cualquier momento y sin previo aviso.
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">8.3. Enlaces a terceros</h3>
              <p className="leading-relaxed">
                En caso de contener enlaces a sitios web de terceros, el TITULAR no se hace responsable del contenido ni de la política de privacidad de los mismos.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">9. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
              <p className="leading-relaxed mb-4">
                Todo el contenido de este sitio web (textos, imágenes, diseños, logotipos, vídeos, etc.) es propiedad del TITULAR o dispone de las correspondientes licencias de uso.
              </p>
              <p className="leading-relaxed">
                Queda prohibida su reproducción, distribución o modificación sin la autorización expresa y por escrito del TITULAR.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">10. LEY APLICABLE Y JURISDICCIÓN</h2>
              <p className="leading-relaxed mb-4">
                El presente Aviso Legal se regirá por la legislación española. Para la resolución de cualquier controversia derivada del uso de este sitio web o de la contratación de servicios, las partes se someten a los Juzgados y Tribunales de Oviedo (Asturias), con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">11. CONTACTO</h2>
              <p className="leading-relaxed mb-4">
                Para cualquier consulta relacionada con este Aviso Legal, puede contactarnos en:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Correo electrónico:</strong> [tu email]</li>
                <li><strong className="text-foreground">Teléfono:</strong> [tu teléfono]</li>
                <li><strong className="text-foreground">Dirección:</strong> La Roza, Cabranes, Asturias</li>
              </ul>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-background py-8 mt-16">
          <div className="container mx-auto px-6 text-center">
            <p className="font-body text-background/60 text-sm">
              © {new Date().getFullYear()} La Cabaña de la Lechuza. Todos los derechos reservados.
            </p>
            <div className="mt-4 space-x-6">
              <a href="/" className="font-body text-background/60 hover:text-background text-sm transition-colors">
                Inicio
              </a>
              <a href="/politica-privacidad" className="font-body text-background/60 hover:text-background text-sm transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AvisoLegal;