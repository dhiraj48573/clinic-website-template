import React from 'react';
import { Link } from 'react-router-dom';
import { useClinic } from '../context/ClinicContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Activity, 
  ExternalLink,
  ShieldAlert,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { config } = useClinic();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Clinic Identity & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md"
                style={{ backgroundColor: config.theme.primary }}
              >
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-display">
                {config.clinicName}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              {config.shortBio}
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-cyan-400 border border-slate-700">
                {config.category}
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">About Our Clinic</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">Medical Services & Fees</Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-cyan-400 transition-colors">Doctors & Infrastructure</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Timings & Working Hours */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 font-display">Working Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Mon – Sat</span>
                  <span className="text-xs text-slate-400">{config.timings.mondayToSaturday}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Sunday</span>
                  <span className="text-xs text-slate-400">{config.timings.sunday}</span>
                </div>
              </li>
              {config.timings.lunchBreak && (
                <li className="text-xs text-slate-400 pt-1">
                  Lunch Break: {config.timings.lunchBreak}
                </li>
              )}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 font-display">Visit & Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>
                  {config.contact.address}, {config.contact.city}, {config.contact.state} - {config.contact.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition">
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition">
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href={config.contact.mapDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Medical & Ethical Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 mb-8 space-y-1">
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>Important Medical Disclaimer</span>
          </div>
          <p>
            The information presented on this website is for educational and appointment inquiry purposes only. It does not constitute formal medical diagnosis or establish an immediate doctor-patient relationship. In cases of acute medical emergency, please visit the nearest hospital emergency department immediately.
          </p>
          {config.cwdBranding.isDemoNoticeVisible && (
            <p className="text-cyan-300 pt-1">
              <strong>Template Demo Notice:</strong> This website is currently presenting sample demonstration details for Care Plus Clinic in Haridwar, Uttarakhand.
            </p>
          )}
        </div>

        {/* Bottom Bar & CWD Technologies Attribution */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {config.clinicName}. All rights reserved.
          </div>

          {/* Configurable CWD Technologies Developer Credit */}
          {config.cwdBranding.showCredit && (
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>{config.cwdBranding.creditText}</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
