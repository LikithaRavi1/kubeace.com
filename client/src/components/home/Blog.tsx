import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { ChevronRight, Calendar } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { type BlogPost } from '@shared/schema';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md hover:border-primary-200 transition-all">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-40 object-cover" 
      />
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/blog/${post.slug}`} className="text-gray-900 hover:text-primary-600">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">
          {post.description}
        </p>
        <Link href={`/blog/${post.slug}`} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
          Read more
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </article>
  );
};

const BlogSection: React.FC = () => {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our latest articles, guides, and insights on Kubernetes and cloud-native technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, i) => (
              <article key={i} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <Skeleton className="w-full h-40" />
                <div className="p-6">
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <Skeleton className="h-5 w-24" />
                </div>
              </article>
            ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Error loading blog posts. Please try again.
            </div>
          ) : (
            (posts || []).slice(0, 3).map((post: BlogPost) => (
              <BlogCard key={post.id} post={post} />
            ))
          )}
        </div>

        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/blog">
              <span className="flex items-center">
                View all articles
                <ChevronRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
