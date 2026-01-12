import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const PoliticaPrivacidad = () => {
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
            <ul className="list-disc pl-6 space-y-1">
              <li>Acceso restringido a los datos personales solo al personal autorizado.</li>
              <li>Cifrado de comunicaciones mediante protocolo SSL/HTTPS.</li>
              <li>Sistemas de autenticación seguros.</li>
              <li>Copias de seguridad periódicas.</li>
              <li>Destrucción segura de documentos físicos y digitales que contengan datos personales.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">10. VERACIDAD DE LOS DATOS</h2>
            <p className="leading-relaxed">
              El usuario garantiza que los datos personales facilitados son veraces y se hace responsable de comunicar cualquier modificación de los mismos. El usuario responderá, en cualquier caso, de la veracidad de los datos facilitados, reservándose La Cabaña de la Lechuza el derecho a excluir de los servicios a todo usuario que haya facilitado datos falsos, sin perjuicio de las demás acciones que procedan en Derecho.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">11. NAVEGACIÓN Y COOKIES</h2>
            <p className="leading-relaxed">
              Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al terminar la sesión del usuario. En ningún caso se utilizarán para recoger información de carácter personal.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">12. ENLACES A TERCEROS</h2>
            <p className="leading-relaxed">
              Este sitio web puede contener enlaces a sitios web de terceros (plataformas de reserva, redes sociales, etc.), cuyas políticas de privacidad son ajenas a La Cabaña de la Lechuza. Al acceder a dichos sitios web, el usuario debe informarse sobre las condiciones de uso y políticas de privacidad de los mismos. La Cabaña de la Lechuza no asume ninguna responsabilidad derivada del uso de estos sitios web de terceros.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">13. MENORES DE EDAD</h2>
            <p className="leading-relaxed">
              Este servicio está dirigido a personas mayores de 18 años. No recopilamos intencionadamente datos de menores de edad. Los datos de menores que nos visiten como acompañantes se tratarán exclusivamente en cumplimiento del Real Decreto 933/2021 (Registro de Viajeros) bajo responsabilidad de sus tutores legales.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">14. ACTUALIZACIÓN DE LA POLÍTICA DE PRIVACIDAD</h2>
            <p className="leading-relaxed">
              La Cabaña de la Lechuza se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales o de interpretación de la Agencia Española de Protección de Datos. En caso de que se produzcan cambios significativos, se notificará a los usuarios mediante aviso en el sitio web o, cuando sea posible, por correo electrónico.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">15. ACEPTACIÓN Y CONSENTIMIENTO</h2>
            <p className="leading-relaxed">
              El usuario declara haber sido informado de las condiciones sobre protección de datos personales, aceptando y consintiendo el tratamiento de los mismos por parte de La Cabaña de la Lechuza en la forma y para las finalidades indicadas en esta Política de Privacidad.
            </p>
          </section>

          {/* Section 16 - Contact */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">16. CONTACTO</h2>
            <p className="leading-relaxed mb-4">
              Para cualquier duda o aclaración sobre esta Política de Privacidad, puede ponerse en contacto con nosotros:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="font-display text-foreground text-xl mb-4">La Cabaña de la Lechuza</p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>📧 Email: info@lechuzaruralasturias.es</li>
                <li>📞 Teléfono: 625081519</li>
                <li>📍 Dirección: La Roza, Cabranes, Asturias</li>
                <li>🌐 Web: www.lechuzaruralasturias.es</li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>Fecha de última modificación: 11 de enero de 2026</p>
            <p className="mt-2">© 2026 La Cabaña de la Lechuza – Casa Rural en Cabranes, Asturias</p>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default PoliticaPrivacidad;
