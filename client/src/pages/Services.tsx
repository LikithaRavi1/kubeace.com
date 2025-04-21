import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/ui/seo';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronRight, Server, Cloud, Shield, GitBranch, LayoutGrid, BarChart } from 'lucide-react';
// Remove CTA import
import { type Service } from '@shared/schema';

const iconMap: Record<string, React.ReactNode> = {
  server: <Server className="w-16 h-16" />,
  cloud: <Cloud className="w-16 h-16" />,
  shield: <Shield className="w-16 h-16" />,
  gitbranch: <GitBranch className="w-16 h-16" />,
  layoutgrid: <LayoutGrid className="w-16 h-16" />,
  barchart: <BarChart className="w-16 h-16" />
};

const ServicesPage: React.FC = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['/api/services'],
  });

  return (
    <>
      <SEO />
      
      {/* Hero with targeted keywords for SEO */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-blue-700 text-white text-sm font-medium py-1 px-3 rounded-full mb-4 inline-block">Expert Consulting Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kubernetes, LiveKit & DevOps Consulting Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              Comprehensive cloud-native solutions specialized in Kubernetes management, LiveKit implementation, and DevOps automation to optimize your infrastructure and accelerate innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
              <Link href="/services/kubernetes-managed-services" className="block">
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                  <h3 className="font-bold text-white">Kubernetes Consulting</h3>
                  <p className="text-sm text-gray-200">Expert container orchestration</p>
                </div>
              </Link>
              <Link href="/services/livekit-consulting" className="block">
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                  <h3 className="font-bold text-white">LiveKit Consulting</h3>
                  <p className="text-sm text-gray-200">WebRTC solutions specialist</p>
                </div>
              </Link>
              <Link href="/services/end-to-end-devops" className="block">
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                  <h3 className="font-bold text-white">DevOps Consulting</h3>
                  <p className="text-sm text-gray-200">CI/CD pipeline experts</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-lg border border-gray-200">
                  <Skeleton className="w-16 h-16 rounded-md flex-shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-20 w-full mb-6" />
                    <Skeleton className="h-10 w-32" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">
              Error loading services. Please try again.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
              {services?.map((service: Service) => (
                <div key={service.id} className="flex flex-col md:flex-row gap-6 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-all">
                  <div className="text-primary-600 flex-shrink-0">
                    {iconMap[service.icon] || <Server className="w-16 h-16" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button asChild>
                      <Link href={`/services/${service.slug}`}>
                        <span className="flex items-center">
                          Learn more
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600">
              We follow a proven methodology to deliver optimal results for your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Assessment</h3>
              <p className="text-gray-600">
                We thoroughly evaluate your current infrastructure, applications, and business requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-600">
                Our experts execute the tailored solution using best practices and industry standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor, manage, and optimize your systems for peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remove the CTA component from here */}
    </>
  );
};

export default ServicesPage;
