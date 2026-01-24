import { useState, useRef, useEffect, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
  priority?: boolean;
  showPlaceholder?: boolean;
}

/**
 * Generates WebP source path from original image path
 * The build process (vite-plugin-image-optimizer) creates WebP versions automatically
 */
const getWebPSource = (originalSrc: string): string | null => {
  // Only convert jpg/jpeg/png to webp
  if (originalSrc.match(/\.(jpg|jpeg|png)$/i)) {
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  return null;
};

/**
 * OptimizedImage component that:
 * 1. Uses <picture> element to serve WebP with fallback
 * 2. Lazy loads images using IntersectionObserver
 * 3. Shows placeholder while loading
 * 4. Supports priority loading for LCP images
 */
const OptimizedImage = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  loading = "lazy",
  sizes = "100vw",
  priority = false,
  showPlaceholder = true,
  fetchPriority,
  decoding,
  ...imgProps
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

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

  const webpSrc = getWebPSource(src);

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${containerClassName}`}
    >
      {/* Placeholder blur effect while loading */}
      {showPlaceholder && !isLoaded && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse"
          aria-hidden="true"
        />
      )}
      
      {isInView && (
        <picture>
          {/* WebP source for modern browsers - higher priority */}
          {webpSrc && (
            <source 
              srcSet={webpSrc} 
              type="image/webp"
              sizes={sizes}
            />
          )}
          {/* Original format fallback */}
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : loading}
            decoding={priority ? "sync" : decoding || "async"}
            fetchPriority={priority ? "high" : fetchPriority || "auto"}
            sizes={sizes}
            onLoad={() => setIsLoaded(true)}
            className={`transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${className}`}
            {...imgProps}
          />
        </picture>
      )}
    </div>
  );
};

/**
 * Simple inline picture element for use in loops/maps where container isn't needed
 */
export const PictureImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  sizes,
  ...imgProps
}: OptimizedImageProps) => {
  const webpSrc = getWebPSource(src);
  
  return (
    <picture>
      {webpSrc && (
        <source 
          srcSet={webpSrc} 
          type="image/webp"
          sizes={sizes}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={className}
        {...imgProps}
      />
    </picture>
  );
};

export default OptimizedImage;
