import React from 'react';
import WealthSection from '../components/Wealth/WealthSection';
import DownloadAppSection from '../components/DownloadApp/DownloadAppSection';

export default function WealthPage() {
  return (
    <main style={{ paddingTop: '1rem' }}>
      <div className="container" style={{ textAlign: 'center', margin: '2.5rem auto 1.5rem auto' }}>
        <span className="section-badge">WEALTH MANAGEMENT</span>
        <h1>Smart Investments Made Simple</h1>
        <p style={{ maxWidth: '680px', margin: '0.75rem auto 0 auto' }}>
          Build your investment portfolio with 24K pure digital gold and zero-commission mutual fund SIPs.
        </p>
      </div>

      <WealthSection />
      <DownloadAppSection />
    </main>
  );
}
