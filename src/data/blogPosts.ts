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
  excerpt: string;
  content: string; // Soporta HTML
  coverImage: string;
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
    excerpt: "Esta casa la he restaurado yo misma, poco a poco, con mucho cariño y esfuerzo. Descubre la historia de este refugio rural y el origen de su nombre tan especial.",
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
    coverImage: "/assets/exterior/ext-00-portada.jpg",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-12",
    tags: ["historia", "arquitectura", "asturias", "lechuzas", "naturaleza"]
  },
  {
    id: "2",
    slug: "cabranes-comarca-sidra-datos-curiosos",
    title: "Cabranes y la Comarca de la Sidra: 10 Datos Curiosos",
    excerpt: "¿Sabías que Cabranes es uno de los concejos más pequeños de Asturias pero con mayor densidad de manzanos? Descubre datos fascinantes de nuestra zona.",
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
    coverImage: "/assets/exterior/ext-10.jpg",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-11",
    tags: ["cabranes", "comarca de la sidra", "curiosidades"]
  },
  {
    id: "3",
    slug: "arquitectura-tradicional-asturiana",
    title: "La Arquitectura Tradicional Asturiana: Hórreos, Paneras y Casonas",
    excerpt: "Conoce los elementos arquitectónicos que hacen única a Asturias: desde los icónicos hórreos hasta las casonas de piedra como la nuestra.",
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
    coverImage: "/assets/exterior/ext-03.jpg",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-10",
    tags: ["arquitectura", "hórreos", "tradición"]
  },
  {
    id: "4",
    slug: "rutas-senderismo-cabranes",
    title: "Las Mejores Rutas de Senderismo desde La Cabaña",
    excerpt: "Explora los senderos más espectaculares de nuestra zona: desde paseos suaves entre pomaradas hasta rutas de montaña con vistas al Cantábrico.",
    content: `
      <p>La ubicación de La Cabaña de la Lechuza es perfecta para los amantes del senderismo. Aquí te presentamos las rutas que puedes hacer directamente desde nuestra puerta.</p>
      
      <h2>Ruta de las Pomaradas (3 km - Fácil)</h2>
      <p>Sal de la casa y en 5 minutos estarás caminando entre manzanos centenarios. Esta ruta circular de 3 km es perfecta para un paseo tranquilo, especialmente bonita en primavera (floración) y otoño (cosecha).</p>
      
      <h2>Mirador del Sueve (8 km - Moderada)</h2>
      <p>Una ruta de media montaña que asciende hasta un mirador espectacular desde donde se divisa el mar Cantábrico y los Picos de Europa. Desnivel: 400 metros.</p>
      
      <h2>Senda del Río Viacaba (5 km - Fácil)</h2>
      <p>Siguiendo el curso del río Viacaba, esta ruta atraviesa bosques de castaños y robles. Podrás ver antiguos molinos de agua y pozas naturales.</p>
      
      <h2>Ruta de los Pueblos Abandonados (12 km - Moderada)</h2>
      <p>Una ruta fascinante que recorre antiguos pueblos donde el tiempo parece haberse detenido. Casas de piedra invadidas por la vegetación y hórreos centenarios.</p>
      
      <h2>Consejos prácticos</h2>
      <ul>
        <li>Lleva calzado de montaña o zapatillas con buen agarre</li>
        <li>En verano, madruga para evitar el calor</li>
        <li>Siempre lleva agua y algo de comida</li>
        <li>Consulta la previsión meteorológica</li>
        <li>Respeta el entorno y no dejes basura</li>
      </ul>
      
      <p>Pregúntanos durante tu estancia y te daremos mapas detallados e indicaciones personalizadas según tu nivel.</p>
    `,
    coverImage: "/assets/exterior/ext-09.jpg",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-08",
    tags: ["senderismo", "rutas", "naturaleza"]
  },
  {
    id: "5",
    slug: "gastronomia-asturiana-imprescindibles",
    title: "Gastronomía Asturiana: Los Platos que Debes Probar",
    excerpt: "La cocina asturiana es sinónimo de sabor y tradición. Te contamos qué platos no puedes dejar de probar durante tu visita.",
    content: `
      <p>Asturias es conocida como el <strong>paraíso gastronómico</strong> de España. Su cocina combina productos del mar y la montaña en platos contundentes y llenos de sabor.</p>
      
      <h2>Fabada Asturiana</h2>
      <p>El plato más emblemático de la región. Fabes de la Granja guisadas lentamente con chorizo, morcilla y lacón. El secreto está en la cocción lenta y en usar productos de calidad.</p>
      
      <h2>Cachopo</h2>
      <p>Dos filetes de ternera rellenos de jamón y queso, empanados y fritos. Un plato contundente que encontrarás en casi todos los restaurantes de la zona.</p>
      
      <h2>Pote Asturiano</h2>
      <p>Un guiso tradicional de alubias, berza, patatas y compango (chorizo, morcilla y tocino). Perfecto para los días fríos de invierno.</p>
      
      <h2>Sidra Natural</h2>
      <p>La bebida por excelencia de Asturias. Se escancia desde altura para oxigenarla y se bebe de un trago. En la Comarca de la Sidra encontrarás los mejores lagares.</p>
      
      <h2>Quesos Asturianos</h2>
      <p>Asturias tiene más de 40 variedades de queso artesanal:</p>
      <ul>
        <li><strong>Cabrales:</strong> queso azul curado en cuevas naturales</li>
        <li><strong>Gamonéu:</strong> ahumado y con toques azules</li>
        <li><strong>Afuega'l Pitu:</strong> cremoso y ligeramente picante</li>
        <li><strong>Casín:</strong> el más antiguo de Asturias</li>
      </ul>
      
      <h2>Postres</h2>
      <p>No te vayas sin probar el <strong>arroz con leche</strong> (el mejor de España), las <strong>casadielles</strong> (empanadillas de nuez) o los <strong>frixuelos</strong> (crepes asturianos).</p>
      
      <p>Pregúntanos durante tu estancia y te recomendaremos los mejores restaurantes y sidrerías de la zona.</p>
    `,
    coverImage: "/assets/cocina/cocina-01.jpg",
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
