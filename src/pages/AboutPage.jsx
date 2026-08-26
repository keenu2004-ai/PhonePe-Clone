import React from 'react';
import { ShieldCheck, Heart, Globe, Award } from 'lucide-react';
import StatsSection from '../components/Stats/StatsSection';
import DownloadAppSection from '../components/DownloadApp/DownloadAppSection';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '1rem' }}>
      <div className="container" style={{ textAlign: 'center', margin: '2.5rem auto 2rem auto' }}>
        <span className="section-badge">ABOUT PHONEPE</span>
        <h1>Making Financial Progress Happen for Every Indian</h1>
        <p style={{ maxWidth: '720px', margin: '0.75rem auto 0 auto' }}>
          PhonePe was founded in 2015 with a mission to build a digital payments infrastructure that enables every Indian merchant and consumer to participate in the formal economy safely.
        </p>
      </div>

      <StatsSection />

      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Core Pillars</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.75rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
              <ShieldCheck size={32} color="#5f259f" style={{ marginBottom: '0.75rem' }} />
              <h3>Uncompromised Trust</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                Bank-grade encryption, NPCI standards & 24x7 automated fraud prevention systems protecting every transaction.
              </p>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
              <Heart size={32} color="#ff5252" style={{ marginBottom: '0.75rem' }} />
              <h3>Customer First</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                Multilingual customer support in 11+ Indian languages available around the clock.
              </p>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
              <Globe size={32} color="#00b0ff" style={{ marginBottom: '0.75rem' }} />
              <h3>Inclusive Innovation</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                Bringing digital gold, micro-insurance, and soundboxes to Tier 3 & Tier 4 rural retail stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DownloadAppSection />
    </main>
  );
}
