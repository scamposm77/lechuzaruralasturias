// ============================================
// BLOG POSTS - EDITA ESTE ARCHIVO PARA AÑADIR/MODIFICAR POSTS
// ============================================
// Para añadir un nuevo post, copia la estructura de un post existente
// y modifica los campos según necesites.
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
    title: "La Historia de La Cabaña de la Lechuza",
    excerpt: "Descubre cómo una antigua casona asturiana se transformó en el refugio rural que hoy conoces, manteniendo la esencia de la arquitectura tradicional.",
    content: `
      <p>La Cabaña de la Lechuza tiene una historia que se remonta a principios del siglo XX, cuando fue construida como vivienda tradicional asturiana en el pequeño barrio de La Roza, en el concejo de Cabranes.</p>
      
      <h2>Los orígenes</h2>
      <p>La casa fue edificada siguiendo los cánones de la <strong>arquitectura popular asturiana</strong>: muros de piedra caliza, tejado de teja árabe y un corredor orientado al sur para aprovechar la luz del sol. Durante décadas, sirvió como hogar de familias que vivían de la tierra, cultivando manzanos y cuidando del ganado.</p>
      
      <h2>El nombre de "La Lechuza"</h2>
      <p>El nombre no es casualidad. Desde tiempos inmemoriales, una familia de lechuzas comunes (<em>Tyto alba</em>) ha habitado en el desván de la casa. En Asturias, la lechuza es considerada un ave de buen augurio, protectora de las cosechas y símbolo de sabiduría. Los antiguos habitantes de la casa siempre respetaron su presencia, y hoy en día seguimos esa tradición.</p>
      
      <h2>La rehabilitación de 2023</h2>
      <p>Tras años de deterioro, la casa fue completamente rehabilitada en 2023 con un objetivo claro: <strong>preservar su esencia mientras se adapta a las necesidades actuales</strong>. Se respetaron los materiales originales siempre que fue posible:</p>
      <ul>
        <li>Se restauraron los muros de piedra originales</li>
        <li>Se recuperaron las vigas de castaño del techo</li>
        <li>Se instaló calefacción por suelo radiante y chimenea de pellets</li>
        <li>Se equipó con cocina moderna y baños completos</li>
        <li>Se acondicionaron 3 habitaciones para 7 personas</li>
      </ul>
      
      <h2>Un nuevo capítulo</h2>
      <p>Hoy, La Cabaña de la Lechuza abre sus puertas a viajeros que buscan desconectar y vivir la auténtica experiencia rural asturiana. Y sí, las lechuzas siguen aquí. Si tienes suerte, podrás escuchar su característico canto al caer la noche.</p>
    `,
    coverImage: "/assets/exterior/ext-00-portada.jpg",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-12",
    tags: ["historia", "arquitectura", "asturias"]
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
