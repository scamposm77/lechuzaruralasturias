import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowLeft, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related posts (same tags, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{post.title} | La Cabaña de la Lechuza</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://www.lechuzaruralasturias.es/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.lechuzaruralasturias.es/blog/${post.slug}`} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          <article className="container mx-auto px-6 max-w-4xl">
            {/* Back link */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body"
            >
              <ArrowLeft size={18} />
              Volver al blog
            </Link>

            {/* Cover Image */}
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {post.title}
              </h1>
              
              <p className="text-muted-foreground text-lg font-body">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-body capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none font-body
                prose-headings:font-display prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-ul:text-muted-foreground
                prose-li:marker:text-primary
                prose-strong:text-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16 pt-10 border-t border-border">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Artículos relacionados
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group flex gap-4 p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="w-24 h-24 flex-shrink-0 rounded overflow-hidden">
                        <img
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-foreground group-hover:text-primary transition-colors mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 font-body">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
