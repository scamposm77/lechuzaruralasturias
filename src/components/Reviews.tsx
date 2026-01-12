import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Elvia",
    date: "Diciembre 2025",
    rating: 5,
    text: "La casa es una maravilla, está muy bien ubicada por carretera. Es una casita muy especial en plena naturaleza, al levantarte escuchas pajaritos y es muy agradable. La casa tiene de todo, con la estufa de pellets se está muy calentito. Está cuidada al detalle no le falta menaje de hogar. Recomendable si quieres ir a disfrutar de la naturaleza y a descansar.",
    avatar: "E",
  },
  {
    name: "Diego",
    date: "Agosto 2025",
    rating: 5,
    text: "Al llegar a la casa después de un largo viaje, Susana nos demostró que es una gran anfitriona contestando enseguida a todas nuestras dudas y preguntas. Todas las estancias de la casa están limpias y en perfectas condiciones. Las vistas desde el porche de la casa son impresionantes y la cocina tiene todo lo que puedas necesitar.",
    avatar: "D",
  },
  {
    name: "Matteo",
    date: "Agosto 2025",
    rating: 5,
    text: "Una experiencia increíble en plena naturaleza asturiana. La cabaña es exactamente como se ve en las fotos, muy acogedora y con todo lo necesario. Susana fue una anfitriona excepcional. Volveremos sin duda.",
    avatar: "M",
  },
  {
    name: "Laura",
    date: "Julio 2025",
    rating: 5,
    text: "Perfecto para familias que buscan desconectar del trabajo y disfrutar de la naturaleza. El entorno es precioso, rodeado de manzanos y con unas vistas espectaculares al valle. Los niños disfrutaron mucho del jardín.",
    avatar: "L",
  },
];

const Reviews = () => {
  return (
    <section id="opiniones" className="py-28 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Opiniones de Huéspedes
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            Lo Que Dicen
            <span className="text-primary italic"> Nuestros Visitantes</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-primary fill-primary"
                />
              ))}
            </div>
            <span className="font-display text-2xl text-foreground ml-2">5.0</span>
            <span className="font-body text-muted-foreground">· Superanfitrión en Airbnb</span>
          </div>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Susana, nuestra anfitriona, está siempre disponible para hacer tu estancia perfecta
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background rounded-sm p-8 shadow-rustic relative group hover:shadow-rustic-lg transition-all duration-500"
            >
              <Quote
                size={40}
                className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
              />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-foreground/90 text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-primary text-sm font-semibold">
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-display text-foreground font-medium">
                    {review.name}
                  </p>
                  <p className="font-body text-muted-foreground text-sm">
                    {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.airbnb.es/rooms/1232063912950498409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-primary hover:text-primary-dark transition-colors duration-300 text-lg font-medium"
          >
            Ver todas las reseñas en Airbnb
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
