import React from 'react';
import { Link } from 'react-router-dom';
import { useClinic } from '../context/ClinicContext';
import { DoctorCard } from '../components/DoctorCard';
import { FacilityCard } from '../components/FacilityCard';
import { SEO } from '../components/SEO';
import { 
  ShieldCheck, 
  Target, 
  Heart, 
  CheckCircle,
  Building
} from 'lucide-react';

export const About: React.FC = () => {
  const { config } = useClinic();

  return (
    <>
      <SEO 
        pageTitle="About Us"
        pageDescription={`Learn more about ${config.clinicName} in ${config.contact.city}, our medical ethos, verified doctors, and hygienic clinic infrastructure.`}
      />

      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span 
            className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block mb-3"
            style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
          >
            Our Background & Medical Standards
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display">
            About {config.clinicName}
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Delivering ethical, patient-centric healthcare with modern clinical amenities and experienced practitioners in {config.contact.city}.
          </p>
        </div>
      </section>

      {/* Clinic Background & Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Side */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-soft-lg border-4 border-slate-50 bg-slate-100">
                <img
                  src={config.aboutImage}
                  alt={`Clinic interior at ${config.clinicName}`}
                  className="w-full h-80 sm:h-96 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80';
                  }}
                />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-white shadow-xl border border-slate-100 text-xs">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-base"
                  style={{ backgroundColor: config.theme.primary }}
                >
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Established in {config.establishedYear}</span>
                  <span className="text-slate-500">Serving {config.contact.city} & nearby regions</span>
                </div>
              </div>
            </div>

            {/* Narrative Side */}
            <div className="lg:col-span-7 space-y-6">
              <span 
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full inline-block"
                style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
              >
                Our Clinical Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Committed to Honest & Compassionate Care
              </h2>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {config.fullBio}
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                At {config.clinicName}, we believe that a clinic visit should inspire reassurance, clarity, and trust. Our clinical protocols emphasize detailed doctor-patient communication, transparent explanations of diagnostic investigations, and evidence-guided therapies without commercial pressure.
              </p>

              {/* Verified Credentials Note */}
              <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 text-xs text-cyan-950 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold mb-0.5">Verified Medical Credentials</strong>
                  <span>
                    All consulting doctors at our clinic hold authentic medical degrees and statutory state council registrations. Consultation fees and procedure costs are always shared upfront.
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-soft space-y-4">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                style={{ backgroundColor: config.theme.primary }}
              >
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To provide accessible, high-standard primary and specialty medical care that prioritizes preventive wellness, precision diagnosis, and patient comfort above all else.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Uncompromising adherence to hygiene and sterilization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Punctual consultations that respect patient time</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent treatment plans with zero hidden costs</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-soft space-y-4">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                style={{ backgroundColor: config.theme.secondary }}
              >
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To become the most trusted neighborhood healthcare partner in {config.contact.city}, where every patient receives dignified attention, evidence-based therapies, and lifelong health guidance.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Continuous technological upgrades in diagnostic equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fostering preventive lifestyle wellness across all age groups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Compassionate follow-up care for long-term health stability</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Doctor & Staff Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span 
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
              style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
            >
              Consulting Specialists
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Doctor Profiles & Verified Qualifications
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Learn about our doctors' specialized medical education, consulting experience, and consultation hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {config.doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

        </div>
      </section>

      {/* Medical Infrastructure & Facilities */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span 
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
              style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
            >
              Clinic Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Medical Equipment & Facilities
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Designed with patient comfort, safety, and modern clinical efficacy in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            Have Questions About Our Treatments or Doctors?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Our clinic desk is happy to answer inquiries, share doctor schedules, or help you book your visit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-white font-semibold shadow-md transition hover:opacity-95 text-sm"
              style={{ backgroundColor: config.theme.primary }}
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-200 text-slate-800 font-semibold hover:bg-slate-50 transition text-sm"
            >
              Call Clinic Desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
