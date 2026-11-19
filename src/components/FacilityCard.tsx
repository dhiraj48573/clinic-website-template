import React from 'react';
import { Facility } from '../types/clinic';
import { useClinic } from '../context/ClinicContext';
import { 
  Building, 
  FileText, 
  Bed, 
  Pill, 
  ShieldCheck, 
  Radio, 
  Armchair, 
  Dumbbell, 
  Cpu, 
  Maximize, 
  Activity, 
  Search, 
  Home 
} from 'lucide-react';

interface FacilityCardProps {
  facility: Facility;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  const { config } = useClinic();

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Building': return <Building className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Bed': return <Bed className="w-5 h-5" />;
      case 'Pill': return <Pill className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Radio': return <Radio className="w-5 h-5" />;
      case 'Armchair': return <Armchair className="w-5 h-5" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Maximize': return <Maximize className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-card transition-all duration-300 group">
      {facility.image && (
        <div className="h-44 w-full overflow-hidden bg-slate-100 relative">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80';
            }}
          />
          <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center text-cyan-700 shadow-sm" style={{ color: config.theme.primary }}>
            {renderIcon(facility.iconName)}
          </div>
        </div>
      )}

      <div className="p-5">
        <h4 className="text-base font-bold text-slate-900 mb-1.5 font-display group-hover:text-cyan-700 transition">
          {facility.title}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          {facility.description}
        </p>
      </div>
    </div>
  );
};
