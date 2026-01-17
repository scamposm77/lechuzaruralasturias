import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "es" ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const seo = {
    es: {
      title: "Blog | La Cabaña de la Lechuza - Casa Rural en Asturias",
      description: "Descubre las últimas novedades, rutas de senderismo, gastronomía asturiana y consejos para tu escapada rural en la Comarca de la Sidra.",
      heading: "Nuestro Blog",
      mainTitle: "Historias desde La Cabaña",
      intro: "Rutas, gastronomía, tradiciones y todo lo que necesitas saber para disfrutar al máximo de tu escapada a la Comarca de la Sidra.",
      readMore: "Leer más",
      noContent: "Próximamente publicaremos contenido. ¡Vuelve pronto!"
    },
    en: {
      title: "Blog | La Cabaña de la Lechuza - Rural House in Asturias",
      description: "Discover the latest news, hiking routes, Asturian gastronomy and tips for your rural getaway in the Cider Region.",
      heading: "Our Blog",
      mainTitle: "Stories from The Cabin",
      intro: "Routes, gastronomy, traditions and everything you need to know to make the most of your getaway to the Cider Region.",
      readMore: "Read more",
      noContent: "Content coming soon. Check back soon!"
    }
  };

  const currentSeo = seo[language];

  return (
    <>
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/blog" />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:url" content="https://www.lechuzaruralasturias.es/blog" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-body text-sm tracking-widest uppercase">
                {currentSeo.heading}
              </span>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                {currentSeo.mainTitle}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                {currentSeo.intro}
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={language === "es" ? post.coverImageAltEs : post.coverImageAltEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar size={14} />
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                      </div>
                      <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                        {language === "es" ? post.title : post.titleEn || post.title}
                      </h2>
                      <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-3">
                        {language === "es" ? post.excerpt : post.excerptEn || post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-body text-sm font-medium">
                        {currentSeo.readMore}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {blogPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-body">
                  {currentSeo.noContent}
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;