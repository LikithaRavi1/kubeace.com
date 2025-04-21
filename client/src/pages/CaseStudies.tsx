import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/ui/seo';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
// Remove CTA import
import { type CaseStudy } from '@shared/schema';

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md hover:border-primary-200 transition-all">
      <img 
        src={caseStudy.image} 
        alt={caseStudy.title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <span className="text-xs font-semibold text-secondary-600 uppercase tracking-wider">{caseStudy.industry}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-4">
          {caseStudy.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
              {tag}
            </Badge>
          ))}
        </div>
        <a 
          href={`/case-studies/${caseStudy.slug}`} 
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `/case-studies/${caseStudy.slug}`;
          }}
        >
          Read case study
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

const CaseStudiesPage: React.FC = () => {
  const { data: caseStudies, isLoading, error } = useQuery<CaseStudy[]>({
    queryKey: ['/api/case-studies'],
  });

  return (
    <>
      <SEO 
        title="Case Studies" 
        description="See how we've helped organizations across industries achieve their cloud-native goals." 
        canonicalUrl="https://kubeace.com/case-studies" 
      />
      
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-300">
              See how we've helped organizations across industries achieve their cloud-native goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                  <Skeleton className="w-full h-48" />
                  <div className="p-6">
                    <Skeleton className="h-4 w-20 mb-2" />
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-16 w-full mb-4" />
                    <div className="flex gap-2 mb-4">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-14" />
                    </div>
                    <Skeleton className="h-5 w-28" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">
              Error loading case studies. Please try again.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies?.map((caseStudy: CaseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Across Industries</h2>
            <p className="text-xl text-gray-600">
              We've helped organizations of all sizes and industries achieve their cloud-native goals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
              <p className="text-gray-600">Fintech Companies</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
              <p className="text-gray-600">Healthcare Organizations</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">40+</div>
              <p className="text-gray-600">E-commerce Businesses</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <p className="text-gray-600">SaaS Providers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Remove the CTA component from here */}
    </>
  );
};

export default CaseStudiesPage;
