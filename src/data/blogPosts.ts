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
  author: string;
  publishedAt: string; // Formato: "2025-01-12"
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "bienvenidos-a-la-cabana-de-la-lechuza",
    title: "Bienvenidos a La Cabaña de la Lechuza",
    excerpt: "Descubre nuestro rincón de paz en plena naturaleza asturiana, donde la tranquilidad y el confort se unen para ofrecerte una experiencia única.",
    content: `
      <p>Nos complace darte la bienvenida a <strong>La Cabaña de la Lechuza</strong>, un refugio especial enclavado en el corazón de la Comarca de la Sidra, en Asturias.</p>
      
      <h2>Un lugar con historia</h2>
      <p>Nuestra casa rural ha sido cuidadosamente restaurada para mantener la esencia tradicional asturiana, combinándola con todas las comodidades modernas que puedas necesitar durante tu estancia.</p>
      
      <h2>¿Qué te espera?</h2>
      <ul>
        <li>3 habitaciones acogedoras para hasta 7 personas</li>
        <li>Salón con chimenea de pellets</li>
        <li>Cocina totalmente equipada</li>
        <li>1500m² de jardín privado con manzanos</li>
        <li>Vistas panorámicas impresionantes</li>
      </ul>
      
      <p>Te invitamos a desconectar del estrés diario y reconectar con la naturaleza en un entorno privilegiado.</p>
    `,
    coverImage: "/assets/hero-casa.jpg",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-12",
    tags: ["bienvenida", "casa rural", "asturias"]
  },
  {
    id: "2",
    slug: "rutas-senderismo-comarca-sidra",
    title: "Las Mejores Rutas de Senderismo en la Comarca de la Sidra",
    excerpt: "Explora los senderos más espectaculares de nuestra zona: desde paseos suaves entre pomaradas hasta rutas de montaña con vistas al Cantábrico.",
    content: `
      <p>La <strong>Comarca de la Sidra</strong> ofrece una variedad increíble de rutas de senderismo para todos los niveles. Aquí te presentamos nuestras favoritas.</p>
      
      <h2>Ruta del Agua (Fácil)</h2>
      <p>Un paseo de 5 km que discurre junto al río, perfecto para familias. Podrás ver molinos tradicionales y disfrutar del sonido del agua.</p>
      
      <h2>Mirador de la Rasa (Moderada)</h2>
      <p>Con 8 km de recorrido, esta ruta te llevará a uno de los miradores más espectaculares de la zona, con vistas al mar Cantábrico y a los Picos de Europa.</p>
      
      <h2>Ruta de las Pomaradas (Fácil)</h2>
      <p>Pasea entre manzanos centenarios y descubre cómo se produce la famosa sidra asturiana. Ideal para realizar en otoño durante la cosecha.</p>
      
      <h2>Consejos para tu excursión</h2>
      <ul>
        <li>Lleva calzado cómodo y adecuado</li>
        <li>No olvides agua y algo de comida</li>
        <li>Consulta el tiempo antes de salir</li>
        <li>Respeta el entorno natural</li>
      </ul>
    `,
    coverImage: "/assets/naturaleza-asturias.jpg",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-10",
    tags: ["senderismo", "rutas", "naturaleza"]
  },
  {
    id: "3",
    slug: "gastronomia-asturiana-imprescindibles",
    title: "Gastronomía Asturiana: Los Imprescindibles",
    excerpt: "La cocina asturiana es sinónimo de sabor y tradición. Te contamos qué platos no puedes dejar de probar durante tu visita.",
    content: `
      <p>Asturias es conocida como el <strong>paraíso gastronómico</strong> de España, y no es para menos. Su cocina combina productos del mar y la montaña en platos contundentes y llenos de sabor.</p>
      
      <h2>Platos que debes probar</h2>
      
      <h3>Fabada Asturiana</h3>
      <p>El plato más emblemático de la región. Fabes de la Granja guisadas lentamente con chorizo, morcilla y lacón. Perfecta para los días fríos.</p>
      
      <h3>Cachopo</h3>
      <p>Dos filetes de ternera rellenos de jamón y queso, empanados y fritos. Una auténtica delicia que encontrarás en casi todos los restaurantes.</p>
      
      <h3>Sidra Natural</h3>
      <p>No puedes irte sin probar la sidra escanciada. Visita un lagar y aprende sobre su elaboración tradicional.</p>
      
      <h3>Quesos Asturianos</h3>
      <p>Cabrales, Gamonéu, Afuega'l Pitu... Asturias tiene más de 40 variedades de queso artesanal.</p>
      
      <h2>Restaurantes recomendados cerca</h2>
      <p>Pregúntanos durante tu estancia y te daremos nuestras recomendaciones personalizadas según tus gustos.</p>
    `,
    coverImage: "/assets/cocina-equipada.jpg",
    author: "La Cabaña de la Lechuza",
    publishedAt: "2025-01-08",
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
