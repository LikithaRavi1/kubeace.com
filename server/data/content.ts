import { services as allServices } from '../../client/src/data/services';
import { solutions } from '../../client/src/data/solutions';
import { caseStudies } from '../../client/src/data/caseStudies';
import { testimonials } from '../../client/src/data/testimonials';
import { blogPosts } from '../../client/src/data/blogPosts';

// Remove duplicate services by keeping only services with highest IDs (newer versions)
const uniqueServices = Object.values(
  allServices.reduce((acc, service) => {
    const slug = service.slug;
    // Keep only the service with the highest ID for each slug
    if (!acc[slug] || service.id > acc[slug].id) {
      acc[slug] = service;
    }
    return acc;
  }, {} as Record<string, typeof allServices[0]>)
);

export const servicesData = uniqueServices;
export const solutionsData = solutions;
export const caseStudiesData = caseStudies;
export const testimonialsData = testimonials;
export const blogPostsData = blogPosts;
