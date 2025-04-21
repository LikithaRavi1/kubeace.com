import React from 'react';
import { SEO } from '@/components/ui/seo';
import { Button } from '@/components/ui/button';
import { FileText, Download, ChevronRight } from 'lucide-react';
import CTA from '@/components/home/CTA';
import { whitePapers, type WhitePaper } from '@/data/whitePapers';
import { Link } from 'wouter';

const WhitePaperCard: React.FC<{ whitePaper: WhitePaper }> = ({ whitePaper }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-200 transition-all">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={whitePaper.thumbnailUrl} 
          alt={whitePaper.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2 text-sm text-gray-500">
          <FileText className="h-4 w-4 mr-2" />
          <span>{whitePaper.pages} pages</span>
          <span className="mx-2">•</span>
          <span>{whitePaper.datePublished}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{whitePaper.title}</h3>
        <p className="text-gray-600 mb-4">
          {whitePaper.description}
        </p>
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => window.open(whitePaper.pdfUrl, '_blank')}
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
          <Button 
            variant="ghost" 
            className="text-primary-600 hover:text-primary-700"
            asChild
          >
            <Link href={`/white-papers/${whitePaper.id}`}>
              Learn More <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const WhitePapersPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="White Papers | KubeAce" 
        description="Download our detailed white papers on cloud-native technologies, WebRTC, Kubernetes, and more."
        canonicalUrl="https://kubeace.com/white-papers"
      />
      
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">White Papers</h1>
            <p className="text-xl text-gray-300">
              In-depth research and expert guidance on cloud-native technologies,
              WebRTC implementation, Kubernetes, and more.
            </p>
          </div>
        </div>
      </section>
      
      {/* White Papers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((whitePaper) => (
              <WhitePaperCard key={whitePaper.id} whitePaper={whitePaper} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Request Custom Research */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Custom Research?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team can prepare specialized research and white papers tailored 
              to your organization's specific needs and challenges.
            </p>
            <Button size="lg" asChild className="px-8">
              <Link href="/contact">
                Contact Us for Custom Research
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
};

export default WhitePapersPage;