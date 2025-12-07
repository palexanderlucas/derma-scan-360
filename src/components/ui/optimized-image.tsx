import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  eager?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  placeholderClassName,
  eager = false,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(eager);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (eager) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [eager]);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", placeholderClassName)}>
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div
          className={cn(
            "absolute inset-0 bg-muted animate-pulse",
            className
          )}
        />
      )}
      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};
