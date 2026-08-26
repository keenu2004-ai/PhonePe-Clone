import React from 'react';
import { Users, Code, Award, Rocket, CheckCircle2 } from 'lucide-react';
import DownloadAppSection from '../components/DownloadApp/DownloadAppSection';

export default function CareersPage() {
  return (
    <main style={{ paddingTop: '1rem' }}>
      <div className="container" style={{ textAlign: 'center', margin: '2.5rem auto 2rem auto' }}>
        <span className="section-badge">CAREERS AT PHONEPE</span>
        <h1>Build the Future of Payments & Fintech</h1>
        <p style={{ maxWidth: '680px', margin: '0.75rem auto 0 auto' }}>
          Join a team of engineers, product thinkers, and innovators scaling infrastructure for 50 Crore+ Indians.
        </p>
      </div>

      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Why Work With Us?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--white)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}>
              <Code size={32} color="#5f259f" style={{ marginBottom: '1rem' }} />
              <h3>High Scale Engineering</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                Solve complex distributed system challenges processing over 250 Million daily transactions seamlessly.
              </p>
            </div>
            <div style={{ background: 'var(--white)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}>
              <Rocket size={32} color="#00c853" style={{ marginBottom: '1rem' }} />
              <h3>Rapid Ownership</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                Empowered teams with zero red tape to launch products that touch millions of retail store counters every day.
              </p>
            </div>
            <div style={{ background: 'var(--white)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}>
              <Award size={32} color="#ffb300" style={{ marginBottom: '1rem' }} />
              <h3>Great Place to Work</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                Voted among India's top fintech employers with industry-leading health benefits & equity options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DownloadAppSection />
    </main>
  );
}
