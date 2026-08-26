import React from 'react';
import { ShieldCheck, Lock, Award, CheckCircle } from 'lucide-react';
import { STATS_DATA } from '../../data/content';
import './Stats.css';

export default function StatsSection() {
  return (
    <section className="section stats-section">
      <div className="container">
        {/* Counter Cards Grid */}
        <div className="stats-header">
          <span className="section-badge">UNMATCHED SCALE & TRUST</span>
          <h2 className="section-title">Powering India's Digital Financial Ecosystem</h2>
        </div>

        <div className="stats-grid">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat.value}</div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Bank Security Banner */}
        <div className="security-banner-card">
          <div className="security-left">
            <div className="sec-icon-circle">
              <Lock size={32} color="#ffffff" />
            </div>
            <div>
              <h3>Bank-Grade 256-bit Encryption</h3>
              <p>Certified by NPCI, ISO 27001, and regulated by the Reserve Bank of India (RBI).</p>
            </div>
          </div>
          <div className="security-badges">
            <div className="sec-badge-item">
              <ShieldCheck size={18} color="#00c853" />
              <span>NPCI Certified</span>
            </div>
            <div className="sec-badge-item">
              <Award size={18} color="#00c853" />
              <span>ISO 27001</span>
            </div>
            <div className="sec-badge-item">
              <CheckCircle size={18} color="#00c853" />
              <span>RBI Regulated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
