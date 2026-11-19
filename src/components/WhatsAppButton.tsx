import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const { config } = useClinic();
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = `Hello ${config.clinicName}, I would like to enquire about your clinic services and doctor consultation timings.`;
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick greeting tooltip */}
      {showTooltip && (
        <div className="mb-3 p-3.5 bg-white text-slate-800 rounded-2xl shadow-xl border border-slate-100 max-w-xs text-xs space-y-1.5 animate-fadeIn">
          <div className="flex items-center justify-between font-semibold text-slate-900">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {config.clinicName} Helpdesk
            </span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600">
            Have questions or need to verify appointment slots? Chat with our clinic reception directly on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Start WhatsApp Chat →
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all group relative focus:outline-none focus:ring-4 focus:ring-emerald-200"
        aria-label={`Chat on WhatsApp with ${config.clinicName}`}
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
