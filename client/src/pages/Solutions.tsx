import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/ui/seo';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight } from 'lucide-react';
import CTA from '@/components/home/CTA';
import { type Solution } from '@shared/schema';

const SolutionsPage: React.FC = () => {
  const { data: solutions, isLoading, error } = useQuery<Solution[]>({
    queryKey: ['/api/solutions'],
  });

  return (
    <>
      <SEO 
        title="LiveKit & Kubernetes Solutions | Cloud-Native Expertise" 
        description="Expert LiveKit, Kubernetes, and cloud-native solutions designed for your specific industry needs. Optimize infrastructure with our specialized consulting services." 
        canonicalPath="/solutions"
        keywords="LiveKit solutions, Kubernetes solutions, cloud-native transformation, WebRTC consulting, video conferencing solutions, LiveKit infrastructure"
        pageType="solution"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Solutions', url: '/solutions' }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "KubeAce Cloud-Native Solutions",
          "description": "Our comprehensive suite of Kubernetes and LiveKit solutions for modern businesses",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Kubernetes Cost Optimization",
              "url": "https://kubeace.com/solutions/kubernetes-cost-optimization"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "WebRTC Consulting",
              "url": "https://kubeace.com/solutions/webrtc-consulting"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Video Conferencing Agents & AI Integration",
              "url": "https://kubeace.com/solutions/video-conferencing-agents-ai-integration"
            }
          ]
        }}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Solutions</h1>
            <p className="text-xl text-gray-100">
              Tailored Kubernetes and cloud-native solutions designed for your specific industry and business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Cloud Solutions</h2>
            <p className="text-lg text-gray-700">
              Our comprehensive suite of cloud solutions helps organizations of all sizes harness the power of modern infrastructure and accelerate digital innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {isLoading ? (
              Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6">
                    <Skeleton className="h-8 w-3/4 mb-3" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                </div>
              ))
            ) : error ? (
              <div className="col-span-full text-center text-red-500 py-8">
                Error loading solutions. Please try again.
              </div>
            ) : (
              solutions?.map((solution: Solution) => (
                <div key={solution.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">{solution.title}</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/solutions/${solution.slug}`}>
                        <span className="flex items-center justify-center">
                          View Details
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      
      {/* Detailed Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="space-y-20">
              {Array(2).fill(0).map((_, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-20 w-full mb-6" />
                    <div className="space-y-3 mb-8">
                      {Array(4).fill(0).map((_, j) => (
                        <Skeleton key={j} className="h-6 w-full" />
                      ))}
                    </div>
                    <Skeleton className="h-10 w-32" />
                  </div>
                  <div>
                    <Skeleton className="h-80 w-full rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">
              Error loading solutions. Please try again.
            </div>
          ) : (
            <div className="space-y-20">
              {solutions?.map((solution: Solution, index: number) => (
                <div key={`detail-${solution.id}`} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-md">
                  <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                    <h2 className="text-3xl font-bold mb-4 text-blue-800">{solution.title}</h2>
                    <div className="w-20 h-1 bg-blue-500 mb-6"></div>
                    <p className="text-gray-700 mb-6 text-lg">{solution.description}</p>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features:</h3>
                    <ul className="space-y-3 mb-8">
                      {solution.features?.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                            <Check className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Link href={`/solutions/${solution.slug}`}>
                        <span className="flex items-center">
                          Explore Solution
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                    <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white">
                      <img 
                        src={solution.image} 
                        alt={solution.title} 
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Our solutions are tailored to meet the unique challenges of various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Fintech</h3>
              <p className="text-gray-600 mb-4">
                Secure, scalable infrastructure for payment processing and financial services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                HIPAA-compliant solutions for healthcare providers and medical technology companies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">E-commerce</h3>
              <p className="text-gray-600 mb-4">
                High-performance, scalable platforms for online retail and digital marketplaces.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Media & Entertainment</h3>
              <p className="text-gray-600 mb-4">
                Content delivery and streaming solutions with global reach and low latency.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                IoT and edge computing solutions for modern manufacturing operations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">SaaS Companies</h3>
              <p className="text-gray-600 mb-4">
                Multi-tenant architectures and deployment pipelines for software companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default SolutionsPage;
