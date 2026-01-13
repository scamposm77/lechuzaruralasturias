import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const PoliticaPrivacidad = () => {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <>
        <Helmet>
          <title>Privacy Policy | La Cabaña de la Lechuza - Rural House Asturias</title>
          <meta name="description" content="Privacy and data protection policy of La Cabaña de la Lechuza, rural house in Cabranes, Asturias. Information about data processing according to GDPR." />
          <meta name="robots" content="noindex, follow" />
          <link rel="canonical" href="https://www.lechuzaruralasturias.es/politica-privacidad" />
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
              Privacy and Data Protection Policy
            </h1>
            <p className="font-body text-primary font-semibold mb-2">
              La Cabaña de la Lechuza Rural House
            </p>
            <p className="font-body text-muted-foreground text-sm mb-12">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">1. USER INFORMATION</h2>
                <p className="leading-relaxed mb-4">
                  La Cabaña de la Lechuza, in compliance with Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 on the protection of natural persons (GDPR), and Spanish Organic Law 3/2018, of December 5, on Personal Data Protection and guarantee of digital rights (LOPDGDD), informs website users about its policy regarding the processing and protection of personal data that may be collected during navigation or contracting of services through the website.
                </p>
                <p className="leading-relaxed">
                  In this regard, La Cabaña de la Lechuza guarantees compliance with current regulations on personal data protection, as reflected in Organic Law 3/2018, of December 5, on Personal Data Protection and guarantee of digital rights (LOPDGDD). It also complies with Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 on the protection of natural persons (GDPR).
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">2. DATA CONTROLLER</h2>
                <p className="leading-relaxed mb-4">Controller Identity:</p>
                <ul className="list-none space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Holder:</strong> Susana Campos Márquez</li>
                  <li><strong className="text-foreground">Tax ID:</strong> 51942921C</li>
                  <li><strong className="text-foreground">Postal address:</strong> La Roza, Cabranes, Asturias</li>
                  <li><strong className="text-foreground">Email:</strong> susana@lechuzaruralasturias.es</li>
                  <li><strong className="text-foreground">Phone:</strong> 625081519</li>
                  <li><strong className="text-foreground">Trade name:</strong> La Cabaña de la Lechuza</li>
                  <li><strong className="text-foreground">Vacation rental registration:</strong> VV.3561.AS</li>
                </ul>
                <p className="leading-relaxed">Hereinafter, "the Data Controller".</p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">3. PRINCIPLES APPLICABLE TO PERSONAL DATA PROCESSING</h2>
                <p className="leading-relaxed mb-4">
                  The processing of user's personal data shall be subject to the following principles set out in Article 5 of the GDPR:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Lawfulness, fairness and transparency:</strong> User consent will always be required with completely transparent information about the purposes for which personal data is collected.</li>
                  <li><strong>Purpose limitation:</strong> Data will be collected for specified, explicit and legitimate purposes.</li>
                  <li><strong>Data minimization:</strong> Data collected will only be what is strictly necessary in relation to the purposes for which it is processed.</li>
                  <li><strong>Accuracy:</strong> Data must be accurate and always kept up to date.</li>
                  <li><strong>Storage limitation:</strong> Data will only be kept in a form that allows identification of the user for the time necessary for the purposes of processing.</li>
                  <li><strong>Integrity and confidentiality:</strong> Data will be processed in a way that ensures its security and confidentiality.</li>
                  <li><strong>Accountability:</strong> The Data Controller shall be responsible for compliance with the above principles.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">4. CATEGORIES OF PERSONAL DATA</h2>
                
                <h3 className="font-display text-foreground text-xl mb-3">4.1. Data collected through the contact/booking form:</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>First and last name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Number of guests</li>
                  <li>Requested stay dates</li>
                  <li>Any other information voluntarily provided by the user</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">4.2. Data collected during check-in (Legal obligation - Royal Decree 933/2021):</h3>
                <p className="leading-relaxed mb-4">
                  In compliance with Royal Decree 933/2021 on the registration of travelers staying in tourist establishments, and Order IRP/428/2010 regulating the Traveler Registry, the following mandatory data will be requested:
                </p>
                <p className="leading-relaxed mb-2"><strong>Establishment data:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Establishment name</li>
                  <li>Full address</li>
                  <li>Holder's Tax ID</li>
                </ul>
                <p className="leading-relaxed mb-2"><strong>Guest data:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Full first and last name</li>
                  <li>Type and number of identity document (ID, NIE or Passport)</li>
                  <li>Document issue date</li>
                  <li>Gender</li>
                  <li>Date of birth</li>
                  <li>Nationality</li>
                  <li>Date of entry to establishment</li>
                  <li>Entry form signature (in person or digital)</li>
                </ul>
                <div className="bg-primary/10 p-4 rounded-lg mb-4">
                  <p className="leading-relaxed text-foreground font-semibold">
                    IMPORTANT: This data is mandatory by legal imperative for public safety. Refusal to provide this data will prevent booking confirmation and accommodation.
                  </p>
                </div>

                <h3 className="font-display text-foreground text-xl mb-3">4.3. Data NOT collected (except with express user consent):</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>ID/Passport photographs (complete front and back)</li>
                  <li>Selfies or personal photographs</li>
                  <li>Home postal address</li>
                  <li>Credit card or banking data (managed exclusively through secure external payment gateways)</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">5. PURPOSES OF PROCESSING</h2>
                <p className="leading-relaxed mb-4">Personal data collected by La Cabaña de la Lechuza will be processed for the following purposes:</p>
                
                <h3 className="font-display text-foreground text-xl mb-3">5.1. Booking management and provision of tourist accommodation services</h3>
                <ul className="list-none space-y-1 mb-4 text-muted-foreground">
                  <li><strong className="text-foreground">Legal basis:</strong> Contract execution (Art. 6.1.b GDPR)</li>
                  <li><strong className="text-foreground">Purpose:</strong> Manage booking, confirm availability, stay-related communications</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">5.2. Compliance with legal obligations</h3>
                <ul className="list-none space-y-1 mb-4 text-muted-foreground">
                  <li><strong className="text-foreground">Legal basis:</strong> Legal obligation (Art. 6.1.c GDPR)</li>
                  <li><strong className="text-foreground">Purpose:</strong> Data communication to the Ministry of Interior's Traveler Registry according to Royal Decree 933/2021</li>
                  <li><strong className="text-foreground">Purpose:</strong> Compliance with tax and accounting obligations</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">5.3. Sending commercial communications (only with express consent)</h3>
                <ul className="list-none space-y-1 mb-4 text-muted-foreground">
                  <li><strong className="text-foreground">Legal basis:</strong> Data subject consent (Art. 6.1.a GDPR)</li>
                  <li><strong className="text-foreground">Purpose:</strong> Sending newsletters, promotions, special offers related to our services</li>
                  <li><strong className="text-foreground">Note:</strong> User may revoke this consent at any time</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">5.4. Information request management</h3>
                <ul className="list-none space-y-1 text-muted-foreground">
                  <li><strong className="text-foreground">Legal basis:</strong> Legitimate interest (Art. 6.1.f GDPR)</li>
                  <li><strong className="text-foreground">Purpose:</strong> Respond to queries, requests or any type of user request</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">6. DATA RETENTION PERIOD</h2>
                <p className="leading-relaxed mb-4">Personal data provided will be kept:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Booking and stay data:</strong> For the time necessary for service provision and, subsequently, during the limitation period for legal actions arising from the contractual relationship (5 years from end of stay).</li>
                  <li><strong>Traveler Registry data:</strong> Will be kept for 3 years from the date of departure from the establishment, in accordance with Royal Decree 933/2021.</li>
                  <li><strong>Tax and accounting data:</strong> During the period established by current tax regulations (minimum 4 years).</li>
                  <li><strong>Commercial communications data:</strong> Until user withdraws consent or requests unsubscription.</li>
                </ul>
                <p className="leading-relaxed">
                  After the indicated periods, data will be securely deleted or anonymized.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">7. DATA RECIPIENTS</h2>
                <p className="leading-relaxed mb-4">Personal data may be communicated to:</p>
                
                <h3 className="font-display text-foreground text-xl mb-3">7.1. Mandatory communications by law:</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li><strong>State Security Forces:</strong> Communication of Traveler Registry data to the Ministry of Interior through the SES-Hospedajes system (Royal Decree 933/2021).</li>
                  <li><strong>Tax Agency:</strong> In compliance with tax obligations.</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">7.2. Data processors:</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li><strong>Online booking platforms (if applicable):</strong> Airbnb, Booking, etc., acting as data processors under contract.</li>
                  <li><strong>Technology service providers:</strong> Web hosting, email management, secure payment systems (with maximum data protection).</li>
                </ul>
                <p className="leading-relaxed">
                  No international data transfers will be made outside the European Economic Area, unless the user contracts through international platforms that have adequate protection mechanisms.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">8. USER RIGHTS</h2>
                <p className="leading-relaxed mb-4">
                  Any person has the right to obtain confirmation about whether we are processing personal data concerning them or not. Specifically, users can exercise the following rights:
                </p>
                
                <h3 className="font-display text-foreground text-xl mb-3">ARSLPO Rights:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Right of Access:</strong> Know what personal data we are processing.</li>
                  <li><strong>Right of Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                  <li><strong>Right of Erasure ("right to be forgotten"):</strong> Request deletion of your data when no longer necessary.</li>
                  <li><strong>Right of Restriction:</strong> Request limitation of use of your data.</li>
                  <li><strong>Right of Portability:</strong> Receive your data in structured, commonly used format.</li>
                  <li><strong>Right of Objection:</strong> Object to processing of your personal data.</li>
                </ul>

                <h3 className="font-display text-foreground text-xl mb-3">How to exercise these rights?</h3>
                <p className="leading-relaxed mb-2">By written communication addressed to the Data Controller:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>By email: susana@lechuzaruralasturias.es</li>
                  <li>By post: La Roza, Cabranes, Asturias</li>
                </ul>
                <p className="leading-relaxed mb-2">The request must include:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>User's first and last name</li>
                  <li>Copy of ID or identity document</li>
                  <li>Specification of right to be exercised</li>
                  <li>Date and signature</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  <strong>Response time:</strong> 1 month from receipt of request (extendable by 2 more months in complex cases).
                </p>

                <h3 className="font-display text-foreground text-xl mb-3">Right to lodge a complaint with the Supervisory Authority:</h3>
                <p className="leading-relaxed mb-2">
                  If the user considers that the processing of their personal data is not adequate to regulations, they can file a complaint with the Spanish Data Protection Agency (AEPD):
                </p>
                <ul className="list-none space-y-1 text-muted-foreground">
                  <li><strong className="text-foreground">Web:</strong> www.aepd.es</li>
                  <li><strong className="text-foreground">Electronic headquarters:</strong> sedeagpd.gob.es</li>
                  <li><strong className="text-foreground">Address:</strong> C/ Jorge Juan, 6 - 28001 Madrid</li>
                  <li><strong className="text-foreground">Phone:</strong> 901 100 099 / 912 663 517</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">9. PERSONAL DATA SECURITY</h2>
                <p className="leading-relaxed mb-4">
                  La Cabaña de la Lechuza has adopted all necessary technical and organizational measures to ensure the security of personal data and prevent its alteration, loss, unauthorized processing or access, taking into account the state of technology, the nature of stored data and the risks to which they are exposed.
                </p>
                <p className="leading-relaxed mb-2"><strong>Implemented security measures:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>SSL encryption on the website</li>
                  <li>Secure storage of electronic data</li>
                  <li>Staff access restricted to those who need to know</li>
                  <li>Use of secure payment gateways</li>
                  <li>Periodic review of security measures</li>
                </ul>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">10. POLICY UPDATES</h2>
                <p className="leading-relaxed">
                  This Privacy Policy may be modified to adapt it to regulatory changes or internal management changes. Any substantial modifications will be communicated to users through appropriate means.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="font-display text-foreground text-2xl mb-4">11. CONTACT</h2>
                <p className="leading-relaxed mb-4">
                  For any questions related to this Privacy Policy or to exercise your rights, you can contact us at:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Email:</strong> susana@lechuzaruralasturias.es</li>
                  <li><strong className="text-foreground">Phone:</strong> 625081519</li>
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
                <a href="/aviso-legal" className="font-body text-background/60 hover:text-background text-sm transition-colors">
                  Legal Notice
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
        <title>Política de Privacidad | La Cabaña de la Lechuza - Casa Rural Asturias</title>
        <meta name="description" content="Política de privacidad y protección de datos de La Cabaña de la Lechuza, casa rural en Cabranes, Asturias. Información sobre tratamiento de datos según RGPD." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/politica-privacidad" />
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
            Política de Privacidad y Protección de Datos
          </h1>
          <p className="font-body text-primary font-semibold mb-2">
            Casa Rural La Cabaña de la Lechuza
          </p>
          <p className="font-body text-muted-foreground text-sm mb-12">
            Última actualización: Enero 2026
          </p>

          <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">1. INFORMACIÓN AL USUARIO</h2>
              <p className="leading-relaxed mb-4">
                La Cabaña de la Lechuza, en cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios que puedan ser recabados durante la navegación o contratación de servicios a través del sitio web.
              </p>
              <p className="leading-relaxed">
                En este sentido, La Cabaña de la Lechuza garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">2. RESPONSABLE DEL TRATAMIENTO</h2>
              <p className="leading-relaxed mb-4">Identidad del Responsable:</p>
              <ul className="list-none space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">Titular:</strong> Susana Campos Márquez</li>
                <li><strong className="text-foreground">NIF/CIF:</strong> 51942921C</li>
                <li><strong className="text-foreground">Dirección postal:</strong> La Roza, Cabranes, Asturias</li>
                <li><strong className="text-foreground">Correo electrónico:</strong> susana@lechuzaruralasturias.es</li>
                <li><strong className="text-foreground">Teléfono:</strong> 625081519</li>
                <li><strong className="text-foreground">Nombre comercial:</strong> La Cabaña de la Lechuza</li>
                <li><strong className="text-foreground">Registro de vivienda vacacional:</strong> VV.3561.AS</li>
              </ul>
              <p className="leading-relaxed">En adelante, "el Responsable del tratamiento".</p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">3. PRINCIPIOS APLICABLES AL TRATAMIENTO DE DATOS PERSONALES</h2>
              <p className="leading-relaxed mb-4">
                El tratamiento de los datos personales del usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Licitud, lealtad y transparencia:</strong> Se requerirá en todo momento el consentimiento del usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.</li>
                <li><strong>Limitación de la finalidad:</strong> Los datos serán recogidos con fines determinados, explícitos y legítimos.</li>
                <li><strong>Minimización de datos:</strong> Los datos recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.</li>
                <li><strong>Exactitud:</strong> Los datos deben ser exactos y estar siempre actualizados.</li>
                <li><strong>Limitación del plazo de conservación:</strong> Los datos solo serán mantenidos de forma que se permita la identificación del usuario durante el tiempo necesario para los fines de su tratamiento.</li>
                <li><strong>Integridad y confidencialidad:</strong> Los datos serán tratados de manera que se garantice su seguridad y confidencialidad.</li>
                <li><strong>Proactividad:</strong> El Responsable del tratamiento será responsable de que se cumplan los principios anteriores.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">4. CATEGORÍAS DE DATOS PERSONALES</h2>
              
              <h3 className="font-display text-foreground text-xl mb-3">4.1. Datos recabados a través del formulario de contacto/reserva:</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Número de personas que se alojarán</li>
                <li>Fechas de estancia solicitadas</li>
                <li>Cualquier otra información que el usuario facilite voluntariamente</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">4.2. Datos recabados durante el proceso de check-in (Obligación legal - Real Decreto 933/2021):</h3>
              <p className="leading-relaxed mb-4">
                En cumplimiento del Real Decreto 933/2021 sobre el registro de viajeros alojados en establecimientos turísticos, y la Orden IRP/428/2010 que regula el Registro de Viajeros, se solicitarán los siguientes datos obligatorios:
              </p>
              <p className="leading-relaxed mb-2"><strong>Datos del establecimiento:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Nombre del establecimiento</li>
                <li>Dirección completa</li>
                <li>CIF/NIF del titular</li>
              </ul>
              <p className="leading-relaxed mb-2"><strong>Datos de la persona alojada:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Nombre y apellidos completos</li>
                <li>Tipo y número de documento de identidad (DNI, NIE o Pasaporte)</li>
                <li>Fecha de expedición del documento</li>
                <li>Sexo</li>
                <li>Fecha de nacimiento</li>
                <li>Nacionalidad</li>
                <li>Fecha de entrada en el establecimiento</li>
                <li>Firma del parte de entrada (presencial o digital)</li>
              </ul>
              <div className="bg-primary/10 p-4 rounded-lg mb-4">
                <p className="leading-relaxed text-foreground font-semibold">
                  IMPORTANTE: Estos datos son de obligatoria comunicación por imperativo legal de seguridad ciudadana. La negativa a facilitar estos datos impedirá la formalización de la reserva y el alojamiento.
                </p>
              </div>

              <h3 className="font-display text-foreground text-xl mb-3">4.3. Datos NO recabados (salvo consentimiento expreso del usuario):</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fotografías del DNI/Pasaporte (anverso y reverso completos)</li>
                <li>Selfies o fotografías personales</li>
                <li>Dirección postal del domicilio habitual</li>
                <li>Datos de tarjetas de crédito o bancarios (se gestionan exclusivamente a través de pasarelas de pago externas seguras)</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">5. FINALIDADES DEL TRATAMIENTO</h2>
              <p className="leading-relaxed mb-4">Los datos personales recabados por La Cabaña de la Lechuza serán tratados con las siguientes finalidades:</p>
              
              <h3 className="font-display text-foreground text-xl mb-3">5.1. Gestión de reservas y prestación de servicios de alojamiento turístico</h3>
              <ul className="list-none space-y-1 mb-4 text-muted-foreground">
                <li><strong className="text-foreground">Base legal:</strong> Ejecución de contrato (art. 6.1.b RGPD)</li>
                <li><strong className="text-foreground">Finalidad:</strong> Gestionar la reserva, confirmar disponibilidad, comunicaciones relacionadas con la estancia</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">5.2. Cumplimiento de obligaciones legales</h3>
              <ul className="list-none space-y-1 mb-4 text-muted-foreground">
                <li><strong className="text-foreground">Base legal:</strong> Obligación legal (art. 6.1.c RGPD)</li>
                <li><strong className="text-foreground">Finalidad:</strong> Comunicación de datos al Registro de Viajeros del Ministerio del Interior según el Real Decreto 933/2021</li>
                <li><strong className="text-foreground">Finalidad:</strong> Cumplimiento de obligaciones fiscales y contables</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">5.3. Envío de comunicaciones comerciales (solo con consentimiento expreso)</h3>
              <ul className="list-none space-y-1 mb-4 text-muted-foreground">
                <li><strong className="text-foreground">Base legal:</strong> Consentimiento del interesado (art. 6.1.a RGPD)</li>
                <li><strong className="text-foreground">Finalidad:</strong> Envío de newsletters, promociones, ofertas especiales relacionadas con nuestros servicios</li>
                <li><strong className="text-foreground">Nota:</strong> El usuario puede revocar este consentimiento en cualquier momento</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">5.4. Gestión de solicitudes de información</h3>
              <ul className="list-none space-y-1 text-muted-foreground">
                <li><strong className="text-foreground">Base legal:</strong> Interés legítimo (art. 6.1.f RGPD)</li>
                <li><strong className="text-foreground">Finalidad:</strong> Atender consultas, peticiones o cualquier tipo de solicitud realizada por el usuario</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">6. PLAZO DE CONSERVACIÓN DE LOS DATOS</h2>
              <p className="leading-relaxed mb-4">Los datos personales proporcionados se conservarán:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Datos de reserva y estancia:</strong> Durante el tiempo necesario para la prestación del servicio y, posteriormente, durante el plazo de prescripción de las acciones legales derivadas de la relación contractual (5 años desde la finalización de la estancia).</li>
                <li><strong>Datos del Registro de Viajeros:</strong> Se conservarán durante 3 años desde la fecha de salida del establecimiento, de conformidad con el Real Decreto 933/2021.</li>
                <li><strong>Datos fiscales y contables:</strong> Durante el plazo establecido por la normativa tributaria vigente (mínimo 4 años).</li>
                <li><strong>Datos para comunicaciones comerciales:</strong> Hasta que el usuario retire su consentimiento o solicite la baja.</li>
              </ul>
              <p className="leading-relaxed">
                Transcurridos los plazos indicados, los datos serán eliminados o anonimizados de forma segura.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">7. DESTINATARIOS DE LOS DATOS</h2>
              <p className="leading-relaxed mb-4">Los datos personales podrán ser comunicados a:</p>
              
              <h3 className="font-display text-foreground text-xl mb-3">7.1. Comunicaciones obligatorias por ley:</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>Fuerzas y Cuerpos de Seguridad del Estado:</strong> Comunicación de datos del Registro de Viajeros al Ministerio del Interior mediante el sistema SES-Hospedajes (Real Decreto 933/2021).</li>
                <li><strong>Agencia Tributaria:</strong> En cumplimiento de obligaciones fiscales.</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">7.2. Encargados del tratamiento:</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>Plataformas de reserva online (si aplica):</strong> Airbnb, Booking, etc., que actúan como encargados del tratamiento bajo contrato.</li>
                <li><strong>Proveedores de servicios tecnológicos:</strong> Alojamiento web, gestión de correos electrónicos, sistemas de pago seguros (con la máxima protección de datos).</li>
              </ul>
              <p className="leading-relaxed">
                No se realizarán transferencias internacionales de datos fuera del Espacio Económico Europeo, salvo que el usuario contrate a través de plataformas internacionales que dispongan de mecanismos de protección adecuados.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">8. DERECHOS DEL USUARIO</h2>
              <p className="leading-relaxed mb-4">
                Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que le conciernen o no. En concreto, los usuarios pueden ejercitar los siguientes derechos:
              </p>
              
              <h3 className="font-display text-foreground text-xl mb-3">Derechos ARSULIPO:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Derecho de Acceso:</strong> Conocer qué datos personales estamos tratando.</li>
                <li><strong>Derecho de Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
                <li><strong>Derecho de Supresión ("derecho al olvido"):</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                <li><strong>Derecho de Limitación del tratamiento:</strong> Solicitar que se limite el uso de sus datos.</li>
                <li><strong>Derecho de Portabilidad:</strong> Recibir sus datos en formato estructurado y de uso común.</li>
                <li><strong>Derecho de Oposición:</strong> Oponerse al tratamiento de sus datos personales.</li>
              </ul>

              <h3 className="font-display text-foreground text-xl mb-3">¿Cómo ejercer estos derechos?</h3>
              <p className="leading-relaxed mb-2">Mediante comunicación escrita dirigida al Responsable del tratamiento:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Por correo electrónico: susana@lechuzaruralasturias.es</li>
                <li>Por correo postal: La Roza, Cabranes, Asturias</li>
              </ul>
              <p className="leading-relaxed mb-2">La solicitud debe incluir:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Nombre y apellidos del usuario</li>
                <li>Copia del DNI o documento identificativo</li>
                <li>Especificación del derecho que desea ejercer</li>
                <li>Fecha y firma</li>
              </ul>
              <p className="leading-relaxed mb-4">
                <strong>Plazo de respuesta:</strong> 1 mes desde la recepción de la solicitud (ampliable 2 meses más en casos complejos).
              </p>

              <h3 className="font-display text-foreground text-xl mb-3">Derecho a presentar reclamación ante la Autoridad de Control:</h3>
              <p className="leading-relaxed mb-2">
                Si el usuario considera que el tratamiento de sus datos personales no es adecuado a la normativa, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):
              </p>
              <ul className="list-none space-y-1 text-muted-foreground">
                <li><strong className="text-foreground">Web:</strong> www.aepd.es</li>
                <li><strong className="text-foreground">Sede electrónica:</strong> sedeagpd.gob.es</li>
                <li><strong className="text-foreground">Dirección:</strong> C/ Jorge Juan, 6 - 28001 Madrid</li>
                <li><strong className="text-foreground">Teléfono:</strong> 901 100 099 / 912 663 517</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">9. SEGURIDAD DE LOS DATOS PERSONALES</h2>
              <p className="leading-relaxed mb-4">
                La Cabaña de la Lechuza ha adoptado todas las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
              </p>
              <p className="leading-relaxed mb-2"><strong>Medidas de seguridad implementadas:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Cifrado SSL en el sitio web</li>
                <li>Almacenamiento seguro de datos electrónicos</li>
                <li>Acceso restringido al personal que necesita conocerlos</li>
                <li>Uso de pasarelas de pago seguras</li>
                <li>Revisión periódica de las medidas de seguridad</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">10. MODIFICACIÓN DE LA POLÍTICA</h2>
              <p className="leading-relaxed">
                Esta Política de Privacidad podrá ser modificada para adaptarla a cambios normativos o de gestión interna. Cualquier modificación sustancial será comunicada a los usuarios a través de los medios adecuados.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-display text-foreground text-2xl mb-4">11. CONTACTO</h2>
              <p className="leading-relaxed mb-4">
                Para cualquier consulta relacionada con esta Política de Privacidad o para ejercer sus derechos, puede contactarnos en:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Correo electrónico:</strong> susana@lechuzaruralasturias.es</li>
                <li><strong className="text-foreground">Teléfono:</strong> 625081519</li>
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
              <a href="/aviso-legal" className="font-body text-background/60 hover:text-background text-sm transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PoliticaPrivacidad;