import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { ServiceCard } from '../components/ServiceCard';
import { SEO } from '../components/SEO';
import { 
  ShieldCheck, 
  Search, 
  CreditCard,
  Clock,
  Sparkles
} from 'lucide-react';

export const Services: React.FC = () => {
  const { config } = useClinic();
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique category tags
  const tags = ['All', ...Array.from(new Set(config.services.map(s => s.categoryTag).filter(Boolean)))];

  // Filter services
  const filteredServices = config.services.filter(service => {
    const matchesTag = selectedTag === 'All' || service.categoryTag === selectedTag;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <>
      <SEO 
        pageTitle="Services & Treatments"
        pageDescription={`Explore medical services, consultation charges, and specialized treatments offered at ${config.clinicName} in ${config.contact.city}.`}
      />

      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span 
            className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block mb-3"
            style={{ backgroundColor: config.theme.primaryLight, color: config.theme.primary }}
          >
            Specialized Care & Treatments
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display">
            Our Medical Services
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Personalized, ethical, and evidence-based treatments tailored to the healthcare needs of {config.contact.city}.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag as string}
                onClick={() => setSelectedTag(tag as string)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedTag === tag
                    ? 'text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100'
                }`}
                style={selectedTag === tag ? { backgroundColor: config.theme.primary } : {}}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 transition"
            />
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50/50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 p-8 max-w-lg mx-auto">
              <Sparkles className="w-8 h-8 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900">No Services Found</h3>
              <p className="text-xs text-slate-500 mt-1">
                No services matched "{searchQuery}". Try selecting "All" or searching for a different health condition.
              </p>
              <button
                onClick={() => { setSelectedTag('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 transition"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Transparent Pricing Policy */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-2">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-3"
                style={{ backgroundColor: config.theme.primary }}
              >
                <CreditCard className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-display">Transparent Consultation Fees</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe in ethical medical billing. Consultation charges and procedure estimates are communicated before any clinical procedure begins.
              </p>
            </div>

            <div className="space-y-2">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-3"
                style={{ backgroundColor: config.theme.secondary }}
              >
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-display">Dedicated Doctor Attention</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consultations are timed so that your doctor has sufficient time to review your medical history, perform examinations, and answer queries.
              </p>
            </div>

            <div className="space-y-2">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-3"
                style={{ backgroundColor: config.theme.accent }}
              >
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-display">No Redundant Testing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We only recommend investigations that are clinically necessary for accurate diagnosis and patient recovery.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
