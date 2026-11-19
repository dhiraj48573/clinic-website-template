import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClinicConfig, ClinicCategory } from '../types/clinic';
import { clinicConfig as defaultClinicConfig, SHOW_DEMO_PRESET_SWITCHER } from '../config/clinicConfig';
import { clinicPresets } from '../config/presets';

interface ClinicContextType {
  config: ClinicConfig;
  activeCategory: ClinicCategory;
  setCategory: (category: ClinicCategory) => void;
  availablePresets: Record<string, ClinicConfig>;
  showDemoSwitcher: boolean;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState<ClinicCategory>(defaultClinicConfig.categoryType);
  const [config, setConfig] = useState<ClinicConfig>(defaultClinicConfig);

  const handleSetCategory = (category: ClinicCategory) => {
    setActiveCategory(category);
    if (clinicPresets[category]) {
      setConfig({
        ...clinicPresets[category],
        cwdBranding: defaultClinicConfig.cwdBranding
      });
    }
  };

  // Synchronize CSS custom properties with current theme colors
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', config.theme.primary);
    root.style.setProperty('--color-primary-dark', config.theme.primaryDark);
    root.style.setProperty('--color-primary-light', config.theme.primaryLight);
    root.style.setProperty('--color-secondary', config.theme.secondary);
    root.style.setProperty('--color-accent', config.theme.accent);
    root.style.setProperty('--color-surface', config.theme.surface);

    // Update document title for SEO
    document.title = config.seo.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.seo.description);
    }
  }, [config]);

  return (
    <ClinicContext.Provider
      value={{
        config,
        activeCategory,
        setCategory: handleSetCategory,
        availablePresets: clinicPresets,
        showDemoSwitcher: SHOW_DEMO_PRESET_SWITCHER
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = (): ClinicContextType => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
