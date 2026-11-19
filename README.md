# CWD Technologies – Premium Clinic & Healthcare Website Template

A modern, responsive, high-performance, and fully reusable clinic website template engineered for freelance web development businesses, agencies, and healthcare organizations.

Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, **React Router**, **Lucide React**, **Framer Motion**, and **React Hook Form**.

---

## 🌟 Supported Healthcare Clinic Categories

This template can be deployed for any healthcare specialty:
1. **General Physician & Family Practice Clinics** *(Demo Default: Care Plus Clinic, Haridwar)*
2. **Dental Care & Implant Clinics**
3. **Multispeciality Medical Clinics**
4. **Physiotherapy & Rehabilitation Centres**
5. **Eye Care & Retinal Clinics**
6. **Skin, Hair & Aesthetic Dermatology Clinics**
7. **Diagnostic & Pathology Centres**
8. **Women's Healthcare & Obstetrics Clinics**
9. **Pediatric & Child Wellness Clinics**

---

## 📂 Project Structure

```text
f:/LEAD-CWD/Clinic Template/
├── public/
│   ├── favicon.svg             # Medical favicon icon
│   ├── robots.txt              # Search engine crawler instructions
│   └── sitemap.xml             # SEO XML Sitemap
├── src/
│   ├── assets/                 # Brand assets & static graphics
│   ├── components/             # Reusable medical UI components
│   │   ├── AppointmentForm.tsx # React Hook Form with direct WhatsApp link
│   │   ├── CategorySwitcher.tsx# Top demo switcher for client pitching
│   │   ├── DoctorCard.tsx      # Doctor credentials & timing card
│   │   ├── FacilityCard.tsx    # Infrastructure & equipment card
│   │   ├── Footer.tsx          # Comprehensive clinic footer & disclaimer
│   │   ├── Hero.tsx            # High-conversion hero section
│   │   ├── Navbar.tsx          # Responsive navigation & mobile drawer
│   │   ├── SEO.tsx             # Schema.org JSON-LD & meta tags
│   │   ├── ServiceCard.tsx     # Medical treatments & fee card
│   │   └── WhatsAppButton.tsx  # Floating quick chat widget
│   ├── config/
│   │   ├── clinicConfig.ts     # PRIMARY CLIENT CUSTOMIZATION FILE
│   │   └── presets.ts          # Pre-built configs for all 7 clinic types
│   ├── context/
│   │   └── ClinicContext.tsx   # Dynamic theme & configuration provider
│   ├── pages/
│   │   ├── Home.tsx            # Main landing page
│   │   ├── About.tsx           # Clinic mission, background & verified staff
│   │   ├── Services.tsx        # Filterable services & consultation charges
│   │   ├── Doctors.tsx         # Verified doctors & clinical infrastructure
│   │   └── Contact.tsx         # Address, timings, maps & appointment form
│   ├── types/
│   │   └── clinic.ts           # Strict TypeScript interfaces
│   ├── App.tsx                 # Core router & layout
│   ├── index.css               # Tailwind CSS & design system variables
│   └── main.tsx                # React root bootstrap
├── index.html                  # HTML entry point with Google Fonts
├── package.json                # Dependencies and build scripts
├── tailwind.config.js          # Extended theme configuration
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite bundler configuration
```

---

## 🚀 Quick Start Guide

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle inside `dist/`.

---

## 🛠️ Complete Client Customization Guide

All client-specific customizations are handled centrally inside:
`src/config/clinicConfig.ts`

You do **not** need to touch individual page files or rewrite components.

---

### 1. How to Change Clinic Name and Logo

Open `src/config/clinicConfig.ts`:
```typescript
export const clinicConfig: ClinicConfig = {
  ...baseConfig,
  clinicName: "City Heart Care Clinic",
  tagline: "Your Health, Our Priority",
  category: "Cardiology & General Clinic",
  logo: "/images/custom-logo.svg", // place your logo in public/images/
  // ...
};
```

---

### 2. How to Update Doctor Profiles

Doctors are configured in the `doctors` array inside `clinicConfig.ts`:
```typescript
doctors: [
  {
    id: "dr-sharma",
    name: "Dr. R. K. Sharma",
    qualification: "MBBS, MD (General Medicine)",
    specialization: "Consultant Physician & Diabetologist",
    experienceYears: 14,
    image: "https://your-domain.com/doctor-photo.jpg",
    availableDays: "Monday to Saturday",
    timing: "10:00 AM – 01:30 PM & 04:30 PM – 08:00 PM",
    about: "Specializes in adult diabetes care and lifestyle disorders.",
    languages: ["English", "Hindi"]
  }
]
```
> **Ethical Note:** Never add fake registrations, awards, or medical degrees. Only use verified credentials provided by the clinic client.

---

### 3. How to Add or Remove Services

Update the `services` array inside `clinicConfig.ts`:
```typescript
services: [
  {
    id: "root-canal",
    name: "Single-Sitting Root Canal",
    shortDescription: "Painless microscopic rotary root canal treatment.",
    fullDescription: "Eliminates infection while preserving natural tooth structure.",
    price: "₹3,500 – ₹5,000",
    duration: "45 mins",
    categoryTag: "Endodontics",
    featured: true,
    iconName: "Zap" // Lucide icon name: Stethoscope, Activity, ShieldCheck, Zap, Sparkles, Eye, etc.
  }
]
```

