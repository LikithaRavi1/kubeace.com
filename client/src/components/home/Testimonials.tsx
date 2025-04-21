import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { Star } from 'lucide-react';
import { type Testimonial } from '@shared/schema';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
      <div className="flex items-center mb-6">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-primary-500 fill-primary-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-6">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full mr-4 object-cover" 
        />
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-gray-500 text-sm">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['/api/testimonials'],
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our customers about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array(2).fill(0).map((_, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Skeleton key={j} className="w-5 h-5 mr-1" />
                  ))}
                </div>
                <Skeleton className="h-32 w-full mb-6" />
                <div className="flex items-center">
                  <Skeleton className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <Skeleton className="h-5 w-32 mb-1" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Error loading testimonials. Please try again.
            </div>
          ) : (
            testimonials?.slice(0, 2).map((testimonial: Testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
