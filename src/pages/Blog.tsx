import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Formato bilingüe: día mes año
    const esDate = date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return esDate;
  };

  const seo = {
    title: "Blog | La Cabaña de la Lechuza - Casa Rural en Asturias",
    description: "Descubre las últimas novedades, rutas de senderismo, gastronomía asturiana y consejos para tu escapada rural. Discover hiking routes, gastronomy and tips for your rural getaway.",
    heading: "Nuestro Blog / Our Blog",
    mainTitle: "Historias desde La Cabaña",
    mainTitleEn: "Stories from The Cabin",
    intro: "Rutas, gastronomía, tradiciones y todo lo que necesitas saber para disfrutar al máximo de tu escapada a la Comarca de la Sidra.",
    introEn: "Routes, gastronomy, traditions and everything you need to know to make the most of your getaway to the Cider Region.",
    readMore: "Leer más / Read more",
    noContent: "Próximamente publicaremos contenido. ¡Vuelve pronto! / Content coming soon. Check back soon!"
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/blog" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
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
                {seo.heading}
              </span>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-2">
                {seo.mainTitle}
              </h1>
              <p className="font-display text-2xl md:text-3xl text-muted-foreground mb-6">
                {seo.mainTitleEn}
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto font-body mb-2">
                {seo.intro}
              </p>
              <p className="text-muted-foreground/70 max-w-2xl mx-auto font-body italic">
                {seo.introEn}
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
                        alt={`${post.coverImageAltEs} / ${post.coverImageAltEn}`}
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
                      {/* Títulos bilingües */}
                      <h2 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="font-display text-base text-muted-foreground/70 mb-3 italic">
                        {post.titleEn || post.title}
                      </p>
                      {/* Extractos bilingües */}
                      <p className="text-muted-foreground font-body text-sm mb-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <p className="text-muted-foreground/70 font-body text-sm mb-4 line-clamp-2 italic">
                        {post.excerptEn || post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-body text-sm font-medium">
                        {seo.readMore}
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
                  {seo.noContent}
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