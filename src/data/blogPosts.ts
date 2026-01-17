// ============================================
// 📝 BLOG POSTS - GESTIÓN DE CONTENIDO
// ============================================
// 
// 🚀 CÓMO GESTIONAR EL BLOG DESDE TU HOSTING:
// 
// 1. AÑADIR UN NUEVO POST:
//    - Copia la estructura de un post existente (todo entre { y },)
//    - Pégala al PRINCIPIO del array blogPosts (para que aparezca primero)
//    - Modifica los campos según tu contenido
//    - Sube el archivo a tu hosting vía FTP
//
// 2. CAMPOS OBLIGATORIOS:
//    - id: número único ("6", "7", etc.)
//    - slug: URL amigable (sin espacios, sin acentos, con guiones)
//    - title: título del post
//    - excerpt: resumen corto (aparece en la lista del blog)
//    - content: contenido completo en HTML
//    - coverImage: ruta de la imagen (ej: "/blog/mi-imagen.jpg")
//    - author: nombre del autor
//    - publishedAt: fecha en formato "2025-01-15"
//    - tags: etiquetas para categorizar (array de strings)
//
// 3. FORMATO HTML PARA CONTENT:
//    - <h2>Título de sección</h2>
//    - <p>Párrafo de texto</p>
//    - <strong>Texto en negrita</strong>
//    - <em>Texto en cursiva</em>
//    - <ul><li>Elemento de lista</li></ul>
//    - <a href="url">Enlace</a>
//
// 4. IMÁGENES:
//    - Sube las imágenes a la carpeta /blog/ en tu hosting
//    - Usa rutas como: "/blog/nombre-imagen.jpg"
//    - Tamaño recomendado: 1200x630 px (formato 16:9)
//
// 5. MODIFICAR UN POST EXISTENTE:
//    - Busca el post por su slug o título
//    - Edita los campos que necesites
//    - Guarda y sube el archivo
//
// 6. ELIMINAR UN POST:
//    - Borra todo el bloque del post (desde { hasta },)
//    - Guarda y sube el archivo
//
// ============================================

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  content: string; // Soporta HTML
  contentEn?: string; // English version - Soporta HTML
  coverImage: string;
  coverImageAltEs: string;
  coverImageAltEn: string;
  imageCredit?: {
    author: string;
    url: string;
  };
  author: string;
  publishedAt: string; // Formato: "2025-01-12"
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "historia-cabana-lechuza",
    title: "La Historia de La Cabaña de la Lechuza: Un Proyecto Personal con Alma",
    titleEn: "The History of La Cabaña de la Lechuza: A Personal Project with Soul",
    excerpt: "Esta casa la he restaurado yo misma, poco a poco, con mucho cariño y esfuerzo. Descubre la historia de este refugio rural y el origen de su nombre tan especial.",
    excerptEn: "I have restored this house myself, little by little, with great care and effort. Discover the history of this rural retreat and the origin of its special name.",
    content: `
      <p><em>Esta casa la he restaurado yo misma, poco a poco, con mucho cariño y esfuerzo. Es un proyecto muy personal, pensado para compartir la tranquilidad y la belleza de este entorno rural con quienes buscan desconectar y reconectar con lo esencial.</em></p>
      
      <h2>Un proyecto nacido del corazón</h2>
      <p>La Cabaña de la Lechuza no es solo una casa rural, es el resultado de años de trabajo, ilusión y amor por esta tierra asturiana. Cada piedra restaurada, cada viga recuperada, cada rincón cuidado lleva mi dedicación personal. Quería crear un espacio donde los huéspedes pudieran vivir la experiencia auténtica del campo asturiano, con todas las comodidades modernas pero sin perder la esencia de lo que hace especial a este lugar.</p>
      
      <h2>El nombre de "La Lechuza": Una historia real</h2>
      <p>El nombre de La Cabaña de la Lechuza no es casual ni inventado: <strong>en el tejado vive una familia de lechuzas desde hace años</strong>. Estas hermosas aves nocturnas han convertido nuestra casa en su hogar, y nosotros las respetamos y protegemos como parte de la magia de este lugar.</p>
      
      <p>Si os alojáis en la habitación grande (El Tejo), puede que durante la noche las escuchéis entrar y salir, especialmente en primavera y verano, cuando aún están criando a sus polluelos. No os preocupéis, son muy discretas y silenciosas, pero es una experiencia preciosa que os conectará con la naturaleza de una forma muy especial. El suave ulular de la lechuza al anochecer es uno de esos sonidos que te recuerdan que estás en un lugar auténtico, lejos del ruido de la ciudad.</p>
      
      <h2>La casa: arquitectura tradicional asturiana</h2>
      <p>La casa fue construida a principios del siglo XX siguiendo los cánones de la <strong>arquitectura popular asturiana</strong>:</p>
      <ul>
        <li><strong>Muros de piedra caliza</strong> de gran espesor que mantienen la casa fresca en verano y cálida en invierno</li>
        <li><strong>Tejado de teja árabe</strong> con la pendiente característica del norte</li>
        <li><strong>Corredor orientado al sur</strong> para aprovechar la luz natural</li>
        <li><strong>Vigas de castaño originales</strong> que hemos recuperado y tratado</li>
      </ul>
      
      <h2>La rehabilitación: respeto por la tradición, confort actual</h2>
      <p>Cuando decidí rehabilitar esta casa en 2023, tenía claro que quería <strong>preservar su esencia mientras la adaptaba a las necesidades actuales</strong>. No quería convertirla en algo frío y moderno, sino mantener el calor de las casas de antes con las comodidades de hoy:</p>
      <ul>
        <li>Chimenea de pellets para los días fríos</li>
        <li>Cocina totalmente equipada para cocinar como en casa</li>
        <li>Baños modernos sin perder el encanto rústico</li>
        <li>WiFi de alta velocidad (sí, ¡estamos en pleno campo pero con buena conexión!)</li>
        <li>3 dormitorios acogedores para hasta 7 personas</li>
      </ul>
      
      <h2>El entorno: 1.500m² de naturaleza</h2>
      <p>La casa está rodeada de <strong>1.500m² de jardín privado</strong> con manzanos centenarios y un majestuoso tejo que da nombre a nuestra habitación principal. Desde el porche podréis disfrutar de vistas al valle mientras desayunáis, leéis un libro o simplemente respiráis el aire puro de la montaña asturiana.</p>
      
      <h2>Mi invitación personal</h2>
      <p>Os invito a venir y vivir la experiencia de La Cabaña de la Lechuza. A despertaros con el canto de los pájaros, a pasear entre manzanos, a cenar bajo las estrellas en el porche... y quizás, si tenéis suerte, a escuchar a nuestras lechuzas nocturnas.</p>
      
      <p><strong>Esta casa está hecha para ser disfrutada. Espero que la sintáis como vuestra.</strong></p>
    `,
    contentEn: `
      <p><em>I have restored this house myself, little by little, with great care and effort. It is a very personal project, designed to share the tranquility and beauty of this rural environment with those seeking to disconnect and reconnect with what is essential.</em></p>
      
      <h2>A project born from the heart</h2>
      <p>La Cabaña de la Lechuza is not just a rural house, it is the result of years of work, enthusiasm and love for this Asturian land. Every restored stone, every recovered beam, every cared-for corner carries my personal dedication. I wanted to create a space where guests could live the authentic experience of the Asturian countryside, with all modern comforts but without losing the essence of what makes this place special.</p>
      
      <h2>The name "La Lechuza" (The Owl): A true story</h2>
      <p>The name of La Cabaña de la Lechuza is neither casual nor invented: <strong>a family of barn owls has lived on our roof for years</strong>. These beautiful nocturnal birds have made our house their home, and we respect and protect them as part of the magic of this place.</p>
      
      <p>If you stay in the large room (El Tejo), you may hear them coming and going at night, especially in spring and summer when they are still raising their chicks. Don't worry, they are very discreet and silent, but it's a beautiful experience that will connect you with nature in a very special way. The soft hooting of the owl at dusk is one of those sounds that reminds you that you are in an authentic place, far from the noise of the city.</p>
      
      <h2>The house: traditional Asturian architecture</h2>
      <p>The house was built in the early 20th century following the canons of <strong>traditional Asturian architecture</strong>:</p>
      <ul>
        <li><strong>Thick limestone walls</strong> that keep the house cool in summer and warm in winter</li>
        <li><strong>Arabic tile roof</strong> with the characteristic northern slope</li>
        <li><strong>South-facing corridor</strong> to take advantage of natural light</li>
        <li><strong>Original chestnut beams</strong> that we have recovered and treated</li>
      </ul>
      
      <h2>The renovation: respect for tradition, modern comfort</h2>
      <p>When I decided to renovate this house in 2023, I was clear that I wanted to <strong>preserve its essence while adapting it to current needs</strong>. I didn't want to turn it into something cold and modern, but to maintain the warmth of old houses with today's comforts:</p>
      <ul>
        <li>Pellet fireplace for cold days</li>
        <li>Fully equipped kitchen for home cooking</li>
        <li>Modern bathrooms without losing rustic charm</li>
        <li>High-speed WiFi (yes, we're in the countryside but with good connection!)</li>
        <li>3 cozy bedrooms for up to 7 people</li>
      </ul>
      
      <h2>The surroundings: 1,500m² of nature</h2>
      <p>The house is surrounded by <strong>1,500m² of private garden</strong> with century-old apple trees and a majestic yew tree that gives its name to our main room. From the porch you can enjoy valley views while having breakfast, reading a book, or simply breathing the pure mountain air of Asturias.</p>
      
      <h2>My personal invitation</h2>
      <p>I invite you to come and experience La Cabaña de la Lechuza. To wake up to birdsong, to walk among apple trees, to dine under the stars on the porch... and perhaps, if you're lucky, to hear our nocturnal owls.</p>
      
      <p><strong>This house is made to be enjoyed. I hope you feel it as your own.</strong></p>
    `,
    coverImage: "/blog/horreos-asturianos.jpg",
    coverImageAltEs: "Hórreos asturianos tradicionales de madera con pegollos de piedra en pueblo rural de Asturias - Historia arquitectura popular",
    coverImageAltEn: "Traditional Asturian wooden hórreos with stone pillars in rural village of Asturias - Popular architecture history",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-12",
    tags: ["historia", "arquitectura", "asturias", "lechuzas", "naturaleza"]
  },
  {
    id: "2",
    slug: "cabranes-comarca-sidra-datos-curiosos",
    title: "Cabranes y la Comarca de la Sidra: 10 Datos Curiosos",
    titleEn: "Cabranes and the Cider Region: 10 Curious Facts",
    excerpt: "¿Sabías que Cabranes es uno de los concejos más pequeños de Asturias pero con mayor densidad de manzanos? Descubre datos fascinantes de nuestra zona.",
    excerptEn: "Did you know that Cabranes is one of the smallest councils in Asturias but has the highest density of apple trees? Discover fascinating facts about our area.",
    content: `
      <p>Cabranes es un pequeño paraíso verde en el corazón de la <strong>Comarca de la Sidra</strong>. Aquí te contamos 10 curiosidades que quizás no conocías.</p>
      
      <h2>1. El concejo de los mil manzanos</h2>
      <p>Con solo 107 km², Cabranes tiene una de las mayores concentraciones de manzanos de toda Asturias. Se estima que hay más de <strong>50.000 árboles</strong> produciendo manzana de sidra.</p>
      
      <h2>2. El origen del nombre</h2>
      <p>El nombre "Cabranes" proviene del latín <em>Capranes</em>, que significa "lugar de cabras". Antiguamente, la ganadería caprina era fundamental para la economía local.</p>
      
      <h2>3. La iglesia prerrománica de Santa Eulalia</h2>
      <p>En el pueblo de Santa Eulalia de Cabranes se encuentra una de las iglesias prerrománicas menos conocidas pero más auténticas de Asturias, datada en el siglo IX.</p>
      
      <h2>4. Solo 1.000 habitantes</h2>
      <p>Cabranes es uno de los concejos menos poblados de Asturias, con apenas 1.000 habitantes censados. Esto garantiza tranquilidad absoluta.</p>
      
      <h2>5. La Denominación de Origen Sidra de Asturias</h2>
      <p>Las manzanas de Cabranes forman parte de la <strong>D.O.P. Sidra de Asturias</strong>, garantía de calidad y tradición.</p>
      
      <h2>6. Más de 20 variedades de manzana</h2>
      <p>En la zona se cultivan variedades autóctonas como la <em>Raxao</em>, <em>Durona de Tresali</em>, <em>Verdialona</em> y <em>Regona</em>, cada una con características únicas.</p>
      
      <h2>7. El ritual del escanciado</h2>
      <p>La sidra asturiana se escancia desde altura para oxigenarla. Este ritual tiene más de 200 años de historia y se considera patrimonio cultural inmaterial.</p>
      
      <h2>8. A 20 minutos del mar</h2>
      <p>Aunque estamos en plena montaña, la playa de Rodiles —una de las mejores de España para surf— está a solo 20 minutos en coche.</p>
      
      <h2>9. Reserva de la Biosfera</h2>
      <p>Cabranes forma parte del <strong>Área de la Biosfera de Asturias</strong>, reconocida por la UNESCO por su valor ecológico.</p>
      
      <h2>10. La leyenda del Cuélebre</h2>
      <p>Según la mitología asturiana, en las cuevas cercanas habita el <em>Cuélebre</em>, un dragón alado que custodia tesoros. ¡Los vecinos más ancianos aún cuentan historias sobre él!</p>
    `,
    contentEn: `
      <p>Cabranes is a small green paradise in the heart of the <strong>Cider Region</strong>. Here we share 10 curious facts you may not have known.</p>
      
      <h2>1. The council of a thousand apple trees</h2>
      <p>With only 107 km², Cabranes has one of the highest concentrations of apple trees in all of Asturias. It is estimated that there are more than <strong>50,000 trees</strong> producing cider apples.</p>
      
      <h2>2. The origin of the name</h2>
      <p>The name "Cabranes" comes from the Latin <em>Capranes</em>, meaning "place of goats". In ancient times, goat farming was fundamental to the local economy.</p>
      
      <h2>3. The pre-Romanesque church of Santa Eulalia</h2>
      <p>In the village of Santa Eulalia de Cabranes is one of the least known but most authentic pre-Romanesque churches in Asturias, dating from the 9th century.</p>
      
      <h2>4. Only 1,000 inhabitants</h2>
      <p>Cabranes is one of the least populated councils in Asturias, with barely 1,000 registered inhabitants. This guarantees absolute tranquility.</p>
      
      <h2>5. The Asturian Cider Designation of Origin</h2>
      <p>Cabranes apples are part of the <strong>P.D.O. Sidra de Asturias</strong>, a guarantee of quality and tradition.</p>
      
      <h2>6. More than 20 varieties of apple</h2>
      <p>Native varieties such as <em>Raxao</em>, <em>Durona de Tresali</em>, <em>Verdialona</em> and <em>Regona</em> are cultivated in the area, each with unique characteristics.</p>
      
      <h2>7. The pouring ritual</h2>
      <p>Asturian cider is poured from height to oxygenate it. This ritual has more than 200 years of history and is considered intangible cultural heritage.</p>
      
      <h2>8. 20 minutes from the sea</h2>
      <p>Although we are in the mountains, Rodiles beach—one of the best in Spain for surfing—is only 20 minutes away by car.</p>
      
      <h2>9. Biosphere Reserve</h2>
      <p>Cabranes is part of the <strong>Asturias Biosphere Area</strong>, recognized by UNESCO for its ecological value.</p>
      
      <h2>10. The legend of the Cuélebre</h2>
      <p>According to Asturian mythology, the <em>Cuélebre</em>, a winged dragon that guards treasures, lives in nearby caves. The oldest neighbors still tell stories about it!</p>
    `,
    coverImage: "/blog/comarca-sidra.jpg",
    coverImageAltEs: "Cosecha de manzanas para sidra en la Comarca de la Sidra Asturias con sacos de manzanas en pomarada",
    coverImageAltEn: "Apple harvest for cider in the Asturias Cider Region with bags of apples in apple orchard",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-11",
    tags: ["cabranes", "comarca de la sidra", "curiosidades"]
  },
  {
    id: "3",
    slug: "arquitectura-tradicional-asturiana",
    title: "La Arquitectura Tradicional Asturiana: Hórreos, Paneras y Casonas",
    titleEn: "Traditional Asturian Architecture: Hórreos, Granaries and Stone Houses",
    excerpt: "Conoce los elementos arquitectónicos que hacen única a Asturias: desde los icónicos hórreos hasta las casonas de piedra como la nuestra.",
    excerptEn: "Discover the architectural elements that make Asturias unique: from iconic hórreos to stone houses like ours.",
    content: `
      <p>Asturias posee un patrimonio arquitectónico rural único en Europa. Durante tu estancia en La Cabaña de la Lechuza, podrás admirar construcciones que llevan siglos formando parte del paisaje.</p>
      
      <h2>El hórreo: símbolo de Asturias</h2>
      <p>El <strong>hórreo asturiano</strong> es un granero elevado sobre pilares de piedra llamados <em>pegollos</em>. Su diseño tiene una función práctica: mantener los alimentos secos y protegidos de roedores.</p>
      <ul>
        <li>Los hórreos típicos tienen 4 pegollos</li>
        <li>Las paneras, más grandes, pueden tener 6 o más</li>
        <li>Se construyen con madera de castaño, muy resistente a la humedad</li>
        <li>Algunos tienen más de 500 años de antigüedad</li>
      </ul>
      
      <h2>La casona asturiana</h2>
      <p>Las casonas tradicionales, como La Cabaña de la Lechuza, comparten características distintivas:</p>
      <ul>
        <li><strong>Muros de piedra caliza</strong> de hasta 60 cm de grosor</li>
        <li><strong>Corredores de madera</strong> orientados al sur</li>
        <li><strong>Tejados de teja árabe</strong> con fuerte pendiente</li>
        <li><strong>Ventanas pequeñas</strong> para conservar el calor</li>
      </ul>
      
      <h2>El llagar: donde nace la sidra</h2>
      <p>Muchas casas tradicionales incluían un <em>llagar</em>, el espacio donde se prensaba la manzana para hacer sidra. En nuestra zona aún quedan llagares activos que puedes visitar.</p>
      
      <h2>Materiales locales</h2>
      <p>La arquitectura asturiana se caracteriza por usar materiales del entorno:</p>
      <ul>
        <li><strong>Piedra caliza</strong> de canteras cercanas</li>
        <li><strong>Madera de castaño y roble</strong> de los bosques locales</li>
        <li><strong>Teja árabe</strong> cocida en hornos tradicionales</li>
        <li><strong>Cal</strong> para encalar las fachadas</li>
      </ul>
      
      <p>Durante tu estancia, te animamos a pasear por los pueblos cercanos como Santa Eulalia o Torazo para admirar estos tesoros arquitectónicos que siguen en pie después de siglos.</p>
    `,
    contentEn: `
      <p>Asturias has a unique rural architectural heritage in Europe. During your stay at La Cabaña de la Lechuza, you will be able to admire buildings that have been part of the landscape for centuries.</p>
      
      <h2>The hórreo: symbol of Asturias</h2>
      <p>The <strong>Asturian hórreo</strong> is a granary raised on stone pillars called <em>pegollos</em>. Its design has a practical function: keeping food dry and protected from rodents.</p>
      <ul>
        <li>Typical hórreos have 4 pegollos</li>
        <li>Paneras, which are larger, can have 6 or more</li>
        <li>They are built with chestnut wood, very resistant to humidity</li>
        <li>Some are more than 500 years old</li>
      </ul>
      
      <h2>The Asturian stone house</h2>
      <p>Traditional stone houses, like La Cabaña de la Lechuza, share distinctive characteristics:</p>
      <ul>
        <li><strong>Limestone walls</strong> up to 60 cm thick</li>
        <li><strong>Wooden corridors</strong> facing south</li>
        <li><strong>Arabic tile roofs</strong> with steep slopes</li>
        <li><strong>Small windows</strong> to conserve heat</li>
      </ul>
      
      <h2>The llagar: where cider is born</h2>
      <p>Many traditional houses included a <em>llagar</em>, the space where apples were pressed to make cider. In our area there are still active llagares that you can visit.</p>
      
      <h2>Local materials</h2>
      <p>Asturian architecture is characterized by using materials from the environment:</p>
      <ul>
        <li><strong>Limestone</strong> from nearby quarries</li>
        <li><strong>Chestnut and oak wood</strong> from local forests</li>
        <li><strong>Arabic tile</strong> fired in traditional ovens</li>
        <li><strong>Lime</strong> to whitewash facades</li>
      </ul>
      
      <p>During your stay, we encourage you to walk through nearby villages like Santa Eulalia or Torazo to admire these architectural treasures that remain standing after centuries.</p>
    `,
    coverImage: "/blog/horreos-asturianos.jpg",
    coverImageAltEs: "Conjunto de hórreos asturianos tradicionales con carros antiguos en pueblo rural de Asturias - Arquitectura popular",
    coverImageAltEn: "Traditional Asturian hórreos ensemble with antique carts in rural village of Asturias - Popular architecture",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-10",
    tags: ["arquitectura", "hórreos", "tradición"]
  },
  {
    id: "4",
    slug: "rutas-senderismo-cabranes",
    title: "Las Mejores Rutas de Senderismo desde La Cabaña",
    titleEn: "The Best Hiking Trails from The Cabin",
    excerpt: "Explora los senderos más espectaculares de nuestra zona: desde paseos suaves entre pomaradas hasta rutas de montaña con vistas al Cantábrico.",
    excerptEn: "Explore the most spectacular trails in our area: from gentle walks through apple orchards to mountain routes with views of the Cantabrian Sea.",
    content: `
      <p>La ubicación de La Cabaña de la Lechuza es perfecta para los amantes del senderismo. Aquí te presentamos las rutas que puedes hacer directamente desde nuestra puerta.</p>
      <h2>Ruta de las Pomaradas (3 km - Fácil)</h2>
      <p>Sal de la casa y en 5 minutos estarás caminando entre manzanos centenarios. Esta ruta circular de 3 km es perfecta para un paseo tranquilo.</p>
      <h2>Mirador del Sueve (8 km - Moderada)</h2>
      <p>Una ruta de media montaña que asciende hasta un mirador espectacular desde donde se divisa el mar Cantábrico y los Picos de Europa.</p>
      <h2>Consejos prácticos</h2>
      <ul>
        <li>Lleva calzado de montaña o zapatillas con buen agarre</li>
        <li>Siempre lleva agua y algo de comida</li>
        <li>Respeta el entorno y no dejes basura</li>
      </ul>
    `,
    contentEn: `
      <p>The location of La Cabaña de la Lechuza is perfect for hiking lovers. Here are the routes you can do directly from our door.</p>
      <h2>Apple Orchards Route (3 km - Easy)</h2>
      <p>Leave the house and in 5 minutes you'll be walking among century-old apple trees. This 3 km circular route is perfect for a quiet walk.</p>
      <h2>Sueve Viewpoint (8 km - Moderate)</h2>
      <p>A mid-mountain route that ascends to a spectacular viewpoint overlooking the Cantabrian Sea and Picos de Europa.</p>
      <h2>Practical tips</h2>
      <ul>
        <li>Wear hiking boots or shoes with good grip</li>
        <li>Always carry water and some food</li>
        <li>Respect the environment and don't leave litter</li>
      </ul>
    `,
    coverImage: "/blog/rutas-senderismo.jpg",
    coverImageAltEs: "Molino antiguo junto a cascada en bosque verde ruta de senderismo Asturias naturaleza",
    coverImageAltEn: "Ancient mill next to waterfall in green forest hiking trail Asturias nature",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-08",
    tags: ["senderismo", "rutas", "naturaleza"]
  },
  {
    id: "5",
    slug: "gastronomia-asturiana-imprescindibles",
    title: "Gastronomía Asturiana: Los Platos que Debes Probar",
    titleEn: "Asturian Gastronomy: Must-Try Dishes",
    excerpt: "La cocina asturiana es sinónimo de sabor y tradición. Te contamos qué platos no puedes dejar de probar durante tu visita.",
    excerptEn: "Asturian cuisine is synonymous with flavor and tradition. We tell you which dishes you must try during your visit.",
    content: `
      <p>Asturias es conocida como el <strong>paraíso gastronómico</strong> de España. Su cocina combina productos del mar y la montaña.</p>
      <h2>Fabada Asturiana</h2>
      <p>El plato más emblemático de la región. Fabes guisadas lentamente con chorizo, morcilla y lacón.</p>
      <h2>Sidra Natural</h2>
      <p>La bebida por excelencia de Asturias. Se escancia desde altura para oxigenarla.</p>
      <h2>Quesos Asturianos</h2>
      <ul>
        <li><strong>Cabrales:</strong> queso azul curado en cuevas naturales</li>
        <li><strong>Gamonéu:</strong> ahumado y con toques azules</li>
      </ul>
    `,
    contentEn: `
      <p>Asturias is known as Spain's <strong>gastronomic paradise</strong>. Its cuisine combines products from the sea and mountains.</p>
      <h2>Fabada Asturiana</h2>
      <p>The region's most emblematic dish. Beans slowly stewed with chorizo, blood sausage and ham.</p>
      <h2>Natural Cider</h2>
      <p>The quintessential Asturian drink. It's poured from height to oxygenate it.</p>
      <h2>Asturian Cheeses</h2>
      <ul>
        <li><strong>Cabrales:</strong> blue cheese aged in natural caves</li>
        <li><strong>Gamonéu:</strong> smoked with blue touches</li>
      </ul>
    `,
    coverImage: "/blog/gastronomia-asturiana.jpg",
    coverImageAltEs: "Fabada asturiana tradicional con fabes chorizo morcilla y lacón plato típico de Asturias",
    coverImageAltEn: "Traditional Asturian fabada with beans chorizo blood sausage and ham typical dish of Asturias",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-06",
    tags: ["gastronomía", "cocina asturiana", "sidra"]
  }
];

// Función helper para obtener un post por su slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Función helper para obtener posts por tag
export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag.toLowerCase()));
};
