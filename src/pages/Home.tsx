import React from 'react';
import { Link } from 'react-router-dom';
import { useClinic } from '../context/ClinicContext';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { DoctorCard } from '../components/DoctorCard';
import { FacilityCard } from '../components/FacilityCard';
import { AppointmentForm } from '../components/AppointmentForm';
import { SEO } from '../components/SEO';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  ExternalLink, 
  Star
} from 'lucide-react';

export const Home: React.FC = () => {
  const { config } = useClinic();

  // Helper for Why Choose Us icons
  const renderWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle': return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case 'Clock': return <Clock className="w-5 h-5 text-cyan-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-blue-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <>
      <SEO />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Clinic Preview */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Preview */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-soft-lg bg-slate-100 border-4 border-slate-50">
                <img
                  src={config.aboutImage}
                  alt={`Inside ${config.clinicName}`}
                  className="w-full h-80 sm:h-96 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block p-4 rounded-2xl bg-white shadow-xl border border-slate-100 max-w-[200px] text-xs">
                <div className="font-bold text-slate-900 text-lg font-display" style={{ color: config.theme.primary }}>
                  Est. {config.establishedYear}
                </div>
                <div className="text-slate-500">Dedicated to quality patient welfare</div>
              </div>
            </div>

            {/* Content Preview */}
            <div className="lg:col-span-7 space-y-5">
              <span 
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
              >
                About Our Clinic
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Dedicated Healthcare in {config.contact.city}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {config.fullBio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Verified Qualifications & Registration</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Clean & Sanitized Clinic Consultation Rooms</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct Doctor Consultations without Rush</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>WhatsApp Appointment Confirmation & Follow-up</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
                  style={{ color: config.theme.primary }}
                >
                  <span>Learn more about our mission & doctors</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Services Section */}
      <section className="py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span 
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
                style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
              >
                Specialized Treatments
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Featured Medical Services
              </h2>
              <p className="text-slate-500 text-sm mt-1 max-w-xl">
                Accurate clinical diagnosis, evidence-based treatments, and transparent consultation fees.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-cyan-700 transition"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Doctors Profile Preview */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span 
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
              style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
            >
              Medical Specialists
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Meet Our Qualified Doctors
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              All qualifications and consultation hours are verified. We prioritize thorough examinations and ethical medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {config.doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-cyan-400 border border-slate-700 mb-2 inline-block">
              Patient-First Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Patients Choose {config.clinicName}
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Committed to providing honest, safe, and comfortable healthcare experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.whyChooseUs.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-700/70 flex items-center justify-center mb-4">
                    {renderWhyIcon(item.icon)}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Clinic Facilities & Equipment Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span 
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
                style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
              >
                Infrastructure & Hygiene
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Modern Clinic Facilities
              </h2>
              <p className="text-slate-500 text-sm mt-1 max-w-xl">
                Equipped with sterile instruments, diagnostic support, and air-conditioned patient waiting areas.
              </p>
            </div>

            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-cyan-700 transition"
            >
              <span>Explore Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>

        </div>
      </section>

      {/* 7. Patient Reviews / Testimonials (genuine only) */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span 
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
              style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
            >
              Patient Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Patient Experiences
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Real reflections of our clinical service and compassionate consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{t.patientName}</span>
                    <span className="text-slate-400">{t.serviceReceived}</span>
                  </div>
                  {t.date && (
                    <span className="text-slate-400 text-[11px]">{t.date}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Timings & Appointment Booking Form */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Timings & Emergency Guidance */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span 
                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
                  style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
                >
                  Consultation Timings
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Planning Your Visit
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  We schedule consultations to minimize waiting times and keep the clinic uncrowded. Please book in advance or call ahead.
                </p>
              </div>

              {/* Timings card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" style={{ color: config.theme.primary }} />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Monday to Saturday</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{config.timings.mondayToSaturday}</p>
                    {config.timings.lunchBreak && (
                      <p className="text-[11px] text-slate-400 mt-1">Lunch break: {config.timings.lunchBreak}</p>
                    )}
                  </div>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sunday Schedule</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{config.timings.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Direct Call & Address Box */}
              <div className="p-6 rounded-2xl border border-slate-100 space-y-3">
                <h4 className="text-sm font-bold text-slate-900">Prefer Direct Assistance?</h4>
                <p className="text-xs text-slate-600">
                  Call our reception directly for immediate slot availability or urgent inquiries:
                </p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-cyan-700 transition"
                  style={{ color: config.theme.primary }}
                >
                  <Phone className="w-4 h-4" />
                  <span>{config.contact.phoneDisplay}</span>
                </a>
              </div>

            </div>

            {/* Right: Interactive Appointment Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>

      {/* 9. Location Preview with Google Maps */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <span 
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
                style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
              >
                Find Us Easily
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Location in {config.contact.city}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {config.contact.address}, {config.contact.city}, {config.contact.state} - {config.contact.pincode}
              </p>
            </div>

            <a
              href={config.contact.mapDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition flex items-center gap-2 w-fit shadow-xs"
            >
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-soft border border-slate-200 bg-slate-200 relative">
            <iframe
              title={`Location map of ${config.clinicName}`}
              src={config.contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
