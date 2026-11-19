import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useClinic } from '../context/ClinicContext';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Calendar, 
  ShieldCheck,
  Activity
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { config } = useClinic();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors & Facilities', path: '/doctors' },
    { name: 'Contact & Appointment', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40 transition-colors">
      {/* Top micro bar: Timings, Address, Emergency Phone */}
      <div className="bg-slate-50 border-b border-slate-100 hidden md:block py-1.5 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              <span>{config.timings.mondayToSaturday}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-600" />
              <span className="truncate max-w-xs">{config.contact.city}, {config.contact.state}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Healthcare Facility
            </span>
            <span className="text-slate-300">|</span>
            <a 
              href={`tel:${config.contact.phone}`} 
              className="flex items-center gap-1 font-semibold text-slate-800 hover:text-cyan-700 transition"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>{config.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Clinic Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"
              style={{ backgroundColor: config.theme.primary }}
            >
              <Activity className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-display">
                {config.clinicName}
              </span>
              <span className="text-xs font-medium text-slate-500 tracking-wide uppercase">
                {config.category}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'text-cyan-700 bg-cyan-50 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-cyan-700 hover:bg-slate-50'
                  }`}
                  style={active ? { color: config.theme.primary, backgroundColor: config.theme.primaryLight } : {}}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-700" style={{ color: config.theme.primary }} />
              <span className="hidden xl:inline">Call Now</span>
            </a>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-md transition-all hover:opacity-95 hover:shadow-lg flex items-center gap-2"
              style={{ backgroundColor: config.theme.primary }}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact"
              className="p-2.5 rounded-xl text-white shadow-sm"
              style={{ backgroundColor: config.theme.primary }}
              aria-label="Book appointment"
            >
              <Calendar className="w-5 h-5" />
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {/* Quick Clinic Info */}
          <div className="p-3 bg-slate-50 rounded-xl mb-3 text-xs text-slate-600 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-600" />
              <span>{config.timings.mondayToSaturday}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-600" />
              <span>{config.contact.address}</span>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition ${
                    active
                      ? 'bg-cyan-50 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  style={active ? { color: config.theme.primary, backgroundColor: config.theme.primaryLight } : {}}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 grid grid-cols-2 gap-2 border-t border-slate-100">
            <a
              href={`tel:${config.contact.phone}`}
              className="py-3 px-4 text-center rounded-xl font-semibold text-slate-800 border border-slate-200 bg-white flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-cyan-700" />
              <span>Call Clinic</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 text-center rounded-xl font-semibold text-white shadow-md flex items-center justify-center gap-2 text-sm"
              style={{ backgroundColor: config.theme.primary }}
            >
              <Calendar className="w-4 h-4" />
              <span>Enquire</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
