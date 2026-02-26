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
  { label: 'Pro Support', value: '24/7' },
];

export const FEATURED_SOLUTIONS: Solution[] = [
  {
    id: 'iot-gateway-pro',
    title: 'IoT Gateway Pro',
    category: 'Hardware',
    description: 'Secure, high-performance connectivity for industrial assets with built-in encryption and legacy protocol support.',
    price: '$499',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9tRqYmxf9yS6uZGbq5EYGBVJv6QiIQWxxdz6bGSVv_75Q4382qul9Fjk2kJeogofb_kV-IeKgEV3dUn-ia5XApkqXoMkPItVLW0cyD3SLZiHCFXLPB5CTrMtAjvvjGHSj044Sgt7Wab36EA4pIwEtnGtpSRcppL1uuT645gxnyRYxSLxrm9jgDfavsqaWPfp0kloeXxlzU30Amw4bSYSk4dRelm_M9lznBgdhnQ2rXOF4pkq9U-QnT9Db14dKDl5g1E8OHtE-',
    cta: 'Learn More'
  },
  {
    id: 'integration-suite',
    title: 'Integration Suite',
    category: 'Software',
    description: 'A unified software layer designed to harmonize enterprise data across multiple platforms and legacy systems.',
    price: 'Custom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI3i65F1Y9RTIs_461SvNxJuSWd5SAse_E2F4_b4EvEYg2JUYGc6-4sBfYlVL7aOvrl__RGidvqsTKawzmbEhh-0jm14U2JwHOYIiIW00m6HaO2C_BRcEqoE4OOy5gMW1NENif5KOFVhUz-pFgdx6YJN3ROS1TYYGOoHv8uZkhFbBvUyieb0MgzyUy06Iy5X_NTuwP8cppLx0mlqW1Yr5Qk8Q3fChh1gsvDS0CNTzdwzleF3uuNjVoz-GhXpjQFefPIyxqqkGl',
    cta: 'Request Demo'
  },
  {
    id: 'edge-controller',
    title: 'Edge Controller',
    category: 'Hybrid',
    description: 'Low-latency processing at the edge for real-time decision making in critical infrastructure environments.',
    price: 'Consult',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-0quMosn_5JuTZCyvqG3fWjT-F_YAunym1iBxam5Wrvh-2ylTfRW31AVHO-I_LagIlb0bWUyLQRvBsDplrCSTn7hH866rmen8SeP9JKnMjxkEpAG96q7kFd-ssGsC2fpqKbViBxWuvPvsHJYxo-M_54Jt4cc_VPKPeieSBkLX9JaqfBiGoSvhUg1m98_RdM53MXgja_ZicK_HhY8rjhVuN18xQd6GtRTacQ-3AkPLeKeYKGOGGsCfioSbAxoUEtR37ecS3VSD',
    cta: 'Speak to Expert'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'nexus-core-x1000',
    title: 'Nexus Core X-1000',
    category: 'Hardware',
    performanceTier: 'Ultra High Core',
    availability: 'Instant',
    description: 'Enterprise-grade 128-core processing unit designed for high-density compute environments.',
    price: '$4,299.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUI6qfuPCoyTnZaFiLM-BRz9YvpacG93tsfoSj4riJJb3y4-t0cNYBp4t5XcPCfGy_SmNFTGn-V4NC3SelLV9N95Dlur2Wi6H_GhWwDfgXtKsM0K61B8VQpjopdC913FiTErpjNBCc8_DyP6VfQcp_6iXubmk0QZRmB0gTZ28TziejAV-WYqDbH3qmSnmELVj_bRt8iuw_gIMnZ-RhIlo7XIsEOtS475yQkWaGzbWVGdiBHypIMbK6jXosC2Ff1yQulCm33b9h',
    cta: 'Add to Cart',
    specs: [
      { label: '5.2 GHz Max Clock Speed', value: '5.2 GHz', icon: 'Zap' },
      { label: 'L3 Cache 256MB per CCD', value: '256MB', icon: 'Cpu' }
    ]
  },
  {
    id: 'optistream-bridge',
    title: 'OptiStream Bridge',
    category: 'Hardware',
    performanceTier: 'Edge Specialized',
    availability: 'Instant',
    description: 'Low-latency networking controller with integrated AI-driven traffic prioritization.',
    price: '$1,850.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwooBz4g7XBqUQ1ony2rpYY5YFXqEsHJcNFsIiq3H1u_lWDEnIUwsMNtcGTSXlsQHey8n60kaUHHIcwCagHlpXNboB5cslQdckrmQnrRJrE9UAxcvbjIUXmw7ogRqqWTJtHCC7E4Gq1PJ40oILZ0KBbLBIA4QLuLzPEd-kEN3JlGhSsR5DflAFiG0ueWNp1acEVnFgDRcK7j_f9ZiMfBpmqo7tRxAW6dDDQCYKAA494bilHt8rF5RT8ZJwhZ_Ei4ikVs4swTqD',
    cta: 'Add to Cart',
    specs: [
      { label: '100GbE Fiber Ports (x4)', value: '100GbE', icon: 'Network' },
      { label: 'Hardware-level AES-256', value: 'AES-256', icon: 'Shield' }
    ]
  },
  {
    id: 'omnivault-storage',
    title: 'OmniVault Storage',
    category: 'Hardware',
    performanceTier: 'Efficiency Optimized',
    availability: 'Instant',
    description: 'Immutable storage array for mission-critical backups and long-term data archival.',
    price: '$899.00/mo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwooBz4g7XBqUQ1ony2rpYY5YFXqEsHJcNFsIiq3H1u_lWDEnIUwsMNtcGTSXlsQHey8n60kaUHHIcwCagHlpXNboB5cslQdckrmQnrRJrE9UAxcvbjIUXmw7ogRqqWTJtHCC7E4Gq1PJ40oILZ0KBbLBIA4QLuLzPEd-kEN3JlGhSsR5DflAFiG0ueWNp1acEVnFgDRcK7j_f9ZiMfBpmqo7tRxAW6dDDQCYKAA494bilHt8rF5RT8ZJwhZ_Ei4ikVs4swTqD',
    cta: 'Add to Cart',
    specs: [
      { label: '100GbE Fiber Ports (x4)', value: '100GbE', icon: 'Network' },
      { label: 'Hardware-level AES-256', value: 'AES-256', icon: 'Shield' }
    ]
  },
  {
    id: 'cyber-shield-pro',
    title: 'CyberShield Pro Appliance',
    category: 'Software',
    performanceTier: 'Edge Specialized',
    availability: 'Instant',
    description: 'Next-generation firewall appliance with real-time AI threat detection and zero-day mitigation.',
    price: '$2,450.00/mo',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    cta: 'Add to Cart',
    specs: [
      { label: '50 Gbps Threat Prevention', value: '50 Gbps', icon: 'Shield' },
      { label: 'AI Behavioral Analysis', value: 'AI Behavioral Analysis', icon: 'Cpu' }
    ]
  },
  {
    id: 'quantum-link-router',
    title: 'QuantumLink Enterprise Router',
    category: 'Hardware',
    performanceTier: 'Ultra High Core',
    availability: 'Instant',
    description: 'High-capacity core routing platform designed for hyperscale data centers and ISP backbones.',
    price: '$8,200.00',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
    cta: 'Add to Cart',
    specs: [
      { label: '400GbE QSFP-DD Ports (x8)', value: '400GbE', icon: 'Network' },
      { label: 'Carrier-Grade OS', value: 'Carrier-Grade OS', icon: 'Terminal' }
    ]
  },
  {
    id: 'cloud-native-orchestrator',
    title: 'CloudNative Orchestrator Platform',
    category: 'Hybrid',
    performanceTier: 'Efficiency Optimized',
    availability: 'Instant',
    description: 'Unified multi-cloud management plane with automated resource provisioning and cost optimization.',
    price: '$1,299.00/mo',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    cta: 'Add to Cart',
    specs: [
      { label: 'Kubernetes Native', value: 'Kubernetes Native', icon: 'Cloud' },
      { label: 'Global Traffic Management', value: 'Global Traffic Management', icon: 'Globe' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: 'System Integration',
    description: 'Unify your disparate technology stacks into a cohesive powerhouse. We specialize in connecting legacy on-premise hardware with modern SaaS platforms to ensure zero-latency data flow across your organization.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnYCn2-bFWXSINcXYW-R5382FghqvSvhznR8tfEycwMXJlI_XQgSP-rZwAAf7DDPbnQWNfhd9DoQXr35NRvErTBktKFyF1gV7ekhDvW9lDrc4zX9PBAslHmytGt6Uv3B8kinaUhwGJavy6J6Z1nJixrTKSKbEcFN34FK2GCGaRJo-YTbBGrI_q3W9BuwqRFFSca3D8LVbZXH6aIscENGVMbRXCMm17E6lbWzBKOL26VibBpyov2A2_IZbQLroZ00JlpJE-iBF5',
    features: ['Legacy Modernization', 'API Management', 'Data Synchronization', 'Middleware Solutions']
  },
  {
    title: 'Cloud Architecture',
    description: 'Scale without limits. Our cloud-native engineering team designs robust architectures on AWS, Azure, and Google Cloud, prioritizing security, cost-optimization, and high availability.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhWtzUevv9VUAFTIOd_fh6RWNzRMhET6_RBYlL9e49w-SI30AEPCwxnEObEZKDkcUYCcvIzp69XOtgPZApbWV7tMYq6CdBZNCopSDx1mda-kQ4mzuXjjY0rC2hN3dzF-BQIJHI8WxOowRueOeDxA28DeeniyIra5SRta7-q_vtcd3v5NowlO3haUlj_UmWC1D5ENfT1VSY0q_LVUD_SRuBxhDNXjEIBNfM7fZd3oGLPCLJz2mj5ZPj_lanJzzsRsR9MNb_9U9m',
    features: ['Multi-Cloud Strategy', 'Serverless Computing', 'Kubernetes & Docker', 'FinOps & Cost Control']
  },
  {
    title: 'Hardware Engineering',
    description: 'Precision-engineered hardware solutions designed for the most demanding environments. We provide custom PCB design, edge computing modules, and IoT industrial hardware prototypes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWeWODAHEe0VLO1A0VNwKLbFx6a7cEe1k0TQGLzobPuQjapeA1RU6ncAhixJFXHMq9piprujscKOf2z2O4a9Canks-Qw9CxDR5uH-XRlram3zAOa68kJErXSPHP4lBLUS5N_ma-9cmvKH7E1fgkA6ZnBNkwz623-lHlNDfIS-y3_fh_tEQ10UihVLLrq3WRsS4F_Nu89wLNQ9KAl5rclx0Yn_B14OSmwJt0u4cwp0ioUwm_AkyFM7c-5Xk85cwah9-sQ03zF_I',
    features: ['Custom PCB Design', 'Edge Device R&D', 'Industrial IoT Modules', 'Hardware Security']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Scaling Global Payments with Zero Latency',
    category: 'FinTech',
    readTime: '8 min read',
    description: 'How NeoBank integrated Nixfusion Labs to handle 50k transactions per second across 12 regions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR5c9NL8kGaU2vDSdOiuQTUsZgd8zUaYl4S0GtDQ0rBdQKqpek9cImxj7YAZR_yIKihj0fVMlBvO_t-zOY7-Kd9CMO0_jW5YV88wQiMeqbs3CoYKHQO9ZLMO0KROK5P6ITGofeZ3NPRorT4XCEret5JEXte4F7pLit4rxCX2tNlsPcJbq7xajTh4O3OCaH6rLRDvND1jmZgJ0yLTp8D324SFpSRk8oqk5buMwQIrhZ85l4hrmGTL_O53GjGg5HKZJezVprV8bJ'
  },
  {
    title: 'Predictive Maintenance via Edge Computing',
    category: 'Manufacturing',
    readTime: '12 min read',
    description: 'Reducing downtime by 40% through real-time telemetry processing at the manufacturing edge.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuAcBu1IbHja3qvTUoqzXg26_x3Cu2dSA9Qw_Fb0dS_tRVRF6o91V44dRxGssBtH-qY7dXKq86LzQyeLZMMXJqFAIcJTs4A6TvuWXlan8JcjVogs18qIdNetgFtZ2zMnrOMxe4FSlllTUsNo9mEBMLCPLVLt-4F-RWvBHd2WuTwfurqEWkeBvsnzmGb8ScWVgtY2JSZDPdAK20kGT5sITlU_vtH4CYL3hbANhxo_-ChMajvQ9ARJtozVhnOJh6zvXSJHiDbbLg'
  },
  {
    title: 'HIPAA Compliant Data Lake Architecture',
    category: 'HealthTech',
    readTime: '6 min read',
    description: 'Securing 5M patient records with end-to-end encryption and automated compliance auditing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHq6N6xMXabUHX99-S6i84ZpHQY8ghCJ_UUW9ZbF5n-9865UMtAbtY_62wDZUKIO4_rf9dE2xtSz4-EAKKhbUSmaBIkS7ipm71DwSdAKLJcCGPZaPvj_6ZVVbSoOZhg0KoVqpBDv9A8PfTg9mzm8i9fq2S1G4wo5rHCVlkYmZrW9BP1cp_ckEabfQznH3AvJE7-OQyXO3R71VzD31WE--pqQYT1XQD6tReCLQy3OxhcBmXSo2gThZBLdjlISpoOjfJXy5pbAZW'
  }
];

export const TEAM: TeamMember[] = [
  { name: 'Aadhi', role: 'Founder & CEO', icon: 'Layout', pattern: 'radial' },
  { name: 'Surya', role: 'Chief Technology Officer', icon: 'Terminal', pattern: 'grid' },
  { name: 'Jayaraman', role: 'Chief Operations Officer', icon: 'Settings', pattern: 'lines' },
  { name: 'Kanniya', role: 'VP of Product', icon: 'Layers', pattern: 'dots' },
];
