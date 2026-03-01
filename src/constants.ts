import { NavItem, Stat, Solution, Product, Service, CaseStudy, TeamMember } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const STATS: Stat[] = [
  { label: 'Global Projects', value: '500+' },
  { label: 'Expert Engineers', value: '150+' },
  { label: 'SLA Uptime', value: '99.9%' },
  { label: 'Secure Endpoints', value: '10k+' },
  { label: 'System Integrations', value: '1.2k' },
  { label: 'Pro Support', value: '24/7' },
];

export const FEATURED_SOLUTIONS: Solution[] = [
  {
    id: 'enterprise-management',
    title: 'Enterprise Management Platforms',
    category: 'Enterprise',
    description: 'Unified operational platforms including VMS, TAMS, and PMS to streamline identity, access, and personnel workflows.',
    price: '',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
    cta: 'View Details'
  },
  {
    id: 'ai-automation',
    title: 'AI-Powered Business Automation',
    category: 'Software',
    description: 'Intelligent AI chatbots and automated workflows designed to enhance internal support and customer service efficiency.',
    price: '',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
    cta: 'Explore AI'
  },
  {
    id: 'payment-gateway',
    title: 'Secure Payment & Digital Solutions',
    category: 'Financial',
    description: 'Scalable payment integration for kiosks and web platforms, designed for reliability, compliance, and seamless UX.',
    price: '',
    image: 'https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&q=80',
    cta: 'View Guide'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'cctv-surveillance',
    title: 'CCTV & Surveillance Systems',
    category: 'Security',
    performanceTier: 'Enterprise',
    availability: 'Instant',
    description: 'End-to-end surveillance solutions including installation, configuration, troubleshooting, and preventive maintenance. Our systems deliver high-definition monitoring, remote access, analytics, and secure storage for complete situational awareness.',
    price: 'Custom',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80',
    cta: 'Learn More',
    specs: [
      { label: 'HD Monitoring', value: '4K/8K', icon: 'Video' },
      { label: 'Remote Access', value: '24/7', icon: 'Globe' },
      { label: 'Night Vision', value: 'IR/Thermal', icon: 'Eye' },
      { label: 'Storage', value: 'Edge/Cloud', icon: 'Database' }
    ]
  },
  {
    id: 'enterprise-management',
    title: 'Enterprise Management Systems',
    category: 'Enterprise',
    performanceTier: 'Enterprise',
    availability: 'Instant',
    description: 'We develop and deploy intelligent operational platforms including Visitor Management System (VMS), Time Attendance Management System (TAMS), and People Management System (PMS). These systems streamline identity, access, attendance, and personnel workflows across facilities and organizations.',
    price: 'Custom',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    cta: 'Request Demo',
    specs: [
      { label: 'VMS/TAMS/PMS', value: 'Integrated', icon: 'Layers' },
      { label: 'Identity Verification', value: 'Automated', icon: 'UserCheck' },
      { label: 'Access Control', value: 'Integrated', icon: 'Lock' },
      { label: 'Personnel Workflow', value: 'Streamlined', icon: 'Users' }
    ]
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway Systems',
    category: 'Financial',
    performanceTier: 'Enterprise',
    availability: 'Instant',
    description: 'Secure and scalable payment integration solutions enabling digital transactions across kiosks, web platforms, and enterprise systems. Designed for reliability, compliance, and seamless user experience.',
    price: 'Custom',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    cta: 'View Guide',
    specs: [
      { label: 'Security Compliance', value: 'PCI-DSS', icon: 'Shield' },
      { label: 'Multi-platform', value: 'Universal', icon: 'Layers' },
      { label: 'Transaction Speed', value: '< 200ms', icon: 'Zap' },
      { label: 'Fraud Detection', value: 'AI-Powered', icon: 'ShieldCheck' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Website Development',
    description: 'Professional corporate and enterprise website design and development focused on performance, security, and user experience. From corporate profiles to system portals and dashboards.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    features: ['Corporate Profiles', 'System Portals', 'Enterprise Dashboards', 'Performance Optimized', 'Security First', 'High Availability']
  },
  {
    title: 'Dashboards & Analytics',
    description: 'Custom business intelligence dashboards that transform operational data into actionable insights. Real-time monitoring, reporting, and visualization tailored to management and operational teams.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80',
    features: ['Real-time Monitoring', 'Custom Reporting', 'Actionable Insights', 'Operational Visualization', 'Predictive Analytics', 'Multi-source Data']
  },
  {
    title: 'AI Chatbot Solutions',
    description: 'Intelligent AI chatbots customized for business workflows including customer service, internal support, and automated interactions. Integrates with messaging platforms, websites, and enterprise systems.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80',
    features: ['Workflow Automation', 'Internal Support', '24/7 Service', 'Multi-platform Integration', 'Deep Learning', 'Natural Language Processing']
  },
  {
    title: 'Platform Integration',
    description: 'Advanced integration services connecting security systems, enterprise software, databases, and third-party platforms into a unified ecosystem. We specialize in access control, surveillance, biometrics, and enterprise application integration.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80',
    features: ['Access Control', 'Surveillance Integration', 'Biometrics Support', 'Database Unification', 'API Orchestration', 'Zero-Silo Operations']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Scaling Global Payments with Zero Latency',
    category: 'FinTech',
    readTime: '8 min read',
    description: 'How NeoBank integrated Cahaya Xcel to handle 50k transactions per second across 12 regions.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
  },
  {
    title: 'Predictive Maintenance via Edge Computing',
    category: 'Manufacturing',
    readTime: '12 min read',
    description: 'Reducing downtime by 40% through real-time telemetry processing at the manufacturing edge.',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80'
  },
  {
    title: 'HIPAA Compliant Data Lake Architecture',
    category: 'HealthTech',
    readTime: '6 min read',
    description: 'Securing 5M patient records with end-to-end encryption and automated compliance auditing.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
  }
];

export const TEAM: TeamMember[] = [
  { name: 'Sarah Mitchell', role: 'CEO & Co-Founder', icon: 'Layout', pattern: 'radial' },
  { name: 'James Chen', role: 'CTO & Co-Founder', icon: 'Terminal', pattern: 'grid' },
  { name: 'Aisha Rahman', role: 'VP Engineering', icon: 'Settings', pattern: 'lines' },
  { name: 'Michael Kim', role: 'VP Sales', icon: 'Layers', pattern: 'dots' },
];
