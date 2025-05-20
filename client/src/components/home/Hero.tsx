import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, Cloud, Server, Video } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute right-0 top-[20%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-[25%] w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute left-0 top-[40%] w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-800/50 text-blue-200 text-sm font-medium mb-2">
                Cloud Native Experts
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Kubernetes Expertise to Power Your Cloud Journey
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-xl">
                Enterprise-grade solutions for modern infrastructure management, optimization, and cloud-native transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 border-none" asChild>
                  <Link href="/contact">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800/30 font-bold bg-blue-700/50" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col space-y-6">
                  <Link href="/services/end-to-end-devops">
                    <div className="bg-gradient-to-br from-blue-800 to-indigo-800 p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                      <Server className="h-8 w-8 text-blue-200 mb-4" />
                      <h3 className="text-xl font-semibold text-white">DevOps</h3>
                      <p className="text-blue-200 mt-2">End-to-end DevOps transformation</p>
                    </div>
                  </Link>
                  <Link href="/services/livekit-consulting">
                    <div className="bg-gradient-to-br from-indigo-800 to-indigo-700 p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                      <Video className="h-8 w-8 text-indigo-200 mb-4" />
                      <h3 className="text-xl font-semibold text-white">LiveKit</h3>
                      <p className="text-indigo-200 mt-2">Professional LiveKit deployment & management</p>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col space-y-6">
                  <Link href="/services/kubernetes-managed-services">
                    <div className="bg-gradient-to-br from-blue-800 to-blue-700 p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                      <Database className="h-8 w-8 text-blue-200 mb-4" />
                      <h3 className="text-xl font-semibold text-white">Kubernetes</h3>
                      <p className="text-blue-200 mt-2">Enterprise-grade Kubernetes management</p>
                    </div>
                  </Link>
                  <Link href="/services/cloud-native-consulting">
                    <div className="bg-gradient-to-br from-violet-800 to-violet-700 p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                      <Cloud className="h-8 w-8 text-violet-200 mb-4" />
                      <h3 className="text-xl font-semibold text-white">Cloud Native</h3>
                      <p className="text-violet-200 mt-2">Harness the full potential of cloud platforms</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
