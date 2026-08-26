import React from 'react';
import InsuranceSection from '../components/Insurance/InsuranceSection';
import DownloadAppSection from '../components/DownloadApp/DownloadAppSection';

export default function InsurancePage() {
  return (
    <main style={{ paddingTop: '1rem' }}>
      <div className="container" style={{ textAlign: 'center', margin: '2.5rem auto 1.5rem auto' }}>
        <span className="section-badge">INSURANCE HUB</span>
        <h1>Comprehensive Protection for You & Family</h1>
        <p style={{ maxWidth: '680px', margin: '0.75rem auto 0 auto' }}>
          Compare motor, health, and term life insurance plans with instant digital issuance and hassle-free claim settlements.
        </p>
      </div>

      <InsuranceSection />
      <DownloadAppSection />
    </main>
  );
}
