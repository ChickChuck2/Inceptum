import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/pages/LandingPage';
import TechPortal from './components/features/TechPortal';
import { Terminal, Globe } from 'lucide-react';
import './styles/global.css';
import './styles/wiki.css';
import './styles/portal.css';
import './styles/premium.css';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [view, setView] = useState<'landing' | 'tech'>('landing');

  const toggleLanguage = () => {
    const nextLng = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(nextLng);
  };

  return (
    <div className={`app-root ${view}-view`}>
      <nav className="navbar-premium">
        <div className="logo-brand glitch-hover" onClick={() => setView('landing')}>
          INCEPTUM
        </div>

        <div className="nav-actions">
           <button 
             className={`nav-btn ${view === 'landing' ? 'active' : ''}`}
             onClick={() => setView('landing')}
           >
             <Globe size={16} /> SHOWCASE
           </button>
           <button 
             className={`nav-btn ${view === 'tech' ? 'active' : ''}`}
             onClick={() => setView('tech')}
           >
             <Terminal size={16} /> ALPHA_PORTAL
           </button>
           <button className="lang-toggle-minimal" onClick={toggleLanguage}>
             {i18n.language.toUpperCase()}
           </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.main
          key={view}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {view === 'landing' ? <LandingPage /> : <TechPortal />}
        </motion.main>
      </AnimatePresence>

      <footer className="app-footer-premium">
        <div className="footer-hud-line"></div>
        <div className="footer-main-content">
          <div className="footer-legal-group">
            <p className="license-text">{t('legal.license')}</p>
            <p className="contact-text">{t('legal.contact')}</p>
          </div>
          
          <div className="footer-status-group">
            <div className="footer-status-item">
              <span className="label">VERSÃO</span>
              <span className="value">APLHA 0.1</span>
            </div>
            <div className="footer-status-item">
              <span className="label">SISTEMAS</span>
              <div className="status-indicator">
                <div className="footer-status-dot"></div>
                <span className="value">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
