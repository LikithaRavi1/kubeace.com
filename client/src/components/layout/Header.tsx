import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X, Server, Cloud, Lock, GitBranch, LayoutGrid, BarChart, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';
import kubeaceLogo from '@/assets/KubeAce-logo-new.png';

// Enhanced service listing with descriptions and keywords for better SEO
const services = [
  { 
    name: 'Kubernetes Managed Services', 
    description: 'Expert Kubernetes consulting and management',
    href: '/services/kubernetes-managed-services', 
    icon: <Server className="h-5 w-5" /> 
  },
  { 
    name: 'LiveKit Server Deployment', 
    description: 'End-to-end LiveKit server setup and optimization',
    href: '/services/livekit-consulting', 
    icon: <Cloud className="h-5 w-5" /> 
  },
  { 
    name: 'End-to-End DevOps', 
    description: 'Complete DevOps consulting and implementation',
    href: '/services/end-to-end-devops', 
    icon: <GitBranch className="h-5 w-5" /> 
  },
  { 
    name: 'Managed SRE', 
    description: 'Site reliability engineering for critical systems',
    href: '/services/managed-sre', 
    icon: <BarChart className="h-5 w-5" /> 
  },
  { 
    name: 'Video Conferencing Framework', 
    description: 'Custom LiveKit and WebRTC solutions',
    href: '/services/video-conferencing-framework', 
    icon: <LayoutGrid className="h-5 w-5" /> 
  },
  { 
    name: 'WebRTC Framework Analysis', 
    description: 'Expert WebRTC consulting and optimization',
    href: '/services/video-conferencing-framework', 
    icon: <Lock className="h-5 w-5" /> 
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location === '/') return true;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full transition-all duration-300',
      scrolled 
        ? 'bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg' 
        : 'bg-gradient-to-r from-blue-900 to-indigo-900'
    )}>
      {/* Top bar with contact info */}
      <div className="hidden lg:block bg-blue-950 text-blue-100 py-1">
        <div className="container mx-auto px-4 flex justify-end items-center text-sm">
          <div className="flex space-x-4">
            <a href="mailto:info@kubeace.com" className="hover:text-white transition-colors">
              info@kubeace.com
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/images/KubeAce-logo-new.png" 
              alt="KubeAce Logo" 
              className="h-12 lg:h-14 object-contain" 
              style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))', background: 'transparent' }}
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800/50 focus:outline-none md:hidden"
            aria-label="Main menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="text-white space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={cn(
                      "flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive('/') 
                        ? 'bg-white/10 text-white' 
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                    )}>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-white/10",
                    isActive('/services') 
                      ? 'bg-white/10 text-white' 
                      : 'text-blue-100 hover:text-white'
                  )}>
                    <span className="flex items-center">
                      Services
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-lg shadow-lg">
                      {services.map((service) => (
                        <li key={service.name} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="flex select-none flex-col gap-1 rounded-md p-3 hover:bg-blue-50 transition-colors"
                            >
                              <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                  <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">{service.icon}</div>
                                  <div className="text-sm font-medium text-gray-800">{service.name}</div>
                                </div>
                                <div className="mt-1 text-xs text-gray-500 pl-9">{service.description}</div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/solutions" className={cn(
                      "flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive('/solutions') 
                        ? 'bg-white/10 text-white' 
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                    )}>
                      Solutions
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/case-studies" className={cn(
                      "flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive('/case-studies') 
                        ? 'bg-white/10 text-white' 
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                    )}>
                      Case Studies
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/blog" className={cn(
                      "flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive('/blog') 
                        ? 'bg-white/10 text-white' 
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                    )}>
                      Blog
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/white-papers" className={cn(
                      "flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive('/white-papers') 
                        ? 'bg-white/10 text-white' 
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                    )}>
                      White Papers
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button 
              asChild 
              className="ml-4 bg-white hover:bg-blue-50 text-blue-800 hover:text-blue-900 border-0"
              size="sm"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 border-t border-blue-800/50">
            <Link href="/" className={cn(
              "block px-3 py-2 rounded-md font-medium text-sm",
              isActive('/') ? 'bg-white/10 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'
            )}>
              Home
            </Link>

            <Link href="/services" className={cn(
              "block px-3 py-2 rounded-md font-medium text-sm",
              isActive('/services') ? 'bg-white/10 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'
            )}>
              Services
            </Link>

            <Link href="/solutions" className={cn(
              "block px-3 py-2 rounded-md font-medium text-sm",
              isActive('/solutions') ? 'bg-white/10 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'
            )}>
              Solutions
            </Link>

            <Link href="/case-studies" className={cn(
              "block px-3 py-2 rounded-md font-medium text-sm",
              isActive('/case-studies') ? 'bg-white/10 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'
            )}>
              Case Studies
            </Link>

            <Link href="/blog" className={cn(
              "block px-3 py-2 rounded-md font-medium text-sm",
              isActive('/blog') ? 'bg-white/10 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'
            )}>
              Blog
            </Link>
            
            <Link href="/white-papers" className={cn(
              "block px-3 py-2 rounded-md font-medium text-sm",
              isActive('/white-papers') ? 'bg-white/10 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'
            )}>
              White Papers
            </Link>

            <Button asChild className="w-full mt-4 bg-white hover:bg-blue-50 text-blue-800 hover:text-blue-900 border-0">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;