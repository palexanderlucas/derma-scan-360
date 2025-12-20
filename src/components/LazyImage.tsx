import { useState, useRef, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
}

export const LazyImage = ({ src, alt, className = "", eager = false, aspectRatio }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (eager) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "800px",
        threshold: 0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [eager]);

  // If aspectRatio is provided, wrap in a container
  if (aspectRatio) {
    return (
      <div 
        className="relative w-full overflow-hidden"
        style={{ aspectRatio }}
      >
        <img
          ref={imgRef}
          src={shouldLoad ? src : undefined}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded || !shouldLoad ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={shouldLoad ? src : undefined}
      alt={alt}
      className={className}
      onLoad={() => setIsLoaded(true)}
      style={{
        opacity: isLoaded || !shouldLoad ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    />
  );
};
