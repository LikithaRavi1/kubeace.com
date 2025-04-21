import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string;
  author?: string;
  lang?: string;
  structuredData?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'KubeAce provides enterprise-grade Kubernetes solutions, managed services, and cloud native expertise to optimize your infrastructure and accelerate digital transformation.',
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://kubeace.com/images/og-image.jpg',
  twitterCard = 'summary_large_image',
  keywords = 'Kubernetes, Cloud Native, DevOps, Containerization, Microservices, Managed Kubernetes, WebRTC, Video Conferencing Solutions, Docker, Cloud Infrastructure, Kubernetes Consulting',
  author = 'KubeAce',
  lang = 'en',
  structuredData,
}) => {
  const siteTitle = 'KubeAce - Kubernetes Solutions & Cloud Native Expertise';
  const fullTitle = title === 'Home' ? siteTitle : `${title} | KubeAce`;
  
  // Generate current URL if canonicalUrl is not provided
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://www.kubeace.com');
  
  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="KubeAce" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@KubeAce" />
      <meta name="twitter:creator" content="@KubeAce" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Viewport and Color Theme */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0f4f95" />
      
      {/* Structured Data - schema.org JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data for Organization */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'KubeAce',
            url: 'https://www.kubeace.com',
            logo: 'https://www.kubeace.com/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-9035827426',
              contactType: 'customer service',
              areaServed: 'Worldwide',
              availableLanguage: ['English'],
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'BEML 7th Stage',
              addressLocality: 'Bangalore',
              postalCode: '560059',
              addressCountry: 'IN',
            },
            sameAs: [
              'https://www.linkedin.com/company/kubeace',
              'https://twitter.com/KubeAce',
              'https://github.com/kubeace'
            ]
          })}
        </script>
      )}
      
      {/* Extra metadata for SEO */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Helmet>
  );
};
