import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
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
        <Link href={`/case-studies/${caseStudy.slug}`} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
          Read case study
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

const CaseStudiesSection: React.FC = () => {
  const { data: caseStudies, isLoading, error } = useQuery<CaseStudy[]>({
    queryKey: ['/api/case-studies'],
  });

  return (
    <section id="customers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped organizations across industries achieve their cloud-native goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex gap-2 mb-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-14" />
                  </div>
                  <Skeleton className="h-5 w-28" />
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Error loading case studies. Please try again.
            </div>
          ) : (
            caseStudies?.slice(0, 3).map((caseStudy: CaseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
