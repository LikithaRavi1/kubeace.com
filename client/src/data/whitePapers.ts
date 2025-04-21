export interface WhitePaper {
  id: number;
  title: string;
  description: string;
  pdfUrl: string;
  thumbnailUrl: string;
  datePublished: string;
  pages: number;
}

export const whitePapers: WhitePaper[] = [
  {
    id: 1,
    title: 'The Complete Guide to WebRTC Implementation',
    description: 'Learn about key considerations, best practices, and architecture patterns for implementing WebRTC in your applications.',
    pdfUrl: '/whitepapers/webrtc-implementation-guide.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    datePublished: 'April 12, 2023',
    pages: 24
  },
  {
    id: 2,
    title: 'Kubernetes Cost Optimization Strategies',
    description: 'Practical strategies to reduce Kubernetes costs while maintaining performance and reliability in production environments.',
    pdfUrl: '/whitepapers/kubernetes-cost-optimization.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    datePublished: 'March 18, 2023',
    pages: 32
  },
  {
    id: 3,
    title: 'Securing Microservices Architecture',
    description: 'A comprehensive approach to implementing security in microservices architectures with practical examples and patterns.',
    pdfUrl: '/whitepapers/securing-microservices.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    datePublished: 'January 25, 2023',
    pages: 28
  },
  {
    id: 4,
    title: 'CI/CD Pipeline Automation Best Practices',
    description: 'Learn how to design and implement efficient CI/CD pipelines that streamline your software delivery process.',
    pdfUrl: '/whitepapers/cicd-pipeline-automation.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    datePublished: 'November 10, 2022',
    pages: 22
  },
  {
    id: 5,
    title: 'Cloud-Native Transformation Roadmap',
    description: 'A step-by-step guide to planning and executing a successful cloud-native transformation in your organization.',
    pdfUrl: '/whitepapers/cloud-native-transformation.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    datePublished: 'October 5, 2022',
    pages: 36
  },
  {
    id: 6,
    title: 'AI Integration in Video Conferencing Applications',
    description: 'How to enhance video conferencing applications with AI capabilities for improved user experience and productivity.',
    pdfUrl: '/whitepapers/ai-video-conferencing.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    datePublished: 'May 2, 2023',
    pages: 30
  }
];