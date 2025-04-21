import React from 'react';
import { Link } from 'wouter';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin 
} from 'lucide-react';
import kubeaceLogo from '@/assets/KubeAce-logo-new.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Link href="/">
                <img 
                  src={kubeaceLogo} 
                  alt="KubeAce Logo" 
                  className="h-12 object-contain" 
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
                />
              </Link>
            </div>
            <p className="mb-6">
              Enterprise-grade Kubernetes solutions and cloud-native expertise to accelerate your digital transformation.
            </p>
            <div className="flex flex-col space-y-2 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com/kubeace" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/kubeace" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/kubeace" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/company/kubeace" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/kubernetes-managed-services" className="hover:text-white transition-colors">Kubernetes Managed Services</Link>
              </li>
              <li>
                <Link href="/services/livekit-consulting" className="hover:text-white transition-colors">LiveKit Server Deployment</Link>
              </li>
              <li>
                <Link href="/services/end-to-end-devops" className="hover:text-white transition-colors">End-to-End DevOps</Link>
              </li>
              <li>
                <Link href="/services/managed-sre" className="hover:text-white transition-colors">Managed SRE</Link>
              </li>
              <li>
                <Link href="/services/video-conferencing-framework" className="hover:text-white transition-colors">Video Conferencing Framework</Link>
              </li>
              <li>
                <Link href="/services/video-conferencing-framework" className="hover:text-white transition-colors">WebRTC Framework Analysis</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="/white-papers" className="hover:text-white transition-colors">White Papers</Link>
              </li>
              <li>
                <Link href="/resources/open-source" className="hover:text-white transition-colors">Open Source Projects</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5" />
                <span>info@kubeace.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5" />
                <span>BEML 7th Stage<br />Bangalore 560059</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} KubeAce Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
