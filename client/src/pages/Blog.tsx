import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/ui/seo';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
// Remove CTA import
import BlogCard from '@/components/blog/BlogCard';

// Define the BlogPost interface as we need it for type safety
interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: Date;
  author: string;
  content: string;
  slug: string;
  tags: string[];
}

const BlogPage: React.FC = () => {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  return (
    <>
      <SEO 
        title="Kubernetes & LiveKit Consulting Blog | Cloud-Native Resources" 
        description="Expert insights on Kubernetes consulting, LiveKit implementation, and DevOps best practices. Stay updated with our technical guides and cloud-native resources." 
        canonicalPath="/blog" 
        type="website"
        pageType="blog"
        keywords="Kubernetes blog, LiveKit tutorials, DevOps best practices, cloud-native resources, WebRTC guides, Kubernetes consulting tips"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "KubeAce Technical Blog",
          "description": "Expert insights on Kubernetes, LiveKit, and cloud-native technologies",
          "url": "https://kubeace.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "KubeAce",
            "logo": {
              "@type": "ImageObject",
              "url": "https://kubeace.com/images/KubeAce-logo.png"
            }
          }
        }}
      />
      
      {/* Hero with SEO-focused headings */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-blue-700 text-white text-sm font-medium py-1 px-3 rounded-full mb-4 inline-block">Expert Insights</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kubernetes, LiveKit & DevOps Consulting Blog</h1>
            <p className="text-xl text-gray-100 mb-6">
              Expert guides, technical tutorials, and industry insights on Kubernetes management, LiveKit implementation, and DevOps best practices.
            </p>
            <div className="flex flex-wrap justify-center mt-8 gap-3">
              <span className="bg-white/10 text-white text-sm font-medium py-1 px-3 rounded-full">#KubernetesConsulting</span>
              <span className="bg-white/10 text-white text-sm font-medium py-1 px-3 rounded-full">#LiveKitTutorials</span>
              <span className="bg-white/10 text-white text-sm font-medium py-1 px-3 rounded-full">#DevOpsAutomation</span>
              <span className="bg-white/10 text-white text-sm font-medium py-1 px-3 rounded-full">#CloudNative</span>
              <span className="bg-white/10 text-white text-sm font-medium py-1 px-3 rounded-full">#WebRTCDevelopment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts with SEO focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Latest Kubernetes, LiveKit & DevOps Articles</h2>
            <p className="text-lg text-gray-600">
              Stay updated with expert insights, technical tutorials, and best practices for cloud-native technologies
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(9).fill(0).map((_, i) => (
                <article key={i} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                  <Skeleton className="w-full h-48" />
                  <div className="p-6">
                    <Skeleton className="h-4 w-32 mb-2" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-16 w-full mb-4" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                </article>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">
              Error loading blog posts. Please try again.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.isArray(posts) && posts.length > 0 && posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Expert Resources - Focused on target keywords */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Consulting Resources</h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive resources for Kubernetes, LiveKit, and DevOps implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-3">Kubernetes Consulting</h3>
              <p className="text-gray-600 mb-4">
                Best practices, case studies, and implementation guides for enterprise Kubernetes deployments.
              </p>
              <Link href="/services/kubernetes-managed-services" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                Explore Kubernetes Services
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-3">LiveKit Consulting</h3>
              <p className="text-gray-600 mb-4">
                Implementation guides, WebRTC integration tips, and real-time communication solutions.
              </p>
              <Link href="/services/livekit-consulting" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                Explore LiveKit Services
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-3">DevOps Consulting</h3>
              <p className="text-gray-600 mb-4">
                CI/CD implementation, automation strategies, and DevOps transformation.
              </p>
              <Link href="/services/end-to-end-devops" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                Explore DevOps Services
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">White Papers & Technical Guides</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Download comprehensive resources, implementation guides, and industry research on cloud-native technology.
            </p>
            <Link href="/white-papers" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Browse White Papers
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Remove CTA component */}
    </>
  );
};

export default BlogPage;
