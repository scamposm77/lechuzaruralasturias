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

  // Ahora mostramos ambos idiomas
  const titleEs = post.title;
  const titleEn = post.titleEn || post.title;
  const excerptEs = post.excerpt;
  const excerptEn = post.excerptEn || post.excerpt;
  const contentEs = post.content;
  const contentEn = post.contentEn || post.content;
  const coverImageAlt = `${post.coverImageAltEs} / ${post.coverImageAltEn}`;

  const texts = {
    backToBlog: "Volver al blog / Back to blog",
    photoBy: "Foto por / Photo by",
    onUnsplash: "en Unsplash / on Unsplash",
    relatedArticles: "Artículos relacionados / Related articles"
  };

  // JSON-LD Article structured data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": titleEs,
    "alternativeHeadline": titleEn,
    "description": excerptEs,
    "image": post.coverImage.startsWith('http') ? post.coverImage : `https://www.lechuzaruralasturias.es${post.coverImage}`,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "La Cabaña de la Lechuza",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lechuzaruralasturias.es/assets/logo-lechuza.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.lechuzaruralasturias.es/blog/${post.slug}/`
    },
    "keywords": post.tags.join(", "),
    "inLanguage": ["es", "en"],
    "isPartOf": {
      "@type": "Blog",
      "name": "Blog La Cabaña de la Lechuza",
      "url": "https://www.lechuzaruralasturias.es/blog/"
    }
  };

  const ogImageUrl = post.coverImage.startsWith('http') 
    ? post.coverImage 
    : `https://www.lechuzaruralasturias.es${post.coverImage}`;

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{titleEs} | La Cabaña de la Lechuza</title>
        <meta name="description" content={excerptEs} />
        <link rel="canonical" href={`https://www.lechuzaruralasturias.es/blog/${post.slug}/`} />
        <link rel="alternate" hrefLang="es" href={`https://www.lechuzaruralasturias.es/blog/${post.slug}/`} />
        <link rel="alternate" hrefLang="en" href={`https://www.lechuzaruralasturias.es/blog/${post.slug}/?lang=en`} />
        <link rel="alternate" hrefLang="x-default" href={`https://www.lechuzaruralasturias.es/blog/${post.slug}/`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={titleEs} />
        <meta property="og:description" content={excerptEs} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.lechuzaruralasturias.es/blog/${post.slug}/`} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={titleEs} />
        <meta name="twitter:description" content={excerptEs} />
        <meta name="twitter:image" content={ogImageUrl} />
        
        <meta name="robots" content="index, follow" />
        
        {/* JSON-LD Article */}
        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main role="main" className="pt-32 pb-20">
          <article className="container mx-auto px-6 max-w-4xl">
            {/* Back link */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body"
            >
              <ArrowLeft size={18} />
              {texts.backToBlog}
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
                  <span>{texts.photoBy} </span>
                  <a 
                    href={post.imageCredit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors underline"
                  >
                    {post.imageCredit.author}
                  </a>
                  <span> {texts.onUnsplash}</span>
                </div>
              )}
            </div>

            {/* Header - Bilingual */}
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
              
              {/* Título bilingüe */}
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
                {titleEs}
              </h1>
              <p className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground/70 mb-6 italic">
                {titleEn}
              </p>
              
              {/* Extracto bilingüe */}
              <p className="text-muted-foreground text-lg font-body mb-2">
                {excerptEs}
              </p>
              <p className="text-muted-foreground/70 text-base font-body italic">
                {excerptEn}
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

            {/* Content - Spanish Section */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-primary/30"></div>
                <span className="text-primary font-display text-lg px-4">🇪🇸 Español</span>
                <div className="h-px flex-1 bg-primary/30"></div>
              </div>
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
                dangerouslySetInnerHTML={{ __html: contentEs }}
              />
            </div>

            {/* Language Separator */}
            <div className="my-16 flex items-center justify-center">
              <div className="flex items-center gap-4 px-8 py-4 bg-secondary/50 rounded-full">
                <div className="w-8 h-px bg-primary/50"></div>
                <span className="text-2xl">✦</span>
                <div className="w-8 h-px bg-primary/50"></div>
              </div>
            </div>

            {/* Content - English Section */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-primary/30"></div>
                <span className="text-primary font-display text-lg px-4">🇬🇧 English</span>
                <div className="h-px flex-1 bg-primary/30"></div>
              </div>
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
                dangerouslySetInnerHTML={{ __html: contentEn }}
              />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16 pt-10 border-t border-border">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  {texts.relatedArticles}
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
                          alt={`${relatedPost.coverImageAltEs} / ${relatedPost.coverImageAltEn}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-foreground group-hover:text-primary transition-colors mb-1">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground/70 text-sm italic mb-2">
                          {relatedPost.titleEn || relatedPost.title}
                        </p>
                        <p className="text-muted-foreground text-xs line-clamp-2 font-body">
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