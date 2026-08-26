import React from 'react';
import BusinessSection from '../components/Business/BusinessSection';
import StatsSection from '../components/Stats/StatsSection';
import DownloadAppSection from '../components/DownloadApp/DownloadAppSection';

export default function BusinessPage() {
  return (
    <main style={{ paddingTop: '1rem' }}>
      <div className="container" style={{ textAlign: 'center', margin: '2.5rem auto 1.5rem auto' }}>
        <span className="section-badge">MERCHANT SOLUTIONS PORTAL</span>
        <h1>PhonePe Business Products</h1>
        <p style={{ maxWidth: '680px', margin: '0.75rem auto 0 auto' }}>
          Explore full-suite merchant solutions trusted by 3.5 Crore+ kirana stores, offline retailers & online enterprises across India.
        </p>
      </div>

      <BusinessSection />
      <StatsSection />
      <DownloadAppSection />
    </main>
  );
}
