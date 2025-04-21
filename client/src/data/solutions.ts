import { type Solution } from '@shared/schema';

export const solutions: Solution[] = [
  {
    id: 5,
    title: 'Video Conferencing Agents & AI Integration',
    description: 'Build intelligent agents and AI assistants for video conferencing applications that enhance user experience and productivity.',
    image: '/images/video-conferencing-ai.png',
    features: [
      'AI-powered meeting assistants and transcription',
      'Real-time translation and subtitle agents',
      'Custom video filter and background effects',
      'Engagement analytics and behavior insights',
    ],
    slug: 'video-conferencing-agents',
  },
  {
    id: 1,
    title: 'WebRTC Consulting & Development',
    description: 'Expert guidance and development for real-time communication applications, video conferencing solutions, and interactive platforms.',
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: [
      'Custom video conferencing application development',
      'WebRTC implementation and optimization strategies',
      'Media server deployment and scaling (LiveKit, Jitsi, etc.)',
      'Real-time communication architecture design',
    ],
    slug: 'webrtc-consulting-development',
  },
  {
    id: 2,
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
    id: 3,
    title: 'Kubernetes Security Suite',
    description: 'End-to-end security solution for hardening your Kubernetes clusters and ensuring compliance with industry standards.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: [
      'Vulnerability scanning and remediation',
      'Policy enforcement and compliance reporting',
      'Runtime security monitoring and threat detection',
      'Security posture assessment and improvement',
    ],
    slug: 'kubernetes-security-suite',
  },
  {
    id: 4,
    title: 'Multicloud Management Platform',
    description: 'Unified management interface for applications running on multiple cloud providers and on-premise infrastructure.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: [
      'Single dashboard for all cloud resources',
      'Cost optimization and recommendations',
      'Standardized policies across environments',
      'Centralized identity and access management',
    ],
    slug: 'multicloud-management-platform',
  },
];
