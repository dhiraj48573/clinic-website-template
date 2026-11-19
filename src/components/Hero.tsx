import React from 'react';
import { Link } from 'react-router-dom';
import { useClinic } from '../context/ClinicContext';
import { 
  Calendar, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { config } = useClinic();

  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(`Hello ${config.clinicName}, I would like to enquire about doctor consultation timings.`)}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/20 to-white pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative background glow */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: config.theme.primary }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Category / Verified pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-cyan-800" style={{ color: config.theme.primary }}>
                {config.category}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Clinical Facility
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-[1.15]">
              Your Health, <br className="hidden sm:inline" />
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${config.theme.primary}, ${config.theme.secondary})`
                }}
              >
                Our Priority
              </span>
            </h1>

            {/* Short Clinic Intro */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {config.shortBio}
            </p>

            {/* Key Service Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs font-medium text-slate-600 pt-1">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-600" style={{ color: config.theme.primary }} />
                Verified Specialist Doctors
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                Punctual Appointment Slots
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Sterilized Modern Facility
              </span>
            </div>

            {/* Action Buttons: Appointment, Call, WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-white font-semibold shadow-soft-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 text-sm group"
                style={{ backgroundColor: config.theme.primary }}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={`tel:${config.contact.phone}`}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-semibold shadow-xs hover:bg-slate-50 transition flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-cyan-700" style={{ color: config.theme.primary }} />
                <span>Call {config.contact.phoneDisplay}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold hover:bg-emerald-100 transition flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Quick Micro Trust Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
              <div>
                <span className="font-bold text-slate-900 block text-base font-display">
                  {config.doctors.length}+
                </span>
                <span>Specialist Doctors</span>
              </div>
              <div className="h-7 w-px bg-slate-200"></div>
              <div>
                <span className="font-bold text-slate-900 block text-base font-display">
                  {config.services.length}+
                </span>
                <span>Medical Services</span>
              </div>
              <div className="h-7 w-px bg-slate-200"></div>
              <div>
                <span className="font-bold text-slate-900 block text-base font-display">
                  {config.contact.city}
                </span>
                <span>Uttarakhand, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Medical Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src={config.heroImage}
                  alt={`${config.clinicName} Facility & Consultation`}
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

                {/* Bottom floating badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white text-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700 block" style={{ color: config.theme.primary }}>
                        Doctor Consultation
                      </span>
                      <p className="text-sm font-bold text-slate-900">
                        {config.doctors[0]?.name || 'Chief Medical Consultant'}
                      </p>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-emerald-100 text-emerald-800 font-semibold rounded-full">
                      Open Today
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-3 p-3.5 bg-white rounded-2xl shadow-xl border border-slate-100 text-xs">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: config.theme.primary }}
                >
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Strict Hygiene</span>
                  <span className="text-slate-500">Sanitized Rooms</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
