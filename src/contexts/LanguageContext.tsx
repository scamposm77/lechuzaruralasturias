import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.rooms": "Habitaciones",
    "nav.reviews": "Opiniones",
    "nav.directions": "Cómo llegar",
    "nav.blog": "Blog",
    "nav.book": "Reservar",

    // Hero
    "hero.title": "La Cabaña de",
    "hero.titleAccent": "la Lechuza",
    "hero.location": "Comarca de la Sidra · La Roza, Cabranes",
    "hero.description": "Tu casa rural con encanto en el corazón de la Comarca de la Sidra. Rehabilitada en 2023, nuestra casa ofrece un alojamiento íntimo para familias y grupos, perfecto para escapadas rurales y vacaciones en Asturias.",
    "hero.bookNow": "Reservar Ahora",
    "hero.learnMore": "Conoce Más",
    "hero.guests": "Huéspedes",
    "hero.bedrooms": "Habitaciones",
    "hero.bathrooms": "Baño y Aseo",
    "hero.surface": "Superficie",
    "hero.viewImage": "Ver imagen",

    // Values
    "values.subtitle": "Turismo rural con encanto",
    "values.title": "Nuestros",
    "values.titleAccent": "Valores",
    "values.hospitality.title": "Hospitalidad Asturiana",
    "values.hospitality.description": "Nos esforzamos por hacer que cada huésped se sienta como en casa, ofreciendo un servicio cálido y la auténtica hospitalidad rural asturiana.",
    "values.nature.title": "Naturaleza en Estado Puro",
    "values.nature.description": "Rodeados de la belleza natural de la Comarca de la Sidra, ofrecemos un entorno tranquilo para desconectar del estrés urbano.",
    "values.comfort.title": "Confort Rural",
    "values.comfort.description": "Nuestras habitaciones y espacios están diseñados para brindar máximo confort durante tu escapada rural en Asturias.",

    // Gallery
    "gallery.subtitle": "Galería de fotos de la casa rural",
    "gallery.title": "Nuestros",
    "gallery.titleAccent": "Espacios",
    "gallery.description": "Descubre cada rincón de nuestra casa rural en Asturias: 3 habitaciones dobles, salón con chimenea de pellets y 1500m² de jardín privado. El alojamiento perfecto para familias y grupos en la Comarca de la Sidra.",
    "gallery.exterior": "Exterior y Jardín",
    "gallery.exterior.desc": "1.500m² de parcela privada con porche cubierto, balancín y vistas panorámicas al valle asturiano",
    "gallery.kitchen": "Cocina Equipada",
    "gallery.kitchen.desc": "Cocina totalmente equipada con vitrocerámica, horno, microondas y menaje completo para cocinar durante tu estancia",
    "gallery.living": "Salón con Chimenea",
    "gallery.living.desc": "Acogedor salón de casa rural con chimenea de pellets, sofá cama y Smart TV con Chromecast",
    "gallery.bathroom": "Baños",
    "gallery.bathroom.desc": "1 baño completo con ducha + 1 aseo. Toallas y ropa de baño incluidas",
    "gallery.closeGallery": "Cerrar galería",
    "gallery.prevPhoto": "Foto anterior",
    "gallery.nextPhoto": "Foto siguiente",
    "gallery.thumbnail": "Miniatura",

    // Rooms
    "rooms.subtitle": "Dormitorios con encanto",
    "rooms.title": "Nuestras",
    "rooms.titleAccent": "Habitaciones",
    "rooms.description": "3 habitaciones dobles con capacidad para 7 huéspedes en nuestra casa rural de Asturias. Dormitorios acogedores con ropa de cama incluida para tu máximo confort y descanso.",
    "rooms.tejo.name": "El Tejo",
    "rooms.tejo.subtitle": "Habitación Principal",
    "rooms.tejo.description": "La habitación más espaciosa de La Cabaña de la Lechuza lleva el nombre del majestuoso tejo centenario que preside nuestro jardín. Este dormitorio principal combina la tradición asturiana con el confort moderno, creando un refugio perfecto para el descanso. Un espacio amplio y luminoso donde las vigas de madera y las paredes de piedra crean una atmósfera que combina tradición y confort. Despertarás con los sonidos de los pájaros y la paz de la naturaleza asturiana. Capacidad: 2 personas. Ideal para parejas que buscan el dormitorio más espacioso y con más privacidad.",
    "rooms.tejo.bed": "Cama 160x200",
    "rooms.tejo.stone": "Pared de piedra",
    "rooms.tejo.views": "Vistas al valle",
    "rooms.tejo.wardrobe": "Armario amplio",
    "rooms.pumarada.name": "La Pumarada",
    "rooms.pumarada.subtitle": "Habitación Doble",
    "rooms.pumarada.description": "Bautizada en honor a las plantaciones de manzanos típicas de la Comarca de la Sidra, esta habitación evoca la esencia rural asturiana. Un espacio acogedor y luminoso que invita al descanso rodeado de la tranquilidad del campo. Un espacio tranquilo y luminoso perfecto para desconectar. Las vistas al campo asturiano y a las montañas te recordarán cada mañana que estás en plena naturaleza, lejos del ruido y las prisas. Capacidad: 2 personas. Ideal para parejas o huéspedes individuales que buscan un espacio cómodo con vistas al campo.",
    "rooms.pumarada.bed": "Cama 135x190",
    "rooms.pumarada.views": "Vistas al valle",
    "rooms.pumarada.light": "Luz natural",
    "rooms.pumarada.wardrobe": "Armario",
    "rooms.lechuza.name": "La Lechuza",
    "rooms.lechuza.subtitle": "Habitación Familiar",
    "rooms.lechuza.description": "Esta habitación lleva el nombre de nuestra cabaña y es el espacio favorito de los más pequeños. Con su litera metálica y su espacio acogedor, es perfecta para que niños y jóvenes disfruten de su propia aventura asturiana. Una habitación luminosa y acogedora que hace las delicias de niños y jóvenes. La litera metálica añade un toque de aventura, mientras que la luz natural crea un ambiente alegre y agradable para el descanso. Capacidad: 2 personas. Ideal para niños, jóvenes o huéspedes que prefieren literas.",
    "rooms.lechuza.bunk": "Litera metálica",
    "rooms.lechuza.light": "Espacio luminoso",
    "rooms.lechuza.kids": "Ideal niños y jóvenes",

    // Services
    "services.subtitle": "Servicios incluidos en tu estancia",
    "services.title": "Nuestros",
    "services.titleAccent": "Servicios",
    "services.description": "Nuestra casa rural en Asturias está completamente equipada con WiFi, chimenea, cocina y parking privado. Disfruta de uso exclusivo del alojamiento y jardín.",
    "services.kitchen.title": "Cocina Completa",
    "services.kitchen.description": "Vitrocerámica, horno, microondas, cafetera manual de filtro, nevera y menaje completo (vajilla, cubertería y utensilios) para cocinar como en casa.",
    "services.living.title": "Salón Acogedor",
    "services.living.description": "Chimenea de pellets para el invierno, sofá cama doble, Smart TV con Chromecast y juegos de mesa para disfrutar en familia.",
    "services.garden.title": "Jardín y Porche",
    "services.garden.description": "1.500m² de parcela privada con manzanos y tejo centenario. Gran porche cubierto con mesa para 10 comensales y balancín con vistas.",
    "services.bedrooms.title": "3 Dormitorios Dobles",
    "services.bedrooms.description": "Dormitorio 1: Cama King size. Dormitorio 2: Cama de matrimonio. Dormitorio 3: Litera con cama de matrimonio inferior. Ropa de cama incluida.",
    "services.local.title": "Asesoría Local",
    "services.local.description": "Te ayudamos con recomendaciones sobre actividades, restaurantes y sidrerías en la Comarca de la Sidra. Conocemos cada rincón.",
    "services.hiking.title": "Rutas y Senderismo",
    "services.hiking.description": "Cercanía a P.R. AS-147, Senda del río Viacaba y el Camino de Santiago. Entorno natural privilegiado para explorar Asturias.",
    "services.wifi": "WiFi gratuito en toda la casa",
    "services.parking": "Parking privado junto a la casa",
    "services.tv": "Smart TV con Chromecast",
    "services.water": "Agua potable de manantial",
    "services.linens": "Ropa de cama y toallas incluidas",
    "services.heating": "Calefacción con chimenea de pellets",
    "services.cta.title": "¡Reserva tu escapada rural en Asturias!",
    "services.cta.description": "Alojamiento para 7 personas en la Comarca de la Sidra. Vive la auténtica experiencia del turismo rural asturiano.",

    // Reviews
    "reviews.subtitle": "Opiniones de Huéspedes",
    "reviews.title": "Lo Que Dicen",
    "reviews.titleAccent": "Nuestros Visitantes",
    "reviews.satisfied": "100% clientes satisfechos",
    "reviews.featured": "\"Casa muy bonita y renovada. En un lugar tranquilo y perfecto para relajarse, pero que permite recorrer esta hermosa región y descubrirla con facilidad.\"",
    "reviews.featuredAuthor": "— Audrie, Julio 2025",
    "reviews.seeAll": "Ver todas las reseñas en Airbnb",

    // House Rules
    "rules.subtitle": "Convivencia",
    "rules.title": "Normas de la",
    "rules.titleAccent": "Casa",
    "rules.description": "Queremos que la estancia sea una experiencia inolvidable de descanso y conexión con la naturaleza asturiana. Para garantizar la comodidad de todos los huéspedes y preservar este rincón especial, se ruega tener en cuenta estas sencillas normas de convivencia.",
    "rules.inside": "Dentro de la casa",
    "rules.outside": "En el exterior",
    "rules.general": "Normas generales",
    "rules.noSmoking.title": "Espacio libre de humo",
    "rules.noSmoking.description": "No está permitido fumar en el interior de la vivienda. Se puede fumar en las zonas exteriores (porche, jardín), utilizando los ceniceros disponibles. Se ruega no dejar colillas en el entorno natural.",
    "rules.toilet.title": "Sistema de saneamiento",
    "rules.toilet.description": "Importante: No se puede tirar papel higiénico ni ningún otro objeto al inodoro. La casa no cuenta con sistema de alcantarillado público y cualquier residuo puede causar atascos graves. Se ruega utilizar siempre la papelera del baño.",
    "rules.water.title": "Agua potable de manantial",
    "rules.water.description": "El agua del grifo es completamente potable y proviene de un manantial natural de montaña. Está analizada regularmente y es segura para beber. ¡Disfrutad de su frescura y pureza!",
    "rules.furniture.title": "Mobiliario",
    "rules.furniture.description": "Por motivos de seguridad y funcionalidad, no está permitido mover los muebles de sitio ni trasladarlos entre habitaciones. Todo está dispuesto para el máximo confort.",
    "rules.checkout.title": "Al finalizar la estancia",
    "rules.checkout.description": "Se agradece dejar la casa en condiciones similares a como se encontró. No es necesaria una limpieza a fondo, pero sí se aprecia orden, recogida de vajilla utilizada y respeto por el espacio.",
    "rules.nature.title": "Respeto al entorno natural",
    "rules.nature.description": "Este es un espacio rural privilegiado. Se ruega no tirar basura, no arrancar plantas ni dañar el paisaje. Se comparte este entorno con fauna y flora local que merecen cuidado.",
    "rules.animals.title": "Convivencia con animales del entorno",
    "rules.animals.description": "Es habitual ver aves, gatos rurales, vacas en prados cercanos y otros animales autóctonos. Se ruega observarlos con respeto, sin molestarlos. Están en su hábitat natural y contribuyen al equilibrio del ecosistema.",
    "rules.fruit.title": "Fruta de temporada",
    "rules.fruit.description": "Si hay fruta madura en los árboles del jardín durante la estancia, se puede recoger con moderación y cuidado. Es un pequeño regalo de la naturaleza asturiana. Se ruega respetar las ramas y no tirar la fruta al suelo.",
    "rules.trash.title": "Gestión de residuos",
    "rules.trash.description": "La aldea no dispone de servicio de recogida de basura. Se agradece llevar los residuos y depositarlos en los contenedores del pueblo más cercano (Villaviciosa, a 7 km). Se pueden dejar bolsas de basura cerradas en el porche antes de partir.",
    "rules.hours.title": "Horarios",
    "rules.hours.description": "Entrada: De 18:00 a 21:00 h · Salida: Antes de las 11:00 h. Aunque se esté en plena naturaleza, la aldea es un lugar tranquilo. Se agradece moderación en el volumen de música o conversaciones, especialmente en horario nocturno.",
    "rules.capacity.title": "Capacidad máxima",
    "rules.capacity.description": "El alojamiento tiene capacidad para 7 personas. No está permitido superar este número por motivos de seguridad y confort.",
    "rules.pets.title": "Mascotas",
    "rules.pets.description": "No se admiten animales con pelo, para respetar las necesidades sanitarias de todos los huéspedes.",

    // Location
    "location.subtitle": "Casa rural en La Roza, Cabranes",
    "location.title": "Ubicación",
    "location.titleAccent": "en la Comarca de la Sidra",
    "location.distances": "Distancias",
    "location.activities": "Actividades Cercanas",
    "location.route147": "Ruta P.R. AS-147",
    "location.route147.desc": "Senderismo por la comarca",
    "location.viacaba": "Senda del río Viacaba",
    "location.viacaba.desc": "Naturaleza y paisajes",
    "location.ciderRoute": "Ruta de la Sidra",
    "location.ciderRoute.desc": "Sidrerías y gastronomía",

    // Contact
    "contact.subtitle": "Reserva tu estancia",
    "contact.title": "¿Listo para tu",
    "contact.titleAccent": "Escapada Rural?",
    "contact.description": "Reserva tu alojamiento en la Comarca de la Sidra. Consulta disponibilidad para tu escapada rural en Asturias o pregúntanos cualquier duda sobre La Cabaña de la Lechuza.",
    "contact.hostIntro": ", nuestra anfitriona, estará encantada de atenderte personalmente.",
    "contact.location": "Ubicación",
    "contact.phone": "Teléfono",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.formTitle": "Solicitar Información",
    "contact.formSubtitle": "Te responderemos a la mayor brevedad posible",
    "contact.name": "Nombre completo",
    "contact.emailPlaceholder": "Email",
    "contact.phonePlaceholder": "Teléfono",
    "contact.dates": "Fechas aproximadas",
    "contact.guests": "Número de huéspedes",
    "contact.guestsOption": "huéspedes",
    "contact.message": "Tu mensaje o consulta...",
    "contact.send": "Enviar Consulta",
    "contact.toast.title": "¡Abriendo cliente de correo!",
    "contact.toast.description": "Se abrirá tu aplicación de email para enviar la consulta.",

    // Footer
    "footer.description": "Un refugio de paz entre manzanos y valles asturianos. Tu escapada rural perfecta en la Comarca de la Sidra.",
    "footer.rehabilitated": "Rehabilitada en 2023 con todo el encanto de la arquitectura tradicional asturiana.",
    "footer.links": "Enlaces",
    "footer.contact": "Contacto",
    "footer.nearVillaviciosa": "A 7 km de Villaviciosa",
    "footer.nearBeaches": "Cerca de Playa Rodiles y Tazones",
    "footer.madeWith": "Hecho con",
    "footer.inAsturias": "en Asturias",
    "footer.privacy": "Política de Privacidad",
    "footer.legal": "Aviso Legal",
    "footer.spaces": "Espacios",
    "footer.services": "Servicios",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.rooms": "Rooms",
    "nav.reviews": "Reviews",
    "nav.directions": "Directions",
    "nav.blog": "Blog",
    "nav.book": "Book Now",

    // Hero
    "hero.title": "La Cabaña de",
    "hero.titleAccent": "la Lechuza",
    "hero.location": "Cider Region · La Roza, Cabranes",
    "hero.description": "Your charming rural retreat in the heart of the Cider Region. Renovated in 2023, our cottage offers intimate accommodation for families and groups, perfect for rural getaways and holidays in Asturias.",
    "hero.bookNow": "Book Now",
    "hero.learnMore": "Learn More",
    "hero.guests": "Guests",
    "hero.bedrooms": "Bedrooms",
    "hero.bathrooms": "Bath & WC",
    "hero.surface": "Surface",
    "hero.viewImage": "View image",

    // Values
    "values.subtitle": "Charming rural tourism",
    "values.title": "Our",
    "values.titleAccent": "Values",
    "values.hospitality.title": "Asturian Hospitality",
    "values.hospitality.description": "We strive to make every guest feel at home, offering warm service and authentic Asturian rural hospitality.",
    "values.nature.title": "Nature at Its Best",
    "values.nature.description": "Surrounded by the natural beauty of the Cider Region, we offer a peaceful environment to disconnect from urban stress.",
    "values.comfort.title": "Rural Comfort",
    "values.comfort.description": "Our rooms and spaces are designed to provide maximum comfort during your rural getaway in Asturias.",

    // Gallery
    "gallery.subtitle": "Rural house photo gallery",
    "gallery.title": "Our",
    "gallery.titleAccent": "Spaces",
    "gallery.description": "Discover every corner of our rural house in Asturias: 3 double bedrooms, living room with pellet fireplace and 1500m² of private garden. The perfect accommodation for families and groups in the Cider Region.",
    "gallery.exterior": "Garden & Exterior",
    "gallery.exterior.desc": "1,500m² private plot with covered porch, swing and panoramic views of the Asturian valley",
    "gallery.kitchen": "Fully Equipped Kitchen",
    "gallery.kitchen.desc": "Fully equipped kitchen with ceramic hob, oven, microwave and complete kitchenware for cooking during your stay",
    "gallery.living": "Living Room with Fireplace",
    "gallery.living.desc": "Cozy rural house living room with pellet fireplace, sofa bed and Smart TV with Chromecast",
    "gallery.bathroom": "Bathrooms",
    "gallery.bathroom.desc": "1 full bathroom with shower + 1 toilet. Towels and bathroom linen included",
    "gallery.closeGallery": "Close gallery",
    "gallery.prevPhoto": "Previous photo",
    "gallery.nextPhoto": "Next photo",
    "gallery.thumbnail": "Thumbnail",

    // Rooms
    "rooms.subtitle": "Charming bedrooms",
    "rooms.title": "Our",
    "rooms.titleAccent": "Rooms",
    "rooms.description": "3 double bedrooms with capacity for 7 guests in our rural house in Asturias. Cozy rooms with bed linen included for your maximum comfort and rest.",
    "rooms.tejo.name": "El Tejo",
    "rooms.tejo.subtitle": "Master Bedroom",
    "rooms.tejo.description": "The most spacious room at La Cabaña de la Lechuza is named after the majestic centuries-old yew tree in our garden. This master bedroom combines Asturian tradition with modern comfort, creating a perfect retreat for rest. A bright and spacious room where wooden beams and stone walls create an atmosphere that combines tradition and comfort. You'll wake up to birdsong and the peace of Asturian nature. Capacity: 2 people. Ideal for couples seeking the most spacious and private bedroom.",
    "rooms.tejo.bed": "King size bed 160x200",
    "rooms.tejo.stone": "Stone wall",
    "rooms.tejo.views": "Valley views",
    "rooms.tejo.wardrobe": "Large wardrobe",
    "rooms.pumarada.name": "La Pumarada",
    "rooms.pumarada.subtitle": "Double Room",
    "rooms.pumarada.description": "Named after the apple orchards typical of the Cider Region, this room evokes the essence of rural Asturias. A cozy and bright space that invites rest surrounded by the tranquility of the countryside. A quiet and bright space perfect for disconnecting. Views of the Asturian countryside and mountains will remind you every morning that you're in pure nature, far from noise and rush. Capacity: 2 people. Ideal for couples or individual guests seeking a comfortable space with countryside views.",
    "rooms.pumarada.bed": "Double bed 135x190",
    "rooms.pumarada.views": "Valley views",
    "rooms.pumarada.light": "Natural light",
    "rooms.pumarada.wardrobe": "Wardrobe",
    "rooms.lechuza.name": "La Lechuza",
    "rooms.lechuza.subtitle": "Family Room",
    "rooms.lechuza.description": "This room bears the name of our cottage and is the favorite space for the little ones. With its metal bunk bed and cozy space, it's perfect for children and young people to enjoy their own Asturian adventure. A bright and cozy room that delights children and young people. The metal bunk bed adds a touch of adventure, while natural light creates a cheerful and pleasant atmosphere for rest. Capacity: 2 people. Ideal for children, young people or guests who prefer bunk beds.",
    "rooms.lechuza.bunk": "Metal bunk bed",
    "rooms.lechuza.light": "Bright space",
    "rooms.lechuza.kids": "Ideal for kids & teens",

    // Services
    "services.subtitle": "Services included in your stay",
    "services.title": "Our",
    "services.titleAccent": "Services",
    "services.description": "Our rural house in Asturias is fully equipped with WiFi, fireplace, kitchen and private parking. Enjoy exclusive use of the accommodation and garden.",
    "services.kitchen.title": "Full Kitchen",
    "services.kitchen.description": "Ceramic hob, oven, microwave, filter coffee maker, fridge and complete kitchenware (dishes, cutlery and utensils) to cook like at home.",
    "services.living.title": "Cozy Living Room",
    "services.living.description": "Pellet fireplace for winter, double sofa bed, Smart TV with Chromecast and board games to enjoy with family.",
    "services.garden.title": "Garden & Porch",
    "services.garden.description": "1,500m² private plot with apple trees and centuries-old yew. Large covered porch with table for 10 diners and swing with views.",
    "services.bedrooms.title": "3 Double Bedrooms",
    "services.bedrooms.description": "Bedroom 1: King size bed. Bedroom 2: Double bed. Bedroom 3: Bunk bed with double bed below. Bed linen included.",
    "services.local.title": "Local Advice",
    "services.local.description": "We help you with recommendations on activities, restaurants and cider houses in the Cider Region. We know every corner.",
    "services.hiking.title": "Routes & Hiking",
    "services.hiking.description": "Close to P.R. AS-147, Viacaba River Trail and the Way of St. James. Privileged natural environment to explore Asturias.",
    "services.wifi": "Free WiFi throughout the house",
    "services.parking": "Private parking next to the house",
    "services.tv": "Smart TV with Chromecast",
    "services.water": "Spring drinking water",
    "services.linens": "Bed linen and towels included",
    "services.heating": "Pellet fireplace heating",
    "services.cta.title": "Book your rural getaway in Asturias!",
    "services.cta.description": "Accommodation for 7 people in the Cider Region. Live the authentic Asturian rural tourism experience.",

    // Reviews
    "reviews.subtitle": "Guest Reviews",
    "reviews.title": "What",
    "reviews.titleAccent": "Our Visitors Say",
    "reviews.satisfied": "100% satisfied customers",
    "reviews.featured": "\"Very nice and renovated house. In a quiet place perfect for relaxing, but allowing to explore this beautiful region and discover it easily.\"",
    "reviews.featuredAuthor": "— Audrie, July 2025",
    "reviews.seeAll": "See all reviews on Airbnb",

    // House Rules
    "rules.subtitle": "Living Together",
    "rules.title": "House",
    "rules.titleAccent": "Rules",
    "rules.description": "We want your stay to be an unforgettable experience of rest and connection with Asturian nature. To ensure the comfort of all guests and preserve this special corner, please consider these simple rules.",
    "rules.inside": "Inside the house",
    "rules.outside": "Outside",
    "rules.general": "General rules",
    "rules.noSmoking.title": "Smoke-free space",
    "rules.noSmoking.description": "Smoking is not allowed inside the house. You can smoke in outdoor areas (porch, garden), using the available ashtrays. Please don't leave cigarette butts in the natural environment.",
    "rules.toilet.title": "Sanitation system",
    "rules.toilet.description": "Important: No toilet paper or any other objects can be thrown in the toilet. The house doesn't have public sewage system and any waste can cause serious blockages. Please always use the bathroom bin.",
    "rules.water.title": "Spring drinking water",
    "rules.water.description": "Tap water is completely potable and comes from a natural mountain spring. It's regularly tested and safe to drink. Enjoy its freshness and purity!",
    "rules.furniture.title": "Furniture",
    "rules.furniture.description": "For safety and functionality reasons, moving furniture or transferring it between rooms is not allowed. Everything is arranged for maximum comfort.",
    "rules.checkout.title": "At the end of your stay",
    "rules.checkout.description": "We appreciate leaving the house in similar conditions as you found it. Deep cleaning is not necessary, but order, picking up used dishes and respect for the space is appreciated.",
    "rules.nature.title": "Respect for nature",
    "rules.nature.description": "This is a privileged rural space. Please don't litter, don't pull out plants or damage the landscape. We share this environment with local fauna and flora that deserve care.",
    "rules.animals.title": "Living with local animals",
    "rules.animals.description": "It's common to see birds, rural cats, cows in nearby meadows and other native animals. Please observe them with respect, without disturbing them. They're in their natural habitat and contribute to the ecosystem balance.",
    "rules.fruit.title": "Seasonal fruit",
    "rules.fruit.description": "If there's ripe fruit on the garden trees during your stay, you can pick it in moderation and with care. It's a small gift from Asturian nature. Please respect the branches and don't throw fruit on the ground.",
    "rules.trash.title": "Waste management",
    "rules.trash.description": "The village doesn't have garbage collection service. We appreciate you taking waste and depositing it in the containers of the nearest town (Villaviciosa, 7 km away). You can leave closed garbage bags on the porch before leaving.",
    "rules.hours.title": "Hours",
    "rules.hours.description": "Check-in: From 6:00 PM to 9:00 PM · Check-out: Before 11:00 AM. Even though you're in nature, the village is a quiet place. Moderation in music volume or conversations is appreciated, especially at night.",
    "rules.capacity.title": "Maximum capacity",
    "rules.capacity.description": "The accommodation has capacity for 7 people. Exceeding this number is not allowed for safety and comfort reasons.",
    "rules.pets.title": "Pets",
    "rules.pets.description": "Animals with fur are not allowed, to respect the health needs of all guests.",

    // Location
    "location.subtitle": "Rural house in La Roza, Cabranes",
    "location.title": "Location",
    "location.titleAccent": "in the Cider Region",
    "location.distances": "Distances",
    "location.activities": "Nearby Activities",
    "location.route147": "P.R. AS-147 Route",
    "location.route147.desc": "Hiking through the region",
    "location.viacaba": "Viacaba River Trail",
    "location.viacaba.desc": "Nature and landscapes",
    "location.ciderRoute": "Cider Route",
    "location.ciderRoute.desc": "Cider houses and gastronomy",

    // Contact
    "contact.subtitle": "Book your stay",
    "contact.title": "Ready for your",
    "contact.titleAccent": "Rural Getaway?",
    "contact.description": "Book your accommodation in the Cider Region. Check availability for your rural getaway in Asturias or ask us any questions about La Cabaña de la Lechuza.",
    "contact.hostIntro": ", our host, will be delighted to assist you personally.",
    "contact.location": "Location",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.formTitle": "Request Information",
    "contact.formSubtitle": "We'll respond as soon as possible",
    "contact.name": "Full name",
    "contact.emailPlaceholder": "Email",
    "contact.phonePlaceholder": "Phone",
    "contact.dates": "Approximate dates",
    "contact.guests": "Number of guests",
    "contact.guestsOption": "guests",
    "contact.message": "Your message or inquiry...",
    "contact.send": "Send Inquiry",
    "contact.toast.title": "Opening email client!",
    "contact.toast.description": "Your email application will open to send the inquiry.",

    // Footer
    "footer.description": "A peaceful retreat among apple trees and Asturian valleys. Your perfect rural getaway in the Cider Region.",
    "footer.rehabilitated": "Renovated in 2023 with all the charm of traditional Asturian architecture.",
    "footer.links": "Links",
    "footer.contact": "Contact",
    "footer.nearVillaviciosa": "7 km from Villaviciosa",
    "footer.nearBeaches": "Near Rodiles and Tazones beaches",
    "footer.madeWith": "Made with",
    "footer.inAsturias": "in Asturias",
    "footer.privacy": "Privacy Policy",
    "footer.legal": "Legal Notice",
    "footer.spaces": "Spaces",
    "footer.services": "Services",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    if (saved === "es" || saved === "en") return saved;
    // Detectar idioma del navegador
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "en" ? "en" : "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
