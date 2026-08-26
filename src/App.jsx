import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import DisclaimerBanner from './components/UI/DisclaimerBanner';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import BusinessPage from './pages/BusinessPage';
import InsurancePage from './pages/InsurancePage';
import WealthPage from './pages/WealthPage';
import PressPage from './pages/PressPage';
import CareersPage from './pages/CareersPage';
import AboutPage from './pages/AboutPage';
import Modal from './components/UI/Modal';
import { QrCode } from 'lucide-react';
import './styles/global.css';
import './styles/animations.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <DisclaimerBanner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home onOpenDownload={() => setDownloadModalOpen(true)} />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/wealth" element={<WealthPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />

      {/* Global App Download Modal */}
      <Modal 
        isOpen={downloadModalOpen} 
        onClose={() => setDownloadModalOpen(false)} 
        title="Download Official PhonePe App"
      >
        <div className="download-modal-content">
          <div className="modal-qr-placeholder">
            <QrCode size={140} color="#5f259f" />
            <p className="qr-hint">Scan with your smartphone camera to download</p>
          </div>
          <div className="store-buttons">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="store-btn">
              <span className="store-tag">GET IT ON</span>
              <span className="store-name">Google Play</span>
            </a>
            <a href="https://apple.com" target="_blank" rel="noopener noreferrer" className="store-btn">
              <span className="store-tag">DOWNLOAD ON THE</span>
              <span className="store-name">App Store</span>
            </a>
          </div>
        </div>
      </Modal>
    </Router>
  );
}
