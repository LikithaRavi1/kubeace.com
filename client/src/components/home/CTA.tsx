import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to transform your infrastructure?</h2>
            <p className="text-xl text-gray-200 mb-6">
              Start your cloud-native journey with KubeAce's expert team. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-4 text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <Link href="/services" className="hover:text-white">
                  Browse our services
                </Link>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <Link href="/case-studies" className="hover:text-white">
                  View case studies
                </Link>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <Link href="/white-papers" className="hover:text-white">
                  Download white papers
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 text-center lg:text-right">
            <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 border-2 border-white shadow-lg font-bold transition-all duration-300 scale-100 hover:scale-105" asChild>
              <Link href="/contact">
                <span className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </Button>
            <div className="mt-4 text-gray-300 text-sm">
              Or <Link href="/solutions" className="underline hover:text-white">explore our solutions</Link> to learn more
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
