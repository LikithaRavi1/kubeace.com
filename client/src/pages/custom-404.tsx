import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/seo';

export default function Custom404() {
  return (
    <>
      <SEO
        title="Page Not Found | KubeAce"
        description="The page you are looking for does not exist. Let us help you find what you need."
        noindex={true} // We don't want search engines to index the 404 page
      />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-5">
        <div className="max-w-2xl text-center">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="w-full" asChild>
              <Link href="/">
                Return Home
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-medium mb-4">Looking for something specific?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div>
                <h4 className="font-medium mb-2">Services</h4>
                <ul className="space-y-1">
                  <li><Link href="/services/kubernetes-managed-services" className="text-primary hover:underline">Kubernetes Managed Services</Link></li>
                  <li><Link href="/services/webrtc-consulting" className="text-primary hover:underline">WebRTC Consulting</Link></li>
                  <li><Link href="/services/cloud-native-development" className="text-primary hover:underline">Cloud Native Development</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Solutions</h4>
                <ul className="space-y-1">
                  <li><Link href="/solutions/kubernetes-cost-optimization" className="text-primary hover:underline">Kubernetes Cost Optimization</Link></li>
                  <li><Link href="/solutions/cloud-migration" className="text-primary hover:underline">Cloud Migration</Link></li>
                  <li><Link href="/solutions/devops-automation" className="text-primary hover:underline">DevOps Automation</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Resources</h4>
                <ul className="space-y-1">
                  <li><Link href="/blog" className="text-primary hover:underline">Blog</Link></li>
                  <li><Link href="/case-studies" className="text-primary hover:underline">Case Studies</Link></li>
                  <li><Link href="/white-papers" className="text-primary hover:underline">White Papers</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}