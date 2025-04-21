import React from 'react';
import { SEO } from '@/components/ui/seo';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, ArrowLeft } from 'lucide-react';
import { whitePapers, type WhitePaper } from '@/data/whitePapers';
import { Link, useParams } from 'wouter';

const WhitePaperDetail: React.FC = () => {
  const { id } = useParams();
  const whitePaperId = parseInt(id || '0', 10);
  
  const whitePaper = whitePapers.find(wp => wp.id === whitePaperId);
  
  if (!whitePaper) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">White Paper Not Found</h1>
        <p className="text-gray-600 mb-6">The white paper you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/white-papers">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to White Papers
          </Link>
        </Button>
      </div>
    );
  }
  
  return (
    <>
      <SEO />
      {/* Hero section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <Button 
                variant="outline" 
                className="mb-6 bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                asChild
              >
                <Link href="/white-papers">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to White Papers
                </Link>
              </Button>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{whitePaper.title}</h1>
              <div className="flex items-center text-sm mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{whitePaper.datePublished}</span>
                <span className="mx-2">•</span>
                <FileText className="h-4 w-4 mr-2" />
                <span>{whitePaper.pages} pages</span>
              </div>
              <p className="text-lg text-gray-300 mb-8">
                {whitePaper.description}
              </p>
              <Button 
                className="px-6 py-3"
                onClick={() => window.open(whitePaper.pdfUrl, '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download White Paper
              </Button>
            </div>
            <div className="md:w-2/5">
              <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src={whitePaper.thumbnailUrl} 
                  alt={whitePaper.title} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Preview section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Inside This White Paper</h2>
            
            <div className="bg-gray-50 rounded-lg p-8 mb-10 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Key concepts and architectural patterns relevant to the topic</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Best practices based on real-world implementations</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Common challenges and how to overcome them</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Actionable strategies that you can implement immediately</p>
                </li>
              </ul>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                This comprehensive white paper provides a deep dive into {whitePaper.title.toLowerCase()}. 
                Whether you're new to the concept or looking to enhance your existing approach, 
                this document offers valuable insights and practical guidance.
              </p>
              
              <p>
                Our team of experts has compiled years of experience into this concise guide, 
                covering everything from fundamental principles to advanced strategies. 
                The document includes real-world case studies, code examples where appropriate, 
                and a roadmap for implementation.
              </p>
              
              <blockquote>
                <p>
                  "This white paper has been an invaluable resource for our team as we navigated 
                  the complexities of this technology. The clear explanations and practical advice 
                  saved us countless hours of research and experimentation."
                </p>
                <cite>— A KubeAce Client</cite>
              </blockquote>
              
              <h3>Ready to dive in?</h3>
              <p>
                Download the complete white paper now to access all the insights, strategies, 
                and implementation guidelines that will help you succeed with {whitePaper.title.split(' ').slice(-2).join(' ')}.
              </p>
            </div>
            
            <div className="mt-10 flex justify-center">
              <Button 
                size="lg"
                onClick={() => window.open(whitePaper.pdfUrl, '_blank')}
                className="px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                Download the White Paper
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Services section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Expert Guidance?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of specialists can help you implement the concepts covered 
              in this white paper, tailored to your organization's specific needs.
            </p>
            <Button 
              size="lg"
              asChild
              className="px-8"
            >
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Remove the CTA component from here */}
    </>
  );
};

export default WhitePaperDetail;