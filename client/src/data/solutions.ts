import { type Solution } from '@shared/schema';

export const solutions: Solution[] = [
  {
    id: 1,
    title: 'Cloud-Native Transformation',
    description: 'A comprehensive framework to modernize your applications and infrastructure for the cloud-native era.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: [
      'Legacy application assessment and modernization',
      'Microservices architecture design and implementation',
      'DevOps culture and practice implementation',
      'Cloud-native skills development and training',
    ],
    slug: 'cloud-native-transformation',
  },
  {
    id: 2,
    title: 'Kubernetes Security Suite',
    description: 'End-to-end security solution for hardening your Kubernetes clusters and ensuring compliance with industry standards.',
    image: 'https://zesty.co/wp-content/uploads/2022/11/Kubernetes-security-101.jpg',
    features: [
      'Vulnerability scanning and remediation',
      'Policy enforcement and compliance reporting',
      'Runtime security monitoring and threat detection',
      'Security posture assessment and improvement',
    ],
    slug: 'kubernetes-security-suite',
  },
  {
    id: 5,
    title: 'Video Conferencing Agents & AI Integration',
    description: 'Build intelligent agents and AI assistants for video conferencing applications that enhance user experience and productivity.',
    image: 'https://plus.unsplash.com/premium_vector-1732197718490-0f6daa32769f?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'AI-powered meeting assistants and transcription',
      'Real-time translation and subtitle agents',
      'Custom video filter and background effects',
      'Engagement analytics and behavior insights',
    ],
    slug: 'video-conferencing-agents',
  },
  {
    id: 4,
    title: 'WebRTC Consulting & Development',
    description: 'Expert guidance and development for real-time communication applications, video conferencing solutions, and interactive platforms.',
    image: '/images/Webrtc-consulting.png',
    features: [
      'Custom video conferencing application development',
      'WebRTC implementation and optimization strategies',
      'Media server deployment and scaling (LiveKit, Jitsi, etc.)',
      'Real-time communication architecture design',
    ],
    slug: 'webrtc-consulting-development',
  },
  {
    id: 3,
    title: 'Multicloud Management Platform',
    description: 'Unified management interface for applications running on multiple cloud providers and on-premise infrastructure.',
    image: 'https://www.parallels.com/blogs/ras/app/uploads/2019/08/multi-cloud-management.jpg',
    features: [
      'Single dashboard for all cloud resources',
      'Cost optimization and recommendations',
      'Standardized policies across environments',
      'Centralized identity and access management',
    ],
    slug: 'multicloud-management-platform',
  },
];
