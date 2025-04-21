import React, { useState } from 'react';
import { useRoute } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/ui/seo';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowLeft, CheckCircle, ArrowDown } from 'lucide-react';
import { Link } from 'wouter';
import { type Service } from '@shared/schema';
import CTA from '@/components/home/CTA';

const ServiceDetail: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [, params] = useRoute('/services/:slug');
  const slug = params?.slug || '';

  const { data: service, isLoading, error } = useQuery<Service>({
    queryKey: [`/api/services/${slug}`],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-3/4 mb-6" />
          <Skeleton className="w-full h-64 rounded-lg mb-8" />
          
          <div className="space-y-4 mb-8">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
          
          <div className="space-y-4 mb-8">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </article>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-[60vh] w-full flex items-center justify-center">
        <div className="text-center max-w-xl px-4">
          <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Service Not Found</h2>
          
          <p className="text-gray-600 mb-6">
            The service you're looking for couldn't be found or is temporarily unavailable.
          </p>
          
          <Button asChild variant="default">
            <Link href="/services">
              <span className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </span>
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={service.title} 
        description={service.description} 
        canonicalUrl={`https://kubeace.com/services/${service.slug}`} 
      />
      
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-300 mb-0">{service.description}</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            {service.content ? (
              <div dangerouslySetInnerHTML={{ __html: service.content }} />
            ) : (
              <>
                <h2>Overview</h2>
                <p>
                  Our {service.title} service is designed to help organizations optimize their 
                  cloud-native infrastructure and operations. With our expertise in Kubernetes
                  and cloud technologies, we deliver solutions that address your specific challenges
                  and requirements.
                </p>
                
                <h2>Features & Benefits</h2>
                <ul>
                  <li>Expertise from certified Kubernetes professionals</li>
                  <li>Customized solutions tailored to your business needs</li>
                  <li>Continuous support and optimization</li>
                  <li>Best practices implementation for security and performance</li>
                  <li>Comprehensive documentation and knowledge transfer</li>
                </ul>
                
                <h2>Our Approach</h2>
                <p>
                  We begin with a thorough assessment of your current environment and requirements.
                  Our team then designs a solution architecture that addresses your specific needs,
                  followed by implementation, testing, and deployment. We provide ongoing support
                  and optimization to ensure your infrastructure performs at its best.
                </p>
                
                <h2>Why Choose KubeAce</h2>
                <p>
                  At KubeAce, we bring years of experience in Kubernetes and cloud-native technologies.
                  Our team has helped organizations of all sizes across various industries achieve their
                  goals with our services. We're committed to your success and provide dedicated support
                  throughout your cloud-native journey.
                </p>
              </>
            )}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button asChild variant="ghost" className="text-primary-600 hover:text-primary-700 p-0">
              <Link href="/services">
                <span className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </span>
              </Link>
            </Button>
          </div>
        </article>
      </div>
      
      <CTA />
    </>
  );
};

export default ServiceDetail;