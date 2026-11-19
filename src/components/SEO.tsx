import React from 'react';
import { useClinic } from '../context/ClinicContext';

interface SEOProps {
  pageTitle?: string;
  pageDescription?: string;
}

export const SEO: React.FC<SEOProps> = ({ pageTitle, pageDescription }) => {
  const { config } = useClinic();

  const title = pageTitle ? `${pageTitle} | ${config.clinicName}` : config.seo.title;
  const description = pageDescription || config.seo.description;

  React.useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  // Schema.org Structured Data (MedicalClinic / Dentist / Physician / DiagnosticLab)
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': config.seo.clinicTypeSchema || 'MedicalClinic',
    name: config.clinicName,
    description: config.shortBio,
    telephone: config.contact.phone,
    email: config.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.contact.address,
      addressLocality: config.contact.city,
      addressRegion: config.contact.state,
      postalCode: config.contact.pincode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '29.9457',
      longitude: '78.0735'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00'
      }
    ],
    priceRange: '₹₹',
    medicalSpecialty: config.category,
    isAcceptingNewPatients: true
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
