import { ArrowLeft } from "lucide-react";

const AvisoLegal = () => {
  return (
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
              El TITULAR no garantiza la disponibilidad continua e ininterrumpida del funcionamiento del sitio web. No obstante, realizará sus mejores esfuerzos para garantizar el acceso permanente.
            </p>
            <p className="leading-relaxed mb-2">El TITULAR no será responsable de las interrupciones del servicio, retrasos o mal funcionamiento derivados de:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Causas de fuerza mayor</li>
              <li>Fallos en las redes de telecomunicaciones</li>
              <li>Actuaciones de terceros no autorizados</li>
              <li>Mantenimiento técnico necesario</li>
            </ul>

            <h3 className="font-display text-foreground text-xl mb-3">8.2. Contenidos y enlaces</h3>
            <p className="leading-relaxed mb-4">
              El TITULAR no se responsabiliza del uso que los usuarios hagan de los contenidos del sitio web.
            </p>
            <p className="leading-relaxed mb-4">
              El sitio web puede contener enlaces a páginas web de terceros. El TITULAR no controla ni garantiza la exactitud, veracidad, actualización o licitud de dichos contenidos externos. El acceso a los mismos se realiza bajo la exclusiva responsabilidad del usuario.
            </p>

            <h3 className="font-display text-foreground text-xl mb-3">8.3. Exactitud de la información</h3>
            <p className="leading-relaxed">
              El TITULAR se esfuerza por mantener actualizada la información del sitio web, pero no garantiza la ausencia de errores o la total exactitud de los contenidos.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">9. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
            <p className="leading-relaxed mb-4">
              Todos los contenidos del sitio web (incluyendo, sin carácter limitativo, bases de datos, imágenes, dibujos, gráficos, archivos de texto, audio, vídeo y software) son propiedad del TITULAR o de terceros que han autorizado su uso.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Derechos reservados:</strong> Todos los derechos de reproducción, distribución, comunicación pública y transformación están reservados. Queda expresamente prohibida su reproducción total o parcial sin autorización expresa y por escrito del TITULAR.
            </p>
            <p className="leading-relaxed">
              <strong>Marcas y signos distintivos:</strong> "La Cabaña de la Lechuza" y los elementos gráficos asociados son marcas del TITULAR. Su uso no autorizado constituye una infracción de los derechos de propiedad industrial.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">10. POLÍTICA DE ENLACES</h2>
            
            <h3 className="font-display text-foreground text-xl mb-3">10.1. Enlaces desde este sitio web</h3>
            <p className="leading-relaxed mb-4">
              El establecimiento de enlaces desde este sitio web a otros sitios de terceros tiene finalidad meramente informativa. El TITULAR no asume responsabilidad alguna por el contenido, información o servicios que pudieran aparecer en dichos sitios.
            </p>

            <h3 className="font-display text-foreground text-xl mb-3">10.2. Enlaces hacia este sitio web</h3>
            <p className="leading-relaxed mb-2">
              El establecimiento de un enlace hacia este sitio web desde otra página requiere autorización previa y por escrito del TITULAR. En todo caso, el enlace deberá:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reproducir fielmente la URL de destino</li>
              <li>No crear frames o marcos que distorsionen el contenido</li>
              <li>No inducir a error sobre la titularidad del sitio web</li>
              <li>No incluir manifestaciones falsas, inexactas o incorrectas</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">11. PROTECCIÓN DE DATOS PERSONALES</h2>
            <p className="leading-relaxed">
              El tratamiento de datos personales recabados a través de este sitio web se rige por lo establecido en nuestra Política de Privacidad, en cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">12. POLÍTICA DE COOKIES</h2>
            <p className="leading-relaxed">
              Este sitio web utiliza cookies técnicas necesarias para su correcto funcionamiento. Para más información sobre el uso de cookies, consulta nuestra Política de Cookies.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">13. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
            <p className="leading-relaxed mb-4">
              Las presentes condiciones se rigen por la legislación española vigente.
            </p>
            <p className="leading-relaxed mb-4">
              Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, el usuario y el TITULAR, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten a los Juzgados y Tribunales de Oviedo, Asturias (España).
            </p>
            <p className="leading-relaxed">
              En caso de que el usuario tenga la condición de consumidor, será de aplicación la normativa de protección de consumidores y usuarios, correspondiendo la competencia territorial a los Juzgados y Tribunales del domicilio del consumidor.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">14. NORMATIVA ESPECÍFICA DE VIVIENDAS DE USO TURÍSTICO</h2>
            
            <h3 className="font-display text-foreground text-xl mb-3">14.1. Registro oficial</h3>
            <p className="leading-relaxed mb-4">
              La Cabaña de la Lechuza está debidamente registrada como vivienda vacacional de uso turístico en el Principado de Asturias con el número de registro <strong>VV.3561.AS</strong>, en cumplimiento del Decreto 48/2016 del Principado de Asturias. Número de registro nacional: ESFCTU000033009000999701000000000000000000VV.3561.AS3
            </p>

            <h3 className="font-display text-foreground text-xl mb-3">14.2. Obligaciones del huésped</h3>
            <p className="leading-relaxed mb-2">Los huéspedes deberán:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Proporcionar los datos exigidos por el Real Decreto 933/2021 para el Registro de Viajeros</li>
              <li>Respetar las normas de la casa publicadas en el sitio web</li>
              <li>Hacer un uso correcto y diligente de las instalaciones</li>
              <li>Comunicar cualquier incidencia o desperfecto al TITULAR</li>
            </ul>

            <h3 className="font-display text-foreground text-xl mb-3">14.3. Libro de reclamaciones</h3>
            <p className="leading-relaxed">
              El alojamiento dispone de hojas de reclamación a disposición de los usuarios que lo soliciten, en cumplimiento de la normativa de consumo del Principado de Asturias.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">15. FUERZA MAYOR</h2>
            <p className="leading-relaxed mb-2">
              El TITULAR no será responsable por el incumplimiento de sus obligaciones derivado de causas de fuerza mayor, incluyendo pero no limitándose a:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Fenómenos meteorológicos extremos</li>
              <li>Desastres naturales</li>
              <li>Cortes de suministros (agua, luz) por causas ajenas al TITULAR</li>
              <li>Conflictos laborales</li>
              <li>Pandemias o crisis sanitarias</li>
              <li>Decisiones gubernamentales que impidan la prestación del servicio</li>
            </ul>
            <p className="leading-relaxed">
              En tales casos, se ofrecerán fechas alternativas o reembolso total del importe abonado.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">16. MODIFICACIONES</h2>
            <p className="leading-relaxed mb-2">El TITULAR se reserva el derecho a modificar en cualquier momento:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>La presentación y configuración del sitio web</li>
              <li>Las condiciones del presente Aviso Legal</li>
              <li>Las tarifas y condiciones de reserva (respetando las reservas ya confirmadas)</li>
            </ul>
            <p className="leading-relaxed">
              Se recomienda al usuario leer atentamente el Aviso Legal cada vez que acceda al sitio web, ya que puede sufrir modificaciones. Las modificaciones entrarán en vigor desde su publicación en el sitio web.
            </p>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">17. NULIDAD PARCIAL</h2>
            <p className="leading-relaxed">
              Si cualquier cláusula del presente Aviso Legal fuera declarada nula o ineficaz por resolución judicial o administrativa, las demás cláusulas seguirán vigentes sin que queden afectadas por dicha declaración de nulidad.
            </p>
          </section>

          {/* Section 18 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">18. IDIOMA</h2>
            <p className="leading-relaxed">
              El presente Aviso Legal se redacta en español. En caso de traducción a otros idiomas, prevalecerá en todo caso la versión en español.
            </p>
          </section>

          {/* Section 19 */}
          <section>
            <h2 className="font-display text-foreground text-2xl mb-4">19. CONTACTO</h2>
            <p className="leading-relaxed mb-4">
              Para cualquier duda, consulta o sugerencia relacionada con este Aviso Legal, las condiciones de reserva o el servicio de alojamiento, el usuario puede ponerse en contacto con el TITULAR a través de:
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li><strong>Correo electrónico:</strong> [tu email]</li>
              <li><strong>Teléfono:</strong> [tu teléfono]</li>
              <li><strong>Dirección postal:</strong> La Cabaña de la Lechuza, La Roza, Cabranes, Asturias</li>
            </ul>
            <p className="leading-relaxed">
              <strong>Horario de atención:</strong><br />
              Lunes a domingo: 9:00 - 21:00h<br />
              Fuera de este horario, puede dejar un mensaje y nos pondremos en contacto lo antes posible.
            </p>
          </section>

          {/* Summary Table */}
          <section className="bg-muted/50 p-6 rounded-lg">
            <h2 className="font-display text-foreground text-2xl mb-6">RESUMEN DE CONDICIONES CLAVE</h2>
            <p className="leading-relaxed mb-4">Para tu comodidad, resumimos las condiciones más importantes:</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Concepto</th>
                    <th className="text-left py-3 font-semibold text-foreground">Condición</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Capacidad máxima</td>
                    <td className="py-3">7 personas</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Check-in</td>
                    <td className="py-3">18:00 - 21:00h</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Check-out</td>
                    <td className="py-3">Antes de las 11:00h</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Cancelación gratuita</td>
                    <td className="py-3">30 días o más de antelación</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Cancelación &lt; 30 días</td>
                    <td className="py-3">Sin reembolso (100% retención)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Mascotas</td>
                    <td className="py-3">No permitidas</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Fumar</td>
                    <td className="py-3">Solo en exteriores</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Registro turístico</td>
                    <td className="py-3">VV.3561.AS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>Fecha de última actualización: 11 de enero de 2026</p>
            <p className="mt-2">© 2026 La Cabaña de la Lechuza – Casa Rural en Cabranes, Asturias</p>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AvisoLegal;
