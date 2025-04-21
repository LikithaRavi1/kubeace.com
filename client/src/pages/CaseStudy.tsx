import React from 'react';
import { useRoute } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/ui/seo';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { type CaseStudy } from '@shared/schema';
import CTA from '@/components/home/CTA';

const CaseStudyPage: React.FC = () => {
  const [, params] = useRoute('/case-studies/:slug');
  const slug = params?.slug || '';

  const { data: caseStudy, isLoading, error } = useQuery<CaseStudy>({
    queryKey: [`/api/case-studies/${slug}`],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-3/4 mb-2" />
          <Skeleton className="h-5 w-32 mb-6" />
          <Skeleton className="w-full h-96 rounded-lg mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2 space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-2/3" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
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

  if (error || !caseStudy) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">Error loading case study. Please try again.</p>
        <Link href="/case-studies" className="text-primary-600 hover:text-primary-700 mt-4 inline-block">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={caseStudy.title} 
        description={caseStudy.description} 
        canonicalUrl={`https://kubeace.com/case-studies/${caseStudy.slug}`} 
        ogImage={caseStudy.image}
      />
      
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{caseStudy.title}</h1>
          <p className="text-lg text-secondary-600 mb-6">{caseStudy.industry}</p>
          
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title} 
            className="w-full rounded-lg mb-8 object-cover h-96" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 mb-6">{caseStudy.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudy.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">Project Highlights</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Industry: {caseStudy.industry}</li>
                <li>Technologies: {caseStudy.tags.join(', ')}</li>
                <li>Time Frame: 12 weeks</li>
                <li>ROI: 300% within first year</li>
              </ul>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/case-studies" 
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/case-studies';
              }}
            >
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
              Back to Case Studies
            </a>
          </div>
        </article>
      </div>
      
      <CTA />
    </>
  );
};

export default CaseStudyPage;
