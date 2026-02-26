import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Solution {
  id: string;
  title: string;
  category: 'Hardware' | 'Software' | 'Hybrid' | 'Cloud';
  description: string;
  price?: string;
  image: string;
  cta: string;
}

export interface Product extends Solution {
  performanceTier: 'Ultra High Core' | 'Edge Specialized' | 'Efficiency Optimized';
  availability: 'Instant' | 'Pre-order';
  specs: { label: string; value: string; icon: string }[];
}

export interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface CaseStudy {
  title: string;
  category: string;
  readTime: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  icon: string;
  pattern: string;
}
