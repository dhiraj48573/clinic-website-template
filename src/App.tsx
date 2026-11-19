import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ClinicProvider } from './context/ClinicContext';
import { CategorySwitcher } from './components/CategorySwitcher';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Doctors } from './pages/Doctors';
import { Contact } from './pages/Contact';

// Scroll to top on navigation helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ClinicProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-800">
          {/* Top Demo Preset Switcher (Can be toggled in config) */}
          <CategorySwitcher />

          {/* Sticky Navigation Bar */}
          <Navbar />

          {/* Main Content Router */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Floating WhatsApp Action Button on All Pages */}
          <WhatsAppButton />

          {/* Clinic Footer */}
          <Footer />
        </div>
      </Router>
    </ClinicProvider>
  );
};

export default App;
