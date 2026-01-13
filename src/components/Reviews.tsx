import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Reviews = () => {
  const { t, language } = useLanguage();

  const reviews = [
    {
      name: "Audrie",
      date: language === "es" ? "Julio 2025" : "July 2025",
      rating: 5,
      text: language === "es" 
        ? "Casa muy bonita y renovada. En un lugar tranquilo y perfecto para relajarse, pero que permite recorrer esta hermosa región y descubrirla con facilidad."
        : "Very nice and renovated house. In a quiet place perfect for relaxing, but allowing to explore this beautiful region and discover it easily.",
      avatar: "A",
    },
    {
      name: "Elvia",
      date: language === "es" ? "Diciembre 2025" : "December 2025",
      rating: 5,
      text: language === "es"
        ? "La casa es una maravilla, está muy bien ubicada por carretera. Es una casita muy especial en plena naturaleza, al levantarte escuchas pajaritos y es muy agradable. La casa tiene de todo, con la estufa de pellets se está muy calentito."
        : "The house is wonderful, very well located by road. It is a very special little house in the middle of nature, when you wake up you hear birds and it is very pleasant. The house has everything, with the pellet stove it is very warm.",
      avatar: "E",
    },
    {
      name: "Diego",
      date: language === "es" ? "Agosto 2025" : "August 2025",
      rating: 5,
      text: language === "es"
        ? "Al llegar a la casa después de un largo viaje, Susana nos demostró que es una gran anfitriona contestando enseguida a todas nuestras dudas y preguntas. Todas las estancias de la casa están limpias y en perfectas condiciones."
        : "Upon arriving at the house after a long journey, Susana showed us that she is a great host by immediately answering all our doubts and questions. All rooms in the house are clean and in perfect condition.",
      avatar: "D",
    },
    {
      name: "Laura",
      date: language === "es" ? "Julio 2025" : "July 2025",
      rating: 5,
      text: language === "es"
        ? "Perfecto para familias que buscan desconectar del trabajo y disfrutar de la naturaleza. El entorno es precioso, rodeado de manzanos y con unas vistas espectaculares al valle."
        : "Perfect for families looking to disconnect from work and enjoy nature. The surroundings are beautiful, surrounded by apple trees and with spectacular views of the valley.",
      avatar: "L",
    },
  ];

  return (
    <section 
      id="opiniones" 
      className="py-28 bg-card"
      aria-label={language === "es" ? "Opiniones de huéspedes" : "Guest reviews"}
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="name" content="La Cabaña de la Lechuza" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            {t("reviews.subtitle")}
          </span>
          <h2 className="font-display text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
            {t("reviews.title")}
            <span className="text-primary italic"> {t("reviews.titleAccent")}</span>
          </h2>
          <div 
            className="flex items-center justify-center gap-2 mb-2"
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <meta itemProp="worstRating" content="1" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="reviewCount" content={String(reviews.length)} />
            <div className="flex" aria-label={language === "es" ? "Valoración 4.88 de 5 estrellas" : "Rating 4.88 out of 5 stars"}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-primary fill-primary"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="font-display text-2xl text-foreground ml-2" itemProp="ratingValue">4.88</span>
            <span className="font-body text-muted-foreground text-sm">· Airbnb</span>
          </div>
          <p className="font-body text-primary font-semibold mb-4">
            {t("reviews.satisfied")}
          </p>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto italic">
            {t("reviews.featured")}
          </p>
          <p className="font-body text-muted-foreground text-sm mt-2">
            {t("reviews.featuredAuthor")}
          </p>
        </div>

        {/* Reviews Grid */}
        <div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          itemProp="review"
        >
          {reviews.map((review, index) => (
            <article
              key={index}
              className="bg-background rounded-sm p-8 shadow-rustic relative group hover:shadow-rustic-lg transition-all duration-500"
              itemScope
              itemType="https://schema.org/Review"
            >
              <Quote
                size={40}
                className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
                aria-hidden="true"
              />
              
              {/* Rating */}
              <div 
                className="flex gap-1 mb-4"
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                <meta itemProp="worstRating" content="1" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="ratingValue" content={String(review.rating)} />
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-primary fill-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-foreground/90 text-lg leading-relaxed mb-6 italic" itemProp="reviewBody">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div 
                className="flex items-center gap-4"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <span className="font-display text-primary text-sm font-semibold">
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-display text-foreground font-medium" itemProp="name">
                    {review.name}
                  </p>
                  <p className="font-body text-muted-foreground text-sm" itemProp="datePublished">
                    {review.date}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.airbnb.es/rooms/1134703286904548225?guests=1&adults=1&s=67&unique_share_id=502cab8b-a5f4-48ee-af66-a507f113d2f2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-primary hover:text-primary-dark transition-colors duration-300 text-lg font-medium"
            aria-label={language === "es" ? "Ver todas las reseñas en Airbnb (abre en nueva ventana)" : "See all reviews on Airbnb (opens in new window)"}
          >
            {t("reviews.seeAll")}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;