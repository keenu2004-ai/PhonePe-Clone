import React from 'react';
import PressSection from '../components/Press/PressSection';
import DownloadAppSection from '../components/DownloadApp/DownloadAppSection';

export default function PressPage() {
  return (
    <main style={{ paddingTop: '1rem' }}>
      <div className="container" style={{ textAlign: 'center', margin: '2.5rem auto 1.5rem auto' }}>
        <span className="section-badge">NEWSROOM & PRESS</span>
        <h1>Official PhonePe News & Media Releases</h1>
        <p style={{ maxWidth: '680px', margin: '0.75rem auto 0 auto' }}>
          Read the latest company announcements, technological breakthroughs, and executive thought leadership.
        </p>
      </div>

      <PressSection />
      <DownloadAppSection />
    </main>
  );
}
