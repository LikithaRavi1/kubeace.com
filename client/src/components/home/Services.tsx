import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { ChevronRight, ArrowRight, Server, Cloud, Shield, GitBranch, LayoutGrid, BarChart, Code, Cpu, Network, LineChart, Lock, Database } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { type Service } from '@shared/schema';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, React.ReactNode> = {
  server: <Server className="w-8 h-8" />,
  cloud: <Cloud className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  gitbranch: <GitBranch className="w-8 h-8" />,
  layoutgrid: <LayoutGrid className="w-8 h-8" />,
  barchart: <BarChart className="w-8 h-8" />,
  code: <Code className="w-8 h-8" />,
  cpu: <Cpu className="w-8 h-8" />,
  network: <Network className="w-8 h-8" />,
  linechart: <LineChart className="w-8 h-8" />,
  lock: <Lock className="w-8 h-8" />,
  database: <Database className="w-8 h-8" />
};

const colors = [
  { bg: "bg-blue-50", text: "text-blue-600", hover: "hover:bg-blue-100", icon: "bg-blue-100" },
  { bg: "bg-indigo-50", text: "text-indigo-600", hover: "hover:bg-indigo-100", icon: "bg-indigo-100" },
  { bg: "bg-purple-50", text: "text-purple-600", hover: "hover:bg-purple-100", icon: "bg-purple-100" },
  { bg: "bg-teal-50", text: "text-teal-600", hover: "hover:bg-teal-100", icon: "bg-teal-100" },
  { bg: "bg-cyan-50", text: "text-cyan-600", hover: "hover:bg-cyan-100", icon: "bg-cyan-100" },
  { bg: "bg-sky-50", text: "text-sky-600", hover: "hover:bg-sky-100", icon: "bg-sky-100" }
];

// Specific features listed for each service
const serviceFeatures: Record<string, string[]> = {
  'kubernetes-consulting': [
    'Full cluster management & consulting',
    '24/7 monitoring & support',
    'Performance optimization',
    'Security hardening & compliance',
    'Migration & upgrade assistance'
  ],
  'livekit-consulting': [
    'Complete infrastructure planning',
    'Production deployment & management',
    'Security & scaling optimization',
    'Integration support',
    'Ongoing maintenance'
  ],
  'end-to-end-devops': [
    'CI/CD pipeline implementation',
    'Infrastructure as Code setup',
    'Containerization & orchestration',
    'Monitoring & observability'
  ],
  'managed-sre': [
    'SLO definition & monitoring',
    'Incident response & management',
    'Reliability measurement',
    'Performance optimization'
  ],
  'video-conferencing-framework': [
    'WebRTC infrastructure setup',
    'End-to-end encryption',
    'Custom branding & UI options',
    'Analytics & quality monitoring'
  ],
  'video-conferencing-framework': [
    'Framework evaluation & testing',
    'Architecture recommendations',
    'Performance benchmarking',
    'Cost projection & planning'
  ]
};

const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
  const colorScheme = colors[index % colors.length];
  const features = serviceFeatures[service.slug] || [
    'Custom service configuration',
    'Expert implementation',
    'Ongoing maintenance & support',
    'Performance optimization'
  ];
  
  return (
    <div className={cn(
      "rounded-xl p-6 transition-all duration-300 border border-gray-100 h-full flex flex-col group",
      colorScheme.bg,
      colorScheme.hover
    )}>
      <div className={cn("p-3 rounded-lg inline-block mb-4", colorScheme.icon)}>
        <div className={colorScheme.text}>
          {iconMap[service.icon] || <Server className="w-8 h-8" />}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-900">{service.title}</h3>
      
      <p className="text-gray-600 mb-5 group-hover:text-gray-700">
        {service.description}
      </p>
      
      <div className="mb-6 flex-grow">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <div className={cn("mr-2 mt-1", colorScheme.text)}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        variant="outline" 
        className={cn(
          "w-full border justify-between", 
          colorScheme.text,
          "hover:bg-blue-600 hover:text-white hover:border-blue-600",  // Changed hover state to blue
          "transition-all duration-300"  // Added smooth transition
        )}
        asChild
      >
        <Link href={`/services/${service.slug}`}>
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </Button>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['/api/services'],
  });

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Enterprise-grade Kubernetes Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive cloud-native services to optimize your infrastructure and accelerate innovation.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link href="/services">
                <Button variant="outline" className="border-blue-400 text-blue-600 hover:bg-blue-50">
                  View all services
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="absolute right-0 -top-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-70 -z-10"></div>
          <div className="absolute left-0 -bottom-10 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-70 -z-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                <Skeleton className="h-7 w-3/4 mb-3" />
                <Skeleton className="h-16 w-full mb-4" />
                <div className="space-y-2 mb-4">
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Error loading services. Please try again.
            </div>
          ) : (
            Array.isArray(services) && services.map((service: Service, index: number) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
