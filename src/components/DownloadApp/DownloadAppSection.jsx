import React from 'react';
import { QrCode, ShieldCheck, Smartphone } from 'lucide-react';
import './DownloadApp.css';

export default function DownloadAppSection() {
  return (
    <section className="section download-app-section">
      <div className="container">
        <div className="download-app-card">
          <div className="download-left">
            <span className="download-badge">GET STARTED TODAY</span>
            <h2>Download PhonePe App Now</h2>
            <p>
              Join 50 Crore+ users and experience India's fastest & most secure UPI payments app. Available on Android & iOS.
            </p>

            <div className="download-store-buttons">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="store-pill-btn">
                <Smartphone size={20} />
                <div>
                  <span className="pill-small">GET IT ON</span>
                  <span className="pill-large">Google Play</span>
                </div>
              </a>
              <a href="https://apple.com" target="_blank" rel="noopener noreferrer" className="store-pill-btn">
                <Smartphone size={20} />
                <div>
                  <span className="pill-small">DOWNLOAD ON THE</span>
                  <span className="pill-large">App Store</span>
                </div>
              </a>
            </div>

            <div className="download-trust">
              <ShieldCheck size={16} color="#00c853" />
              <span>100% Safe & Bank Regulated Digital Payments</span>
            </div>
          </div>

          <div className="download-right">
            <div className="download-qr-box">
              <QrCode size={140} color="#5f259f" />
              <span className="qr-scan-label">Scan to Download App</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
