import React from 'react';
import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import Services from '@/components/home/Services';
import Solutions from '@/components/home/Solutions';
import CaseStudies from '@/components/home/CaseStudies';
import Testimonials from '@/components/home/Testimonials';
import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import { SEO } from '@/components/seo';

/**
 * Home page component optimized for SEO with focused keywords:
 * - Kubernetes consulting
 * - LiveKit consulting
 * - DevOps consulting
 * - LiveKit infrastructure setup
 */
const HomePage: React.FC = () => {
  // Define breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', url: '/' }
  ];

  return (
    <>
      <SEO 
        title="Kubernetes & DevOps Consulting Services | KubeAce" 
        description="Expert Kubernetes, LiveKit & DevOps consulting services. Scale your cloud-native infrastructure affordably with our specialized solutions. Schedule a free consultation."
        image="/images/kubeace-social-default.png"
        type="website"
        canonicalPath="/"
        pageType="home"
        keywords="Kubernetes consulting, LiveKit consulting, DevOps consulting, LiveKit implementation, Kubernetes managed services, cloud-native solutions, WebRTC development"
        breadcrumbs={breadcrumbs}
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "KubeAce",
          "url": "https://kubeace.com",
          "logo": "https://kubeace.com/images/KubeAce-logo.png",
          "description": "Cloud-native consulting firm specializing in Kubernetes, LiveKit and DevOps solutions",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "BEML 7th stage",
            "addressLocality": "Bangalore",
            "postalCode": "560059",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9035827426",
            "contactType": "customer service",
            "email": "info@kubeace.com"
          },
          "sameAs": [
            "https://linkedin.com/company/kubeace",
            "https://github.com/kubeace",
            "https://twitter.com/kubeace"
          ]
        }}
      />
      <main id="main-content">
        {/* 
          Improved semantic structure with h1 focused on target keywords
          This h1 is visually hidden but helps search engines understand the page
        */}
        <h1 className="sr-only">Kubernetes & DevOps Consulting Services | Cloud-Native Expertise by KubeAce</h1>
        <Hero />
        <Partners />
        <Services />
        <Solutions />
        <CaseStudies />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
    </>
  );
};

export default HomePage;
