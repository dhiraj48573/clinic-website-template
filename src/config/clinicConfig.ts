import { ClinicConfig } from '../types/clinic';
import { clinicPresets } from './presets';

/**
 * ============================================================================
 * CWD TECHNOLOGIES - CLINIC & HEALTHCARE CENTRALIZED CONFIGURATION
 * ============================================================================
 * 
 * To customize this website for any new clinic client:
 * 1. Choose a pre-configured template from presets ('general' | 'dental' | 'physiotherapy' | 'eye' | 'skinhair' | 'diagnostic')
 *    OR override individual properties directly below.
 * 2. Update clinicName, contact, timings, doctors, services, and SEO details.
 * 3. In production, set `allowLivePresetPreview: false` to lock the website to your client's specific setup.
 */

// Choose active default preset: 'general' | 'dental' | 'physiotherapy' | 'eye' | 'skinhair' | 'diagnostic'
export const ACTIVE_PRESET: keyof typeof clinicPresets = 'general';

// Base configuration initialized from selected preset:
const baseConfig: ClinicConfig = clinicPresets[ACTIVE_PRESET] || clinicPresets.general;

export const clinicConfig: ClinicConfig = {
  ...baseConfig,

  // CLIENT OVERRIDES:
  // You can override any specific field directly here without touching presets:
  clinicName: "Care Plus Clinic",
  tagline: "Your Health, Our Priority",
  category: "General Physician Clinic",

  logo: "/favicon.svg",

  contact: {
    ...baseConfig.contact,
    phone: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    whatsapp: "919876543210",
    email: "care@example.com",
    address: "Ranipur More, City Center, Haridwar, Uttarakhand, India",
    city: "Haridwar",
    state: "Uttarakhand",
    pincode: "249401",
    landmark: "Near City Center Plaza",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110543.61905398708!2d78.07353915!3d29.94569065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee53c9%3A0x82498e8b62580f00!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectLink: "https://maps.google.com/?q=Ranipur+More+Haridwar+Uttarakhand"
  },

  timings: {
    mondayToSaturday: "09:00 AM – 08:00 PM",
    sunday: "10:00 AM – 01:00 PM (Urgent Care Only)",
    lunchBreak: "01:30 PM – 03:00 PM",
    emergencyAvailable: true
  },

  theme: {
    primary: "#0E7490",       // Healthcare Blue / Deep Cyan
    primaryDark: "#155E75",   // Dark contrast Cyan
    primaryLight: "#ECFEFF",  // Soft Tint
    secondary: "#0D9488",     // Teal
    accent: "#10B981",        // Soft Green Accent
    surface: "#F8FAFC"
  },

  seo: {
    title: "Care Plus Clinic | Healthcare Services in Haridwar",
    description: "Care Plus Clinic offers compassionate general physician consultations, diabetes care, and routine health checkups in Haridwar, Uttarakhand.",
    keywords: ["Care Plus Clinic Haridwar", "General Physician Haridwar", "Doctor Haridwar", "Clinic Haridwar"],
    clinicTypeSchema: "MedicalClinic"
  },

  cwdBranding: {
    showCredit: true,
    developerName: "CWD Technologies",
    developerWebsite: "https://cwdtechnologies.com",
    creditText: "Website Designed & Developed by CWD Technologies",
    isDemoNoticeVisible: true
  }
};

// Whether to show the top client demo switcher banner (for pitching to multiple clients)
export const SHOW_DEMO_PRESET_SWITCHER = true;
