import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowLeft, User, Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "es" ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related posts (same tags, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 2);

  const title = language === "es" ? post.title : post.titleEn || post.title;
  const excerpt = language === "es" ? post.excerpt : post.excerptEn || post.excerpt;
  const content = language === "es" ? post.content : post.contentEn || post.content;
  const coverImageAlt = language === "es" ? post.coverImageAltEs : post.coverImageAltEn;

  const texts = {
    es: {
      backToBlog: "Volver al blog",
      photoBy: "Foto por",
      onUnsplash: "en Unsplash",
      relatedArticles: "Artículos relacionados"
    },
    en: {
      backToBlog: "Back to blog",
      photoBy: "Photo by",
      onUnsplash: "on Unsplash",
      relatedArticles: "Related articles"
    }
  };

  const t = texts[language];

  return (
    <>
      <Helmet>
        <title>{title} | La Cabaña de la Lechuza</title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href={`https://www.lechuzaruralasturias.es/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.lechuzaruralasturias.es/blog/${post.slug}`} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="robots" content="index, follow" />
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
              {t.backToBlog}
            </Link>

            {/* Cover Image */}
            <div className="mb-8">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={coverImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              {post.imageCredit && (
                <div className="flex items-center gap-1 mt-2 text-muted-foreground text-xs font-body">
                  <Camera size={12} />
                  <span>{t.photoBy} </span>
                  <a 
                    href={post.imageCredit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors underline"
                  >
                    {post.imageCredit.author}
                  </a>
                  <span> {t.onUnsplash}</span>
                </div>
              )}
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
                {title}
              </h1>
              
              <p className="text-muted-foreground text-lg font-body">
                {excerpt}
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
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-muted-foreground prose-ul:my-6 prose-ul:space-y-2
                prose-ol:text-muted-foreground prose-ol:my-6 prose-ol:space-y-2
                prose-li:marker:text-primary prose-li:pl-2
                prose-strong:text-foreground prose-strong:font-semibold
                prose-em:text-foreground/80
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8
                [&>p+p]:mt-6 [&>ul+p]:mt-8 [&>p+ul]:mt-6 [&>h2+p]:mt-6 [&>h3+p]:mt-4"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16 pt-10 border-t border-border">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  {t.relatedArticles}
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
                          alt={language === "es" ? relatedPost.coverImageAltEs : relatedPost.coverImageAltEn}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-foreground group-hover:text-primary transition-colors mb-2">
                          {language === "es" ? relatedPost.title : relatedPost.titleEn || relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 font-body">
                          {language === "es" ? relatedPost.excerpt : relatedPost.excerptEn || relatedPost.excerpt}
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