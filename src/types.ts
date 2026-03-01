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
  category: 'Hardware' | 'Software' | 'Security' | 'Financial' | 'Enterprise' | 'Hybrid';
  description: string;
  price?: string;
  image: string;
  cta: string;
}

export interface Product extends Solution {
  performanceTier: 'Professional' | 'Enterprise';
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
