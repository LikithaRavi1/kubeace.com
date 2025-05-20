import React from 'react';
import { useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/ui/seo';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight } from 'lucide-react';
import CTA from '@/components/home/CTA';
import { type Solution } from '@shared/schema';

interface SolutionDetailParams {
  slug: string;
}

const SolutionDetail: React.FC = () => {
  const { slug } = useParams<SolutionDetailParams>();
  
  const { data: solution, isLoading, error } = useQuery({
    queryKey: ['/api/solutions', slug],
    queryFn: async ({ queryKey }) => {
      const [_, solutionSlug] = queryKey;
      const response = await fetch(`/api/solutions/${solutionSlug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch solution details');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />
        <Skeleton className="h-96 w-full rounded-lg mb-12" />
        <Skeleton className="h-8 w-1/3 mb-4" />
        <Skeleton className="h-24 w-full mb-8" />
        <div className="space-y-4 mb-8">
          {Array(4).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-6 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !solution) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-500">Solution Not Found</h1>
        <p className="mt-4">The solution you're looking for could not be found.</p>
        <Button asChild className="mt-8">
          <a href="/solutions">Back to Solutions</a>
        </Button>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${solution.title} | KubeAce Solutions`}
        description={solution.description}
        canonicalUrl={`https://kubeace.com/solutions/${solution.slug}`}
      />
      
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-40 bg-white opacity-5 transform -skew-y-6"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-white opacity-5 transform skew-y-6"></div>
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-white opacity-5 transform -skew-x-6"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-white opacity-5 transform skew-x-6"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{solution.title}</h1>
            <p className="text-xl text-gray-100">
              {solution.description}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '400px' }}
                />
                {solution.slug === 'video-conferencing-agents' && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <img 
                      src="https://plus.unsplash.com/premium_vector-1704297953235-1d4141e2c264?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWl8ZW58MHx8MHx8fDA%3D" 
                      alt="Video conferencing in action" 
                      className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md" 
                      onError={(e) => { 
                        e.currentTarget.src = '/images/video-conferencing-ai.png';
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <img 
                      src="https://cdn.prod.website-files.com/61a05ff14c09ecacc06eec05/66e8522cbe3d357b8434826a_ai-agents.jpg" 
                      alt="AI transcription example" 
                      className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md"
                      onError={(e) => { 
                        e.currentTarget.src = '/images/video-conferencing-ai.png';
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">About This Solution</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {solution.slug === 'video-conferencing-agents' 
                    ? "Our Video Conferencing Agents & AI Integration solution enhances virtual meetings with intelligent assistants that handle transcription, translation, and engagement analytics. These AI-powered agents seamlessly integrate with your existing video conferencing platforms to improve user experience and productivity."
                    : "This comprehensive solution provides all the tools and expertise you need to implement and optimize your specific use case. Our team works closely with you to ensure successful deployment and adoption."
                  }
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {solution.slug === 'video-conferencing-agents'
                    ? "With customizable features like real-time translation, subtitle generation, and analytics dashboards, you can create a more inclusive and data-driven communication environment for your team or customers."
                    : "We focus on building scalable, reliable solutions that address your specific business challenges while ensuring security and compliance at every step."
                  }
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {solution.features.map((feature: string, index: number) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-start">
                    <Check className="w-6 h-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-lg">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <a href="/contact">
                  <span className="flex items-center">
                    Get Started with This Solution
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore More Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold mb-3">Kubernetes Security Suite</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                End-to-end security solution for hardening your Kubernetes clusters and ensuring compliance.
              </p>
              <Button asChild variant="outline">
                <a href="/solutions/kubernetes-security-suite">Learn More</a>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold mb-3">Cloud-Native Transformation</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                A comprehensive framework to modernize your applications and infrastructure.
              </p>
              <Button asChild variant="outline">
                <a href="/solutions/cloud-native-transformation">Learn More</a>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold mb-3">WebRTC Consulting</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Expert guidance for real-time communication applications and platforms.
              </p>
              <Button asChild variant="outline">
                <a href="/solutions/webrtc-consulting-development">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default SolutionDetail;