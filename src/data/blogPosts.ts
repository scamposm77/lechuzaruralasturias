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
    id: "6",
    slug: "ruta-molinos-viacaba",
    title: "La Ruta de los Molinos del Río Viacaba: Un Paseo Mágico desde La Cabaña",
    titleEn: "The Viacaba River Mills Route: A Magical Walk from The Cabin",
    excerpt: "A solo 5 minutos en coche desde La Cabaña de la Lechuza, descubre una de las rutas más encantadoras y desconocidas de Asturias: la Senda de los Molinos del río Viacaba.",
    excerptEn: "Just 5 minutes by car from La Cabaña de la Lechuza, discover one of the most charming and unknown routes in Asturias: the Viacaba River Mills Trail.",
    content: `
      <p>Una de las joyas ocultas de la Comarca de la Sidra espera a los huéspedes de La Cabaña de la Lechuza: <strong>la Ruta de los Molinos del río Viacaba</strong>. Este sendero, prácticamente desconocido para el turismo masivo, ofrece un recorrido fascinante por la historia rural de Asturias y paisajes de bosque atlántico que te dejarán sin aliento.</p>
      
      <h2>Cómo llegar desde La Cabaña</h2>
      <p>El inicio de la ruta está a <strong>solo 5 minutos en coche</strong> desde nuestra casa rural. Desde La Roza, toma la carretera dirección Torazo y sigue las indicaciones hacia la Senda del río Viacaba. Hay un pequeño aparcamiento junto al punto de inicio, aunque en temporada alta conviene ir temprano.</p>
      
      <h2>Datos técnicos de la ruta</h2>
      <ul>
        <li><strong>Distancia:</strong> 5,8 km (circular)</li>
        <li><strong>Duración:</strong> 2-2,5 horas</li>
        <li><strong>Dificultad:</strong> Fácil-Moderada</li>
        <li><strong>Desnivel:</strong> 180 metros</li>
        <li><strong>Mejor época:</strong> Todo el año (especialmente bonita en otoño)</li>
        <li><strong>Apta para niños:</strong> Sí, a partir de 6 años</li>
      </ul>
      
      <h2>Los molinos históricos</h2>
      <p>A lo largo del recorrido encontrarás <strong>más de 10 molinos harineros</strong> en diferentes estados de conservación. Estos molinos, algunos datados en el siglo XVIII, fueron el motor económico de las aldeas de la zona. El agua del río Viacaba movía las piedras que molían el maíz y el trigo de los campesinos locales.</p>
      
      <p>Algunos molinos han sido restaurados y permiten ver el mecanismo original de funcionamiento. Podrás observar:</p>
      <ul>
        <li>La <strong>rueda hidráulica</strong> de madera (en algunos casos restaurada)</li>
        <li>El <strong>canal de agua</strong> o "cuérnago" que desviaba el caudal</li>
        <li>Las <strong>piedras de moler</strong> o "muelas"</li>
        <li>La <strong>tolva</strong> donde se vertía el grano</li>
      </ul>
      
      <h2>El bosque atlántico</h2>
      <p>Más allá de los molinos, la ruta atraviesa uno de los <strong>bosques de ribera mejor conservados</strong> de la zona. Caminarás bajo la sombra de:</p>
      <ul>
        <li><strong>Castaños centenarios</strong> con troncos de varios metros de diámetro</li>
        <li><strong>Robles carballos</strong> típicos del norte peninsular</li>
        <li><strong>Alisos y fresnos</strong> junto a las orillas del río</li>
        <li><strong>Helechos gigantes</strong> y musgo que cubren rocas y árboles</li>
      </ul>
      
      <h2>Fauna que puedes observar</h2>
      <p>Si caminas en silencio, especialmente al amanecer o atardecer, podrás avistar:</p>
      <ul>
        <li><strong>Truchas</strong> en las pozas cristalinas del río</li>
        <li><strong>Martín pescador</strong> con su plumaje azul eléctrico</li>
        <li><strong>Mirlo acuático</strong> buscando insectos entre las rocas</li>
        <li><strong>Ardillas rojas</strong> entre los castaños</li>
        <li><strong>Salamandras</strong> en días húmedos</li>
      </ul>
      
      <h2>Las cascadas del Viacaba</h2>
      <p>Uno de los puntos más espectaculares de la ruta son las <strong>pequeñas cascadas</strong> que forma el río Viacaba. Aunque no son de gran altura, el conjunto de saltos de agua entre rocas cubiertas de musgo crea un paisaje de cuento. Es el lugar perfecto para hacer una pausa, respirar el aire puro y escuchar el sonido del agua.</p>
      
      <h2>Consejos para disfrutar la ruta</h2>
      <ul>
        <li><strong>Calzado:</strong> Lleva botas de montaña o zapatillas con buen agarre. El terreno puede estar húmedo y resbaladizo.</li>
        <li><strong>Agua y snacks:</strong> Aunque la ruta no es larga, siempre es bueno llevar algo de hidratación y frutos secos.</li>
        <li><strong>Cámara:</strong> Los rincones fotogénicos son infinitos. La luz filtrada por el bosque crea escenas mágicas.</li>
        <li><strong>Repelente:</strong> En verano puede haber mosquitos cerca del río.</li>
        <li><strong>Silencio:</strong> Si quieres ver fauna, camina en silencio y haz pausas para observar.</li>
      </ul>
      
      <h2>Combinar con otras actividades</h2>
      <p>Después de la ruta, te recomendamos:</p>
      <ul>
        <li>Comer en una sidrería tradicional de Torazo o Santa Eulalia</li>
        <li>Visitar el llagar de sidra más cercano para una degustación</li>
        <li>Volver a La Cabaña para un merecido descanso en el porche con vistas</li>
      </ul>
      
      <p><strong>Esta ruta es una de nuestras favoritas y se la recomendamos a todos nuestros huéspedes.</strong> Es perfecta para una mañana tranquila, ideal para familias y parejas que buscan conectar con la naturaleza asturiana más auténtica.</p>
    `,
    contentEn: `
      <p>One of the hidden gems of the Cider Region awaits guests at La Cabaña de la Lechuza: <strong>the Viacaba River Mills Route</strong>. This trail, virtually unknown to mass tourism, offers a fascinating journey through Asturias' rural history and Atlantic forest landscapes that will take your breath away.</p>
      
      <h2>How to get there from The Cabin</h2>
      <p>The start of the route is <strong>just 5 minutes by car</strong> from our rural house. From La Roza, take the road towards Torazo and follow the signs to the Viacaba River Trail. There is a small parking area at the starting point, although in high season it's advisable to arrive early.</p>
      
      <h2>Technical data</h2>
      <ul>
        <li><strong>Distance:</strong> 5.8 km (circular)</li>
        <li><strong>Duration:</strong> 2-2.5 hours</li>
        <li><strong>Difficulty:</strong> Easy-Moderate</li>
        <li><strong>Elevation gain:</strong> 180 meters</li>
        <li><strong>Best time:</strong> Year-round (especially beautiful in autumn)</li>
        <li><strong>Suitable for children:</strong> Yes, from 6 years old</li>
      </ul>
      
      <h2>The historic mills</h2>
      <p>Along the route you will find <strong>more than 10 flour mills</strong> in different states of conservation. These mills, some dating from the 18th century, were the economic engine of the villages in the area. The water from the Viacaba river moved the stones that ground the corn and wheat of local farmers.</p>
      
      <p>Some mills have been restored and allow you to see the original mechanism. You can observe:</p>
      <ul>
        <li>The wooden <strong>water wheel</strong> (restored in some cases)</li>
        <li>The <strong>water channel</strong> or "cuérnago" that diverted the flow</li>
        <li>The <strong>grinding stones</strong> or "millstones"</li>
        <li>The <strong>hopper</strong> where grain was poured</li>
      </ul>
      
      <h2>The Atlantic forest</h2>
      <p>Beyond the mills, the route passes through one of the <strong>best-preserved riparian forests</strong> in the area. You will walk under the shade of:</p>
      <ul>
        <li><strong>Centuries-old chestnut trees</strong> with trunks several meters in diameter</li>
        <li><strong>Carballo oaks</strong> typical of the northern peninsula</li>
        <li><strong>Alders and ash trees</strong> along the river banks</li>
        <li><strong>Giant ferns</strong> and moss covering rocks and trees</li>
      </ul>
      
      <h2>Wildlife you can observe</h2>
      <p>If you walk quietly, especially at dawn or dusk, you may spot:</p>
      <ul>
        <li><strong>Trout</strong> in the crystal-clear river pools</li>
        <li><strong>Kingfisher</strong> with its electric blue plumage</li>
        <li><strong>Dipper</strong> looking for insects among the rocks</li>
        <li><strong>Red squirrels</strong> among the chestnut trees</li>
        <li><strong>Salamanders</strong> on humid days</li>
      </ul>
      
      <h2>The Viacaba waterfalls</h2>
      <p>One of the most spectacular points of the route are the <strong>small waterfalls</strong> formed by the Viacaba river. Although not very high, the series of water cascades between moss-covered rocks creates a fairy-tale landscape. It's the perfect place for a break, to breathe pure air and listen to the sound of water.</p>
      
      <h2>Tips to enjoy the route</h2>
      <ul>
        <li><strong>Footwear:</strong> Wear hiking boots or shoes with good grip. The terrain can be wet and slippery.</li>
        <li><strong>Water and snacks:</strong> Although the route is not long, it's always good to bring some hydration and nuts.</li>
        <li><strong>Camera:</strong> The photogenic spots are endless. The light filtered through the forest creates magical scenes.</li>
        <li><strong>Repellent:</strong> In summer there may be mosquitoes near the river.</li>
        <li><strong>Silence:</strong> If you want to see wildlife, walk quietly and take breaks to observe.</li>
      </ul>
      
      <h2>Combine with other activities</h2>
      <p>After the route, we recommend:</p>
      <ul>
        <li>Eating at a traditional cider house in Torazo or Santa Eulalia</li>
        <li>Visiting the nearest cider mill for a tasting</li>
        <li>Returning to The Cabin for a well-deserved rest on the porch with views</li>
      </ul>
      
      <p><strong>This route is one of our favorites and we recommend it to all our guests.</strong> It's perfect for a quiet morning, ideal for families and couples looking to connect with the most authentic Asturian nature.</p>
    `,
    coverImage: "/blog/rutas-senderismo.jpg",
    coverImageAltEs: "Molino antiguo junto a cascada en la ruta de los molinos del río Viacaba Asturias",
    coverImageAltEn: "Ancient mill next to waterfall on the Viacaba river mills route Asturias",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-16",
    tags: ["senderismo", "rutas", "molinos", "naturaleza", "cabranes"]
  },
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
    coverImage: "/blog/historia-cabana.jpg",
    coverImageAltEs: "La Cabaña de la Lechuza - Casa rural tradicional asturiana restaurada con jardín y entorno natural",
    coverImageAltEn: "La Cabaña de la Lechuza - Traditional restored Asturian rural house with garden and natural surroundings",
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
      <p>La ubicación de La Cabaña de la Lechuza es perfecta para los amantes del senderismo. Aquí te presentamos las rutas que puedes hacer directamente desde nuestra puerta o a pocos minutos en coche.</p>
      
      <h2>Ruta de las Pomaradas (3 km - Fácil)</h2>
      <p>Sal de la casa y en 5 minutos estarás caminando entre manzanos centenarios. Esta ruta circular de 3 km es perfecta para un paseo tranquilo al atardecer. En primavera los manzanos en flor crean un espectáculo inolvidable, y en otoño podrás ver (y oler) las manzanas maduras listas para la recogida.</p>
      <ul>
        <li><strong>Distancia:</strong> 3 km (circular)</li>
        <li><strong>Tiempo:</strong> 45 minutos - 1 hora</li>
        <li><strong>Dificultad:</strong> Muy fácil, apta para todos</li>
        <li><strong>Mejor época:</strong> Primavera (floración) y otoño (cosecha)</li>
      </ul>
      
      <h2>Senda del Río Viacaba - Ruta de los Molinos (5,8 km - Fácil/Moderada)</h2>
      <p>Una de nuestras rutas favoritas. A solo 5 minutos en coche, esta senda te lleva por un bosque de ribera espectacular, con más de 10 molinos históricos y pequeñas cascadas. Lee nuestro artículo completo sobre esta ruta.</p>
      <ul>
        <li><strong>Distancia:</strong> 5,8 km (circular)</li>
        <li><strong>Tiempo:</strong> 2-2,5 horas</li>
        <li><strong>Dificultad:</strong> Fácil-Moderada</li>
        <li><strong>Mejor época:</strong> Todo el año, especialmente bonita en otoño</li>
      </ul>
      
      <h2>Mirador del Sueve (8 km - Moderada)</h2>
      <p>Una ruta de media montaña que asciende hasta un mirador espectacular desde donde se divisa el mar Cantábrico, los Picos de Europa y todo el valle. En días claros las vistas son impresionantes.</p>
      <ul>
        <li><strong>Distancia:</strong> 8 km (ida y vuelta)</li>
        <li><strong>Tiempo:</strong> 3-4 horas</li>
        <li><strong>Dificultad:</strong> Moderada</li>
        <li><strong>Desnivel:</strong> 450 metros</li>
        <li><strong>Mejor época:</strong> Primavera y otoño</li>
      </ul>
      
      <h2>PR-AS 147: Senda Verde de Cabranes (12 km - Moderada)</h2>
      <p>Una ruta homologada que recorre lo mejor del concejo de Cabranes. Atraviesa bosques, pomaradas, pueblos tradicionales y ofrece vistas panorámicas del valle.</p>
      <ul>
        <li><strong>Distancia:</strong> 12 km (circular)</li>
        <li><strong>Tiempo:</strong> 4-5 horas</li>
        <li><strong>Dificultad:</strong> Moderada</li>
        <li><strong>Desnivel:</strong> 380 metros</li>
      </ul>
      
      <h2>Ruta del Fitu (15 km - Moderada-Alta)</h2>
      <p>Para los más aventureros. Esta ruta sube hasta el famoso Mirador del Fitu, uno de los balcones más impresionantes de Asturias con vistas de 360 grados que abarcan desde los Picos de Europa hasta el mar.</p>
      <ul>
        <li><strong>Distancia:</strong> 15 km (ida y vuelta)</li>
        <li><strong>Tiempo:</strong> 5-6 horas</li>
        <li><strong>Dificultad:</strong> Moderada-Alta</li>
        <li><strong>Desnivel:</strong> 650 metros</li>
      </ul>
      
      <h2>Consejos prácticos para todas las rutas</h2>
      <ul>
        <li><strong>Calzado:</strong> Botas de montaña o zapatillas con buen agarre. El terreno puede estar húmedo.</li>
        <li><strong>Agua:</strong> Lleva siempre al menos 1 litro por persona.</li>
        <li><strong>Ropa:</strong> Vístete por capas. El tiempo en Asturias puede cambiar rápidamente.</li>
        <li><strong>Mapa/GPS:</strong> Descarga el track antes de salir. La cobertura móvil puede ser irregular.</li>
        <li><strong>Respeto:</strong> No dejes basura, no arranques plantas, cierra las porteras que encuentres.</li>
      </ul>
      
      <p><strong>En La Cabaña de la Lechuza tenemos mapas e información detallada de todas estas rutas. ¡Pregúntanos y te ayudaremos a elegir la mejor opción según tu nivel!</strong></p>
    `,
    contentEn: `
      <p>The location of La Cabaña de la Lechuza is perfect for hiking lovers. Here are the routes you can do directly from our door or just a few minutes away by car.</p>
      
      <h2>Apple Orchards Route (3 km - Easy)</h2>
      <p>Leave the house and in 5 minutes you'll be walking among century-old apple trees. This 3 km circular route is perfect for a quiet evening walk. In spring the flowering apple trees create an unforgettable spectacle, and in autumn you can see (and smell) the ripe apples ready for harvest.</p>
      <ul>
        <li><strong>Distance:</strong> 3 km (circular)</li>
        <li><strong>Time:</strong> 45 minutes - 1 hour</li>
        <li><strong>Difficulty:</strong> Very easy, suitable for all</li>
        <li><strong>Best time:</strong> Spring (flowering) and autumn (harvest)</li>
      </ul>
      
      <h2>Viacaba River Trail - Mills Route (5.8 km - Easy/Moderate)</h2>
      <p>One of our favorite routes. Just 5 minutes by car, this trail takes you through a spectacular riverside forest, with more than 10 historic mills and small waterfalls. Read our full article about this route.</p>
      <ul>
        <li><strong>Distance:</strong> 5.8 km (circular)</li>
        <li><strong>Time:</strong> 2-2.5 hours</li>
        <li><strong>Difficulty:</strong> Easy-Moderate</li>
        <li><strong>Best time:</strong> Year-round, especially beautiful in autumn</li>
      </ul>
      
      <h2>Sueve Viewpoint (8 km - Moderate)</h2>
      <p>A mid-mountain route that ascends to a spectacular viewpoint overlooking the Cantabrian Sea, Picos de Europa and the entire valley. On clear days the views are impressive.</p>
      <ul>
        <li><strong>Distance:</strong> 8 km (round trip)</li>
        <li><strong>Time:</strong> 3-4 hours</li>
        <li><strong>Difficulty:</strong> Moderate</li>
        <li><strong>Elevation gain:</strong> 450 meters</li>
        <li><strong>Best time:</strong> Spring and autumn</li>
      </ul>
      
      <h2>PR-AS 147: Cabranes Green Trail (12 km - Moderate)</h2>
      <p>An official trail that covers the best of Cabranes. It crosses forests, apple orchards, traditional villages and offers panoramic views of the valley.</p>
      <ul>
        <li><strong>Distance:</strong> 12 km (circular)</li>
        <li><strong>Time:</strong> 4-5 hours</li>
        <li><strong>Difficulty:</strong> Moderate</li>
        <li><strong>Elevation gain:</strong> 380 meters</li>
      </ul>
      
      <h2>Fitu Route (15 km - Moderate-High)</h2>
      <p>For the more adventurous. This route climbs to the famous Fitu Viewpoint, one of the most impressive balconies in Asturias with 360-degree views spanning from Picos de Europa to the sea.</p>
      <ul>
        <li><strong>Distance:</strong> 15 km (round trip)</li>
        <li><strong>Time:</strong> 5-6 hours</li>
        <li><strong>Difficulty:</strong> Moderate-High</li>
        <li><strong>Elevation gain:</strong> 650 meters</li>
      </ul>
      
      <h2>Practical tips for all routes</h2>
      <ul>
        <li><strong>Footwear:</strong> Hiking boots or shoes with good grip. The terrain can be wet.</li>
        <li><strong>Water:</strong> Always carry at least 1 liter per person.</li>
        <li><strong>Clothing:</strong> Dress in layers. Weather in Asturias can change quickly.</li>
        <li><strong>Map/GPS:</strong> Download the track before leaving. Mobile coverage can be spotty.</li>
        <li><strong>Respect:</strong> Don't leave litter, don't pick plants, close any gates you find.</li>
      </ul>
      
      <p><strong>At La Cabaña de la Lechuza we have maps and detailed information about all these routes. Ask us and we'll help you choose the best option for your level!</strong></p>
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
    title: "Gastronomía Asturiana: Guía Completa de Platos y Restaurantes",
    titleEn: "Asturian Gastronomy: Complete Guide to Dishes and Restaurants",
    excerpt: "Descubre los platos imprescindibles de la cocina asturiana y los mejores lugares para degustarlos cerca de La Cabaña de la Lechuza.",
    excerptEn: "Discover the essential dishes of Asturian cuisine and the best places to taste them near La Cabaña de la Lechuza.",
    content: `
      <p>Asturias es conocida como el <strong>paraíso gastronómico</strong> de España. Su cocina combina productos del mar y la montaña en platos contundentes y sabrosos que reconfortan el alma. Durante tu estancia en La Cabaña de la Lechuza, te recomendamos que no dejes de probar estos manjares.</p>
      
      <h2>Los platos imprescindibles</h2>
      
      <h3>Fabada Asturiana</h3>
      <p>El plato más emblemático de la región. Las <em>fabes</em> (judías blancas grandes) se guisan lentamente durante horas con el <strong>compango</strong>: chorizo, morcilla, lacón y tocino. El resultado es un plato cremoso, reconfortante y lleno de sabor. Ideal para días fríos.</p>
      <p><strong>Dónde probarla:</strong> Las sidrerías tradicionales de la zona suelen tenerla en carta, especialmente en invierno. Pregúntanos por nuestras recomendaciones.</p>
      
      <h3>Cachopo</h3>
      <p>Dos enormes filetes de ternera empanados rellenos de jamón y queso. El cachopo asturiano es famoso por su tamaño descomunal, normalmente suficiente para compartir entre dos o más personas. Crujiente por fuera, jugoso por dentro.</p>
      
      <h3>Pote Asturiano</h3>
      <p>Un guiso tradicional de berza (col), patatas, fabes y compango. Es el plato de cuchara por excelencia de los días de invierno en Asturias. Cada casa tiene su propia receta familiar.</p>
      
      <h3>Tortos con Picadillo</h3>
      <p>Pequeñas tortas de maíz fritas servidas con picadillo (carne de cerdo adobada y desmenuzada) o huevos fritos. Un plato sencillo pero adictivo que encontrarás en cualquier sidrería.</p>
      
      <h2>Los quesos asturianos</h2>
      <p>Asturias es la comunidad con más variedades de queso de España. Algunos imprescindibles:</p>
      <ul>
        <li><strong>Cabrales:</strong> El rey de los quesos azules españoles. Se cura en cuevas naturales de los Picos de Europa y tiene un sabor intenso y picante. No apto para paladares tímidos.</li>
        <li><strong>Gamonéu:</strong> Queso ahumado con toques azules, más suave que el Cabrales. Se elabora en dos variedades: del Puerto (de alta montaña) y del Valle.</li>
        <li><strong>Afuega'l Pitu:</strong> Su nombre significa "ahoga el pollo" porque es tan cremoso que "se pega" al paladar. Puede ser blanco o anaranjado (con pimentón).</li>
        <li><strong>Casín:</strong> El queso más antiguo de España, elaborado en Caso. Tiene forma de bola con grabados característicos.</li>
        <li><strong>Vidiago:</strong> Queso cremoso de la zona costera, suave y mantecoso.</li>
      </ul>
      
      <h2>La sidra: mucho más que una bebida</h2>
      <p>La sidra natural es la bebida por excelencia de Asturias. Se elabora con manzanas locales y tiene una graduación alcohólica suave (4-6%). Pero lo más especial es el <strong>ritual del escanciado</strong>:</p>
      <ul>
        <li>La sidra se <strong>escancia desde altura</strong> (la botella arriba, el vaso abajo) para oxigenarla y liberar su carbónico natural.</li>
        <li>Se sirve un <strong>"culín"</strong> (pequeña cantidad) que debe beberse de un trago.</li>
        <li>Es costumbre dejar un poco en el vaso y tirarlo al suelo para "limpiar" antes del siguiente culín.</li>
        <li>La sidra siempre se comparte en grupo, siguiendo un orden de turnos.</li>
      </ul>
      
      <h2>Postres tradicionales</h2>
      <ul>
        <li><strong>Arroz con leche:</strong> Cremoso, con canela y azúcar caramelizado por encima. El postre más popular.</li>
        <li><strong>Frixuelos:</strong> Crepes finos rellenos de crema, nata o miel. Típicos de Carnaval pero disponibles todo el año.</li>
        <li><strong>Casadielles:</strong> Empanadillas dulces rellenas de nuez y anís. Adictivas.</li>
        <li><strong>Carbayones:</strong> Dulce típico de Oviedo con almendra y yema.</li>
      </ul>
      
      <h2>Dónde comer cerca de La Cabaña</h2>
      <p>Durante tu estancia, te recomendaremos las mejores sidrerías y restaurantes de la zona. Algunos están a pocos minutos en coche. También podéis cocinar en la casa (¡tenéis cocina totalmente equipada!) y comprar productos locales en los mercados de Infiesto o Villaviciosa.</p>
      
      <h2>Productos para llevar</h2>
      <p>No te vayas de Asturias sin llevarte:</p>
      <ul>
        <li>Queso Cabrales o Gamonéu (se conservan bien)</li>
        <li>Botellas de sidra natural</li>
        <li>Fabes de la granja para cocinar en casa</li>
        <li>Morcilla asturiana</li>
        <li>Dulces típicos como carbayones o casadielles</li>
      </ul>
      
      <p><strong>En La Cabaña de la Lechuza estaremos encantados de darte recomendaciones personalizadas según tus gustos. ¡La gastronomía asturiana es una experiencia que recordarás siempre!</strong></p>
    `,
    contentEn: `
      <p>Asturias is known as Spain's <strong>gastronomic paradise</strong>. Its cuisine combines products from the sea and mountains in hearty and flavorful dishes that comfort the soul. During your stay at La Cabaña de la Lechuza, we recommend you try these delicacies.</p>
      
      <h2>Must-try dishes</h2>
      
      <h3>Fabada Asturiana</h3>
      <p>The region's most emblematic dish. Large white beans are slowly stewed for hours with the <strong>compango</strong>: chorizo, blood sausage, ham and bacon. The result is a creamy, comforting dish full of flavor. Ideal for cold days.</p>
      <p><strong>Where to try it:</strong> Traditional cider houses in the area usually have it on the menu, especially in winter. Ask us for recommendations.</p>
      
      <h3>Cachopo</h3>
      <p>Two huge breaded beef fillets stuffed with ham and cheese. The Asturian cachopo is famous for its enormous size, usually enough to share between two or more people. Crispy on the outside, juicy on the inside.</p>
      
      <h3>Pote Asturiano</h3>
      <p>A traditional stew of cabbage, potatoes, beans and compango. It's the quintessential winter spoon dish in Asturias. Each house has its own family recipe.</p>
      
      <h3>Tortos with Picadillo</h3>
      <p>Small fried corn cakes served with picadillo (seasoned shredded pork) or fried eggs. A simple but addictive dish you'll find in any cider house.</p>
      
      <h2>Asturian cheeses</h2>
      <p>Asturias is the region with the most cheese varieties in Spain. Some essentials:</p>
      <ul>
        <li><strong>Cabrales:</strong> The king of Spanish blue cheeses. Aged in natural caves of Picos de Europa with an intense, spicy flavor. Not for timid palates.</li>
        <li><strong>Gamonéu:</strong> Smoked cheese with blue touches, milder than Cabrales. Made in two varieties: del Puerto (high mountain) and del Valle.</li>
        <li><strong>Afuega'l Pitu:</strong> Its name means "chokes the chicken" because it's so creamy it "sticks" to the palate. Can be white or orange (with paprika).</li>
        <li><strong>Casín:</strong> Spain's oldest cheese, made in Caso. Has a ball shape with characteristic engravings.</li>
        <li><strong>Vidiago:</strong> Creamy coastal cheese, soft and buttery.</li>
      </ul>
      
      <h2>Cider: much more than a drink</h2>
      <p>Natural cider is Asturias' quintessential drink. Made with local apples with mild alcohol content (4-6%). But the most special thing is the <strong>pouring ritual</strong>:</p>
      <ul>
        <li>Cider is <strong>poured from height</strong> (bottle up, glass down) to oxygenate it and release its natural carbonation.</li>
        <li>A <strong>"culín"</strong> (small amount) is served and must be drunk in one gulp.</li>
        <li>It's customary to leave a little in the glass and throw it on the floor to "clean" before the next culín.</li>
        <li>Cider is always shared in a group, following a turn order.</li>
      </ul>
      
      <h2>Traditional desserts</h2>
      <ul>
        <li><strong>Rice pudding:</strong> Creamy, with cinnamon and caramelized sugar on top. The most popular dessert.</li>
        <li><strong>Frixuelos:</strong> Thin crepes filled with cream, whipped cream or honey. Typical of Carnival but available year-round.</li>
        <li><strong>Casadielles:</strong> Sweet pastries filled with walnut and anise. Addictive.</li>
        <li><strong>Carbayones:</strong> Typical Oviedo sweet with almond and egg yolk.</li>
      </ul>
      
      <h2>Where to eat near The Cabin</h2>
      <p>During your stay, we'll recommend the best cider houses and restaurants in the area. Some are just minutes away by car. You can also cook at the house (you have a fully equipped kitchen!) and buy local products at the Infiesto or Villaviciosa markets.</p>
      
      <h2>Products to take home</h2>
      <p>Don't leave Asturias without taking:</p>
      <ul>
        <li>Cabrales or Gamonéu cheese (they keep well)</li>
        <li>Bottles of natural cider</li>
        <li>Farm beans to cook at home</li>
        <li>Asturian blood sausage</li>
        <li>Typical sweets like carbayones or casadielles</li>
      </ul>
      
      <p><strong>At La Cabaña de la Lechuza we'll be happy to give you personalized recommendations based on your tastes. Asturian gastronomy is an experience you'll always remember!</strong></p>
    `,
    coverImage: "/blog/gastronomia-asturiana.jpg",
    coverImageAltEs: "Fabada asturiana tradicional con fabes chorizo morcilla y lacón plato típico de Asturias",
    coverImageAltEn: "Traditional Asturian fabada with beans chorizo blood sausage and ham typical dish of Asturias",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-06",
    tags: ["gastronomía", "cocina asturiana", "sidra", "quesos", "restaurantes"]
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
