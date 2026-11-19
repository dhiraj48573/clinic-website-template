import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useClinic } from '../context/ClinicContext';
import { AppointmentForm } from '../components/AppointmentForm';
import { SEO } from '../components/SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ExternalLink
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { config } = useClinic();
  const [searchParams] = useSearchParams();

  const preselectedDoctor = searchParams.get('doctor') || undefined;
  const preselectedService = searchParams.get('service') || undefined;

  const directWhatsappEnquiry = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(`Hello ${config.clinicName}, I would like to enquire about appointment availability.`)}`;

  return (
    <>
      <SEO 
        pageTitle="Contact & Appointment"
        pageDescription={`Contact ${config.clinicName} in ${config.contact.city}. Book doctor appointment, check clinic timings, address, phone number, and directions.`}
      />

      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span 
            className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block mb-3"
            style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
          >
            We Are Here To Help
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display">
            Contact & Appointment Booking
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Reach out directly for queries, consultation bookings, and location guidance in {config.contact.city}.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contact Details & Working Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span 
                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
                  style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
                >
                  Direct Clinic Contacts
                </span>
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  Get in Touch
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Our reception desk is available during clinic working hours to answer questions and schedule appointments.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                
                {/* Phone Call */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: config.theme.primary }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Phone Reception</span>
                    <a 
                      href={`tel:${config.contact.phone}`} 
                      className="text-base font-bold text-slate-900 hover:text-cyan-700 transition"
                    >
                      {config.contact.phoneDisplay}
                    </a>
                    {config.contact.emergencyPhone && (
                      <p className="text-[11px] text-slate-400 mt-0.5">Urgent care: {config.contact.emergencyPhone}</p>
                    )}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">WhatsApp Desk</span>
                    <a 
                      href={directWhatsappEnquiry}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-900 hover:underline flex items-center gap-1.5"
                    >
                      <span>Chat on WhatsApp (+{config.contact.whatsapp})</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-[11px] text-emerald-700 mt-0.5">Quick responses for appointment confirmations</p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: config.theme.secondary }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Email Inquiries</span>
                    <a 
                      href={`mailto:${config.contact.email}`} 
                      className="text-sm font-bold text-slate-900 hover:text-cyan-700 transition"
                    >
                      {config.contact.email}
                    </a>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: config.theme.primaryDark }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Clinic Address</span>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed mt-0.5">
                      {config.contact.address}, {config.contact.city}, {config.contact.state} – {config.contact.pincode}
                    </p>
                    {config.contact.landmark && (
                      <p className="text-[11px] text-slate-500 mt-0.5">Landmark: {config.contact.landmark}</p>
                    )}
                  </div>
                </div>

              </div>

              {/* Clinic Timings Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Clock className="w-4 h-4 text-cyan-700" style={{ color: config.theme.primary }} />
                  <span>Clinic Timings & Working Hours</span>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                    <span className="font-semibold text-slate-700">Monday – Saturday</span>
                    <span className="text-slate-900 font-medium">{config.timings.mondayToSaturday}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                    <span className="font-semibold text-slate-700">Sunday</span>
                    <span className="text-slate-600">{config.timings.sunday}</span>
                  </div>
                  {config.timings.lunchBreak && (
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-500">Daily Lunch Break</span>
                      <span className="text-slate-600">{config.timings.lunchBreak}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7">
              <AppointmentForm 
                preselectedDoctorId={preselectedDoctor}
                preselectedServiceId={preselectedService}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Google Maps Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <span 
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
                style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
              >
                Interactive Map
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                How to Reach {config.clinicName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Located conveniently in {config.contact.city} with convenient street parking.
              </p>
            </div>

            <a
              href={config.contact.mapDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition flex items-center gap-2 w-fit shadow-xs"
            >
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Open in Google Maps Navigation</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-soft border border-slate-200 bg-slate-200 relative">
            <iframe
              title={`Interactive map for ${config.clinicName}`}
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
