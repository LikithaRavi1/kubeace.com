import React from 'react';
import { Helmet } from 'react-helmet';
import Canonicals from './Canonicals';
import SocialMeta from './SocialMeta';

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  canonicalPath?: string;
  canonicalUrl?: string; // for backward compatibility
  noindex?: boolean;
  schema?: Record<string, any>;
  breadcrumbs?: Array<{name: string; url: string}>;
  keywords?: string;
  pageType?: 'home' | 'service' | 'solution' | 'blog' | 'contact' | 'case-study';
  datePublished?: string;
  dateModified?: string;
  author?: string;
  ogType?: string; // for backward compatibility
}

/**
 * Comprehensive SEO component that handles all meta tags, canonical URLs, and social sharing
 * Enhanced with schema.org structured data and improved keyword optimization
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  type = 'website',
  canonicalPath,
  canonicalUrl,
  noindex = false,
  schema,
  breadcrumbs,
  keywords = "Kubernetes, Cloud Infrastructure, Security, DevOps, Optimization, Management, Cloud Native, Containerization",
  pageType = 'website',
  datePublished,
  dateModified,
  author,
  ogType
}) => {
  // Ensure the title ends with the site name and doesn't exceed 60 characters
  const siteTitle = "KubeAce";
  // Modify title handling to prevent multiple H1 issues
  const pageTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  let fullTitle = pageTitle;
  if (fullTitle.length > 60) {
    fullTitle = fullTitle.substring(0, 57) + '...';
  }
  
  // Ensure description is between 120-160 characters
  let optimizedDescription = description;
  if (optimizedDescription.length > 160) {
    optimizedDescription = optimizedDescription.substring(0, 157) + '...';
  }
  
  // Base URL for canonical links
  const baseUrl = 'https://www.kubeace.com';
  
  // Generate default structured data based on page type
  const getDefaultSchema = () => {
    // Common organization data
    const organization = {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'KubeAce',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/kubeace-logo.png`,
        width: 280,
        height: 60
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560059',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9035827426',
        email: 'info@kubeace.com',
        contactType: 'customer service'
      },
      sameAs: [
        'https://twitter.com/kubeace',
        'https://www.linkedin.com/company/kubeace',
        'https://github.com/kubeace'
      ]
    };
    
    // Basic website schema
    const website = {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: siteTitle,
      description: 'Kubernetes, LiveKit & DevOps Consulting Services',
      publisher: {
        '@id': `${baseUrl}/#organization`
      }
    };
    
    // Current webpage schema
    const webPage = {
      '@type': 'WebPage',
      '@id': canonicalPath ? `${baseUrl}${canonicalPath}#webpage` : `${baseUrl}/#webpage`,
      url: canonicalPath ? `${baseUrl}${canonicalPath}` : baseUrl,
      name: pageTitle, // Use consistent title
      headline: pageTitle, // Add headline for better SEO
      description: optimizedDescription,
      isPartOf: {
        '@id': `${baseUrl}/#website`
      },
      inLanguage: 'en-US',
      datePublished: datePublished || new Date().toISOString(),
      dateModified: dateModified || new Date().toISOString()
    };
    
    // Specialized schemas based on page type
    switch(pageType) {
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@graph': [
            organization,
            website,
            webPage,
            {
              '@type': 'Service',
              name: title,
              description: optimizedDescription,
              provider: {
                '@id': `${baseUrl}/#organization`
              },
              serviceType: title.replace(' | KubeAce', '')
            }
          ]
        };
        
      case 'blog':
        return {
          '@context': 'https://schema.org',
          '@graph': [
            organization,
            website,
            webPage,
            {
              '@type': 'BlogPosting',
              headline: title.replace(' | KubeAce', ''),
              description: optimizedDescription,
              image: image ? image : undefined,
              author: {
                '@type': 'Person',
                name: author || 'KubeAce Team'
              },
              publisher: {
                '@id': `${baseUrl}/#organization`
              },
              datePublished: datePublished || new Date().toISOString(),
              dateModified: dateModified || new Date().toISOString(),
              mainEntityOfPage: {
                '@id': canonicalPath ? `${baseUrl}${canonicalPath}#webpage` : `${baseUrl}/#webpage`
              }
            }
          ]
        };
        
      case 'contact':
        return {
          '@context': 'https://schema.org',
          '@graph': [
            organization,
            website,
            webPage,
            {
              '@type': 'ContactPage',
              description: 'Contact KubeAce for cloud-native and Kubernetes solutions',
              mainEntityOfPage: {
                '@id': canonicalPath ? `${baseUrl}${canonicalPath}#webpage` : `${baseUrl}/#webpage`
              }
            }
          ]
        };
        
      default:
        return {
          '@context': 'https://schema.org',
          '@graph': [
            organization,
            website,
            webPage
          ]
        };
    }
  };

  // Generate breadcrumb schema if breadcrumbs are provided
  const breadcrumbSchema = breadcrumbs ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`
    }))
  } : null;

  // Get default schema based on page type
  const defaultSchema = getDefaultSchema();
  
  // Combine custom schema with default schemas
  const schemas = [schema, breadcrumbSchema ? breadcrumbSchema : null].filter(Boolean);
  
  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={optimizedDescription} />
        
        {/* Add main heading for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "mainContentOfPage": {
              "@type": "WebPageElement",
              "headline": pageTitle
            }
          })}
        </script>
        
        {/* Add keywords if provided */}
        {keywords && <meta name="keywords" content={keywords} />}
        
        {/* Control indexing */}
        {noindex ? (
          <meta name="robots" content="noindex,follow" />
        ) : (
          <meta name="robots" content="index,follow" />
        )}
        
        {/* Performance optimizations */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0f4f95" />
        
        {/* Remove canonical tag from here since it's handled by Canonicals component */}
        
        {/* Rest of your meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="language" content="English" />
        
        {/* Page-specific dates for articles/blogs */}
        {datePublished && <meta name="article:published_time" content={datePublished} />}
        {dateModified && <meta name="article:modified_time" content={dateModified} />}
        {author && <meta name="author" content={author} />}
        
        {/* Default schema.org structured data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultSchema) }}
        />
        
        {/* Additional schema.org structured data */}
        {schemas.map((schemaObj, index) => (
          schemaObj && (
            <script 
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
            />
          )
        ))}
      </Helmet>
      
      {/* Add canonical URLs */}
      <Canonicals path={canonicalPath} />
      
      {/* Add social media meta tags */}
      <SocialMeta
        title={fullTitle}
        description={optimizedDescription}
        image={image}
        type={type}
      />
    </>
  );
};

export default SEO;