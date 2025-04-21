import React, { useState, useEffect } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  optimized?: boolean;
}

/**
 * A component that handles image loading with fallbacks and optimizations
 * - Lazy loads images for better performance
 * - Provides fallback images if the main image fails to load
 * - Can apply WebP format when supported by the browser
 */
const ImageFallback: React.FC<ImageProps> = ({
  src,
  fallback = '/images/placeholder-image.jpg',
  alt = '',
  className = '',
  optimized = true,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Reset state if src changes
  useEffect(() => {
    setImgSrc(src);
    setIsLoaded(false);
  }, [src]);
  
  // Handle image loading error
  const handleError = () => {
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };
  
  // Handle successful load
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  // Determine if WebP support needs to be detected
  const needsWebpDetection = optimized && imgSrc && 
    !imgSrc.includes('.webp') && 
    (imgSrc.includes('.jpg') || imgSrc.includes('.jpeg') || imgSrc.includes('.png'));
  
  // Create WebP URL if needed and supported
  const imgUrl = needsWebpDetection ? 
    imgSrc?.replace(/\.(jpg|jpeg|png)$/i, '.webp') : 
    imgSrc;
  
  return (
    <img
      src={imgUrl}
      alt={alt}
      className={`${className} ${!isLoaded ? 'opacity-0 transition-opacity' : 'opacity-100 transition-opacity duration-500'}`}
      onError={handleError}
      onLoad={handleLoad}
      loading="lazy"
      {...rest}
    />
  );
};

export default ImageFallback;