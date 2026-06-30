export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  specifications: Specification[];
  applications: string[];
  certifications: string[];
  image: string;
  gallery: string[];
  features: string[];
  technicalData: TechnicalData[];
}

export interface Specification {
  parameter: string;
  value: string;
  unit?: string;
}

export interface TechnicalData {
  parameter: string;
  value: string;
  unit?: string;
  standard?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  products: Product[];
}

export interface ManufacturingStage {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
  equipment: string[];
  qualityChecks: string[];
}

export interface QualityCertification {
  id: string;
  name: string;
  issuer: string;
  year: number;
  validity: string;
  image: string;
  description: string;
}

export interface QualityTest {
  id: string;
  name: string;
  standard: string;
  description: string;
  equipment: string;
  frequency: string;
}

export interface QualityStage {
  id: string;
  stage: string;
  description: string;
  tests: QualityTest[];
  equipment: string[];
}

export interface DigitalFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  image: string;
}

export interface DigitalPlatform {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  established: number;
  employees: number;
  certifications: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  experience: string;
  qualification: string;
  image: string;
  linkedin?: string;
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface Stats {
  experience: number;
  clients: number;
  projects: number;
  countries: number;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
  twitterCard: string;
}