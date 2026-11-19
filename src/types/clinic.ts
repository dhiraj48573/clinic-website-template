export type ClinicCategory = 
  | 'general'
  | 'dental'
  | 'multispeciality'
  | 'physiotherapy'
  | 'eye'
  | 'skinhair'
  | 'diagnostic'
  | 'pediatric'
  | 'womens';

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experienceYears?: number;
  registrationNumber?: string; // Real or left undefined, no fake registration
  image: string;
  availableDays: string;
  timing: string;
  about?: string;
  languages?: string[];
}

export interface MedicalService {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription?: string;
  iconName?: string;
  image?: string;
  price?: string; // e.g. "₹400" or "Contact for pricing"
  duration?: string;
  categoryTag?: string;
  featured?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  comment: string;
  serviceReceived: string;
  date?: string;
  rating?: number; // genuine 1-5, client configurable
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsapp: string; // digits only with country code, e.g. "919876543210"
  emergencyPhone?: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  mapEmbedUrl: string; // iframe src
  mapDirectLink: string; // google maps directions link
}

export interface Timings {
  mondayToSaturday: string;
  sunday: string;
  lunchBreak?: string;
  emergencyAvailable?: boolean;
}

export interface ThemeColors {
  primary: string;        // Main healthcare brand color (e.g. #0E7490)
  primaryDark: string;    // Dark variant for hover / contrast (#155E75)
  primaryLight: string;   // Light background variant (#ECFEFF)
  secondary: string;      // Supporting medical teal (#0D9488)
  accent: string;         // Vibrant accent green/cyan (#10B981)
  surface: string;        // Background tinted surface (#F8FAFC)
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  clinicTypeSchema: 'MedicalClinic' | 'Dentist' | 'Physician' | 'DiagnosticLab';
}

export interface CWDBranding {
  showCredit: boolean;
  developerName: string;
  developerWebsite: string;
  creditText: string;
  isDemoNoticeVisible: boolean;
}

export interface ClinicConfig {
  id: string;
  clinicName: string;
  tagline: string;
  category: string;
  categoryType: ClinicCategory;
  shortBio: string;
  fullBio: string;
  establishedYear: number;
  logo: string;
  heroImage: string;
  aboutImage: string;
  
  contact: ContactInfo;
  timings: Timings;
  theme: ThemeColors;
  
  doctors: Doctor[];
  services: MedicalService[];
  facilities: Facility[];
  testimonials: Testimonial[];
  whyChooseUs: {
    title: string;
    description: string;
    icon: string;
  }[];
  
  seo: SEOConfig;
  cwdBranding: CWDBranding;
}
