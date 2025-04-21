import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'wouter';

interface SocialMetaProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
}

/**
 * Component that adds Open Graph and Twitter Card metadata for better social sharing
 */
const SocialMeta: React.FC<SocialMetaProps> = ({ 
  title, 
  description, 
  image = '/images/KubeAce-logo-new.png', 
  type = 'website' 
}) => {
  const [location] = useLocation();
  const url = `https://kubeace.com${location}`;
  
  return (
    <Helmet>
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image.startsWith('http') ? image : `https://kubeace.com${image}`} />
      <meta property="og:site_name" content="KubeAce" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `https://kubeace.com${image}`} />
      
      {/* Social metadata for search engines */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'Organization',
          'name': 'KubeAce',
          'url': 'https://kubeace.com',
          'logo': 'https://kubeace.com/images/KubeAce-logo-new.png',
          'sameAs': [
            'https://twitter.com/kubeace',
            'https://linkedin.com/company/kubeace',
            'https://github.com/kubeace'
          ],
          ...(type === 'article' && {
            'headline': title,
            'description': description,
            'image': image.startsWith('http') ? image : `https://kubeace.com${image}`,
          })
        })}
      </script>
    </Helmet>
  );
};

export default SocialMeta;