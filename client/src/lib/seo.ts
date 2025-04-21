import { Helmet } from 'react-helmet';

export interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const createSEO = (props: SEOProps) => {
  const {
    title,
    description = 'KubeAce provides enterprise-grade Kubernetes solutions, managed services, and cloud native expertise to optimize your infrastructure and accelerate digital transformation.',
    canonicalUrl,
    ogType = 'website',
    ogImage = 'https://kubeace.com/images/og-image.jpg',
    twitterCard = 'summary_large_image',
  } = props;

  const siteTitle = 'KubeAce - Kubernetes Solutions & Cloud Native Expertise';
  const fullTitle = title === 'Home' ? siteTitle : `${title} | KubeAce`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="KubeAce" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Keywords */}
      <meta name="keywords" content="Kubernetes, Cloud Native, DevOps, Containerization, Microservices, Managed Kubernetes" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};
