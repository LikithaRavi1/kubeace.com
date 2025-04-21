import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { type Solution } from '@shared/schema';

const SolutionSection: React.FC = () => {
  const { data: solutions, isLoading, error } = useQuery({
    queryKey: ['/api/solutions'],
  });

  if (isLoading) {
    return (
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-3/4 max-w-md mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-24 w-full mb-6" />
              <div className="space-y-3 mb-8">
                {Array(4).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-full" />
                ))}
              </div>
              <Skeleton className="h-10 w-32" />
            </div>
            <div className="order-1 lg:order-2">
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-500">Error loading solutions. Please try again.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored Kubernetes and cloud-native solutions designed for your specific industry and business needs.
          </p>
        </div>

        {solutions?.map((solution: Solution, index: number) => (
          <div key={solution.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-md ${index !== solutions.length - 1 ? 'mb-16' : ''}`}>
            <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
              <h3 className="text-3xl font-bold mb-4 text-blue-800">{solution.title}</h3>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-700 mb-6 text-lg">
                {solution.description}
              </p>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Key Features:</h4>
              <ul className="space-y-3 mb-8">
                {solution.features.map((feature, i) => (
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
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
