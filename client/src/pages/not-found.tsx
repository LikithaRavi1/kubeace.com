import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  const [location] = useLocation();
  
  // Check if this is a service detail page or other specific page types
  const isServiceDetailPage = location.startsWith('/services/');
  const isBlogDetailPage = location.startsWith('/blog/');
  const isCaseStudyDetailPage = location.startsWith('/case-studies/');
  
  // Determine back link and text based on current location
  let backLink = '/';
  let backText = 'Home';
  let backIcon = <Home className="h-4 w-4" />;
  
  if (isServiceDetailPage) {
    backLink = '/services';
    backText = 'Services';
    backIcon = <ArrowLeft className="h-4 w-4" />;
  } else if (isBlogDetailPage) {
    backLink = '/blog';
    backText = 'Blog';
    backIcon = <ArrowLeft className="h-4 w-4" />;
  } else if (isCaseStudyDetailPage) {
    backLink = '/case-studies';
    backText = 'Case Studies';
    backIcon = <ArrowLeft className="h-4 w-4" />;
  }
  
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <div className="text-center max-w-xl px-4">
        <div className="mx-auto w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="h-10 w-10 text-red-500" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4">404</h1>
        
        <h2 className="text-2xl font-semibold mb-6">
          {isServiceDetailPage ? 'Service Not Found' : 
           isBlogDetailPage ? 'Blog Post Not Found' :
           isCaseStudyDetailPage ? 'Case Study Not Found' : 
           'Page Not Found'}
        </h2>
        
        <p className="text-gray-600 mb-8">
          {isServiceDetailPage 
            ? "The service you're looking for doesn't exist or has been moved. Please check our services page for available options."
            : isBlogDetailPage
              ? "The blog post you're looking for doesn't exist or has been moved. Please check our blog page for available articles."
              : isCaseStudyDetailPage
                ? "The case study you're looking for doesn't exist or has been moved. Please check our case studies page for available content."
                : "The page you're looking for doesn't exist or has been moved."}
        </p>
        
        <div className="flex justify-center gap-4">
          <Link href={backLink}>
            <Button variant="outline" className="flex items-center gap-2">
              {backIcon}
              Back to {backText}
            </Button>
          </Link>
          
          {backLink !== '/' && (
            <Link href="/">
              <Button variant="default" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
