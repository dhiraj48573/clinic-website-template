import { ClinicConfig } from '../types/clinic';

export const clinicPresets: Record<string, ClinicConfig> = {
  general: {
    id: 'care-plus-general',
    clinicName: 'Care Plus Clinic',
    tagline: 'Your Health, Our Priority',
    category: 'General Physician Clinic',
    categoryType: 'general',
    shortBio: 'Care Plus Clinic provides dependable, compassionate primary healthcare for individuals and families in Haridwar. Our focus is on accurate diagnosis, preventive wellness, and ethical medical care.',
    fullBio: 'Established to deliver accessible and honest primary medical consultations, Care Plus Clinic serves patients of all age groups. From chronic condition management such as diabetes and hypertension to seasonal infection care, we prioritize thoughtful clinical evaluation, patient education, and clear follow-up plans.',
    establishedYear: 2018,
    logo: '/images/logo.svg',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    aboutImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    
    contact: {
      phone: '+919876543210',
      phoneDisplay: '+91 98765 43210',
      whatsapp: '919876543210',
      emergencyPhone: '+91 98765 43211',
      email: 'care@example.com',
      address: 'Shop 12-14, Ranipur More, Near City Center',
      city: 'Haridwar',
      state: 'Uttarakhand',
      pincode: '249401',
      landmark: 'Near City Center Plaza',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110543.61905398708!2d78.07353915!3d29.94569065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee53c9%3A0x82498e8b62580f00!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
      mapDirectLink: 'https://maps.google.com/?q=Ranipur+More+Haridwar+Uttarakhand'
    },

    timings: {
      mondayToSaturday: '09:00 AM – 08:00 PM',
      sunday: '10:00 AM – 01:00 PM (Emergency & Urgent Care Only)',
      lunchBreak: '01:30 PM – 03:00 PM',
      emergencyAvailable: true
    },

    theme: {
      primary: '#0E7490',       // Medical cyan-700
      primaryDark: '#155E75',   // Medical cyan-800
      primaryLight: '#ECFEFF',  // Cyan-50
      secondary: '#0D9488',     // Teal-600
      accent: '#059669',        // Emerald-600
      surface: '#F8FAFC'
    },

    doctors: [
      {
        id: 'dr-sharma',
        name: 'Dr. R. K. Sharma',
        qualification: 'MBBS, MD (General Medicine)',
        specialization: 'Consultant Physician & Diabetologist',
        experienceYears: 14,
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
        availableDays: 'Monday to Saturday',
        timing: '10:00 AM – 01:30 PM & 04:30 PM – 08:00 PM',
        about: 'Specializes in comprehensive management of adult lifestyle disorders, diabetes care, hypertension, and infectious diseases.',
        languages: ['English', 'Hindi']
      },
      {
        id: 'dr-priya-patel',
        name: 'Dr. Priya Patel',
        qualification: 'MBBS, DNB (Family Medicine)',
        specialization: 'General & Preventive Healthcare',
        experienceYears: 9,
        image: 'https://images.unsplash.com/photo-1594824813583-42e61637c355?auto=format&fit=crop&w=800&q=80',
        availableDays: 'Monday to Saturday',
        timing: '09:00 AM – 02:00 PM',
        about: 'Focused on adolescent health, women primary wellness, vaccination advisory, and annual health screenings.',
        languages: ['English', 'Hindi']
      }
    ],

    services: [
      {
        id: 'gen-consult',
        name: 'General Consultation',
        shortDescription: 'Comprehensive clinical evaluation and diagnosis for common acute illnesses, fever, and symptoms.',
        fullDescription: 'Thorough in-person clinical examination, blood pressure & vitals check, disease diagnosis, and evidence-based prescription guidance.',
        price: '₹350',
        duration: '15-20 mins',
        categoryTag: 'Primary Care',
        featured: true,
        iconName: 'Stethoscope'
      },
      {
        id: 'diabetes-care',
        name: 'Diabetes & Hypertension Management',
        shortDescription: 'Tailored blood glucose monitoring, BP control regimens, diet counseling, and medication adjustments.',
        fullDescription: 'Long-term monitoring of HbA1c, microvascular protection checks, lifestyle counseling, and medication management for sustained metabolic health.',
        price: '₹500',
        duration: '25-30 mins',
        categoryTag: 'Chronic Care',
        featured: true,
        iconName: 'Activity'
      },
      {
        id: 'preventive-checkup',
        name: 'Routine Health Checkups & Screenings',
        shortDescription: 'Annual wellness evaluations, cholesterol profiling advice, and preventive health screenings.',
        fullDescription: 'Personalized preventive wellness protocols based on age, family history, and lifestyle factors to catch potential risks early.',
        price: '₹600',
        duration: '30 mins',
        categoryTag: 'Wellness',
        featured: true,
        iconName: 'ShieldCheck'
      },
      {
        id: 'vaccinations',
        name: 'Adult & Pediatric Immunization',
        shortDescription: 'Flu shots, hepatitis vaccines, tetanus shots, and travel immunization counseling.',
        fullDescription: 'Safe administration of standard WHO & IAP recommended vaccines with temperature-regulated cold storage verification.',
        price: '₹300 + Vaccine Cost',
        duration: '15 mins',
        categoryTag: 'Immunization',
        featured: false,
        iconName: 'Syringe'
      },
      {
        id: 'minor-procedures',
        name: 'Minor Dressing & First Aid',
        shortDescription: 'Wound dressing, suture removal, minor burn care, and emergency stabilization support.',
        fullDescription: 'Hygienic minor surgical procedures conducted under sterile protocols by trained clinical staff.',
        price: '₹250 - ₹500',
        duration: '20 mins',
        categoryTag: 'Outpatient Care',
        featured: false,
        iconName: 'Bandage'
      },
      {
        id: 'lab-sample',
        name: 'Basic Diagnostic Sample Collection',
        shortDescription: 'On-site venous blood draw and urine collection for partner accredited pathology labs.',
        fullDescription: 'Comfortable blood collection by certified phlebotomists with fast digital report delivery.',
        price: 'As per lab test rates',
        duration: '10 mins',
        categoryTag: 'Diagnostics',
        featured: false,
        iconName: 'Microscope'
      }
    ],

    facilities: [
      {
        id: 'clean-consultation',
        title: 'Sterile Consultation Rooms',
        description: 'Air-conditioned, private consultation suites sanitized between patient visits.',
        iconName: 'Building',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'digital-records',
        title: 'Digital Prescription & Records',
        description: 'Instant WhatsApp prescription copy and secure electronic medical records for seamless follow-ups.',
        iconName: 'FileText',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'observation-bed',
        title: 'Day Care Observation Bed',
        description: 'Dedicated observation bed equipped with IV fluid support, nebulization, and oxygen monitoring.',
        iconName: 'Bed',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'inhouse-pharmacy',
        title: 'Emergency Medicine Dispensation',
        description: 'Immediate access to essential first-dose emergency medications and nebulizer supplies.',
        iconName: 'Pill',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80'
      }
    ],

    testimonials: [
      {
        id: 't-1',
        patientName: 'Anil Verma',
        comment: 'Dr. Sharma took the time to listen patiently to all my symptoms without rushing. The diagnosis was accurate, and the treatment brought quick relief. Very polite clinic staff.',
        serviceReceived: 'General Consultation',
        date: 'Recent visit',
        rating: 5
      },
      {
        id: 't-2',
        patientName: 'Sunita Rawat',
        comment: 'Visited for managing my mother diabetes. Dr. Priya explained the diet changes and insulin adjustments clearly. The clinic is clean and well organized.',
        serviceReceived: 'Diabetes Management',
        date: 'Recent visit',
        rating: 5
      },
      {
        id: 't-3',
        patientName: 'Mohit Chauhan',
        comment: 'Smooth appointment booking via WhatsApp. Very short waiting time and neat consultation rooms. Highly recommended in Haridwar.',
        serviceReceived: 'Routine Health Checkup',
        date: 'Recent visit',
        rating: 5
      }
    ],

    whyChooseUs: [
      {
        title: 'Transparent & Ethical Care',
        description: 'No unnecessary tests or medications prescribed. Clear discussions on every clinical decision.',
        icon: 'CheckCircle'
      },
      {
        title: 'Minimal Wait Times',
        description: 'Pre-scheduled time slots ensure timely consultations without crowded waiting halls.',
        icon: 'Clock'
      },
      {
        title: 'Sanitized & Patient-Friendly',
        description: 'Strict hygiene protocols, comfortable waiting lounge, and accessible ground-floor entry.',
        icon: 'Sparkles'
      },
      {
        title: 'Dedicated WhatsApp Follow-Up',
        description: 'Effortlessly share follow-up questions or view prescription updates through official clinic WhatsApp.',
        icon: 'MessageSquare'
      }
    ],

    seo: {
      title: 'Care Plus Clinic | General Physician & Family Care in Haridwar',
      description: 'Care Plus Clinic in Haridwar provides experienced doctor consultations, diabetes care, routine health screenings, and family medicine. Book your appointment today.',
      keywords: ['clinic in haridwar', 'general physician haridwar', 'doctor consultation haridwar', 'family doctor', 'care plus clinic'],
      clinicTypeSchema: 'MedicalClinic'
    },

    cwdBranding: {
      showCredit: true,
      developerName: 'CWD Technologies',
      developerWebsite: 'https://cwdtechnologies.com',
      creditText: 'Website Designed & Developed by CWD Technologies',
      isDemoNoticeVisible: true
    }
  },

  dental: {
    id: 'apex-dental-clinic',
    clinicName: 'Apex Dental Care & Implant Center',
    tagline: 'Crafting Healthy, Confident Smiles',
    category: 'Dental Clinic',
    categoryType: 'dental',
    shortBio: 'Apex Dental Care provides advanced, painless dental treatments and cosmetic dentistry with state-of-the-art sterilization and digital imaging.',
    fullBio: 'We combine gentle patient care with modern dental technology. From root canals to invisible aligners and smile makeovers, our verified dental surgeons ensure comfortable and lasting results for every smile.',
    establishedYear: 2016,
    logo: '/images/logo.svg',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    aboutImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    
    contact: {
      phone: '+919876543220',
      phoneDisplay: '+91 98765 43220',
      whatsapp: '919876543220',
      emergencyPhone: '+91 98765 43221',
      email: 'smile@apexdental.example',
      address: 'Plot 45, Civil Lines, Near Railway Station Road',
      city: 'Haridwar',
      state: 'Uttarakhand',
      pincode: '249401',
      landmark: 'Opposite Central Bank',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110543.61905398708!2d78.07353915!3d29.94569065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee53c9%3A0x82498e8b62580f00!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
      mapDirectLink: 'https://maps.google.com/?q=Civil+Lines+Haridwar+Uttarakhand'
    },

    timings: {
      mondayToSaturday: '10:00 AM – 08:30 PM',
      sunday: '10:00 AM – 02:00 PM',
      lunchBreak: '02:00 PM – 04:00 PM',
      emergencyAvailable: true
    },

    theme: {
      primary: '#0284C7',       // Dental sky-600
      primaryDark: '#0369A1',   // Sky-700
      primaryLight: '#F0F9FF',  // Sky-50
      secondary: '#0D9488',     // Teal
      accent: '#38BDF8',        // Bright sky
      surface: '#F8FAFC'
    },

    doctors: [
      {
        id: 'dr-alok-singh',
        name: 'Dr. Alok Singh',
        qualification: 'BDS, MDS (Endodontics & Conservative Dentistry)',
        specialization: 'Root Canal Specialist & Dental Surgeon',
        experienceYears: 12,
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
        availableDays: 'Monday to Saturday',
        timing: '10:00 AM – 02:00 PM & 04:30 PM – 08:30 PM',
        about: 'Expert in painless single-visit rotary root canals and restorative dental microsurgery.',
        languages: ['English', 'Hindi']
      },
      {
        id: 'dr-megha-gupta',
        name: 'Dr. Megha Gupta',
        qualification: 'BDS, MDS (Orthodontics)',
        specialization: 'Clear Aligners & Cosmetic Smile Design',
        experienceYears: 8,
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
        availableDays: 'Tuesday, Thursday, Saturday',
        timing: '11:00 AM – 05:00 PM',
        about: 'Certified provider of clear aligners, teeth straightening, and ceramic veneer aesthetics.',
        languages: ['English', 'Hindi']
      }
    ],

    services: [
      {
        id: 'dental-checkup',
        name: 'Comprehensive Dental Examination',
        shortDescription: 'Digital intra-oral scanning, cavity inspection, and oral cancer screening.',
        fullDescription: 'High-resolution camera inspection with full explanation of dental health on an interactive screen.',
        price: '₹300',
        duration: '20 mins',
        categoryTag: 'Preventive Dentistry',
        featured: true,
        iconName: 'Search'
      },
      {
        id: 'root-canal',
        name: 'Rotary Single-Sitting Root Canal',
        shortDescription: 'Painless microscopic root canal therapy using advanced rotary instruments.',
        fullDescription: 'Eliminates tooth infection while saving natural teeth structure under profound local anesthesia.',
        price: '₹3,500 – ₹5,000',
        duration: '45 mins',
        categoryTag: 'Endodontics',
        featured: true,
        iconName: 'Zap'
      },
      {
        id: 'teeth-cleaning',
        name: 'Ultrasonic Teeth Cleaning & Polishing',
        shortDescription: 'Removal of stubborn tartar, stains, plaque and gum health restoration.',
        fullDescription: 'Gentle ultrasonic scaling that protects enamel while eliminating bacteria causing bad breath and bleeding gums.',
        price: '₹1,000',
        duration: '30 mins',
        categoryTag: 'Hygiene',
        featured: true,
        iconName: 'Sparkles'
      },
      {
        id: 'dental-implants',
        name: 'Titanium Dental Implants',
        shortDescription: 'Permanent tooth replacement matching the strength and aesthetics of natural teeth.',
        fullDescription: 'Computer-guided surgical placement of biocompatible titanium screws topped with custom zirconia crowns.',
        price: '₹22,000 onwards',
        duration: '60 mins',
        categoryTag: 'Surgical Dentistry',
        featured: false,
        iconName: 'Shield'
      },
      {
        id: 'teeth-whitening',
        name: 'In-Office LED Laser Teeth Whitening',
        shortDescription: 'Professional brightness boost up to 4 shades in a single comfortable session.',
        fullDescription: 'Safe, enamel-friendly bleaching treatment supervised directly by dental specialists.',
        price: '₹5,500',
        duration: '45 mins',
        categoryTag: 'Cosmetic',
        featured: false,
        iconName: 'Sun'
      }
    ],

    facilities: [
      {
        id: 'autoclave-class-b',
        title: 'Class-B European Standard Sterilization',
        description: '100% sterile instruments vacuum-autoclaved and sealed in front of each patient.',
        iconName: 'ShieldCheck',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'digital-rvg',
        title: 'Low-Radiation Digital RVG X-Rays',
        description: 'Instant computerized dental radiographs with 90% less radiation exposure.',
        iconName: 'Radio',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ergonomic-chairs',
        title: 'Ergonomic Japanese Dental Operatories',
        description: 'Cushioned patient chairs designed for maximum spinal comfort during procedures.',
        iconName: 'Armchair',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80'
      }
    ],

    testimonials: [
      {
        id: 'dt-1',
        patientName: 'Kavita Joshi',
        comment: 'Had my root canal done by Dr. Alok Singh. I was terrified of dental needles, but it was surprisingly painless! Clean clinic and gentle doctor.',
        serviceReceived: 'Single-Sitting Root Canal',
        date: 'Recent visit',
        rating: 5
      },
      {
        id: 'dt-2',
        patientName: 'Raman Arora',
        comment: 'Very professional teeth cleaning and polishing. No unnecessary procedures were recommended. Fair charges and modern equipment.',
        serviceReceived: 'Ultrasonic Cleaning',
        date: 'Recent visit',
        rating: 5
      }
    ],

    whyChooseUs: [
      {
        title: 'Painless Treatment Protocols',
        description: 'Gentle injection techniques and numbing gels to keep your dental visit stress-free.',
        icon: 'Smile'
      },
      {
        title: 'Strict 4-Step Sterilization',
        description: 'Pouch-sealed instruments opened only in your presence for guaranteed hygiene.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Transparent Treatment Costs',
        description: 'Every cost is discussed beforehand without hidden charges or surprised bills.',
        icon: 'CreditCard'
      }
    ],

    seo: {
      title: 'Apex Dental Care | Best Dental Clinic & Implant Centre in Haridwar',
      description: 'Painless root canal treatment, dental implants, teeth whitening and smile design at Apex Dental Care in Haridwar. Book your appointment now.',
      keywords: ['dentist in haridwar', 'dental clinic haridwar', 'root canal haridwar', 'teeth cleaning', 'dental implants'],
      clinicTypeSchema: 'Dentist'
    },

    cwdBranding: {
      showCredit: true,
      developerName: 'CWD Technologies',
      developerWebsite: 'https://cwdtechnologies.com',
      creditText: 'Website Designed & Developed by CWD Technologies',
      isDemoNoticeVisible: true
    }
  },

  physiotherapy: {
    id: 'motion-relief-physio',
    clinicName: 'MotionRelief Physiotherapy & Rehab',
    tagline: 'Restore Movement, Relieve Pain, Reclaim Life',
    category: 'Physiotherapy & Rehabilitation Centre',
    categoryType: 'physiotherapy',
    shortBio: 'Specialized physical therapy for back pain, cervical spondylosis, sports injuries, post-surgical recovery, and stroke rehabilitation.',
    fullBio: 'MotionRelief is equipped with advanced electrotherapy, therapeutic ultrasound, dry needling, and dedicated exercise rehabilitation studios to restore patient functional independence safely.',
    establishedYear: 2017,
    logo: '/images/logo.svg',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    aboutImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',

    contact: {
      phone: '+919876543230',
      phoneDisplay: '+91 98765 43230',
      whatsapp: '919876543230',
      emergencyPhone: '+91 98765 43231',
      email: 'rehab@motionrelief.example',
      address: '2nd Floor, Harmony Complex, Jwalapur',
      city: 'Haridwar',
      state: 'Uttarakhand',
      pincode: '249407',
      landmark: 'Near Arya Samaj Mandir',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110543.61905398708!2d78.07353915!3d29.94569065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee53c9%3A0x82498e8b62580f00!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
      mapDirectLink: 'https://maps.google.com/?q=Jwalapur+Haridwar+Uttarakhand'
    },

    timings: {
      mondayToSaturday: '08:00 AM – 01:00 PM & 04:00 PM – 08:00 PM',
      sunday: '09:00 AM – 12:00 PM (By Pre-booked Appointment Only)',
      lunchBreak: '01:00 PM – 04:00 PM',
      emergencyAvailable: false
    },

    theme: {
      primary: '#0D9488',       // Physiotherapy Teal-600
      primaryDark: '#115E59',   // Teal-800
      primaryLight: '#F0FDFA',  // Teal-50
      secondary: '#0284C7',     // Sky
      accent: '#10B981',        // Emerald
      surface: '#F8FAFC'
    },

    doctors: [
      {
        id: 'dr-vineet-negi',
        name: 'Dr. Vineet Negi (PT)',
        qualification: 'BPT, MPT (Musculoskeletal Disorders & Sports Physiotherapy)',
        specialization: 'Senior Physiotherapist & Spine Rehabilitation Specialist',
        experienceYears: 11,
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
        availableDays: 'Monday to Saturday',
        timing: '08:30 AM – 01:00 PM & 04:30 PM – 08:00 PM',
        about: 'Expert in manual therapy, postural realignment, disc herniation recovery, and athletic conditioning.',
        languages: ['English', 'Hindi']
      }
    ],

    services: [
      {
        id: 'back-neck-rehab',
        name: 'Spine & Cervical Rehabilitation',
        shortDescription: 'Targeted decompression, electro-stimulation, and manual spinal mobilization.',
        fullDescription: 'Customized spinal exercises and pain relieving modalities to treat sciatica, slip disc, and chronic stiff neck.',
        price: '₹500 / session',
        duration: '40 mins',
        categoryTag: 'Spine Care',
        featured: true,
        iconName: 'Activity'
      },
      {
        id: 'joint-mobilization',
        name: 'Knee & Joint Arthritis Therapy',
        shortDescription: 'Quadriceps strengthening, gait training, and joint lubrication exercises.',
        fullDescription: 'Non-surgical rehabilitation for osteoarthritis knee to improve walking tolerance and reduce joint friction.',
        price: '₹500 / session',
        duration: '45 mins',
        categoryTag: 'Joint Care',
        featured: true,
        iconName: 'TrendingUp'
      },
      {
        id: 'neuro-rehab',
        name: 'Neuro-Rehab & Stroke Recovery',
        shortDescription: 'Balance retraining, motor coordination, and functional independence exercises.',
        fullDescription: 'Specialized physiotherapy protocols for hemiplegia, Parkinsonism, and Bell’s palsy rehabilitation.',
        price: '₹700 / session',
        duration: '50 mins',
        categoryTag: 'Neuro Care',
        featured: true,
        iconName: 'Brain'
      }
    ],

    facilities: [
      {
        id: 'gym-studio',
        title: 'Exercise Rehabilitation Studio',
        description: 'Parallel bars, resistance bands, balance boards, and reformer stations.',
        iconName: 'Dumbbell',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'electrotherapy-bay',
        title: 'Digital IFT & TENS Electrotherapy',
        description: 'Deep therapeutic ultrasound, cervical/lumbar traction, and moist heat therapy units.',
        iconName: 'Cpu',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80'
      }
    ],

    testimonials: [
      {
        id: 'pt-1',
        patientName: 'Devendra Panwar',
        comment: 'Suffered from severe sciatica pain for 6 months. Dr. Vineet personalized exercises and manual traction reduced the pain by 90% within three weeks. Fantastic guidance.',
        serviceReceived: 'Spine Rehabilitation',
        date: 'Recent visit',
        rating: 5
      }
    ],

    whyChooseUs: [
      {
        title: 'Root Cause Diagnosis',
        description: 'We don’t just apply heating pads; we correct muscle imbalances and faulty biomechanics.',
        icon: 'Target'
      },
      {
        title: 'One-on-One Sessions',
        description: 'Dedicated physiotherapist attention throughout the 45-minute treatment duration.',
        icon: 'UserCheck'
      }
    ],

    seo: {
      title: 'MotionRelief Physiotherapy Centre | Best Physio Clinic in Haridwar',
      description: 'Consult Dr. Vineet Negi for sciatica, knee pain, cervical spondylosis, and sports rehab at MotionRelief Physiotherapy in Haridwar.',
      keywords: ['physiotherapy in haridwar', 'physio near me', 'sciatica treatment', 'knee pain rehab'],
      clinicTypeSchema: 'MedicalClinic'
    },

    cwdBranding: {
      showCredit: true,
      developerName: 'CWD Technologies',
      developerWebsite: 'https://cwdtechnologies.com',
      creditText: 'Website Designed & Developed by CWD Technologies',
      isDemoNoticeVisible: true
    }
  },

  eye: {
    id: 'clear-vision-eye',
    clinicName: 'ClearVision Eye Care & Retinal Clinic',
    tagline: 'Precision Vision Care for Every Generation',
    category: 'Eye Clinic & Retinal Care',
    categoryType: 'eye',
    shortBio: 'Specialized ophthalmology clinic offering computerized vision testing, cataract evaluation, glaucoma screening, and pediatric eye care.',
    fullBio: 'ClearVision is equipped with Japanese slit lamps, auto-refractometers, and non-contact tonometers to offer comprehensive eye diagnostics with absolute patient comfort.',
    establishedYear: 2015,
    logo: '/images/logo.svg',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    aboutImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',

    contact: {
      phone: '+919876543240',
      phoneDisplay: '+91 98765 43240',
      whatsapp: '919876543240',
      emergencyPhone: '+91 98765 43241',
      email: 'vision@clearvision.example',
      address: 'Near Old Bus Stand, Delhi-Haridwar Highway',
      city: 'Haridwar',
      state: 'Uttarakhand',
      pincode: '249401',
      landmark: 'Opposite State Bank',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110543.61905398708!2d78.07353915!3d29.94569065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee53c9%3A0x82498e8b62580f00!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
      mapDirectLink: 'https://maps.google.com/?q=Haridwar+Uttarakhand'
    },

    timings: {
      mondayToSaturday: '09:30 AM – 07:30 PM',
      sunday: 'Closed',
      lunchBreak: '02:00 PM – 03:30 PM',
      emergencyAvailable: true
    },

    theme: {
      primary: '#0369A1',       // Ophthalmology blue-700
      primaryDark: '#075985',   // Blue-800
      primaryLight: '#F0F9FF',  // Sky-50
      secondary: '#0E7490',     // Cyan
      accent: '#38BDF8',        // Sky accent
      surface: '#F8FAFC'
    },

    doctors: [
      {
        id: 'dr-ananya-roy',
        name: 'Dr. Ananya Roy',
        qualification: 'MBBS, MS (Ophthalmology)',
        specialization: 'Senior Eye Surgeon & Cataract Specialist',
        experienceYears: 13,
        image: 'https://images.unsplash.com/photo-1594824813583-42e61637c355?auto=format&fit=crop&w=800&q=80',
        availableDays: 'Monday to Saturday',
        timing: '10:00 AM – 02:00 PM & 04:00 PM – 07:30 PM',
        about: 'Specializes in sutureless phacoemulsification cataract surgery, computer vision syndrome, and diabetic retinopathy screenings.',
        languages: ['English', 'Hindi']
      }
    ],

    services: [
      {
        id: 'vision-testing',
        name: 'Computerized Eye & Refraction Testing',
        shortDescription: 'Accurate vision measurement for prescription glasses and contact lenses.',
        fullDescription: 'Comprehensive refraction using automated keratometry and digital chart projector.',
        price: '₹300',
        duration: '20 mins',
        categoryTag: 'Refraction',
        featured: true,
        iconName: 'Eye'
      },
      {
        id: 'cataract-eval',
        name: 'Cataract & Lens Consultation',
        shortDescription: 'Slit-lamp examination, intraocular pressure check, and lens power IOL calculation.',
        fullDescription: 'Evaluation for advanced micro-incision cataract surgery and multifocal IOL selections.',
        price: '₹500',
        duration: '30 mins',
        categoryTag: 'Surgical Evaluation',
        featured: true,
        iconName: 'Shield'
      },
      {
        id: 'dry-eye-care',
        name: 'Computer Vision & Dry Eye Therapy',
        shortDescription: 'Tear film evaluation and customized management for digital eye strain.',
        fullDescription: 'Diagnosis of meibomian gland dysfunction and prescription of lubricating and anti-inflammatory eye care.',
        price: '₹400',
        duration: '25 mins',
        categoryTag: 'Cornea Care',
        featured: true,
        iconName: 'Sparkles'
      }
    ],

    facilities: [
      {
        id: 'slit-lamp',
        title: 'High-Resolution Slit Lamp Biomicroscopy',
        description: 'Detailed microscopic visualization of anterior segment and corneal layers.',
        iconName: 'Maximize',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'tonometry',
        title: 'Non-Contact Air-Puff Tonometry',
        description: 'Gentle, contactless intraocular pressure measurement for early glaucoma detection.',
        iconName: 'Activity',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80'
      }
    ],

    testimonials: [
      {
        id: 'ey-1',
        patientName: 'Satish Chandra',
        comment: 'Dr. Roy detected my early cataract and explained every step with patience and honesty. The testing equipment is very modern.',
        serviceReceived: 'Cataract Evaluation',
        date: 'Recent visit',
        rating: 5
      }
    ],

    whyChooseUs: [
      {
        title: 'Certified Eye Specialists',
        description: 'Direct consultations with qualified MS Ophthalmologists, never optical sales staff.',
        icon: 'Award'
      },
      {
        title: 'Gentle Diagnostic Tests',
        description: 'Touchless eye pressure testing and comfortable pupil dilation procedures.',
        icon: 'Eye'
      }
    ],

    seo: {
      title: 'ClearVision Eye Care | Best Eye Specialist Clinic in Haridwar',
      description: 'Expert cataract evaluation, computerized vision testing, and dry eye treatments at ClearVision Eye Clinic in Haridwar.',
      keywords: ['eye doctor haridwar', 'eye clinic haridwar', 'cataract doctor', 'spectacle number test'],
      clinicTypeSchema: 'Physician'
    },

    cwdBranding: {
      showCredit: true,
      developerName: 'CWD Technologies',
      developerWebsite: 'https://cwdtechnologies.com',
      creditText: 'Website Designed & Developed by CWD Technologies',
      isDemoNoticeVisible: true
    }
  },

  skinhair: {
    id: 'dermaglow-clinic',
    clinicName: 'DermaGlow Skin, Hair & Aesthetics',
    tagline: 'Scientifically Proven Dermatological Care',
    category: 'Skin, Hair & Aesthetics Clinic',
    categoryType: 'skinhair',
    shortBio: 'Evidence-based dermatology clinic for acne scar treatments, anti-aging therapies, laser hair reduction, and chronic eczema care.',
    fullBio: 'DermaGlow combines clinical medical dermatology with safe cosmetic procedures led by certified dermatologists.',
    establishedYear: 2019,
    logo: '/images/logo.svg',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    aboutImage: 'https://images.unsplash.com/photo-1512290900672-1f02333486c8?auto=format&fit=crop&w=1000&q=80',

    contact: {
      phone: '+919876543250',
      phoneDisplay: '+91 98765 43250',
      whatsapp: '919876543250',
      emergencyPhone: '+91 98765 43251',
      email: 'glow@dermaglow.example',
      address: 'Suite 201, Elite Arcade, BHEL Road',
      city: 'Haridwar',
      state: 'Uttarakhand',
      pincode: '249403',
      landmark: 'Near BHEL Main Gate',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110543.61905398708!2d78.07353915!3d29.94569065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee53c9%3A0x82498e8b62580f00!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
      mapDirectLink: 'https://maps.google.com/?q=BHEL+Haridwar+Uttarakhand'
    },

    timings: {
      mondayToSaturday: '11:00 AM – 08:00 PM',
      sunday: 'Closed',
      lunchBreak: '02:30 PM – 04:00 PM',
      emergencyAvailable: false
    },

    theme: {
      primary: '#9333EA',       // Elegant violet-600
      primaryDark: '#7E22CE',   // Violet-700
      primaryLight: '#FAF5FF',  // Violet-50
      secondary: '#DB2777',     // Pink-600
      accent: '#EC4899',        // Rose accent
      surface: '#FDFBFF'
    },

    doctors: [
      {
        id: 'dr-shalini-verma',
        name: 'Dr. Shalini Verma',
        qualification: 'MBBS, MD (Dermatology, Venereology & Leprosy)',
        specialization: 'Consultant Dermatologist & Dermatosurgeon',
        experienceYears: 10,
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
        availableDays: 'Monday to Saturday',
        timing: '11:00 AM – 02:30 PM & 04:30 PM – 08:00 PM',
        about: 'Specializes in chemical peels, acne clearance protocols, PRP for hair thinning, and allergy patch testing.',
        languages: ['English', 'Hindi']
      }
    ],

    services: [
      {
        id: 'acne-consult',
        name: 'Clinical Acne & Scar Protocol',
        shortDescription: 'Medical grade acne evaluation, oral therapy, and post-acne resurfacing.',
        fullDescription: 'Customized hormonal, dietary, and dermatological plans to halt active breakouts and fade blemishes.',
        price: '₹500',
        duration: '25 mins',
        categoryTag: 'Acne Care',
        featured: true,
        iconName: 'Sparkles'
      },
      {
        id: 'hair-fall-prp',
        name: 'Hair Loss & Scalp Evaluation',
        shortDescription: 'Trichoscopic digital scalp examination, iron/vitamin check advice, and PRP therapy.',
        fullDescription: 'Scientific protocol for androgenetic alopecia and telogen effluvium using autologous growth factors.',
        price: '₹600 Consultation',
        duration: '30 mins',
        categoryTag: 'Hair Care',
        featured: true,
        iconName: 'Activity'
      },
      {
        id: 'pigmentation-peel',
        name: 'Medi-Facials & Chemical Peeling',
        shortDescription: 'Dermatologist-formulated peeling for hyperpigmentation, melasma, and skin rejuvenation.',
        fullDescription: 'Safe superficial and medium depth medical peels under certified physician supervision.',
        price: '₹1,500 – ₹3,000',
        duration: '40 mins',
        categoryTag: 'Aesthetics',
        featured: true,
        iconName: 'Sun'
      }
    ],

    facilities: [
      {
        id: 'tricho-suite',
        title: 'Digital Dermatoscope & Trichoscope',
        description: 'Microscopic magnification of hair follicles and skin moles for accurate diagnosis.',
        iconName: 'Search',
        image: 'https://images.unsplash.com/photo-1512290900672-1f02333486c8?auto=format&fit=crop&w=600&q=80'
      }
    ],

    testimonials: [
      {
        id: 'dg-1',
        patientName: 'Ritu Sen',
        comment: 'Dr. Shalini genuinely cares. No pushy product sales, only honest medical advice. My cystic acne cleared completely within 4 months.',
        serviceReceived: 'Acne Consultation',
        date: 'Recent visit',
        rating: 5
      }
    ],

    whyChooseUs: [
      {
        title: 'Only MD Dermatologists',
        description: 'Consult a qualified doctor, not an uncertified aesthetician or salon technician.',
        icon: 'UserCheck'
      },
      {
        title: 'US-FDA Cleared Technology',
        description: 'All clinical equipment and chemical solutions strictly conform to approved safety standards.',
        icon: 'ShieldCheck'
      }
    ],

    seo: {
      title: 'DermaGlow Skin Clinic | Best Dermatologist in Haridwar',
      description: 'Consult MD Dermatologist Dr. Shalini Verma for acne, hair loss, skin pigmentation, and aesthetic treatments in Haridwar.',
      keywords: ['skin clinic haridwar', 'dermatologist haridwar', 'hair fall doctor', 'acne treatment'],
      clinicTypeSchema: 'MedicalClinic'
    },

    cwdBranding: {
      showCredit: true,
      developerName: 'CWD Technologies',
      developerWebsite: 'https://cwdtechnologies.com',
      creditText: 'Website Designed & Developed by CWD Technologies',
      isDemoNoticeVisible: true
    }
  },

  diagnostic: {
    id: 'accupath-diagnostics',
    clinicName: 'AccuPath Diagnostic & Pathology Centre',
    tagline: 'Accurate Results You Can Trust',
    category: 'Diagnostic & Pathology Centre',
    categoryType: 'diagnostic',
    shortBio: 'Fully automated diagnostic lab offering pathology tests, digital ECG, hormone assays, and health packages with same-day digital reports.',
    fullBio: 'AccuPath brings certified laboratory standards with automated analyzers, barcoded sample integrity, and painless vacuum blood collection for all age groups.',
    establishedYear: 2017,
    logo: '/images/logo.svg',
    heroImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    aboutImage: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80',

    contact: {
      phone: '+919876543260',
      phoneDisplay: '+91 98765 43260',
      whatsapp: '919876543260',
      emergencyPhone: '+91 98765 43261',
      email: 'reports@accupath.example',
      address: 'Shop 8-10, Avas Vikas Colony, Near Main Chowk',
      city: 'Haridwar',
      state: 'Uttarakhand',
      pincode: '249408',
      landmark: 'Near Avas Vikas Community Hall',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110543.61905398708!2d78.07353915!3d29.94569065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee53c9%3A0x82498e8b62580f00!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
      mapDirectLink: 'https://maps.google.com/?q=Avas+Vikas+Haridwar+Uttarakhand'
    },

    timings: {
      mondayToSaturday: '07:00 AM – 08:30 PM (Blood Collection: 07:00 AM onwards)',
      sunday: '07:30 AM – 01:00 PM',
      lunchBreak: 'No lunch break (Continuous Service)',
      emergencyAvailable: false
    },

    theme: {
      primary: '#0891B2',       // Diagnostic cyan-600
      primaryDark: '#0E7490',   // Cyan-700
      primaryLight: '#ECFEFF',  // Cyan-50
      secondary: '#475569',     // Slate-600
      accent: '#06B6D4',        // Cyan accent
      surface: '#F8FAFC'
    },

    doctors: [
      {
        id: 'dr-naveen-trivedi',
        name: 'Dr. Naveen Trivedi',
        qualification: 'MBBS, MD (Pathology)',
        specialization: 'Chief Pathologist & Lab Director',
        experienceYears: 16,
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
        availableDays: 'Monday to Saturday',
        timing: '08:00 AM – 04:00 PM',
        about: 'Over 16 years of expertise in clinical pathology, hematology reviews, fine needle biopsies, and biochemical quality assurance.',
        languages: ['English', 'Hindi']
      }
    ],

    services: [
      {
        id: 'complete-blood-count',
        name: 'CBC & Peripheral Blood Smear',
        shortDescription: 'Automated 5-part differential blood count and microscopic morphology review.',
        fullDescription: 'Screens for anemia, platelet counts, acute infections, and hematological abnormalities.',
        price: '₹280',
        duration: '10 mins',
        categoryTag: 'Hematology',
        featured: true,
        iconName: 'Activity'
      },
      {
        id: 'thyroid-profile',
        name: 'Thyroid Profile Total (T3, T4, TSH)',
        shortDescription: 'Chemiluminescence immunoassay testing for thyroid hormone balance.',
        fullDescription: 'High sensitivity hormone assays calibrated against standard international calibrators.',
        price: '₹450',
        duration: '10 mins',
        categoryTag: 'Biochemistry',
        featured: true,
        iconName: 'Target'
      },
      {
        id: 'lipid-profile',
        name: 'Lipid & Cardiac Risk Profile',
        shortDescription: 'Total cholesterol, HDL, LDL, VLDL, and triglycerides testing.',
        fullDescription: 'Fasting lipid analysis to gauge cardiovascular risk indices and therapeutic response.',
        price: '₹550',
        duration: '10 mins',
        categoryTag: 'Biochemistry',
        featured: true,
        iconName: 'Heart'
      },
      {
        id: 'digital-ecg',
        name: '12-Lead Computerized Digital ECG',
        shortDescription: 'High precision 12-channel electrocardiogram with immediate printout.',
        fullDescription: 'Quick, non-invasive rhythm and cardiac conduction assessment analyzed by physician.',
        price: '₹300',
        duration: '15 mins',
        categoryTag: 'Cardiology',
        featured: true,
        iconName: 'Activity'
      }
    ],

    facilities: [
      {
        id: 'fully-auto-analyzer',
        title: 'Fully Automated Roche & Beckman Analyzers',
        description: 'Zero manual pipette error with closed tube barcoded reading.',
        iconName: 'Cpu',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'home-collection',
        title: 'Safe Home Sample Collection',
        description: 'Pre-booked phlebotomy visits at your doorstep in sterile vacutainers.',
        iconName: 'Home',
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80'
      }
    ],

    testimonials: [
      {
        id: 'ap-1',
        patientName: 'Vikas Aggarwal',
        comment: 'Phlebotomist drew blood with zero pain. Received the PDF test report on WhatsApp within 4 hours. Extremely punctual and accurate lab.',
        serviceReceived: 'Full Body Health Package',
        date: 'Recent visit',
        rating: 5
      }
    ],

    whyChooseUs: [
      {
        title: 'Same-Day Digital Reports',
        description: 'Reports sent securely via WhatsApp & email as soon as verified by the Pathologist.',
        icon: 'FileText'
      },
      {
        title: 'Painless Vacuum Phlebotomy',
        description: 'BD Vacutainer systems guarantee sample cleanliness and minimal discomfort.',
        icon: 'ShieldCheck'
      }
    ],

    seo: {
      title: 'AccuPath Diagnostic Centre | Pathology Lab & Blood Tests in Haridwar',
      description: 'Accurate pathology tests, thyroid profile, digital ECG and home sample collection at AccuPath Diagnostics Haridwar. Fast online reports.',
      keywords: ['pathology lab haridwar', 'blood test near me', 'diagnostic centre haridwar', 'ecg test'],
      clinicTypeSchema: 'DiagnosticLab'
    },

    cwdBranding: {
      showCredit: true,
      developerName: 'CWD Technologies',
      developerWebsite: 'https://cwdtechnologies.com',
      creditText: 'Website Designed & Developed by CWD Technologies',
      isDemoNoticeVisible: true
    }
  }
};
