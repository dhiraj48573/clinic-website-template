import React from 'react';
import { Link } from 'react-router-dom';
import { useClinic } from '../context/ClinicContext';
import { DoctorCard } from '../components/DoctorCard';
import { FacilityCard } from '../components/FacilityCard';
import { SEO } from '../components/SEO';
import { 
  ShieldCheck, 
  PhoneCall
} from 'lucide-react';

export const Doctors: React.FC = () => {
  const { config } = useClinic();

  return (
    <>
      <SEO 
        pageTitle="Doctors & Facilities"
        pageDescription={`Meet qualified doctors and explore medical facilities at ${config.clinicName} in ${config.contact.city}. Verified qualifications and modern infrastructure.`}
      />

      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span 
            className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block mb-3"
            style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
          >
            Clinical Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display">
            Doctors & Clinic Facilities
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Verified qualifications, dedicated consulting hours, and sanitized modern clinic infrastructure.
          </p>
        </div>
      </section>

      {/* Verified Doctors Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span 
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
                style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
              >
                Verified Practitioners
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Consulting Specialists
              </h2>
              <p className="text-slate-500 text-sm mt-1 max-w-xl">
                Our doctors bring recognized medical degrees and ethical clinical expertise to every patient visit.
              </p>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>All qualifications are strictly verified</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {config.doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

        </div>
      </section>

      {/* Facilities & Infrastructure Section */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span 
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
              style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
            >
              Hygienic Clinical Environment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Medical Facilities & Equipment
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Cleanliness and modern medical tools ensure accurate diagnosis and seamless patient comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>

        </div>
      </section>

      {/* Doctor Availability & Scheduling Guidance */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Direct Appointment Scheduling
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                Need to Consult a Specialist?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Verify available slots and request your consultation online. Our reception confirms your time via WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm shadow-md transition text-center"
              >
                Book Consultation Now
              </Link>
              <a
                href={`tel:${config.contact.phone}`}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm transition text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
