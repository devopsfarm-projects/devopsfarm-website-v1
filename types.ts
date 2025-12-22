import { LucideIcon } from 'lucide-react';

export interface SubServiceItem {
  id: string;
  title: string;
  description: string;
  features?: string[];
  fullContent?: {
    longDescription: string;
    benefits: { title: string; desc: string }[];
    // New detailed sections
    kpis?: { value: string; label: string }[];
    process?: { title: string; desc: string }[];
    deliverables?: string[];
    techStack?: string[];
    faqs?: { question: string; answer: string }[];
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
  fullContent?: {
    heroImage?: string;
    longDescription: string;
    subServices?: SubServiceItem[];
    secondaryHeadline?: string;
    secondaryDescription?: string;
    benefits: { title: string; desc: string }[];
    process: { title: string; desc: string }[];
    faqs: { question: string; answer: string }[];
  };
}

export interface ValuePillar {
  title: string;
  description: string;
  icon?: any;
}

export interface NavItem {
  label: string;
  href: string;
  isRouterLink?: boolean;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}