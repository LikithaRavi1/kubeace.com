import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'wouter';

interface CanonicalProps {
  path?: string;
}

/**
 * Component that adds canonical URLs to prevent duplicate content issues
 * Also adds www to non-www redirects for consistent URLs
 */
const Canonicals: React.FC<CanonicalProps> = ({ path }) => {
  const [location] = useLocation();
  
  // Use provided path or current location
  const currentPath = path || location;
  
  // Construct canonical URL
  const canonicalUrl = `https://kubeace.com${currentPath}`;
  
  return (
    <Helmet>
      {/* Only one canonical tag per page */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="https://kubeace.com" />
      
      {/* Preconnect to CDN domains for images */}
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    </Helmet>
  );
};

export default Canonicals;