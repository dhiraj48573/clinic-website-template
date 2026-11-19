import React from 'react';
import { Link } from 'react-router-dom';
import { Doctor } from '../types/clinic';
import { useClinic } from '../context/ClinicContext';
import { 
  Award, 
  Calendar, 
  Clock, 
  Languages, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const { config } = useClinic();

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Doctor Photo & Badges */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
          <img
            src={doctor.image}
            alt={`${doctor.name} - ${doctor.specialization}`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Fallback to high quality medical doctor avatar if external image fails
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
          
          {/* Experience or Verification pill */}
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-emerald-700 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Doctor
            </span>
          </div>

          {/* Quick Doctor Name overlay on photo bottom */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold font-display drop-shadow-sm">
              {doctor.name}
            </h3>
            <p className="text-xs text-cyan-200 font-medium">
              {doctor.specialization}
            </p>
          </div>
        </div>

        {/* Doctor Profile Details */}
        <div className="p-6 space-y-4">
          {/* Qualifications */}
          <div className="flex items-start gap-2.5 text-xs text-slate-700">
            <Award className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" style={{ color: config.theme.primary }} />
            <div>
              <span className="font-semibold text-slate-900 block">Verified Qualifications</span>
              <span className="text-slate-600">{doctor.qualification}</span>
            </div>
          </div>

          {/* Consultation Days & Timing */}
          <div className="flex items-start gap-2.5 text-xs text-slate-700">
            <Calendar className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" style={{ color: config.theme.primary }} />
            <div>
              <span className="font-semibold text-slate-900 block">Available Days</span>
              <span className="text-slate-600">{doctor.availableDays}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-xs text-slate-700">
            <Clock className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" style={{ color: config.theme.primary }} />
            <div>
              <span className="font-semibold text-slate-900 block">Consultation Hours</span>
              <span className="text-slate-600">{doctor.timing}</span>
            </div>
          </div>

          {/* Languages spoken */}
          {doctor.languages && (
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <Languages className="w-3.5 h-3.5 text-slate-400" />
              <span>Speaks: {doctor.languages.join(', ')}</span>
            </div>
          )}

          {/* About Doctor */}
          {doctor.about && (
            <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
              {doctor.about}
            </p>
          )}
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-6 pt-0 mt-auto">
        <Link
          to={`/contact?doctor=${encodeURIComponent(doctor.id)}`}
          className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold text-white transition flex items-center justify-center gap-2 shadow-sm hover:opacity-95"
          style={{ backgroundColor: config.theme.primary }}
        >
          <span>Book Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
