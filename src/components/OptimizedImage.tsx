import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
  priority?: boolean;
  itemProp?: string;
  fetchPriority?: "high" | "low" | "auto";
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  sizes = "100vw",
  priority = false,
  itemProp,
  fetchPriority = "auto",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP source if original is jpg/jpeg/png
  const getWebPSource = (originalSrc: string): string | null => {
    if (originalSrc.match(/\.(jpg|jpeg|png)$/i)) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return null;
  };

  const webpSrc = getWebPSource(src);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder blur */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse"
          aria-hidden="true"
        />
      )}
      
      {isInView && (
        <picture>
          {webpSrc && (
            <source srcSet={webpSrc} type="image/webp" />
          )}
          <img
            src={src}
            alt={alt}
            loading={loading}
            decoding="async"
            fetchPriority={priority ? "high" : fetchPriority}
            sizes={sizes}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            itemProp={itemProp}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
