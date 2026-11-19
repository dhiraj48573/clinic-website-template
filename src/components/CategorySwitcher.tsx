import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { ClinicCategory } from '../types/clinic';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const CategorySwitcher: React.FC = () => {
  const { activeCategory, setCategory, showDemoSwitcher } = useClinic();
  const [isOpen, setIsOpen] = useState(true);

  if (!showDemoSwitcher) return null;

  const categories: { key: ClinicCategory; label: string; icon: string }[] = [
    { key: 'general', label: 'General Physician', icon: '🩺' },
    { key: 'dental', label: 'Dental Clinic', icon: '🦷' },
    { key: 'physiotherapy', label: 'Physiotherapy & Rehab', icon: '🏃' },
    { key: 'eye', label: 'Eye & Retinal Clinic', icon: '👁️' },
    { key: 'skinhair', label: 'Skin & Hair Clinic', icon: '✨' },
    { key: 'diagnostic', label: 'Diagnostic & Pathology', icon: '🔬' }
  ];

  return (
    <div className="bg-slate-900 text-white text-xs border-b border-slate-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold tracking-wide text-slate-200 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            CWD Template Preview:
          </span>
          <span className="hidden sm:inline text-slate-400">
            Switch clinic presets to test multi-specialty adaptation:
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-slate-300 flex items-center gap-1 hover:text-white"
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isOpen && (
          <div className="flex items-center flex-wrap gap-1.5 w-full sm:w-auto mt-1 sm:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`px-2.5 py-1 rounded-md font-medium transition-all flex items-center gap-1 ${
                  activeCategory === cat.key
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
