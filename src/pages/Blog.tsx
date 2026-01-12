import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog | La Cabaña de la Lechuza - Casa Rural en Asturias</title>
        <meta
          name="description"
          content="Descubre las últimas novedades, rutas de senderismo, gastronomía asturiana y consejos para tu escapada rural en la Comarca de la Sidra."
        />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-body text-sm tracking-widest uppercase">
                Nuestro Blog
              </span>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                Historias desde La Cabaña
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                Rutas, gastronomía, tradiciones y todo lo que necesitas saber para 
                disfrutar al máximo de tu escapada a la Comarca de la Sidra.
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
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-body text-sm font-medium">
                        Leer más
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
                  Próximamente publicaremos contenido. ¡Vuelve pronto!
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
