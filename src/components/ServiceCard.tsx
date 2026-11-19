import React from 'react';
import { Link } from 'react-router-dom';
import { MedicalService } from '../types/clinic';
import { useClinic } from '../context/ClinicContext';
import { 
  Stethoscope, 
  Activity, 
  ShieldCheck, 
  Syringe, 
  Bandage, 
  Microscope,
  Search,
  Zap,
  Sparkles,
  Shield,
  Sun,
  Eye,
  Maximize,
  Clock,
  ArrowRight
} from 'lucide-react';

interface ServiceCardProps {
  service: MedicalService;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { config } = useClinic();

  // Helper to map icon name to Lucide Icon
  const renderIcon = (name?: string) => {
    switch (name) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Syringe': return <Syringe className="w-6 h-6" />;
      case 'Bandage': return <Bandage className="w-6 h-6" />;
      case 'Microscope': return <Microscope className="w-6 h-6" />;
      case 'Search': return <Search className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      case 'Eye': return <Eye className="w-6 h-6" />;
      case 'Maximize': return <Maximize className="w-6 h-6" />;
      default: return <Stethoscope className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Tag & Price */}
        <div className="flex items-center justify-between mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
            style={{ 
              backgroundColor: config.theme.primaryLight,
              color: config.theme.primary 
            }}
          >
            {renderIcon(service.iconName)}
          </div>

          {service.price && (
            <span 
              className="text-xs font-semibold px-2.5 py-1 rounded-full border"
              style={{ 
                borderColor: `${config.theme.primary}30`,
                color: config.theme.primary,
                backgroundColor: `${config.theme.primaryLight}80`
              }}
            >
              {service.price}
            </span>
          )}
        </div>

        {/* Category Tag */}
        {service.categoryTag && (
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            {service.categoryTag}
          </span>
        )}

        {/* Title */}
        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition font-display">
          {service.name}
        </h4>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {service.duration && (
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Avg. Consultation: {service.duration}</span>
          </div>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-slate-50 flex items-center justify-between mt-auto">
        <Link
          to={`/contact?service=${encodeURIComponent(service.id)}`}
          className="text-xs font-semibold inline-flex items-center gap-1.5 transition hover:gap-2"
          style={{ color: config.theme.primary }}
        >
          <span>Enquire for Service</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <a
          href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(`Hello ${config.clinicName}, I would like to enquire about ${service.name} (${service.price || 'Consultation'}).`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-emerald-600 hover:text-emerald-700 font-medium"
        >
          WhatsApp Info
        </a>
      </div>
    </div>
  );
};