---

### 4. How to Update Consultation Fees

Consultation fees are set per service in the `price` property:
```typescript
price: "₹350" // or "₹500 / session" or "Free Follow-up within 7 days"
```
If a service does not have a fixed fee, you can omit the `price` field or set it to `"Contact for Pricing"`.

---

### 5. How to Replace Clinic Images

1. Place your client's high-resolution images in `public/images/`:
   - `public/images/hero.jpg`
   - `public/images/about.jpg`
   - `public/images/doctor-1.jpg`
   - `public/images/facility-1.jpg`
2. Update the image paths in `clinicConfig.ts`:
```typescript
heroImage: "/images/hero.jpg",
aboutImage: "/images/about.jpg",
```

---

### 6. How to Change Theme Colors

Theme colors can be customized to match any clinic brand palette:
```typescript
theme: {
  primary: "#0E7490",       // Primary buttons, active tabs, header icons
  primaryDark: "#155E75",   // Dark contrast hover states
  primaryLight: "#ECFEFF",  // Light pill and card backgrounds
  secondary: "#0D9488",     // Supporting medical teal
  accent: "#10B981",        // Badges, ticks, positive accents
  surface: "#F8FAFC"        // Clean background surface
}
```
All colors automatically propagate to the CSS custom properties and Tailwind styles.

---

### 7. How to Update Contact Information

Update the `contact` block:
```typescript
contact: {
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210", // Country code + digits with NO '+' or spaces
  emergencyPhone: "+91 98765 43211",
  email: "care@example.com",
  address: "Shop 12-14, Ranipur More, Near City Center",
  city: "Haridwar",
  state: "Uttarakhand",
  pincode: "249401",
  landmark: "Near City Center Plaza",
  mapEmbedUrl: "YOUR_GOOGLE_MAPS_EMBED_IFRAME_SRC",
  mapDirectLink: "https://maps.google.com/?q=Your+Clinic+Address"
}
```

---

### 8. How to Change WhatsApp Number

Ensure the number in `contact.whatsapp` contains **only numbers** (no plus sign, spaces, or hyphens):
- Correct: `"919876543210"`
- Incorrect: `"+91 98765 43210"`

The appointment form and floating WhatsApp button automatically encode the message and route to:
`https://wa.me/919876543210?text=...`

---

### 9. How to Update Google Maps

1. Open [Google Maps](https://maps.google.com) and search for the clinic's physical address.
2. Click **Share** > **Embed a map**.
3. Copy the URL inside `src="..."` and paste it into `mapEmbedUrl` in `clinicConfig.ts`.
4. Copy the direct share link and paste it into `mapDirectLink`.

---

### 10. How to Switch Categories (Presets)

To switch the entire site to a Dental Clinic, Eye Clinic, Physiotherapy, or Diagnostic Lab in one line:
```typescript
// in src/config/clinicConfig.ts:
export const ACTIVE_PRESET: keyof typeof clinicPresets = 'dental';
// options: 'general' | 'dental' | 'physiotherapy' | 'eye' | 'skinhair' | 'diagnostic'
```
To hide the top demo switcher banner for a client in production:
```typescript
export const SHOW_DEMO_PRESET_SWITCHER = false;
```

---

### 11. How to Deploy the Website

#### Deploying on Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository.
4. Framework Preset: **Vite**
5. Root Directory: `./`
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click **Deploy**.

For single-page routing on Vercel, ensure a `vercel.json` exists:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

#### Deploying on Hostinger / cPanel / Shared Hosting
1. Run `npm run build` locally.
2. Open the generated `dist/` folder.
3. Upload all contents of `dist/` directly into your hosting server's `public_html/` directory.
4. Ensure an `.htaccess` file exists inside `public_html/` to support client-side routing:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Deploying on Netlify
1. Create a `_redirects` file in `public/` containing:
```text
/*    /index.html   200
```
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 🔒 Healthcare Privacy & Appointment Policies

- **No Sensitive Medical Data:** The appointment form only captures patient name, phone, doctor, service, date, and preferred time. It deliberately does not ask for confidential medical history or diagnosis details.
- **Enquiry Disclaimer:** All appointment requests clearly state: *"Submitting an enquiry does not confirm an appointment. The clinic reception must confirm availability directly."*
- **Ethical Content:** The template contains zero fake awards, fabricated ratings, or misleading doctor claims.

---

## 💼 Commercial Ownership & Developer Credits

Developed by **CWD Technologies** for professional commercial freelance distribution.
The footer attribution can be configured in `clinicConfig.ts`:
```typescript
cwdBranding: {
  showCredit: true, // set to false for white-label client projects
  developerName: "CWD Technologies",
  developerWebsite: "https://cwdtechnologies.com",
  creditText: "Website Designed & Developed by CWD Technologies",
  isDemoNoticeVisible: false // disable demo banner in production
}
```
