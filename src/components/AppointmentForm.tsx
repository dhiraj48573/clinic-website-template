import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useClinic } from '../context/ClinicContext';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Stethoscope, 
  MessageSquare, 
  CheckCircle, 
  ShieldCheck, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';

interface AppointmentFormData {
  patientName: string;
  phone: string;
  doctorId: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

interface AppointmentFormProps {
  preselectedDoctorId?: string;
  preselectedServiceId?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  preselectedDoctorId,
  preselectedServiceId
}) => {
  const { config } = useClinic();
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<AppointmentFormData>({
    defaultValues: {
      doctorId: preselectedDoctorId || (config.doctors[0]?.id || ''),
      serviceId: preselectedServiceId || (config.services[0]?.id || ''),
      preferredTime: 'Morning (10:00 AM – 01:00 PM)'
    }
  });

  const onSubmit = (data: AppointmentFormData) => {
    const selectedDoctor = config.doctors.find(d => d.id === data.doctorId);
    const selectedService = config.services.find(s => s.id === data.serviceId);

    // Format clean WhatsApp inquiry message
    const formattedMessage = 
      `*New Appointment Enquiry – ${config.clinicName}*\n\n` +
      `• *Patient Name:* ${data.patientName}\n` +
      `• *Phone Number:* ${data.phone}\n` +
      `• *Selected Doctor:* ${selectedDoctor ? selectedDoctor.name : 'Any Available Doctor'}\n` +
      `• *Service Required:* ${selectedService ? selectedService.name : 'General Consultation'}\n` +
      `• *Preferred Date:* ${data.preferredDate}\n` +
      `• *Preferred Time Slot:* ${data.preferredTime}\n` +
      (data.message ? `• *Additional Note:* ${data.message}\n` : '') +
      `\n_Sent via ${config.clinicName} Website Enquiry Form_`;

    setSubmittedMessage(formattedMessage);

    // Open WhatsApp directly
    const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleReset = () => {
    setSubmittedMessage(null);
    reset();
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-soft-lg border border-slate-100">
      {/* Title & Guidelines */}
      <div className="mb-6">
        <span 
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2"
          style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
        >
          Priority Consultation Request
        </span>
        <h3 className="text-2xl font-bold text-slate-900 font-display">
          Request an Appointment
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Fill in your details below. Our reception team will verify schedule availability and confirm your booking via phone or WhatsApp.
        </p>
      </div>

      {submittedMessage ? (
        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center space-y-4 animate-fadeIn">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">Enquiry Prepared Successfully!</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
              Your appointment request was forwarded to our WhatsApp desk. If the WhatsApp window did not open automatically, click the button below.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(submittedMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition flex items-center gap-2 text-sm"
            >
              <span>Open in WhatsApp</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={handleReset}
              className="px-4 py-3 text-slate-700 hover:text-slate-900 font-medium text-sm transition"
            >
              Submit Another Request
            </button>
          </div>

          <div className="text-xs text-slate-500 pt-2 border-t border-emerald-200/60">
            <strong>Note:</strong> An enquiry does not constitute a confirmed appointment until verified by clinic staff.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Patient Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                Patient Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                {...register('patientName', {
                  required: 'Patient name is required',
                  minLength: { value: 2, message: 'Name must have at least 2 characters' }
                })}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
                  errors.patientName
                    ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/30'
                    : 'border-slate-200 focus:border-cyan-600 focus:ring-cyan-100'
                }`}
              />
              {errors.patientName && (
                <p className="text-rose-500 text-xs mt-1">{errors.patientName.message}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                Mobile Number (for WhatsApp verification) <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                {...register('phone', {
                  required: 'Contact number is required',
                  pattern: {
                    value: /^[0-9+ ]{10,14}$/,
                    message: 'Please enter a valid phone number'
                  }
                })}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/30'
                    : 'border-slate-200 focus:border-cyan-600 focus:ring-cyan-100'
                }`}
              />
              {errors.phone && (
                <p className="text-rose-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Select Doctor */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-slate-400" />
                Select Doctor <span className="text-rose-500">*</span>
              </label>
              <select
                {...register('doctorId', { required: 'Please select a doctor' })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 bg-white"
              >
                {config.doctors.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} – {doc.specialization}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Required */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                Service Required <span className="text-rose-500">*</span>
              </label>
              <select
                {...register('serviceId', { required: 'Please select a service' })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 bg-white"
              >
                {config.services.map((svc) => (
                  <option key={svc.id} value={svc.id}>
                    {svc.name} {svc.price ? `(${svc.price})` : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Preferred Date <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                {...register('preferredDate', { required: 'Preferred date is required' })}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
                  errors.preferredDate
                    ? 'border-rose-300 focus:ring-rose-200'
                    : 'border-slate-200 focus:border-cyan-600 focus:ring-cyan-100'
                }`}
              />
              {errors.preferredDate && (
                <p className="text-rose-500 text-xs mt-1">{errors.preferredDate.message}</p>
              )}
            </div>

            {/* Preferred Time Slot */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Preferred Time Slot <span className="text-rose-500">*</span>
              </label>
              <select
                {...register('preferredTime', { required: 'Please pick a time slot' })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 bg-white"
              >
                <option value="Morning (09:00 AM – 01:00 PM)">Morning (09:00 AM – 01:00 PM)</option>
                <option value="Afternoon (01:00 PM – 04:00 PM)">Afternoon (01:00 PM – 04:00 PM)</option>
                <option value="Evening (04:30 PM – 08:00 PM)">Evening (04:30 PM – 08:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
              Brief Non-Sensitive Note (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. First-time visit, or follow-up consultation"
              {...register('message')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
            ></textarea>
            <p className="text-xs text-slate-400 mt-1">
              Please do not include confidential diagnoses or sensitive medical history in this inquiry form.
            </p>
          </div>

          {/* Mandatory Disclaimers */}
          <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Booking Confirmation Policy:</strong> Submitting this online enquiry transmits your details to our WhatsApp clinic reception. It does <em>not</em> automatically reserve the time slot. The clinic team will confirm doctor availability directly.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl text-white font-semibold shadow-md transition-all hover:opacity-95 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
            style={{ backgroundColor: config.theme.primary }}
          >
            <Calendar className="w-4 h-4" />
            <span>Send Appointment Enquiry via WhatsApp</span>
          </button>
        </form>
      )}
    </div>
  );
};
