import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "María García",
    date: "Noviembre 2024",
    rating: 5,
    text: "Un lugar mágico en plena naturaleza. La cabaña tiene todo lo necesario y las vistas a los manzanos son espectaculares. Volveremos seguro.",
    avatar: "MG",
  },
  {
    name: "Carlos Rodríguez",
    date: "Octubre 2024",
    rating: 5,
    text: "Perfecta para desconectar con la familia. Los niños disfrutaron del entorno y nosotros de la tranquilidad. La sidra de la zona es increíble.",
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    date: "Septiembre 2024",
    rating: 5,
    text: "La mejor escapada rural que hemos tenido. La decoración rústica, la chimenea, el entorno... Todo perfecto. Muy recomendable.",
    avatar: "AM",
  },
  {
    name: "Pablo Fernández",
    date: "Agosto 2024",
    rating: 5,
    text: "Increíble ubicación en la Comarca de la Sidra. Los manzanos alrededor de la casa son preciosos. Muy limpia y bien equipada.",
    avatar: "PF",
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
            <span className="font-body text-muted-foreground">· 47 reseñas en Airbnb</span>
          </div>
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
            href="https://www.airbnb.es"
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
